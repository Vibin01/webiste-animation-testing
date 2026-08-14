"use client";

import {
  AlertTriangle,
  BriefcaseBusiness,
  FileText,
  Handshake,
  Link2,
  MessageSquare,
  Network,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

import React, { useRef, useState, type ReactNode } from "react";

// ============================================================
// TYPES
// ============================================================

export type IconName =
  | "file"
  | "interview"
  | "offer"
  | "join"
  | "briefcase"
  | "handshake";

export type CardData = {
  from: string;
  to: string;

  fromIcon: string;
  toIcon: string;

  title: string;
  description: string;

  breakTitle: string;
  breakDescription: string;
};

export type RoleData = {
  id: string;
  label: string;
  cards: CardData[];
};

type ContinuityBreaksProps = {
  role: RoleData;
};


// ============================================================
// ICON MAP
// ============================================================

const iconMap = {
  file: FileText,
  interview: MessageSquare,
  offer: BriefcaseBusiness,
  join: Handshake,
  briefcase: BriefcaseBusiness,
  handshake: Handshake,
};





// ============================================================
// STAGE VISUAL
// ============================================================




// ============================================================
// TRANSITION CARD
// ============================================================

function TransitionCard({
  card,
}: {
  card: CardData;
}) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-lg
        border
        border-[#d8e6fa]
        bg-white
      "
    >
      {/* ==================================================
          TOP VISUAL
      ================================================== */}

      <Image
        alt=""
        height={100}
        width={100}
        src="/home/candidate-application-interview.svg"
        className="
          block
          w-full
          shrink-0
        "
      />

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          flex
          flex-1
          flex-col
          border-t
          border-[#e1e9f4]
          p-md
        "
      >
        {/* TITLE */}

        <h3 className="text-base font-bold text-[#252525]">
          <span>
            {card.from.toUpperCase()}
          </span>

          <span className="mx-[4px]">
            →
          </span>

          <span className="text-[#0668E1]">
            {card.to.toUpperCase()}
          </span>
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-sm text-xl font-medium text-[#333]">
          {card.description}
        </p>

        {/* CONTINUITY BREAK */}

        <div className="mt-sm flex gap-xs">
          {/* Warning */}

          <AlertTriangle
            size={19}
            className="
              mt-[1px]
              size-iconsize-sm
              shrink-0
              text-[#777]
            "
            strokeWidth={1.8}
          />

          {/* Text */}

          <div>
            <h4 className="text-xl font-bold text-[#4b4b4b]">
              {card.breakTitle}
            </h4>

            <p
              className="
                mt-[5px]
                text-xl
                font-medium
                leading-[1.42]
                text-[#444]
              "
            >
              {card.breakDescription}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

// ============================================================
// SUMMARY CARD
// ============================================================

function SummaryCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div
      className="
        flex
        h-full
        w-full
        items-start
        gap-xs
        rounded-md
        border
        border-[#b9d5ff]
        bg-[#eff6ff]
        p-sm
      "
    >
      {/* ICON */}

      <div
        className="
          flex
          size-iconsize-md
          shrink-0
          scale-90
          items-center
          justify-center
          rounded-full
          bg-[#0668E1]
          text-white
        "
      >
        {icon}
      </div>

      {/* CONTENT */}

      <div>
        <h4 className="text-base font-bold text-[#0668E1]">
          {title}
        </h4>

        {description && (
          <p className="mt-1 text-xl font-medium text-[#0668E1]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}


// ============================================================
// MAIN COMPONENT
// ============================================================


export default function ContinuityBreaks({
  role,
}: ContinuityBreaksProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const itemWidth =
      container.firstElementChild?.clientWidth ?? 0;

    if (!itemWidth) return;

    const index = Math.round(
      container.scrollLeft / itemWidth
    );

    setActiveIndex(
      Math.min(Math.max(index, 0), 2)
    );
  };

  return (
    <section className="w-full bg-white md:h-[110vh] md:max-h-[110vh]">

      {/* ====================================================
          HEADER
      ==================================================== */}

      <div className="mb-md gap-md flex flex-col md:flex-row md:items-center justify-between">

        <div className="flex items-center gap-xs">

          <div className="h-btn-h w-2 rounded-full bg-[#0668E1]" />

          <h2 className="text-h2 font-extrabold text-[#0668E1]">
            {role.label}
          </h2>

        </div>

        <div className="items-center flex flex-row">
          <StageButton label="Application" />
          <StageButton label="Interview" />
          <StageButton label="Offer" />
          <StageButton label="Joining" />
        </div>

      </div>

   
{/* ====================================================
    MOBILE — HORIZONTAL SLIDES
==================================================== */}

{/* ====================================================
    MOBILE — HORIZONTAL SLIDES
==================================================== */}

<div
  ref={scrollRef}
  onScroll={handleScroll}
  className="
    -mx-[5%]
    grid
    w-[110%]
    grid-flow-col
    grid-rows-[auto_auto]
    auto-cols-[88%]
    gap-md
    overflow-x-auto
    px-[5%]
    pb-3
    snap-x
    snap-mandatory
    overscroll-x-contain
    scrollbar-none
    md:hidden
"
>
  {role.cards.map((card, index) => (
    <React.Fragment key={`${role.id}-${index}`}>
      
      {/* ==================================================
          TRANSITION CARD
      ================================================== */}

      <div
        className="
          row-start-1
          flex
          h-full
          w-full
          snap-center
        "
      >
        <TransitionCard card={card} />
      </div>


      {/* ==================================================
          SUMMARY CARD
      ================================================== */}

      <div
        className="
          row-start-2
          flex
          h-full
          w-full
        "
      >
        {index === 0 && (
          <SummaryCard
            icon={<Link2 size={15} />}
            title="Continuity breaks within"
            description="When decisions and actions separate."
          />
        )}

        {index === 1 && (
          <SummaryCard
            icon={<ShieldCheck size={15} />}
            title="Alignment Preserve both"
          />
        )}

        {index === 2 && (
          <SummaryCard
            icon={<Network size={15} />}
            title="Continuity breaks Across"
            description="When change is not coordinated with others."
          />
        )}
      </div>

    </React.Fragment>
  ))}
</div>
      {/* ====================================================
          MOBILE INDICATOR
      ==================================================== */}

      <div className="mt-3 flex justify-center gap-2 md:hidden">

        {[0, 1, 2].map((index) => (

          <span
            key={index}
            className={`
              h-[6px]
              rounded-full
              transition-all
              duration-300
              ${
                activeIndex === index
                  ? "w-[22px] bg-[#0668E1]"
                  : "w-[6px] bg-[#C9DCF5]"
              }
            `}
          />

        ))}

      </div>

      {/* ====================================================
          DESKTOP
      ==================================================== */}

      <div className="hidden md:block">

        {/* Transition cards */}

        <div className="grid grid-cols-3 gap-md">

          {role.cards.map((card, index) => (
            <TransitionCard
              key={`${role.id}-${index}`}
              card={card}
            />
          ))}

        </div>

        {/* Summary cards */}

        <div className="mt-md grid grid-cols-3 gap-md">

          <SummaryCard
            icon={<Link2 size={15} />}
            title="Continuity breaks within"
            description="When decisions and actions separate."
          />

          <SummaryCard
            icon={<ShieldCheck size={15} />}
            title="Alignment Preserve both"
          />

          <SummaryCard
            icon={<Network size={15} />}
            title="Continuity breaks Across"
            description="When change is not coordinated with others."
          />

        </div>

      </div>

    </section>
  );
}


// ============================================================
// STAGE BUTTON
// ============================================================

function StageButton({
  label,
}: {
  label: string;
}) {
  return (
    <div
      className={`
        relative
        h-btn-h
        /* Mobile */
        -ml-[2px]

        /* Desktop */
        md:-ml-0
        shrink-0
      `}
    >
      <svg
        viewBox="0 0 160 48"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <path
          d="
            M 8 1
            H 142
            L 158 24
            L 142 47
            H 8
            L 20 24
            Z
          "
          fill="white"
          stroke="#6DA8F7"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      <div
        className="
          relative
          z-10
          flex
          h-full
          w-full
          items-center
          justify-center
          px-md
          md:px-lg
          text-xl
          font-medium
          text-[#0668E1]
        "
      >
        {label}
      </div>
    </div>
  );
}