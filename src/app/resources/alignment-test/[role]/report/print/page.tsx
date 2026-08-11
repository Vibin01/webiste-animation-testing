import PrintClient from "./PrintClient";
import { getReportAction } from "@/server/actions/assignment-action";

type Props = {
  params: Promise<{
    role: "candidate" | "recruiter" | "employer";
  }>;
  searchParams: Promise<{
    mode?: string;
    phase?: string;
  }>;
};

export default async function Page({
  params,
  searchParams,
}: Props) {
  const { role } = await params;
  const { mode = "single", phase = "control" } = await searchParams;

  const result = await getReportAction({
    role,
    mode: mode as "single" | "full",
    phase,
  });

  if (!result.success) {
    return (
      <div className="p-10 text-red-500">
        Failed to load report
      </div>
    );
  }

  return (
    <PrintClient
      role={role}
      mode={mode}
      report={result.report}
      user={result.user}
    />
  );
}