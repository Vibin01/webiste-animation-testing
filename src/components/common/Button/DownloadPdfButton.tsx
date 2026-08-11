"use client";

import { Share2 } from "lucide-react";
import { useState } from "react";

type Props = {
  role: string;
  mode: string;
  phase: string;
  action?: "download" | "share";
};

export default function DownloadPdfButton({
  role,
  mode,
  phase,
  action="download",
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
     const start = performance.now();
    try {
      setLoading(true);

      const url =
        `/api/export-pdf?role=${role}` +
        `&mode=${mode}` +
        `&phase=${phase}`;

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!response.ok) {
        const err = await response.text();
        console.error("PDF API ERROR:", err);
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${role}-${mode === "single" ? phase : mode}-report.pdf`;
      link.target = "_blank";
      link.rel = "noopener";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("DOWNLOAD ERROR:", error);
      alert("PDF download failed");
    } finally {
      // time stamp
       const end = performance.now();
    //    console.log("PDF Generated At:", new Date().toISOString());
    // console.log(
    //   "PDF Generation Time:",
    //   ((end - start) / 1000).toFixed(2),
    //   "seconds"
    // );
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}

      className={action==="download" ?"flex h-[54px] cursor-pointer items-center justify-center gap-sm rounded-[8px] md:rounded-[12px]  bg-[#0668E1] w-[200px] text-xl font-medium text-white disabled:opacity-50"
        :"flex items-center cursor-pointer gap-2 text-[16px] font-bold"}
    >
       {action === "download" ? (
        <>
          {loading ? "Generating PDF..." : "Download PDF"}
        </>
      ) : (
        <>
          <Share2 size={18} />
                    {loading ? "Sharing..." :"Share"}
        </>
      )}
    </button>
  );
}