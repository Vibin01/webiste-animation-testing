"use client";

import { useState } from "react";

import Image from "next/image";

type Role = "employer" | "recruiter" | "candidate";

type ContinuityCard = {
  title: string;
  description: string;
  icon: string;
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
    icon:string;
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

        icon: "/home/icons/video-link-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The hiring target is defined, but capacity, hiring pressure, and position load are not assessed together—putting target achievement at risk.",
      },

      {
        title: "EVALUATION → SELECTION",
        description:
          "The employer moves from evaluating candidates to selecting the right talent through consistent standards.",

        icon: "/home/icons/bussness-bag-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "Candidates are evaluated, but inconsistent evaluation criteria and fragmented feedback across evaluators often delay clear, timely selection decisions.",
      },

      {
        title: "SELECTION → HIRING",
        description:
          "The employer moves from selecting a candidate to securing the hire through joining.",

        icon: "/home/icons/handshake-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The candidate is selected, but weak post-offer engagement, changing candidate intent, and disconnected commitment signals put the hire at risk.",
      },
    ],

    bottomCards: [
      {
        type:"within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type:"preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },

      {
        type:"across",
        icon: "/home/icons/department-line-icon.svg",
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
      "Scheduling",
      "Evaluation",
      "Closure",
    ],

    cards: [
      {
        title: "SOURCING → SCHEDULING",
        description:
          "The recruiter moves from identifying a candidate to coordinating and confirming an interview.",

        icon: "/home/icons/video-link-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The recruiter identifies the candidate, but changing availability, reschedules, and scattered communication delay interview confirmation.",
      },

      {
        title: "SCHEDULING → EVALUATION",
        description:
          "The recruiter moves from scheduling the interview to securing reliable participation and completing the evaluation.",

        icon: "/home/icons/bussness-bag-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The interview is scheduled, but last-minute withdrawals, candidate no-shows, and delayed panel feedback prevent a reliable transition to evaluation.",
      },

      {
        title: "EVALUATION → CLOSURE",
        description:
          "The recruiter moves from evaluation to communicating the decision and sustaining commitment through joining.",

        icon: "/home/icons/handshake-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "Evaluation is completed, but delayed decision communication, weak post-offer engagement, and changing candidate intent put joining at risk.",
      },
    ],

    bottomCards: [
      {
        type:"within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type:"preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type:"across",
        icon: "/home/icons/department-line-icon.svg",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },

  candidate: {
    label: "Candidate",
    icon: "candidate",

    stages: [
      "Application",
      "Interview",
      "Offer",
      "Joining",
    ],

    cards: [
      {
        title: "APPLICATION → INTERVIEW",
        description:
          "The candidate moves from applying for a role to confirming and preparing for an interview.",

        icon: "/home/icons/video-link-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The candidate applies for the role, but delayed responses, scheduling changes, and scattered communication prevent the candidate from confirming and preparing for the interview.",
      },

      {
        title: "INTERVIEW → OFFER",
        description:
          "The candidate moves from completing the interview to understanding the hiring outcome and next steps.",

        icon: "/home/icons/bussness-bag-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The interview is completed, but delayed feedback, unclear decision status, and inconsistent communication leave the candidate uncertain about the outcome and what follows.",
      },

      {
        title: "OFFER → JOINING",
        description:
          "The candidate moves from receiving an offer to evaluating it, communicating a decision, and progressing toward joining.",

        icon: "/home/icons/handshake-break-icon.svg",

        breakTitle: "Continuity Break",

        breakDescription:
          "The offer is received, but limited evaluation time, decision pressure, and weak post-offer engagement put the candidate’s offer decision and joining commitment at risk.",
      },
    ],

    bottomCards: [
      {
        type:"within",
        icon: "/home/icons/broken-link-icon.svg",
        title: "Continuity breaks within",
        description: "When decisions and actions separate.",
      },
      {
        type:"preserve",
        icon: "/home/icons/star-icon.svg",
        title: "Alignment Preserve both",
        description: "When coherence is sustained.",
      },
      {
        type:"across",
        icon: "/home/icons/department-line-icon.svg",
        title: "Continuity breaks Across",
        description: "When coordination breaks.",
      },
    ],
  },
};





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
                          ? "bg-white"
                          : "bg-[#DEEDFF]"
                      }
                    `}
                  >
                    <Image src={card.icon} alt={card.title} height={100} width={100}
                    className="size-iconsize-sm" />
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

        <div className="mb-xs">
          <Image
          src={card.icon}
          alt={card.title}
height={100}
width={100}
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