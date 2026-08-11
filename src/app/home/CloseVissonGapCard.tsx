"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Pagination from "@/components/common/Pagination";

type SectionBlock = {
  title: string;
  content: string | string[];
};

type RightSideBlock = {
  title: string;
  content: SectionBlock[];
};

type GapCardData = {
  id: number;
  icon: string;
  title: string;
  leftSide: SectionBlock[];
  rightSide: RightSideBlock;
};

const gapCardsData: GapCardData[] = [
  {
    id: 1,
    icon: "/home/icons/closing-vision-gap-icon.svg",
    title: "Closing the Vision Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Candidate ↔ Employer",
      },
      {
        title: "Misalignment",
        content:
          "Expectation signals remain hidden when employers lack visibility into candidate expectations, and candidates lack clarity on opportunities.",
      },
      {
        title: "Expectation Alignment",
        content: [
          "Connect EC establishes a shared visibility layer between employer direction and candidate reality through signals from candidate intent, employer participation, and decision readiness.",
          "Alignment triggers capture candidate expectations, timelines, and opportunity context",
          "Expectation and decision signals create shared understanding between employer direction and candidate decision-making.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Candidate Impact:",
          content: [
            "Candidates gain trusted insight into employer expectations, role realities, and the interview experience.",
          ],
        },
        {
          title: "Employer Impact: ",
          content: [
            "Employers receive continuous visibility into candidate expectations, opportunity perception, and decision behaviour.",
          ],
        },
        {
          title: "System Shift: ",
          content: ["Direction and decision-making become continuously informed through shared visibility into expectations, opportunity perception, and decision readiness."],
        },
        {
          title: "Final State: ",
          content: [" Direction and candidate decision-making operate in continuous alignment through shared visibility into expectations, role perception, and decision signals."],
        },
      ],
    },
  },
  {
    id: 2,
    icon: "/home/icons/closing-execution-gap-icon.svg",
    title: "Closing the Execution Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Recruiter ↔ Candidate",
      },
      {
        title: "Misalignment",
        content:
          "Communication signals disappear when candidate engagement and recruiter coordination lack shared visibility.",
      },
      {
        title: "Execution Alignment",
        content: [
          "Connect EC establishes shared visibility between candidate engagement and recruiter coordination through scheduling, participation, communication, and evaluation signals.",
          "Interaction signals capture engagement, responsiveness, intent, and progress across hiring stages.",
          "Execution signals create shared coordination between recruiter actions and candidate engagement.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Recruiter Impact: ",
          content: [
            " Recruiters maintain stable interview pipelines through continuous visibility into candidate responsiveness and participation.",
          ],
        },
        {
          title: "Candidate Impact: ",
          content: [
            "Candidates receive timely updates, coordination clarity, and consistent feedback throughout the hiring process.",
          ],
        },
        {
          title: "System Shift: ",
          content: [
            "Execution becomes continuously informed through shared visibility into engagement, participation, and progression signals.",
          ],
        },
        {
          title: "Final State: ",
          content: ["Execution and engagement operate in continuous alignment through shared visibility into participation, coordination, and hiring progress across stages."],
        },
      ],
    },
  },
  {
    id: 3,
    icon: "/home/icons/closing-strategy-gap-icon.svg",
    title: "Closing the Strategy Gap",
    leftSide: [
      {
        title: "Seam",
        content: "Employer ↔ Recruiter",
      },
      {
        title: "Misalignment",
        content:
          "Recruiting effort fails to convert into hires when employer direction lacks visibility into execution progress and candidate signals.",
      },
      {
        title: "Direction Alignment",
        content: [
          "Connect EC establishes shared visibility between employer direction and recruiter execution through role, candidate, and recruiting signals.",
          "Interaction signals capture role calibration, candidate alignment, and execution progress.",
          "Execution signals create shared feedback between employer direction and recruiter execution.",
        ],
      },
    ],
    rightSide: {
      title: "Alignment Outcome",
      content: [
        {
          title: "Employer Impact: ",
          content: [
            "Employers gain continuous visibility into role definition accuracy, execution progress, and candidate alignment across hiring stages.",
          ],
        },
        {
          title: "Recruiter Impact: ",
          content: [
            "Recruiters operate with clearer role definitions, live execution visibility, and structured evaluation signals tied to hiring priorities.",
          ],
        },
        {
          title: "System Shift: ",
          content: [
            "Direction becomes continuously informed through shared visibility into execution progress, candidate signals, and hiring priorities.",
          ],
        },
        {
          title: "Final State: ",
          content: ["Direction and execution operate in continuous alignment through shared visibility into priorities, progress, and hiring signals across the system."],
        },
      ],
    },
  },
];

function ContentBlock({ title, content }: SectionBlock) {
  const isArrayContent = Array.isArray(content);

  return (
    <div>
      <h3 className="text-base font-bold text-[#1B1C17]">{title} </h3>

      {isArrayContent ? (
        <div className="mt-sm space-y-sm text-xl font-medium text-[#2C2C2C]">
          {content.map((item, index) => (
            <p key={index} className="text-xl font-medium text-[#2C2C2C]">
              {item}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-sm text-xl font-medium text-[#2C2C2C]">{content}</p>
      )}
    </div>
  );
}

type MobileAccordionProps = {
  title: string;
  content: string | string[];
  isOpen: boolean;
  onToggle: () => void;
};

function MobileAccordion({
  title,
  content,
  isOpen,
  onToggle,
}: MobileAccordionProps) {
  const isArrayContent = Array.isArray(content);

  return (
    <div className="border-t border-[#DDECFF] pt-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-base font-bold text-[#1B1C17]">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1B1C17]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1B1C17]" />
        )}
      </button>

      {isOpen && (
        <div>
          {isArrayContent ? (
            <div className="mt-sm space-y-md text-xl font-medium text-[#2C2C2C]">
              {content.map((item, index) => (
                <p key={index} className="text-xl font-medium text-[#2C2C2C]">
                  {item}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-sm text-xl font-medium text-[#2C2C2C]">
              {content}
            </p>
          )}
        </div>
      )}
    </div>
  );
}


function DesktopView({
  activeCard,
  currentPage,
  totalPages,
  onPageChange,
}: {
  activeCard: GapCardData;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="hidden py-[4%] min-h-[750px] md:flex ">
      <div className="">
        {/* Header */}
        <div className="flex items-center gap-xs">
          <img
            src={activeCard.icon}
            alt={activeCard.title}
            className="size-iconsize-xl"
          />

          <h1 className="text-h2 font-extrabold text-[#1B1C17]">
            {activeCard.title}
          </h1>
        </div>

        {/* Main Card */}
        <div className="min-h-[450px] grid grid-cols-2 gap-lg mt-md rounded-lg border border-[#DDECFF] bg-white p-md">
          {/* Left Side */}
          <div className="space-y-sm">
            {activeCard.leftSide.map((item, index) => (
              <ContentBlock
                key={`${item.title}-${index}`}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-sm ">
            <h3 className="text-base font-bold text-[#1B1C17]">
              {activeCard.rightSide.title} 
            </h3>

            <div className="mt-md space-y-sm">
              {activeCard.rightSide.content.map((item, index) => (
               
<div key={index}>
  <p className="pt-1 text-xl font-medium text-[#2C2C2C] leading-relaxed">
    <span className="font-bold text-[#1B1C17]">
      {item.title}
    </span>{" "}
     {item.content}
  </p>
</div>
      
              ))}
            </div>
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
            onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

function MobileView({
  activeCard,
  currentPage,
  totalPages,
  onPageChange,
}: {
  activeCard: GapCardData;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
const [openSection, setOpenSection] = useState(
  activeCard.leftSide[1]?.title || ""
);

useEffect(() => {
  setOpenSection(activeCard.leftSide[1]?.title || "");
}, [currentPage, activeCard]);

  return (
    <div className="block py-[5%] md:hidden">
      {/* Header */}
      <div className="mb-sm flex items-center gap-[3%]">
        <img src={activeCard.icon} alt={activeCard.title} className="size-8" />
        <h1 className="text-h2 font-extrabold text-[#1B1C17]">
          {activeCard.title}
        </h1>
      </div>

      <div className="rounded-lg border border-[#DDECFF] bg-white p-md">
        <div className="space-y-md">
          {/* Seam only */}
          <div>
            <h3 className="text-h6 font-bold text-[#1B1C17]">
              {activeCard.leftSide[0].title}
            </h3>

            <p className="mt-sm text-xl font-medium text-[#2C2C2C]">
              {activeCard.leftSide[0].content}
            </p>
          </div>

          {/* Remaining left side as dropdown */}
          {activeCard.leftSide.slice(1).map((item, index) => (
            <MobileAccordion
              key={`${item.title}-${index}`}
              title={item.title}
              content={item.content}
              isOpen={openSection === item.title}
              onToggle={() =>
                setOpenSection((prev) =>
                  prev === item.title ? "" : item.title,
                )
              }
            />
          ))}

          {/* Right side dropdown */}
          <MobileAccordion
            title={activeCard.rightSide.title}
            content={activeCard.rightSide.content.map(
              (item) =>
                `${item.title} ${
                  Array.isArray(item.content)
                    ? item.content.join(" ")
                    : item.content
                }`,
            )}
            isOpen={openSection === activeCard.rightSide.title}
            onToggle={() =>
              setOpenSection((prev) =>
                prev === activeCard.rightSide.title
                  ? ""
                  : activeCard.rightSide.title,
              )
            }
          />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default function ClosingGapCard() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = gapCardsData.length;
  const activeCard = gapCardsData[currentPage - 1];

  return (
    <>
      <DesktopView
        activeCard={activeCard}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <MobileView
        activeCard={activeCard}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
