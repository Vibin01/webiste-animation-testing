"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type AlignmentItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const alignmentData: AlignmentItem[] = [
  {
    id: 1,
    title: "Alignment Trigger",
    description:
      "Surfaces the decision required for an actor to continue, redirect, pause, or close the hiring flow on time.",
    image: "/home/alignment-trigger.svg",
  },
  {
    id: 2,
    title: "Alignment Signal",
    description:
      "Identifies changes in alignment and makes emerging signals visible before they affect the hiring flow.",
    image: "/home/alignment-signal.svg",
  },
  {
    id: 3,
    title: "Alignment Spectrum",
    description:
      "Shows the degree of alignment across the hiring journey, helping teams understand where action is required.",
    image: "/home/alignment-spectrum.svg",
  },
];

export default function AlignmentEngine() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCard = alignmentData[activeIndex];

  return (
    <section className="w-full p-[5%]">
      <div className="mx-auto grid grid-cols-1 gap-md md:grid-cols-[1.1fr_0.6fr_1fr] lg:items-center">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="text-white">
          <h2 className="text-h2 font-extrabold leading-tight">
            The
            <br />
            Alignment
            <br />
            Engine
          </h2>

          <p className="mt-xs font-medium text-base text-white">
            Connect EC’s proprietary Alignment
            <br />
            Architecture makes Alignment Intelligence
            <br />
            actionable through three connected
            <br />
            behavioural mechanisms.
          </p>
        </div>

        {/* =====================================================
            TABS
        ===================================================== */}
        <div className="flex flex-col gap-sm">
          {alignmentData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`
                  group
                  flex
                  
                  flex-col
                  items-start
                  justify-center
                  rounded-md
                  border
                  p-sm
                  text-left
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "border-white bg-white text-[#0868D8]"
                      : "border-white/80 bg-transparent text-white hover:bg-white/10"
                  }
                `}
              >
                {/* Number */}
                <span
                  className={`
                    mb-xs
                    flex
                    size-iconsize-sm
                    items-center
                    justify-center
                    rounded-[8px]
                    text-md
                    font-bold
                    ${
                      isActive
                        ? "bg-[#0873E8] text-white"
                        : "bg-transparent text-white"
                    }
                  `}
                >
                  {item.id}
                </span>

                {/* Title */}
                <span className="text-base font-bold">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* =====================================================
            ANIMATED CARD
        ===================================================== */}
        <div className="relative h-full overflow-hidden rounded-md">
          <AnimatePresence mode="popLayout" custom={activeIndex}>
            <motion.article
              key={activeCard.id}
              initial={{
                y: activeIndex === 0 ? 30 : 80,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -80,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                inset-0
                rounded-md
                bg-white
                flex
    flex-col
                p-md
              "
            >
              {/* Image */}
              <div className="relative   min-h-0 flex-1 overflow-hidden">
                <Image
                  src={activeCard.image}
                  alt={activeCard.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="shrink-0  mt-xs">
                <h3 className="text-h6 font-bold">
                  {activeCard.title === "Alignment Trigger"
                    ? "Makes the Decision Point Visible"
                    : activeCard.title}
                </h3>

                <p className="mt-1 text-xl font-medium">
                  {activeCard.description}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}