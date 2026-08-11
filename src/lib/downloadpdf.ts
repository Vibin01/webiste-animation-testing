export const downloadPdf = (role: string, mode: string, phase?: string) => {
  const url = new URL("/api/report-pdf", window.location.origin);

  url.searchParams.set("role", role);
  url.searchParams.set("mode", mode);

  if (phase) url.searchParams.set("phase", phase);

  window.open(url.toString(), "_blank");
};