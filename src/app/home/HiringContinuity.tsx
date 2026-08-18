"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  Users,
  UserRound,
  Link2,
  Network,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type Role = "employer" | "recruiter" | "candidate";

type ContinuityCard = {
  title: string;
  description: string;
  icon: "employer" | "recruiter" | "candidate";
  breakTitle: string;
  breakDescription: string;
};

type RoleData = {
  label: string;
  icon: "employer" | "recruiter" | "candidate";

  stages: string[];

  cards: ContinuityCard[];

  bottomCards: {
    type: "within" | "preserve" | "across";
    title: string;
    description: string;
  }[];
};

const roleData: Record<Role, RoleData> = {
  employer: {
    label: "Employer",
    icon: "employer",

    stages: [
      "Target",
      "Evaluation",
      "Selection",
      "Hiring",
    ],

    cards: [
      {
        title: "TARGET → EVALUATION",
        description:
          "The employer moves from defining hiring targets to aligning priorities and capacity for candidate evaluation.",

        icon: "employer",

        breakTitle: "Continuity Break",

        breakDescription:
          "The hiring target is defined, but capacity, hiring pressure, and position load are not assessed together—putting target achievement at risk.",
      },

      {
        title: "EVALUATION → SELECTION",
        description:
          "The employer moves from evaluating candidates to selecting the right talent through consistent standards.",

        icon: "recruiter",

        breakTitle: "Continuity Break",

        breakDescription:
          "Candidates are evaluated, but inconsistent evaluation criteria and fragmented feedback across evaluators often delay clear, timely selection decisions.",
      },

      {
        title: "SELECTION → HIRING",
        description:
          "The employer moves from selecting a candidate to securing the hire through joining.",

        icon: "candidate",

        breakTitle: "Continuity Break",

        breakDescription:
          "The candidate is selected, but weak post-offer engagement, changing candidate intent, and disconnected commitment signals put the hire at risk.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },

  recruiter: {
    label: "Recruiter",
    icon: "recruiter",

    stages: [
      "Sourcing",
      "Evaluation",
      "Selection",
      "Hiring",
    ],

    cards: [
      {
        title: "SOURCING → EVALUATION",
        description:
          "The recruiter moves from sourcing candidates to evaluating them against consistent hiring requirements.",

        icon: "recruiter",

        breakTitle: "Continuity Break",

        breakDescription:
          "Candidates are sourced, but inconsistent requirements and fragmented information can create gaps before evaluation begins.",
      },

      {
        title: "EVALUATION → SELECTION",
        description:
          "The recruiter moves from evaluating candidates to recommending the right candidate for selection.",

        icon: "employer",

        breakTitle: "Continuity Break",

        breakDescription:
          "Evaluation decisions can become inconsistent when feedback, expectations, and hiring criteria are not aligned.",
      },

      {
        title: "SELECTION → HIRING",
        description:
          "The recruiter moves from candidate selection to supporting a successful offer and joining process.",

        icon: "candidate",

        breakTitle: "Continuity Break",

        breakDescription:
          "Candidate commitment can weaken when post-selection communication and expectations are disconnected.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },

  candidate: {
    label: "Candidate",
    icon: "candidate",

    stages: [
      "Interest",
      "Evaluation",
      "Selection",
      "Joining",
    ],

    cards: [
      {
        title: "INTEREST → EVALUATION",
        description:
          "The candidate moves from showing interest to understanding and engaging with the evaluation process.",

        icon: "candidate",

        breakTitle: "Continuity Break",

        breakDescription:
          "Candidate expectations may not remain connected to the evaluation experience, creating uncertainty and disengagement.",
      },

      {
        title: "EVALUATION → SELECTION",
        description:
          "The candidate moves from evaluation to understanding the selection decision and next steps.",

        icon: "recruiter",

        breakTitle: "Continuity Break",

        breakDescription:
          "Unclear feedback and inconsistent communication can weaken candidate confidence during selection.",
      },

      {
        title: "SELECTION → JOINING",
        description:
          "The candidate moves from selection to committing and successfully joining the organization.",

        icon: "employer",

        breakTitle: "Continuity Break",

        breakDescription:
          "Changing expectations, weak engagement, and disconnected communication can put the joining decision at risk.",
      },
    ],

    bottomCards: [
      {
        type: "within",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type: "preserve",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type: "across",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },
};

function RoleIcon({
  type,
  className = "",
}: {
  type: "employer" | "recruiter" | "candidate";
  className?: string;
}) {
  if (type === "employer") {
    return <BriefcaseBusiness className={className} />;
  }

  if (type === "recruiter") {
    return <Users className={className} />;
  }

  return <UserRound className={className} />;
}

function BottomIcon({
  type,
}: {
  type: "within" | "preserve" | "across";
}) {
  if (type === "within") {
    return <Link2 className="h-4 w-4" />;
  }

  if (type === "across") {
    return <Network className="h-4 w-4" />;
  }

  return <Sparkles className="h-4 w-4" />;
}

export default function HiringContinuity() {
  const [activeRole, setActiveRole] = useState<Role>("employer");

  const data = roleData[activeRole];

  return (
    <section className="w-full ">
      <div className="mx-auto w-full">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-xl">
          <p className="mb-xs text-xl font-bold uppercase tracking-wide text-[#0668E1]">
            THREE ACTORS. THREE JOURNEYS.
          </p>

          <h2 className="text-h2 font-extrabold">
            One Hiring Continuity.
          </h2>
        </div>

        {/* =====================================================
            ROLE TABS
        ===================================================== */}

        <div className="mb-md flex  gap-md">
          {(["employer", "recruiter", "candidate"] as Role[]).map(
            (role) => {
              const item = roleData[role];
              const active = activeRole === role;

              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setActiveRole(role)}
                  className={`
                    flex
                    h-btn-h
                    w-[clamp(150px,calc(180_/_var(--width)*100vw),400px)]
                    items-center
                    justify-center
                    rounded-md
                    border
                    text-base
                    font-medium
                    transition-all
                    duration-200
                    px-xl
                    ${
                      active
                        ? "border-[#0668E1] bg-[#0668E1] text-white"
                        : "border-[#C9DCF8] bg-white text-[#0668E1] hover:bg-[#F2F7FF]"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            }
          )}
        </div>

        {/* =====================================================
            JOURNEY BAR
        ===================================================== */}

        <div className="relative mb-md">
          <div className="relative h-btn-h w-full">
  {/* =====================================================
      OUTER ARROW BORDER
  ===================================================== */}

  <svg
    viewBox="0 0 1000 48"
    preserveAspectRatio="none"
    className="
      pointer-events-none
      absolute
      inset-0
      z-0
      h-full
      w-full
    "
    aria-hidden="true"
  >
    <path
      d="
        M 8 1
        H 982
        L 1000 24
        L 982 47
        H 8
        L 19 24
        Z
      "
      fill="white"
      stroke="#BBD4F5"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>

  {/* =====================================================
      STAGES
  ===================================================== */}

  <div
    className="
      relative
      z-10
      flex
      h-full
      w-full
      items-center
      px-[3%]
    "
  >
    {data.stages.map((stage, index) => (
      <div
        key={stage}
        className="
          relative
          flex
          h-full
          flex-1
          items-center
          justify-center
        "
      >
        <span
          className="
            text-xl
            font-bold
          "
        >
          {stage}
        </span>

        {index < data.stages.length - 1 && (
          <span
            className="
              absolute
              right-0
              text-h4
              font-medium
s            "
          >
            »
          </span>
        )}
      </div>
    ))}
  </div>
</div>
        </div>

        {/* =====================================================
            MAIN CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 gap-md md:grid-cols-3">
          {data.cards.map((card) => (
            <ContinuityCard
              key={card.title}
              card={card}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM CARDS
        ===================================================== */}

        <div className="mt-sm grid grid-cols-1 gap-md md:grid-cols-3">
          {data.bottomCards.map((card) => {
            const preserve = card.type === "preserve";

            return (
              <div
                key={card.type}
                className={`
                  rounded-md
                  border
                  p-sm
                  ${
                    preserve
                      ? "border-[#0668E1] bg-[#0668E1] text-white"
                      : "border-[#DEEDFF] bg-white text-[#303030]"
                  }
                `}
              >
                <div className="flex items-start gap-xs">
                  <div
                    className={`
                      flex
                      size-iconsize-md
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      ${
                        preserve
                          ? "bg-white/15 text-white"
                          : "bg-[#EEF5FF] text-[#0668E1]"
                      }
                    `}
                  >
                    <BottomIcon type={card.type} />
                  </div>
<div>
    <span className="text-base font-bold">
                    {card.title}
                  </span>

<p
                  className={`
                    mt-1
                    text-xl
                    font-medium
                    ${
                      preserve
                        ? "text-white"
                        : "text-[#303030]"
                    }
                  `}
                >
                  {card.description}
                </p>
</div>
                  
                </div>

                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* =============================================================
   CONTINUITY CARD
============================================================= */

function ContinuityCard({
  card,
}: {
  card: ContinuityCard;
}) {
  return (
    <div
      className="
        rounded-md
        border
        border-[#DCE8F6]
        bg-white
        p-md
        shadow-web-medium
      "
    >
      {/* TITLE */}

      <h3 className="text-base font-bold">
        {card.title.split(" → ")[0]}

        <span className="text-[#0668E1]">
          {" → "}
          {card.title.split(" → ")[1]}
        </span>
      </h3>

      {/* DESCRIPTION */}

      <p className="mt-xs text-xl font-medium ">
        {card.description}
      </p>

      {/* CONTINUITY BREAK */}

      <div
        className="
          mt-sm
          rounded-sm
          border
          border-[#FFD3CA]
          bg-[#FFF4F2]
          p-sm
        "
      >
        {/* ICON */}

        <div className="mb-xs text-[#F04438]">
          <RoleIcon
            type={card.icon}
            className="size-iconsize-sm"
          />
        </div>

        <h4 className="text-xl font-bold">
          {card.breakTitle}
        </h4>

        <p className="mt-xs text-xl font-medium">
          {card.breakDescription}
        </p>
      </div>
    </div>
  );
}