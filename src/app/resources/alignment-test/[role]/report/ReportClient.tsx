"use client";

import { useEffect, useState } from "react";
import { Anchor, ArrowRight, Share2, ShieldCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  getAssessmentStatusAction,
  getReportAction,
} from "@/server/actions/assignment-action";
import OverallPrintDocument from "./print/OverallPrintDocument";
import PhasePrintDocument from "./print/PhasePrintDocument";
import Image from "next/image";
import DownloadPdfButton from "@/components/common/Button/DownloadPdfButton";

type Role = "candidate" | "recruiter" | "employer";
type AnyReport = any;

const phaseColors: Record<string, string> = {
  Aligned: "#2B9B43",
  "Auto-Aligned": "#36C354",
  Misaligned: "#F0431D",
  Unaligned: "#F9A620",
  Dynamic: "#0668E1",
};

function getScoreColor(mode: string) {
  return phaseColors[mode] || "#0668E1";
}

function ScoreCircle({
  percentage,
  mode,
  size = "large",
}: {
  percentage: number;
  mode: string;
  size?: "small" | "large";
}) {
  const color = getScoreColor(mode);

  const circleSize = size === "large" ? 120 : 110;
  const stroke = size === "large" ? 14 : 12;
  const radius = (circleSize - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percentage / 100) * circumference;

  return (
    <div
      className="relative shrink-0"
      style={{ width: circleSize, height: circleSize }}
    >
      <svg width={circleSize} height={circleSize} className="-rotate-90">
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke="#EEEEEE"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${dash} ${circumference}`}
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center text-h6 font-extrabold"
        style={{ color }}
      >
        {mode === "Dynamic" ? <p className="text-h4">D</p> : `${percentage}%`}
      </div>
    </div>
  );
}

function SectionCard({
  title,
  children,
  blue = false,
}: {
  title: string;
  children: React.ReactNode;
  blue?: boolean;
}) {
  return (
    <div
      className={`rounded-md border p-md shadow-mobile-medium md:shadow-web-medium ${
        blue
          ? "border-[#0668E1] bg-[#0668E1] text-white"
          : "border-[#DEEDFF] bg-white text-[#2C2C2C]"
      }`}
    >
      <h3 className="text-base font-bold uppercase">{title}</h3>
      <div className="mt-sm text-xl font-medium">{children}</div>
    </div>
  );
}

function SmallInfoCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">
      <h4 className="text-base font-bold text-[#2C2C2C] uppercase">{title}</h4>
      <div className="my-xs border-t border-[#DEEDFF]" />
      <div className="space-y-xs">
        {lines.map((line, index) => (
          <p key={index} className="text-xl font-medium text-[#2C2C2C]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function HeaderBlock({
  title,
  subtitle,
  user,
  mode,
  phase,
  role,
}: {
  title: string;
  subtitle: string;
  user: any;
  phase: string;
  role: string;
  mode: "single" | "full";
}) {
  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";
  const icons = [
    {
      title: "Uncertainty",
      icon: "/resources/alignment-test/uncertainty-icon.svg",
    },
    {
      title: "Pressure",
      icon: "/resources/alignment-test/pressure-icon.svg",
    },
    {
      title: "Control",
      icon: "/resources/alignment-test/control-icon.svg",
    },
    {
      title: "Perception",
      icon: "/resources/alignment-test/perception-icon.svg",
    },
    {
      title: "Outcome",
      icon: "/resources/alignment-test/outcome-icon.svg",
    },
  ];

  const matchedIcon = icons.find(
    (item) => item.title.toLowerCase() === title.toLowerCase(),
  );
  return (
    <>
      <div className="-mx-[6%] border-b border-[#D1E5FF] bg-white px-[6%] py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#E6F0FC] text-[18px] font-bold text-[#0668E1]">
              {firstLetter}
            </div>

            <div>
              <p className="text-[18px] font-extrabold text-[#2C2C2C]">
                {user?.name}
              </p>

              <p className="text-[14px] font-medium capitalize text-[#2C2C2C]">
                {user?.role}
              </p>
            </div>
          </div>

          <DownloadPdfButton
            mode={mode}
            role={role}
            phase={phase}
            action="share"
          />
        </div>
      </div>

      <div className="mt-lg flex items-center gap-sm">
        {mode === "single" && matchedIcon && (
          <div className="flex  p-sm items-center justify-center rounded-full border border-[#D1E4FE] bg-[#F7FBFF] text-[#0668E1]">
            <Image
              src={matchedIcon.icon}
              alt={matchedIcon.title}
              width={20}
              height={20}
              className="size-iconsize-sm"
            />
          </div>
        )}

        <div>
          <h1 className="text-h5 font-bold text-[#1B1C17]">
            Your Alignment Insight -
            <span className="text-[#0668E1]">{title}</span>
          </h1>

          <p className="text-xl font-medium text-[#2C2C2C]">{subtitle}</p>
        </div>
      </div>
    </>
  );
}

function PhaseReport({
  role,
  report,
  user,
  mode,
  phase,
}: {
  role: string;
  report: AnyReport;
  user: any;
  mode: "single" | "full";
  phase: string;
}) {
  const router = useRouter();
  const { result, content, answers, phaseLabel } = report;
  const color = getScoreColor(result?.mode || "Dynamic");
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);

  const [fullCompleted, setFullCompleted] = useState(false);

  useEffect(() => {
    async function loadStatus() {
      const status = await getAssessmentStatusAction(role as any);

      if (!status.success) return;

      const phases = (status.completedPhases || []) as string[];

      setCompletedPhases(phases);

      setFullCompleted(!!status.overallReport || phases.length >= 5);
    }

    loadStatus();
  }, [role]);

  const isOldData = typeof content.patternName === "string";

  // console.log(user);
  // console.log(content)

  // console.log(report)
  // console.log(result.mode);
  return (
    <section className="w-full bg-[#FAFDFF] px-[5%] pb-20">
      <HeaderBlock
        title={phaseLabel}
        subtitle="Based on your response across 3 key situations in hiring."
        user={user}
        phase={phase}
        role={role}
        mode={mode}
      />

      <div className="mt-lg rounded-md border border-[#DEEDFF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-base font-extrabold uppercase text-[#2C2C2C]">
            Alignment Insights for {phaseLabel}
          </h2>
          <div className="flex flex-wrap items-center gap-md mt-sm md:mt-0">
            {[
              "Aligned",
              "Auto-Aligned",
              "Unaligned",
              "Misaligned",
              "Dynamic",
            ].map((mode) => (
              <div key={mode} className="flex items-center gap-2">
                <div
                  className="size-iconsize-sm rounded-sm"
                  style={{ backgroundColor: getScoreColor(mode) }}
                />

                <span className="text-xl font-medium">{mode}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-md flex flex-col gap-8 md:flex-row md:items-center">
          <ScoreCircle percentage={result.percentage} mode={result.mode} />

          <div>
            <div className="flex items-center gap-md">
              {result.band !== "Dynamic" && (
                <p className="text-h2 font-extrabold" style={{ color }}>
                  {result.percentage}%
                </p>
              )}
              <p className="text-h5 font-bold uppercase" style={{ color }}>
                {result.mode}
              </p>
            </div>

            <p className="mt-sm text-xl font-bold text-[#2C2C2C]">
              Your Pattern:{" "}
              <span className="text-xl font-medium">
                {isOldData
                  ? content.patternName
                  : (content.patternName[result.band ?? "Strong"]?.[0] ?? "")}
              </span>
            </p>

            <p className="text-xl font-medium">
              {isOldData
                ? content.phaseIntro
                : (content.patternName[result.band ?? "Strong"]?.[1] ?? "")}
            </p>
          </div>
        </div>

        <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
          {content.centerCards.map((card: any) => (
            <SmallInfoCard
              key={card.title}
              title={card.title}
              lines={card.lines}
            />
          ))}
        </div>
      </div>

      <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-2">
        <SectionCard title="The Situation">
          <div className="space-y-xs">
            {answers.map((answer: any, index: number) => (
              <p key={answer.questionId} className="text-xl font-medium">
                {index + 1}. {answer.situation.split("\n\n")[0]}
              </p>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Your Responses">
          <div className="space-y-xs">
            {answers.map((answer: any) => (
              <div key={answer.questionId} className="flex items-center gap-3">
                <Image
                  src="/icons/tick-gradient-icon.svg"
                  alt="Tick"
                  width={20}
                  height={20}
                  className="size-iconsize-sm shrink-0"
                />
                <p className="text-xl font-medium">{answer.answerText}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg">
        <SectionCard title="Your Patterns">
          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            <div
              className={`rounded-md bg-white p-sm transition-all ${
                result.band === "Strong"
                  ? "border border-[#B2D0F6] shadow-mobile-medium md:shadow-web-medium"
                  : "border border-[#DEEDFF]"
              }`}
            >
              <h4 className="text-base font-bold uppercase text-[#0668E1]">
                {result.band}
              </h4>

              <p className="mt-sm text-xl font-bold">
                {content.yourPattern?.[result.band] ?? ""}
              </p>
              {result.mode === "Dynamic" && (
                <p className="mt-sm text-xl font-medium text-[#2C2C2C]">
                  Sometimes you act quickly,
                  <br /> sometimes you evaluate, <br /> and sometimes you
                  continue without change.
                </p>
              )}

              <div className="my-sm p-sm rounded-md bg-[#F2F8FF] border border-[#DEEDFF]">
                <div className=" md:flex md:items-center gap-xs">
                  <span>
                    <span className="font-bold text-[#0668E1] ">Insight: </span>
                    <span className="text-xl font-medium ">
                      {report.primaryExpression.insight}
                    </span>
                  </span>
                </div>
                <div className="my-xs border-t border-[#DEEDFF]" />
                <div className="md:flex- md:items-center gap-xs inline-flex ">
                  <span>
                    <span className="font-bold text-[#0668E1] ">Belief: </span>{" "}
                    <span className="text-xl font-medium">
                      {report.primaryExpression.belief}
                    </span>
                  </span>
                </div>
              </div>

              <p className="text-xl font-medium mt-xs">
                {result.mode === "Dynamic"
                  ? "This suggests no single pattern consistently guides your decisions."
                  : " Over time, this shapes how consistently your decisions align with the situation."}
              </p>
            </div>

            <div className="flex flex-col gap-sm">
              {result.mode !== "Dynamic" && report.secondaryExpression && (
                <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">
                  <h4 className="text-base font-bold uppercase text-[#2C2C2C]">
                    {report?.secondaryExpression?.tendency ?? ""}
                  </h4>

                  <p className="mt-sm text-xl font-medium">
                    {report?.secondaryExpression?.expression ?? ""}
                  </p>
                  {report?.secondaryExpression?.tendency && (
                    <hr className="my-sm border-[#DEEDFF]" />
                  )}
                  <p className="text-xl font-medium text-[#2C2C2C]">
                    {report?.secondaryExpression?.summary ?? ""}
                  </p>
                </div>
              )}
              <div className="rounded-md border border-[#B2D0F6] bg-white p-sm">
                <h4 className="font-bold text-[#0668E1] uppercase">Summary</h4>
                <p className="text-xl text-[#0668E1] font-medium mt-xs">
                  {report.primaryExpression.actionSummary}
                </p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
        <SectionCard title="What This Means">
          {content.whatThisMeans.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="What To Do">
          {content.whatToDo.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="Reflection" blue>
          <p className="text-xl font-medium mt-xs">{content.reflection}</p>
        </SectionCard>
      </div>

      <div className="mt-xl flex justify-between md:justify-end gap-md">
        <button
          onClick={() =>
            fullCompleted
              ? router.back()
              : router.push(`/resources/alignment-test`)
          }
          className="h-[54px] cursor-pointer rounded-[8px] md:rounded-[12px] border border-[#0668E1] px-8 text-xl font-medium text-[#0668E1]"
        >
          Back
        </button>

        {fullCompleted ? (
          <DownloadPdfButton mode={mode} role={role} phase={phase} />
        ) : (
          <button
            onClick={() =>
              router.push(`/resources/alignment-test/${role}?mode=full`)
            }
            className="flex h-[54px] cursor-pointer items-center gap-sm rounded-[8px] md:rounded-[12px] bg-[#0668E1] px-8 text-xl font-medium text-white"
          >
            Continue Full Test
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
}

function OverallReport({
  user,
  report,
  role,
  mode,
  phase,
}: {
  user: any;
  report: AnyReport;
  role: string;
  mode: "single" | "full";
  phase: string;
}) {
  const router = useRouter();
  const { overall, phaseResults, content } = report;
  const color = getScoreColor(overall?.mode || "Dynamic");

  const icons = [
    {
      title: "Uncertainty",
      icon: "/resources/alignment-test/uncertainty-black-icon.svg",
    },
    {
      title: "Pressure",
      icon: "/resources/alignment-test/pressure-black-icon.svg",
    },
    {
      title: "Control",
      icon: "/resources/alignment-test/control-black-icon.svg",
    },
    {
      title: "Perception",
      icon: "/resources/alignment-test/perception-black-icon.svg",
    },
    {
      title: "Outcome",
      icon: "/resources/alignment-test/outcome-black-icon.svg",
    },
  ];

  const icon_common = [
    {
      title: "vision",
      icon: "/resources/alignment-test/vision-icon.svg",
    },
    {
      title: "strategy",
      icon: "/resources/alignment-test/strategy-icon.svg",
    },
    {
      title: "execution",
      icon: "/resources/alignment-test/execution-icon.svg",
    },
  ];
  const isOldInsight = Array.isArray(content.insight);

  if (report === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#D3E6FF] border-t-[#0668E1]" />

          <p className="text-xl font-bold text-[#2C2C2C]">Loading report...</p>
        </div>
      </div>
    );
  }

  if (!overall || !phaseResults?.length) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-sm">
        <p className="text-xl font-bold">Overall data incomplete.</p>

        <button
          onClick={() =>
            router.push(`/resources/alignment-test/${role}?mode=full`)
          }
          className="rounded-sm bg-[#0668E1] px-md py-xs text-white"
        >
          Retake Test
        </button>
      </div>
    );
  }

  return (
    <section className="w-full px-[5%] pb-20">
      <HeaderBlock
        user={user}
        title="Overall"
        mode={mode}
        phase={phase}
        role={role}
        subtitle="Based on your response across 5 key situations in hiring."
      />

      <div className="mt-lg rounded-md border border-[#DEEDFF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-base font-bold uppercase text-[#2C2C2C]">
            Overall Alignment
          </h2>
          <div className="flex flex-wrap items-center gap-md mt-sm md:mt-0">
            {[
              "Aligned",
              "Auto-Aligned",
              "Unaligned",
              "Misaligned",
              "Dynamic",
            ].map((mode) => (
              <div key={mode} className="flex items-center gap-2">
                <div
                  className="size-iconsize-sm rounded-sm"
                  style={{ backgroundColor: getScoreColor(mode) }}
                />

                <span className="text-xl font-medium">{mode}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-md flex flex-col gap-lg md:flex-row md:items-center">
          <ScoreCircle percentage={overall.percentage} mode={overall.mode} />
          <div>
            <div className="flex items-center gap-md">
              {overall.band !== "Dynamic" && (
                <p className="text-h2 font-extrabold" style={{ color }}>
                  {overall.percentage}%
                </p>
              )}
              <p className="text-h5 font-bold uppercase" style={{ color }}>
                {overall.mode}
              </p>
            </div>

            <div className="mt-sm space-y-xs">
              {isOldInsight
                ? content.insight.map((line: string, index: number) => (
                    <p
                      key={index}
                      className="text-xl font-medium text-[#2C2C2C]"
                    >
                      {line}
                    </p>
                  ))
                : (content.insight[overall.band ?? "Strong"] ?? []).map(
                    (line: string, index: number) => (
                      <p
                        key={index}
                        className="text-xl font-medium text-[#2C2C2C]"
                      >
                        {line}
                      </p>
                    ),
                  )}
            </div>
          </div>
        </div>

        <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
          <SmallInfoCard
            title="Your Natural Response"
            lines={content.pattern}
          />
          <SmallInfoCard
            title="What Drives Your Decisions"
            lines={content.trigger}
          />
          <SmallInfoCard title="What This Creates" lines={content.outcome} />
        </div>
      </div>

      <h2 className="mt-md text-base font-bold uppercase text-[#2C2C2C]">
        Alignment pattern by Phase
      </h2>

      <div className="mt-sm grid grid-cols-1 gap-md md:grid-cols-5">
        {phaseResults.map((phase: any) => (
          <button
            key={phase.phaseKey}
            type="button"
            onClick={() =>
              router.push(
                `/resources/alignment-test/${role}/report?mode=single&phase=${phase.phaseKey}`,
              )
            }
            className="rounded-md cursor-pointer border border-[#DEEDFF] bg-white p-sm text-center"
          >
                <p className=" text-xl font-medium flex items-center justify-center gap-xs  capitalize text-[#2C2C2C]">
              <img
                src={
                  icons.find(
                    (item) =>
                      item.title.toLowerCase() ===
                      phase.phaseLabel.toLowerCase(),
                  )?.icon
                }
                alt={phase.phaseLabel}
                className="size-iconsize-sm scale-90 object-contain"
              />

              <span>{phase.phaseLabel}</span>
            </p>
            <p
  className="mt-1 mb-md text-h5 font-bold"
  style={{ color: getScoreColor(phase.mode) }}
>
  {phase.mode}
</p>
         

            <div className="flex justify-center">
              <ScoreCircle
                percentage={phase.percentage}
                mode={phase.mode}
                size="small"
              />
            </div>

         </button>
        ))}
      </div>

      <div className="mt-lg">
        <SectionCard title="Alignment Health">
          <div className="grid grid-cols-1 gap-md md:grid-cols-3">
            {Object.entries(content.health).map(([key, label]: any) => {
              const normalizedLabel = String(label).toLowerCase();
              const width =
                normalizedLabel === "strong"
                  ? "100%"
                  : normalizedLabel === "moderate"
                    ? "60%"
                    : normalizedLabel === "weak" || normalizedLabel === "week"
                      ? "30%"
                      : "0%";

              return (
                <div
                  key={key}
                  className="rounded-md border border-[#DEEDFF] bg-white p-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-sm">
                      <img
                        src={
                          icon_common.find(
                            (item) =>
                              item.title.toLowerCase() === key.toLowerCase(),
                          )?.icon
                        }
                        alt={key}
                        className="size-iconsize-sm object-contain"
                      />

                      <p className="capitalize text-base font-bold text-[#2C2C2C]">
                        {key}
                      </p>
                    </div>

                    <p className="text-xl font-medium">{label}</p>
                  </div>
                  <div className="mt-xs h-[8px] w-full rounded-full bg-[#EEEEEE]">
                    <div
                      className="h-full rounded-full bg-[#0668E1]"
                      style={{ width }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>
      <div className="mt-lg">
        <SectionCard title="Where Alignment Slips">
          <div className="space-y-sm">
            {content.slips.map((slip: any, index: number) => (
              <div key={index} className="flex items-start gap-sm">
                <div className="w-full border-[#DEEDFF] bg-[#F2F8FF] border rounded-md p-sm">
                  <p className="text-xl font-bold text-[#2C2C2C]">
                    {slip.title} → {slip.level}
                  </p>

                  <p className="mt-xs text-xl font-medium text-[#2C2C2C]">
                    {slip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-lg">
        <SectionCard title="Your Decision Pattern">
          <div className="space-y-sm">
            {content.behavioralSummary.map((line: string, index: number) => (
              <p key={index} className="text-xl font-medium mt-xs">
                {line}
              </p>
            ))}

            {report.secondaryExpression?.tendency && (
              <div className="rounded-md border border-[#B2D0F6] bg-white p-sm">
                <h4 className="text-base font-bold uppercase text-[#0668E1]">
                  {report.secondaryExpression.tendency}
                </h4>

                <p className="mt-sm text-xl font-semibold text-[#0668E1]">
                  {report.secondaryExpression.expression}
                </p>
              </div>
            )}
          </div>
        </SectionCard>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-md md:grid-cols-2">
        <SectionCard title="What This Means">
          {content.whatThisMeans.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>

        <SectionCard title="What To Improve" blue>
          {content.whatToImprove.map((line: string, index: number) => (
            <p key={index} className="text-xl font-medium mt-xs">
              {line}
            </p>
          ))}
        </SectionCard>
      </div>
      <div className="mt-md flex justify-between md:justify-end gap-md">
        <button
          onClick={() => router.push("/resources/alignment-test")}
          className="h-[54px] cursor-pointer rounded-[8px] md:rounded-[12px] border border-[#0668E1] px-8 text-xl font-medium text-[#0668E1]"
        >
          Back
        </button>

        <DownloadPdfButton mode={mode} role={role} phase={phase} />
      </div>
    </section>
  );
}

export default function ReportClient({ role }: { role: Role }) {
  // time stamp

  const [reportLoadTime, setReportLoadTime] = useState<number | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();

  const mode = (searchParams.get("mode") || "single") as "single" | "full";
  const phase = searchParams.get("phase") || "uncertainty";
  const [showRetake, setShowRetake] = useState(false);

  const [report, setReport] = useState<any>(null);
  const [user, setUser] = useState<any>(null);

  const invalidReport =
    !report ||
    !report.type ||
    (mode === "single" && !report.result) ||
    (mode === "full" && !report.overall) ||
    (mode === "single" && report.type !== "phase") ||
    (mode === "full" && report.type !== "overall");

  useEffect(() => {
    async function loadReport() {
      // time stamp

      const start = performance.now();

      try {
        const res = await getReportAction({
          role: role as any,
          mode,
          phase,
        });

        // time stamp

        const end = performance.now();

        setReportLoadTime(end - start);

        // console.log(
        //   "Report Load Time:",
        //   ((end - start) / 1000).toFixed(2),
        //   "seconds"
        // );

        if (res?.success) {
          setReport(res.report);
          setUser(res.user);
          return;
        }

        console.error("Report action failed:", res);
        setReport({});
      } catch (error) {
        console.error("Failed to fetch report:", error);
        setReport({});
      }
    }

    loadReport();
  }, [role, mode, phase]);

  useEffect(() => {
    if (report !== null && invalidReport) {
      const timer = setTimeout(() => {
        setShowRetake(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [report, invalidReport]);
  if (report === null) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#D3E6FF] border-t-[#0668E1]" />

          <p className="text-xl font-bold text-[#2C2C2C]">Loading report...</p>
        </div>
      </div>
    );
  }

  if (invalidReport) {
    if (!showRetake) {
      return (
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="flex flex-col items-center gap-sm">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#D3E6FF] border-t-[#0668E1]" />

            <p className="text-xl font-bold text-[#2C2C2C]">
              Checking report data...
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-sm">
        <p className="text-xl font-bold text-[#2C2C2C]">
          Report data incomplete. Please retake assessment.
        </p>

        <button
          onClick={() =>
            router.push(
              `/resources/alignment-test/${role}?mode=${mode}&phase=${phase}`,
            )
          }
          className="rounded-sm bg-[#0668E1] px-md py-xs text-white"
        >
          Retake Test
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="no-print">
        {report.type === "phase" ? (
          <PhaseReport
            report={report}
            user={user}
            role={role}
            mode={mode}
            phase={phase}
          />
        ) : (
          <OverallReport
            report={report}
            user={user}
            role={role}
            mode={mode}
            phase={phase}
          />
        )}
      </div>

      <div id="print-root" className="print-report overflow-x-hidden ">
        {mode === "single" ? (
          <PhasePrintDocument report={report} user={user} />
        ) : (
          <OverallPrintDocument report={report} user={user} />
        )}
      </div>

      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }

        @page {
          size: A4 portrait;
          margin: 0;
        }

        /* hide print document in UI */

        .print-report {
          position: absolute;
          left: -9999px;
          top: 0;
          width: 794px; /* A4 width */
          background: white;
          visibility: visible;
        }

        @media print {
          .no-print,
          header,
          nav,
          footer {
            display: none !important;
          }

          html,
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          #print-root {
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
