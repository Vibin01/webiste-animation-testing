import { NextRequest, NextResponse } from "next/server";
import puppeteer, { Browser } from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  let browser: Browser | null = null;

  try {
    // console.log("PDF REQUEST STARTED");

    const sessionCookie = req.cookies.get("session");

    if (!sessionCookie?.value) {
      console.error("Unauthorized request");
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);

    const role = searchParams.get("role") || "candidate";
    const mode = searchParams.get("mode") || "single";
    const phase = searchParams.get("phase") || "control";

    const baseUrl =
      process.env.BASE_URL ?? new URL(req.url).origin;

    const reportUrl =
      `${baseUrl}/resources/alignment-test/${role}/report/print` +
      `?mode=${mode}&phase=${phase}`;

    // console.log("Report URL:", reportUrl);

    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();

    // Debug logs from page
    page.on("console", (msg) => {
      // console.log("[PAGE]", msg.text());
    });

    page.on("pageerror", (err) => {
      console.error("[PAGE ERROR]", err);
    });

    await page.setCookie({
      name: "session",
      value: sessionCookie.value,
      url: baseUrl,
    });

    await page.goto(reportUrl, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.waitForSelector("#print-root", {
      timeout: 60000,
    });

    await page.waitForFunction(() => {
      const el = document.querySelector("#print-root");
      return el && el.textContent && el.textContent.trim().length > 50;
    });

    await page.emulateMediaType("print");

    // console.log("Generating PDF...");

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    // console.log("PDF generated successfully");

    return new NextResponse(Buffer.from(pdf), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="report.pdf"',
        "Content-Length": pdf.length.toString(),
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("PDF GENERATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}