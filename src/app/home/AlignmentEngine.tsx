"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

// ============================================================
// TYPES
// ============================================================

type EngineCard = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

// ============================================================
// DATA
// ============================================================

const cards: EngineCard[] = [
  {
    number: "01",
    label: "ALIGNMENT TRIGGER",
    title: "Makes the Decision Point Visible",
    description:
      "Surfaces the decision required for an actor to continue, redirect, pause, or close the hiring flow on time.",
    image: "/home/icons/alignment-trigger.svg",
  },

  {
    number: "02",
    label: "ALIGNMENT SIGNAL",
    title: "Makes Follow-Through Visible",
    description:
      "Shows whether an actor responds on time and whether the action that follows remains coherent with the communicated decision.",
    image: "/home/icons/alignment-signal.svg",
  },

  {
    number: "03",
    label: "ALIGNMENT SPECTRUM",
    title: "Makes the Wider Pattern Visible",
    description:
      "Brings signals from across hiring interactions together to reveal alignment patterns across the hiring ecosystem.",
    image: "/home/icons/alignment-spectrum.svg",
  },
];

const easing = [0.22, 1, 0.36, 1] as const;

// ============================================================
// NUMBER MARKER
// ============================================================

function NumberMarker({
  number,
}: {
  number: string;
}) {
  return (
    <div className="relative flex h-[50px] w-[48px] shrink-0 items-center">
      {/* Blue arc */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[50px]
          w-[50px]
          rotate-[0deg]
          rounded-full
          border-[7px]
          border-b-transparent
          border-l-[#0668E1]
          border-r-transparent
          border-t-transparent
        "
      />

      {/* Number */}

      <div
        className="
          absolute
          left-[10px]
          top-[5px]
          flex
          h-[40px]
          w-[40px]
          items-center
          justify-center
          rounded-full
          bg-white
          text-[11px]
          font-extrabold
          text-[#0668E1]
          shadow-[0_4px_12px_rgba(6,104,225,0.15)]
        "
      >
        {number}
      </div>
    </div>
  );
}

// ============================================================
// ENGINE CARD
// ============================================================

function EngineCard({
  card,
  index,
  scrollProgress,
}: {
  card: EngineCard;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  /*
   * Each card owns one section of the scroll progress.
   *
   * Card 1: 0.00 → 0.30
   * Card 2: 0.25 → 0.55
   * Card 3: 0.50 → 0.80
   *
   * Once a card reaches its position it stays there.
   */

  const ranges = [
    [0.00, 0.16, 0.30],
    [0.25, 0.41, 0.55],
    [0.50, 0.66, 0.80],
  ];

  const [start, enter, finish] = ranges[index];

  // ----------------------------------------------------------
  // CARD Y POSITION
  // ----------------------------------------------------------

  const y = useTransform(
    scrollProgress,
    [start, enter, finish],
    [100, 0, 0]
  );

  // ----------------------------------------------------------
  // OPACITY
  // ----------------------------------------------------------

  const opacity = useTransform(
    scrollProgress,
    [start, enter, finish],
    [0, 1, 1]
  );

  // ----------------------------------------------------------
  // SMALL SCALE
  // ----------------------------------------------------------

  const scale = useTransform(
    scrollProgress,
    [start, enter, finish],
    [0.96, 1, 1]
  );

  return (
    <motion.article
      style={{
        y,
        opacity,
        scale,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[14px]
        border
        border-[#D8E8FF]
        bg-white
        p-3

        shadow-[0_8px_28px_rgba(6,104,225,0.06)]

        transition-[box-shadow,border-color]
        duration-300

        hover:border-[#9fc8ff]
        hover:shadow-[0_16px_40px_rgba(6,104,225,0.14)]

        sm:p-3.5
      "
    >
      {/* ====================================================
          IMAGE
      ==================================================== */}

      <div
        className="
          relative
          aspect-[2.55/1]
          w-full
        "
      >
        <img
          src={card.image}
          alt=""
         
        
        />

      </div>

      {/* ====================================================
          CONTENT
      ==================================================== */}

      <div className="px-0.5 pb-1 pt-4 sm:pt-4.5">
        <h3
          className="
            text-h5
            font-bold
          "
        >
          {card.title}
        </h3>

        <p
          className="
            mt-3
            text-xl
            font-medium
          "
        >
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AlignmentEngine() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /*
   * IMPORTANT:
   *
   * The section is intentionally tall.
   * The inner content becomes sticky.
   *
   * As the user scrolls through the 300vh section,
   * scrollProgress moves from 0 → 1.
   */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="alignment-engine-title"
      className="
        relative
        h-[320vh]
        w-full
        bg-white
      "
    >
      {/* ====================================================
          STICKY VIEWPORT
      ==================================================== */}

      <div
        className="
          sticky
          top-0
          flex
          h-screen
          w-full
          items-start
          overflow-hidden
          bg-white
          py-[2%]


        "
      >
        <div className="mx-auto w-full ">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.header
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: easing,
            }}
          >
            <h2
              id="alignment-engine-title"
              className="
                text-h2
                font-black
                uppercase
              "
            >
              The Alignment{" "}
              <span className="text-[#0668E1]">
                Engine
              </span>
            </h2>

            <p
              className="
                text-base
                
                w-[90%]
                font-medium
              "
            >
              Connect EC’s proprietary Alignment Architecture
              makes Alignment Intelligence actionable through
              three connected behavioural mechanisms.
            </p>
          </motion.header>

          {/* =================================================
              STAGE LABELS
          ================================================= */}

          <div
            className="
              mt-9
              grid
              grid-cols-1
              gap-5

              md:grid-cols-3
              md:gap-4

              lg:gap-[18px]
            "
          >
            {cards.map((card, index) => (
              <StageHeader
                key={card.number}
                card={card}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              mt-md
              grid
              grid-cols-1

              md:grid-cols-3
              gap-md

            "
          >
            {cards.map((card, index) => (
              <EngineCard
                key={card.number}
                card={card}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ============================================================
// STAGE HEADER
// ============================================================

function StageHeader({
  card,
  index,
  scrollProgress,
}: {
  card: EngineCard;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const ranges = [
    [0.00, 0.16, 0.30],
    [0.25, 0.41, 0.55],
    [0.50, 0.66, 0.80],
  ];

  const [start, enter, finish] = ranges[index];

  const opacity = useTransform(
    scrollProgress,
    [start, enter, finish],
    [0, 1, 1]
  );

  const x = useTransform(
    scrollProgress,
    [start, enter, finish],
    [-25, 0, 0]
  );

  return (
    <motion.div
      style={{
        opacity,
        x,
      }}
      className="flex items-center gap-3"
    >
      <NumberMarker number={card.number} />

      <span
        className="
          text-[13px]
          font-extrabold
          uppercase
          tracking-[0.025em]
          text-[#0668E1]

          sm:text-[14px]
        "
      >
        {card.label} 
      </span>
    </motion.div>
  );
}