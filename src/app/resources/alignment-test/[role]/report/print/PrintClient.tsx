"use client";

import PhasePrintDocument from "./PhasePrintDocument";
import OverallPrintDocument from "./OverallPrintDocument";

type Role = "candidate" | "recruiter" | "employer";

interface Props {
  role: Role;
  mode: string;
  report: any;
  user: any;
}

export default function PrintClient({
  mode,
  report,
  user,
}: Props) {
  const isSingle = mode === "single";

    const isReady = !!report && !!user;

  if (!isReady) {
    return <div id="print-root">Loading...</div>;
  }


  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: #ffffff !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        @page {
          size: A4 portrait;
          margin: 0;
        }

        @media print {
          .no-print,header,
          nav,
          footer {
            display: none !important;
          }
        }
      `}</style>

      <div id="print-root">
        {report ? (
          isSingle ? (
            <PhasePrintDocument report={report} user={user} />
          ) : (
            <OverallPrintDocument report={report} user={user} />
          )
        ) : (
          <div style={{ padding: 20 }}>Loading...</div>
        )}
      </div>
    </>
  );
}