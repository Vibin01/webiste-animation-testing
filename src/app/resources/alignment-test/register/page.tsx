import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

const RoleSelector = dynamic(
  () =>
    import("./RoleSelector").then((mod) => ({
      default: mod.RoleSelector,
    })),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-screen p-6">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    ),
  }
);

type PageProps = {
  searchParams: Promise<{
    mode?: string;
    phase?: string;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="px-[5%] mt-[15%] md:mt-0">
      <RoleSelector
        mode={params.mode ?? "single"}
        phase={params.phase ?? "uncertainty"}
      />
    </div>
  );
}