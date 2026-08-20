"use client";

import Image from "next/image";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

const achievementSteps = [
  {
    id: 1,
    title: "Aspiration",
    icon: "/home/icons/aspire.svg",
    text: (
     <>
        <span className="font-bold textbase">E</span>veryone
        <br />
        <span className="font-bold text-base">A</span>spires
        <br />
        <span className="font-bold text-base">S</span>eamless
        <br />
        <span className="font-bold text-base">Y</span>ield
      </>
    ),
  },
  {
    id: 2,
    title: "Alignment",
    icon: "/home/icons/align.svg",
    text: (
      <>
        <span className="text-[#0668E1] font-bold text-base">E</span>veryone
        <br />
        <span className="text-[#0668E1] font-bold text-base">A</span>ligns for
        <br />
        <span className="text-[#0668E1] font-bold text-base">S</span>eamless
        <br />
        <span className="text-[#0668E1] font-bold text-base">Y</span>ield
      </>
    ),
  },
  {
    id: 3,
    title: "Achievement",
    icon: "/home/icons/achieve.svg",
  text: (
      <>
        <span className="font-bold text-base">E</span>veryone
        <br />
        <span className="font-bold text-base">A</span>chieves
        <br />
        <span className="font-bold text-base">S</span>eamless
        <br />
        <span className="font-bold text-base">Y</span>ield
      </>
    ),
  },
];


export default function AspirationAchievement() {
   const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.5,
  });

  return (
    <section ref={sectionRef} className="w-full overflow-hidden pt-[8%]">
      <div
        className="
          mx-auto
          flex
          
          items-center
          justify-between
          py-[3%]
        "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

 <motion.div
  initial={{
    opacity: 0,
    x: -40,
  }}
  animate={{
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : -40,
  }}
  transition={{
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1],
  }}
          className="shrink-0"
        >
          <h2
            className="
              text-h2
              font-extrabold
              leading-tight
            "
          >
            From
            <br />
            Aspiration to
            <br />
            <span className="text-[#0668E1]">Achievement</span>
          </h2>

          <p
            className="
              mt-sm
              text-base
            "
          >
            Seamless Yield begins as <span className="font-bold">an aspiration.</span>
            <br />
            Sustained alignment turns it into <span className="font-bold">achievement.</span>
          </p>
        </motion.div>

        {/* =====================================================
            RIGHT FLOW
        ===================================================== */}

  <div
  className="
    relative
    grid
    w-full
    grid-cols-3
    gap-md
    md:w-[55%]
  "
>
  {achievementSteps.map((step, index) => {
    const finalY =
      index === 0
        ? 0
        : `calc(-${index} * clamp(18px, 2.6vw, 50px))`;

    return (
      <div
        key={step.id}
        className="relative min-w-0 w-full"
      >
        {/* =================================================
            CARD
        ================================================= */}

<motion.article
  initial={{
    opacity: 0,
    y: 70,
  }}
  animate={{
    opacity: isInView ? 1 : 0,
    y: isInView ? finalY : 70,
  }}
  transition={{
    duration: 1.2,
    delay: isInView ? 0.8 + index * 0.75 : 0,
    ease: [0.16, 1, 0.3, 1],
  }}
          className={`
            relative
            z-10
            flex
            w-full
            flex-col
            rounded-md
          items-center
          p-md
          shadow-web-medium

             ${
    index === 0
      ? `
        border-2
        border-[#FFFFFF]
        bg-[#F6FAFF33]
      `
      : index === 1
        ? `
           border-2
      border-[#FFFFFF]
      ring
      ring-[#0668E1]
      ring-offset-6
      ring-offset-[#F2F8FF]
      bg-[#F6FAFF33]
        `
        : `
          bg-[linear-gradient(203.87deg,#0075FF_15.37%,#004BA6_84.69%)]
          border-[#0668E1]
          border-4
          text-white
        `
  }

          `}
        >
          {/* =========================================
              ICON
          ========================================= */}

          <div className="mb-xs flex justify-center">
            <div
              className={`
                flex
                p-xs
                items-center
                justify-center
                rounded-sm
                ${
                  index === 2
                    ? "bg-white"
                    : "bg-[#0668E1]"
                }
              `}
            >
              <Image
                src={step.icon}
                alt=""
                width={19}
                height={19}
                className={` ${
                  index === 2
                    ? "size-iconsize-md "
                    : " size-iconsize-sm scale-130 "
                }"object-contain-"` }
              />
            </div>
          </div>

          {/* =========================================
              TITLE
          ========================================= */}

          <h3
            className={`
              text-base
              font-bold
              ${
                index === 1
                  ? "text-[#0668E1]"
                  : ""
              }
            `}
          >
            {step.title}
          </h3>

          {/* =========================================
              TEXT
          ========================================= */}

          <div
            className={`
              mt-xs
              text-xl
              font-medium
              ${
                index === 2
                  ? "text-white"
                  : ""
              }
            `}
          >
            {step.text}
          </div>
        </motion.article>

        {/* =================================================
            ARROW BETWEEN CARDS
        ================================================= */}

        {index < achievementSteps.length - 1 && (
         <motion.div
  initial={{
    opacity: 0,
    x: -35,
    y: 20,
  }}
  animate={{
    opacity: isInView ? 1 : 0,
    x: isInView ? 10 : -35,
    y: isInView ? -5 : 20,
  }}
  transition={{
    duration: 1,
    delay: isInView ? 1.5 + index * 0.75 : 0,
    ease: [0.16, 1, 0.3, 1],
  }}
            className="
              pointer-events-none
              absolute
              left-full
              top-1/2
              z-20
              h-[clamp(42px,6vw,72px)]
              w-[clamp(42px,6vw,72px)]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <Image
              src="home/icons/achievement-flow-arrow.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain"
            />
          </motion.div>
        )}
      </div>
    );
  })}
</div>
      </div>
    </section>
  );
}