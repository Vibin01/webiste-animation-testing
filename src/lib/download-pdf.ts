import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function downloadPdf() {
  const element = document.getElementById("print-root") as HTMLElement;

  if (!element) return;

  // console.log("Generating PDF...");

  await new Promise((r) => setTimeout(r, 200));

  const images = Array.from(element.querySelectorAll("img"));

  await Promise.all(
    images.map(
      (img) =>
        new Promise((res) => {
          if (img.complete) return res(true);
          img.onload = () => res(true);
          img.onerror = () => res(true);
        }),
    ),
  );

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.6);

  const pdf = new jsPDF("p", "mm", "a4");

  const pdfWidth = 210;
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

  pdf.save("report.pdf");
}