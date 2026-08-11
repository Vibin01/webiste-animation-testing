"use client";

import {
  ArrowRight,
  Layers3,
  Trophy,
  Blocks,
  ChevronRight,
} from "lucide-react";
import {motion} from "framer-motion"
import Image from "next/image";

// ============================================================
// DATA
// ============================================================

const journeySteps = [
  {
    id: "aspiration",
    title: "ASPIRATION",
    description: "Everyone Aspires Seamless Yield",
    icon: "/home/icons/aspire.svg",
  },
  {
    id: "alignment",
    title: "ALIGNMENT",
    description: "Everyone Aligns for Seamless Yield",
        icon: "/home/icons/align.svg",

  },
  {
    id: "achievement",
    title: "ACHIEVEMENT",
    description: "Everyone Achieves Seamless Yield",
        icon: "/home/icons/achieve.svg",
  },
];


// ============================================================
// COMPONENT
// ============================================================

export default function AspirationAchievement() {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto w-full">

        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="mb-xl ">

          <h2 className="text-h2 font-extrabold ">
            FROM ASPIRATION TO{" "}
            <span className="text-[#0668E1]">
              ACHIEVEMENT
            </span>
          </h2>

          <p className="mt-1 font-medium text-base">
            Seamless Yield begins as{" "}
            <strong>an aspiration.</strong>{" "}
            Sustained alignment turns it into{" "}
            <strong>achievement.</strong>
          </p>

        </header>


        {/* ==================================================
            JOURNEY
        ================================================== */}

        <div className="relative pt-xl">

  <motion.div
    className="
      grid
      grid-cols-1
      gap-xl
      md:grid-cols-[1fr_70px_1fr_70px_1fr]
      md:items-start
      md:gap-0
    "
    initial="hidden"
    whileInView="visible"
    viewport={{
      once: true,
      amount: 0.3,
    }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.5,
        },
      },
    }}
  >

    {journeySteps.map((step, index) => {

      return (
        <div
          key={step.id}
          className="contents"
        >

          {/* ==================================================
              STEP
          ================================================== */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -35,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >

            {/* Icon */}

            <div
              className="
                flex
                
                
                items-center
                justify-center
                rounded-full
                bg-[#e3efff]
                text-[#0668E1]
                p-[3%]
                
              "
            >
              <Image
              src={step.icon}
              alt={step.title}
              height={100}
              width={100}
className="size-iconsize-md scale-90"
/>
            </div>


            {/* Title */}

            <h3
              className="
                mt-md
                text-base
                font-bold
              "
            >
              {step.title}
            </h3>


            {/* Description */}

            <p
              className="

mt-1              text-xl
                font-medium
              "
            >
              {step.description}
            </p>

          </motion.div>


          {/* ==================================================
              ARROW
          ================================================== */}

          {index < journeySteps.length - 1 && (
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              className="
                
                md:h-full
                items-center
                justify-center
                md:flex
              "
            >

              <div
                className="
                  flex
                  p-1
                  items-center
                  justify-center
                  rounded-full
                  bg-[#0668E1]
                  text-white
                "
              >
                <ChevronRight
                  size={13}
                  strokeWidth={2.5}
                  className="size-iconsize-sm md:rotate-0 rotate-90"
                />
              </div>

            </motion.div>
          )}

        </div>
      );
    })}

  </motion.div>

</div>

      </div>

    </section>
  );
}