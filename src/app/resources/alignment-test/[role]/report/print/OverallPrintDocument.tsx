import { FaInstagram, FaMediumM, FaYoutube } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

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

function MiniScoreCircle({
  percentage,
  color = "#2B9B43",
  mode,
}: {
  percentage: number;
  color?: string;
  mode: string;
}) {
  return (
    <div className="relative flex h-[86px] min-w-[86px] items-center justify-center rounded-full">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(${color} ${percentage}%, #ededed 0)`,
        }}
      />
      <div className="absolute h-[68px] w-[68px] rounded-full bg-white" />
      <span className="relative text-[16px] font-extrabold" style={{ color }}>
        {mode === "Dynamic" ? <p className="text-h4">D</p> : `${percentage}%`}

      </span>
    </div>
  );
}

function getColor(mode: string) {
  if (mode === "Aligned") return "#2B9B43";
  if (mode === "Auto-Aligned") return "#36C354";
  if (mode === "Misaligned") return "#F0431D";
  if (mode === "Unaligned") return "#F9A620";
  return "#0668E1";
}

export default function OverallPrintDocument({
  report,
  user,
}: {
  report: any;
  user: any;
}) {
  const { overall, phaseResults, content } = report;
  if (!overall) return null;

  const color = getColor(overall?.mode);
  const isOldInsight = Array.isArray(content.insight);
  return (
    <main className="mx-auto min-h-[297mm] w-[210mm] bg-[#FAFDFF] p-[10mm] text-[#1B1C17]">
      <div className=" mt-[5%] flex items-center justify-between border-b border-[#D1E5FF] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#E6F0FC] font-bold text-[#0668E1]">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div>
            <p className="text-[14px] font-extrabold">{user?.name}</p>
            <p className="text-[11px] font-medium">{user?.email}</p>
          </div>
        </div>

        <img src="/Connect_EC_Logo.svg" alt="connect ec" className="h-auto w-[160px]" />

      </div >

      <section className="mt-8 flex items-center gap-3">
        {/* <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DEEDFF] bg-[#EEF6FF]">
          🛡️
        </div> */}
        <div>
          <h1 className="text-[18px] font-extrabold">
            Your Alignment Insight -{" "}
            <span className="text-[#0668E1]">Overall</span>
          </h1>
          <p className="text-[11px] font-semibold">
            Based on your response across 5 key situations in hiring.
          </p>
        </div>
      </section>

      <section className="mt-5 rounded-[14px] border border-[#DEEDFF] bg-white p-5">
        
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-[13px] font-extrabold uppercase">
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
                  className="size-[14px] rounded-[4px]"
                  style={{ backgroundColor: getColor(mode) }}
                />

                <span className="text-[10px] font-medium">{mode}</span>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-5 flex items-center gap-8">
          <MiniScoreCircle mode={overall.mode} percentage={overall.percentage} color={color} />
          <div>
            <div className="flex items-center gap-3">
              {overall.mode !== "Dynamic" && (
                <p className="text-[34px] font-extrabold" style={{ color }}>
                  {overall.percentage}%
                </p>)}
              <p className="text-[17px] font-extrabold uppercase" style={{ color }}>
                {overall.mode}
              </p>
            </div>

            {isOldInsight
              ? content.insight.map((line: string, index: number) => (
                <p key={index} className="text-[10px] mt-0.5 font-medium text-[#2C2C2C]">
                  {line}
                </p>
              ))
              : (content.insight[overall.band ?? "Strong"] ?? []).map(
                (line: string, index: number) => (
                  <p key={index} className="text-[10px] mt-0.5 font-medium text-[#2C2C2C]">
                    {line}
                  </p>
                )
              )}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["Pattern", content.pattern],
            ["Trigger", content.trigger],
            ["Outcome", content.outcome],
          ].map(([title, lines]: any) => (
            <div
              key={title}
              className="rounded-[10px] border border-[#DEEDFF] bg-white p-3"
            >
              <h3 className="text-[12px] font-extrabold">{title}</h3>
              <div className="my-2 border-t border-[#DEEDFF]" />
              {lines.map((line: string, index: number) => (
                <p key={index} className="mt-1 text-[10px] font-medium">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4 grid grid-cols-5 gap-3">
        {phaseResults.map((phase: any) => {
          const phaseColor = getColor(phase.mode);

          return (
            <div
              key={phase.phaseKey}
              className="rounded-[10px] border border-[#DEEDFF] bg-white p-3 text-center"
            >
                  <p className=" flex items-center justify-center gap-xs text-[11px] font-medium capitalize text-[#2C2C2C]">
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
              <p className=" mt-1 mb-3 text-[15px] font-bold"   style={{ color: getColor(phase.mode) }}>{phase.mode}</p>
            
              <div className="flex justify-center h-[86px]">
              
                <MiniScoreCircle
                  mode={phase.mode}
                  percentage={phase.percentage}
                  color={phaseColor}
                />
              </div>
           </div>
          );
        })}
      </section>

      <section className="mt-4 rounded-[14px] border border-[#DEEDFF] bg-white p-4">
        <h2 className="text-[13px] font-extrabold uppercase">
          Alignment Health
        </h2>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {Object.entries(content.health).map(([key, label]: any) => {
            const width =
              label === "Strong" ? "100%" : label === "Moderate" ? "65%" : "30%";

            return (
              <div
                key={key}
                className="rounded-[8px] border border-[#DEEDFF] bg-white p-3"
              >
                <div className="flex justify-between">
                  <p className="capitalize text-[11px] font-extrabold">{key}</p>
                  <p className="text-[10px] font-medium">{label}</p>
                </div>

                <div className="mt-2 h-[7px] rounded-full bg-[#EEEEEE]">
                  <div
                    className="h-full rounded-full bg-[#0668E1]"
                    style={{ width }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>



      <div className="mt-5 flex h-[42px] items-center justify-between bg-[#0668E1] px-5 text-[11px] font-semibold text-white">
        <div>Take Alignment Test</div>
        <div className=" flex text-[11px] gap-2 font-semibold text-white">


          <div className="p-2 bg-[#FFFFFF1A] rounded-full">
            <ImLinkedin2 />
          </div>
          <div className="p-2 bg-[#FFFFFF1A] rounded-full">
            <FaMediumM />
          </div>

          <div className="p-2 bg-[#FFFFFF1A] rounded-full">
            <FaYoutube />
          </div>
          <div className="p-2 bg-[#FFFFFF1A] rounded-full">
            <FaInstagram />
          </div>
        </div>
      </div>
    </main>
  );
}