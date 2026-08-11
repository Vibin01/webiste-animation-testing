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

import type { ReactNode } from "react";

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
    <article className="overflow-hidden rounded-[14px] border border-[#d8e6fa] bg-white">

      {/* TOP VISUAL */}

    <Image alt="image" height={100} width={100} src={"/home/candidate-application-interview.svg"}
    className="w-full " />


      {/* CONTENT */}

      <div className="min-h-[238px] border-t border-[#e1e9f4] p-[12px]">

        {/* ==================================================
            TITLE
        ================================================== */}

        <h3 className="text-[15px] font-bold leading-[1.35] text-[#252525]">

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


        {/* ==================================================
            DESCRIPTION
        ================================================== */}

        <p className="mt-[7px] text-[13px] font-medium leading-[1.45] text-[#333]">
          {card.description}
        </p>


        {/* ==================================================
            CONTINUITY BREAK
        ================================================== */}

        <div className="mt-[13px] flex gap-[8px]">

          {/* Warning */}

          <AlertTriangle
            size={19}
            className="mt-[1px] shrink-0 text-[#777]"
            strokeWidth={1.8}
          />


          {/* Text */}

          <div>

            <h4 className="text-[14px] font-bold text-[#4b4b4b]">
              {card.breakTitle}
            </h4>

            <p className="mt-[5px] text-[13px] font-medium leading-[1.42] text-[#444]">
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
    <div className="flex min-h-[66px] items-center gap-[10px] rounded-[14px] border border-[#b9d5ff] bg-[#eff6ff] px-[12px]">

      {/* ICON */}

      <div className="flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full bg-[#0668E1] text-white">

        {icon}

      </div>


      {/* CONTENT */}

      <div>

        <h4 className="text-[14px] font-bold leading-[1.3] text-[#0668E1]">
          {title}
        </h4>

        {description && (
          <p className="mt-[2px] text-[12px] font-medium leading-[1.3] text-[#0668E1]">
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

  return (
    <section className="w-full h-[100vh] max-h-[100vh] bg-white p-[14px]">


      {/* ====================================================
          HEADER
      ==================================================== */}

      <div className="mb-[13px] flex items-center justify-between">


        {/* ==================================================
            ROLE TITLE
        ================================================== */}

        <div className="flex items-center gap-[10px]">

          {/* Blue vertical line */}

          <div className="h-[38px] w-[4px] rounded-full bg-[#0668E1]" />


          {/* Role */}

          <h2 className="text-[28px] font-bold tracking-[-0.5px] text-[#0668E1]">
            {role.label}
          </h2>

        </div>


        {/* ==================================================
            STAGES
        ================================================== */}

        <div className="hidden items-center  sm:flex">

          <StageButton label="Application" />

          <StageButton label="Interview" />

          <StageButton label="Offer" />

          <StageButton label="Joining" />

        </div>

      </div>


      {/* ====================================================
          THREE TRANSITION CARDS
      ==================================================== */}

      <div className="grid grid-cols-1 gap-[12px] md:grid-cols-3">

        {role.cards.map((card, index) => (

          <TransitionCard
            key={`${role.id}-${index}`}
            card={card}
          />

        ))}

      </div>


      {/* ====================================================
          BOTTOM SUMMARY
      ==================================================== */}

      <div className="mt-[12px] grid grid-cols-1 gap-[12px] md:grid-cols-3">

        {/* WITHIN */}

        <SummaryCard
          icon={<Link2 size={15} />}
          title="Continuity breaks within"
          description="When decisions and actions separate."
        />


        {/* PRESERVE */}

        <SummaryCard
          icon={<ShieldCheck size={15} />}
          title="Alignment Preserve both"
        />


        {/* ACROSS */}

        <SummaryCard
          icon={<Network size={15} />}
          title="Continuity breaks Across"
          description="When change is not coordinated with others."
        />

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
        h-[48px]
        w-[150px]
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
          px-6
          text-[18px]
          font-medium
          text-[#0668E1]
        "
      >
        {label}
      </div>
    </div>
  );
}