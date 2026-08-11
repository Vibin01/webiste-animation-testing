"use client";

import {
  ArrowRight,
  Check,
} from "lucide-react";
import {  useState } from "react";
import { useRouter } from "next/navigation";

const situationCards = [
  {
    icon: "/resources/alignment-test/uncertainty-icon.svg",
    title: "1. Uncertainty",
    description: "When clarity is incomplete",
  },
  {
    icon: "/resources/alignment-test/pressure-icon.svg",
    title: "2. Pressure",
    description: "When demands increase",
  },
  {
    icon: "/resources/alignment-test/control-icon.svg",
    title: "3. Control",
    description: "When influence is shared",
  },
  {
    icon: "/resources/alignment-test/perception-icon.svg",
    title: "4. Perception",
    description: "When interpretation varies",
  },
  {
    icon: "/resources/alignment-test/outcome-icon.svg",
    title: "5. Outcome",
    description: "When results are reviewed",
  },
];

const bottomCards = [
  {
    icon: "/resources/alignment-test/real-hiring-scenarios-and-decision-insights.svg",
    title: "Built on real-world hiring experiences and scenarios",
    description: "Grounded in real hiring situations and decisions.",
  },
  {
    icon: "/resources/alignment-test/hiring-alignment-assessment-across-all-roles.svg",
    title: "Designed for candidates, recruiters, and employers",
    description: "Relevant across roles, industries, and hiring stages.",
  },
  {
    icon: "/icons/tick-gradient-icon.svg",
    title: "Real-world actionable insights, not personality labels",
    description: "Focused on decisions and alignment – not traits.",
  },
];

const phaseKeys = [
  "uncertainty",
  "pressure",
  "control",
  "perception",
  "outcome",
];

export default function AlignmentSituationsSection() {
  const router = useRouter();

  const [completedPhases] = useState<string[]>([]);
  const [fullCompleted] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = e.currentTarget.clientWidth;

    setActiveSlide(Math.round(scrollLeft / cardWidth));
  };

  const handleSingleStart = (phase: string) => {
    router.push(
      `/resources/alignment-test/register?mode=single&phase=${phase}`,
    );
  };

  const handleFullStart = () => {
    router.push("/resources/alignment-test/register?mode=full");
  };

  return (
    <section className="w-full px-[1.5%] py-[5%]">
      <div className="text-center">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Alignment shifts across situations
        </h2>
        <p className="text-base font-medium my-xs">
        Explore how your decisions respond to different hiring conditions. </p>
        <p className="text-base font-medium">
         Each phase takes ~1 minute. 3 situations per phase. Start anywhere.
        </p>
      </div>
      <div className="mt-xl">
        <div
          onScroll={handleScroll}
          className="
      flex snap-x snap-mandatory gap-md overflow-x-auto scroll-smooth pb-sm
      scrollbar-hidden
      md:grid md:grid-cols-5 md:overflow-visible md:pb-0
    "
        >
          {situationCards.map((card, index) => {
            const phase = phaseKeys[index];
            const isCompleted = completedPhases.includes(phase);

            const words = card.description.split(" ");
const lastWord = words.pop();

            return (
              <div
                key={card.title}
                className="flex-shrink-0 basis-[55%] md:w-auto rounded-md border border-[#D0E5FF] bg-white p-md text-center"
              >
                <div className="mx-auto flex size-fit p-sm items-center justify-center rounded-full border border-[#D0E5FF] bg-[#EEF6FF] text-[#0668E1]">
                  <img src={card.icon} alt={card.title} className="size-iconsize-md" />
                </div>

                <h3 className="mt-sm text-base font-bold">{card.title}</h3>

            <p className="mt-sm text-xl font-medium">
  {words.join(" ")}
  <br />
  {lastWord}
</p>
                <button
                  onClick={() => handleSingleStart(phase)}
                  className={`mt-md flex h-[46px] w-full items-center justify-center gap-xs rounded-md md:rounded-sm cursor-pointer text-xl font-medium ${
                    isCompleted
                      ? "bg-[#E7FFF3] text-[#2B9B43]"
                      : "bg-[#E6F0FC] text-[#0668E1]"
                  }`}
                >
                  {isCompleted ? "Completed" : "Start"}
                  {isCompleted && <Check className="size-5" />}
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-sm flex justify-center gap-xs md:hidden">
          {[0, 1, 2].map((item) => (
            <button
              key={item}
              className={`h-[6px] rounded-full transition-all ${
                activeSlide === item
                  ? "w-[24px] bg-[#0668E1]"
                  : "w-[6px] bg-[#D0E5FF]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-lg grid grid-cols-1 items-center  md:grid-cols-[1fr_auto]">
        <div>
          <h3 className="text-h5 font-extrabold text-[#1B1C17]">
            Want the complete picture?
          </h3>
          <p className=" text-xl font-medium">
            Take all 5 phases to see how your alignment shifts across hiring situations.
          </p>
        </div>

        <button
          onClick={handleFullStart}
          className={`flex h-btn-h mt-md  items-center justify-center gap-sm rounded-[12px] cursor-pointer px-lg text-xl font-medium ${
            fullCompleted
              ? "bg-[#E7FFF3] text-[#2B9B43]"
              : "bg-[#0668E1] text-white"
          }`}
        >
          {fullCompleted ? "Full Test Completed" : "Full Alignment Check"}
          {fullCompleted ? (
            <Check className="size-5" />
          ) : (
            <ArrowRight className="size-5" />
          )}
        </button>
      </div>

      <div className="my-[15%] md:my-[5%] grid grid-cols-1 gap-sm md:grid-cols-3">
        {bottomCards.map((card) => {
          return (
            <div
              key={card.title}
              className="flex items-start gap-sm rounded-[12px] border border-[#D0E5FF] bg-white p-sm shadow-mobile-small md:shadow-web-small"
            >
              <div className="flex size-iconsize-md shrink-0 items-center justify-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="size-iconsize-md"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold">{card.title}</h4>
                <p className=" text-xl font-medium">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
