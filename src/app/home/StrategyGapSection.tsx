"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Pagination from "@/components/common/Pagination";

type ImpactSection = {
  title: string;
  points: string[];
};

type GapPage = {
  id: number;
  title: string;
  icon: string;
  seam: string;
  // dimensionInteraction: string;
  intro: string[];
  impacts: ImpactSection[];
  structuralCauseImage: string;
  alt:string;
  structuralCauseText: string[];
};

const gapPagesData: GapPage[] = [
  {
    id: 1,
    title: "Strategy Gap",
    icon: "/home/icons/strategy-gap-icon.svg",
    seam: "Employer ↔ Recruiter",
    // dimensionInteraction: "Direction ↔ Execution",
    intro:[
      "The Strategy Gap emerges when employer-designed hiring direction fails to translate into consistent recruiting execution because visibility into operational progress across teams and roles is limited.",
      "Direction weakens not because intent is unclear, but because execution signals are fragmented, delayed, or disconnected from decision-making.",],
      impacts: [
      {
        title: "Employer Impact",
        points: [
          "Hiring targets are missed despite high recruiting activity ",
          "Priorities drift across teams, roles, and timelines ",
          "Workforce planning becomes difficult to sequence and control",
        ],
      },
      {
        title: "Candidate Impact",
        points: [
          "Communication becomes inconsistent across hiring ",
          "Employer signals appear fragmented across key touchpoints",
          "The hiring experience feels unstructured ",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Priorities shift frequently without stable direction ",
          "Execution becomes activity-focused instead of outcome-focused",
          "Operational pressure increases due to unclear expectations",
        ],
      },
    ],
    structuralCauseImage: "/home/hiring-strategy-gap-between-direction-and-execution.svg",
    alt:"Diagram showing strategy gap between employer direction and recruiter execution in hiring",
    structuralCauseText: [
      "Employers define hiring direction without visibility into execution realities",
      "Recruiters operate without clarity on evolving priorities and demands",
      "Execution signals are not structured into a shared feedback system",
      "Direction loses signal, execution amplifies noise, and hiring outcomes become inconsistent.",
    ],
  },
  {
    id: 2,
    title: "Execution Gap",
    icon: "/home/icons/execution-gap-icon.svg",
    seam: "Recruiter ↔ Candidate",
    // dimensionInteraction: "Execution ↔ Situation",
    intro:
  [    "The Execution Gap emerges when recruiter coordination and candidate engagement fall out of sync because visibility into candidate intent, responsiveness, and stage-level progression is limited.",
    "Execution loses consistency, not because effort is lacking, but because recruiter actions and candidate signals are not continuously aligned."
    ],impacts: [
      {
        title: "Employer Impact",
        points: [
          "Pipeline visibility becomes unstable and unreliable ",
          "Interview reliability declines due to coordination breakdowns",
          "Hiring timelines become unpredictable across roles",
        ],
      },
      {
        title: "Candidate Impact",
         points: [
          "Delays and missing feedback increase uncertainty and disengagement",
          "Process progression becomes unclear across hiring ",
          "Visibility into next steps and communication consistency declines",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Interview no-shows and drop-offs increase complexity",
          "Time and effort are lost through rescheduling and re-alignment",
          "Execution instability increases across hiring stages",
        ],
      },
    ],
    structuralCauseImage: "/home/hiring-execution-gap-between-recruiter-and-candidate.svg",
    alt:"Diagram showing execution gap between recruiter coordination and candidate engagement",
    structuralCauseText: [
      "Recruiters coordinate hiring without visibility into candidate intent ",
      "Candidates move through the process without clarity on progress or expectations",
      "Execution signals are not structured into a shared coordination flow",
      "Coordination breaks down, engagement weakens, and execution becomes unstable.",
    ],
  },
  {
    id: 3,
    title: "Vision Gap",
    icon: "/home/icons/vision-gap-icon.svg",
    seam: "Employer ↔ Candidate",
    // dimensionInteraction: "Direction ↔ Situation",
    intro:
   [   "The Vision Gap emerges when employer hiring direction and candidate decision-making evolve without shared visibility into expectations, opportunity perception, and decision behaviour.",
    "Direction loses alignment not because hiring objectives are unclear, but because expectation and decision signals remain disconnected throughout the hiring journey.",
   ], impacts: [
      {
        title: "Employer Impact",
        points: [
          "Roles are defined without clarity on candidate expectations.",
          "Offer declines increase from expectation misalignment.",
          "Hiring timelines are disrupted by candidate decisions that surface late.",
        ],
      },
      {
        title: "Candidate Impact",
        points: [
          "Expectations around role, compensation, and growth remain unclear.",
          "Employer signals vary across interviews and touchpoints.",
          "Confidence in committing to opportunities weakens.",
        ],
      },
      {
        title: "Recruiter Impact",
        points: [
          "Late-stage drop-offs reset hiring progress & momentum.",
          "Additional effort is required to realign expectations.",
          "Time-to-fill pressure increases as decisions become less predictable.",
        ],
      },
    ],
    structuralCauseImage: "/home/hiring-vision-gap-between-employer-and-candidate.svg",
    alt:"Diagram showing vision gap between employer expectations and candidate reality in hiring",
    structuralCauseText: [
      "Employers design opportunities without continuous visibility into candidate expectations.",
      "Candidates evaluate opportunities without clarity on role realities.",
      "Expectation and decision signals lack shared understanding",
      "Expectations diverge, perception becomes inconsistent, and decisions become vulnerable.",
    ],
  },
];

function LeftCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-md h-auto bg-white p-md border border-[#D3E6FF] md:border-none shadow-mobile-medium md:shadow-web-medium md:rounded-none md:rounded-b-sm">
      <div className="flex flex-col gap-sm">
        <div className="flex flex-row items-center md:items-start md:flex-col gap-xs md:gap-md">
          <img
            src={page.icon}
            alt={`${page.title} Icon`}
            className="h-10 w-10 object-contain md:h-[4vw] md:w-[4vw]"
          />
            <h2 className="text-h2 font-extrabold leading-none ">
              {page.title}
            </h2>
        </div>

        <div className="space-y-sm">
          <div>
            <h3 className="text-base font-bold text-[#1B1C17]">Seam</h3>
            <p className="text-xl font-medium text-[#2C2C2C]">{page.seam}</p>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#1B1C17]">
              Misalignment
            </h3>
            {/* <p className="text-xl font-medium text-[#2C2C2C]">
              {page.dimensionInteraction}
            </p> */}
            {page.intro.map((text,index)=>(
            <div key={index}>
             <p className="mb-sm text-xl font-medium text-[#2C2C2C] leading-relaxed">
              {text}
            </p>
          </div>
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

function ImpactContent({ page }: { page: GapPage }) {
  return (
    <div className="flex flex-col">
      {/* <p className="mb-md text-xl font-medium">{page.intro}</p> */}

      {page.impacts.map((section) => (
        <div key={section.title} className="mb-md last:mb-0">
          <h3 className="mb-sm text-base font-bold">{section.title}</h3>

          <div className="space-y-xs">
            {section.points.map((point, i) => (
              <p key={i} className="text-xl font-medium">
                {point}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MiddleCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-b-sm bg-white p-md shadow-mobile-medium md:shadow-web-medium">
      <ImpactContent page={page} />
    </div>
  );
}

function StructuralCauseContent({ page }: { page: GapPage }) {
  return (
    <div className="flex flex-col">
      <div className="mb-sm overflow-hidden ">
        <img
          src={page.structuralCauseImage}
          alt={page.alt}
          className="w-full h-[clamp(180px,calc(200_/_var(--width)*100vw),500px)] object-cover rounded-md"
        />
        <p className="font-bold text-xl mt-sm">The {page.title} is created</p>
      </div>


<div className="space-y-sm">
  {page.structuralCauseText.map((text, i) => (
    <p key={i} className="text-xl font-medium">
      {i === page.structuralCauseText.length - 1 ? (
        <>
         <span className="font-bold"> As a result:  </span>{text}
        </>
      ) : (
        text
      )}
    </p>
  ))}
</div>
    </div>
  );
}

function RightCard({ page }: { page: GapPage }) {
  return (
    <div className="rounded-b-sm bg-white p-md shadow-mobile-medium md:shadow-web-medium">
      <div className="flex flex-col">
        <h3 className="mb-sm text-base font-bold text-[#1B1C17]">
          Structural Cause
        </h3>
        <StructuralCauseContent page={page} />
      </div>
    </div>
  );
}

type MobileAccordionItemProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function MobileAccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: MobileAccordionItemProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#BFD8FF] bg-white shadow-mobile-medium md:shadow-web-medium">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between p-[5%] text-left"
      >
        <span className="text-h6 font-bold text-[#1B1C17]">{title}</span>
        {isOpen ? (
          <ChevronUp className="size-iconsize-md text-[#1B1C17]" />
        ) : (
          <ChevronDown className="size-iconsize-md text-[#1B1C17]" />
        )}
      </button>

      {isOpen && (
        <div className="border-t border-[#D9E7FB] p-[5%]">{children}</div>
      )}
    </div>
  );
}


function MobileView({
  page,
  currentPage,
  totalPages,
  onPageChange,
}: {
  page: GapPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [openItem, setOpenItem] = useState<"impact" | "cause" | null>("impact");

  return (
    <div className="space-y-4 md:hidden">
      <LeftCard page={page} />

      <MobileAccordionItem
        title="Impact"
        isOpen={openItem === "impact"}
        onToggle={() =>
          setOpenItem((prev) => (prev === "impact" ? null : "impact"))
        }
      >
        <ImpactContent page={page} />
      </MobileAccordionItem>

      <MobileAccordionItem
        title="Structural Cause"
        isOpen={openItem === "cause"}
        onToggle={() =>
          setOpenItem((prev) => (prev === "cause" ? null : "cause"))
        }
      >
        <StructuralCauseContent page={page} />
      </MobileAccordionItem>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function DesktopView({
  page,
  currentPage,
  totalPages,
  onPageChange,
}: {
  page: GapPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="hidden md:block">
      <div className="grid grid-cols-[0.9fr_1.3fr_0.8fr] min-h-[550px] gap-sm">
        <LeftCard page={page} />
        <MiddleCard page={page} />
        <RightCard page={page} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default function StrategyGapSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = gapPagesData.length;
  const activePage = gapPagesData[currentPage - 1];

  return (
    <section className="py-[2%]">
      <div className="mx-auto w-full">
        <MobileView
          page={activePage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <DesktopView
          page={activePage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}