"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import WithinContent from "./DemoBeignWithin";
import WithinAnimation from "./DemoBeignWithin";
import { DemoAcross } from "./DemoAcross";

// ============================================================
// TYPES
// ============================================================

type Role = {
  role: string;
  img: string;
  url: string;
};

type MobileAcrossRole = Role & {
  type?: "toast" | "link";
};

// ============================================================
// DATA
// ============================================================

const withinRoles: Role[] = [
  {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url: "/candidate",
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url: "/recruiter",
  },
  {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url: "/employer",
  },
];

const acrossRoles: Role[] = [
  {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url: "/candidate",
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url: "/recruiter",
  },
  {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url: "/employer",
  },
];

const mobileAcrossRoles: MobileAcrossRole[] = [
  {
    role: "Candidate",
    img: "/images/candidate-avatar.png",
    url: "/candidate",
    type: "link",
  },
  {
    role: "Recruiter",
    img: "/images/recruiter-avatar.png",
    url: "/recruiter",
    type: "link",
  },
  {
    role: "Employer",
    img: "/images/employer-avatar.png",
    url: "/employer",
    type: "link",
  },
];

// ============================================================
// EASING
// ============================================================

const easing = [0.22, 1, 0.36, 1] as const;

// ============================================================
// PROCESS TAB LINE
//
// IMPORTANT:
// This line exists ONLY inside the tab area.
// It is NOT attached to the cards/content below.
// ============================================================

function ProcessTabLine({
  activeTab,
}: {
  activeTab: "within" | "across";
}) {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-[-2px]
        left-0
        right-0
        h-[2px]
        overflow-hidden
      "
    >
      {/* =====================================================
          BASE TAB LINE
      ===================================================== */}

      <div className="absolute inset-0 bg-[#EDEDED]" />

      {/* =====================================================
          WITHIN
          0% → 50% → SHINE → RETRACT
      ===================================================== */}

      {activeTab === "within" && (
        <motion.div
          key="within-process"
          className="
            absolute
            left-0
            top-0
            h-full
            overflow-hidden
            bg-[#0668E1]
          "
          initial={{
            width: "0%",
            opacity: 0,
          }}
          animate={{
             left: [
              "0%",
              "0%",
              "0%",
              "50%",
            ],
            width: [
              "0%",
              "50%",
              "50%",
              "0%",
            ],
            opacity: [
              1,
              1,
              1,
              1,
            ],
          }}
          transition={{
            duration: 8,
            times: [
              0,
              0.80,
              0.92,
              1,
            ],
            ease: "easeInOut",
          }}
        >
          {/* Shine */}

          {/* <motion.div
            className="
              absolute
              inset-y-0
              left-[-80px]
              w-[80px]
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
            "
            initial={{
              x: -80,
            }}
            animate={{
              x: [
                -80,
                160,
              ],
            }}
            transition={{
              duration: 0.8,
              delay: 2.15,
              ease: "easeInOut",
            }}
          /> */}
        </motion.div>
      )}

      {/* =====================================================
          ACROSS
          50% → 100% → SHINE → RETRACT
      ===================================================== */}

      {activeTab === "across" && (
        <motion.div
          key="across-process"
          className="
            absolute
            top-0
            h-full
            overflow-hidden
            bg-[#0668E1]
          "
          initial={{
            left: "50%",
            width: "0%",
            opacity: 0,
          }}
          animate={{
            left: [
              "50%",
              "50%",
              "50%",
              "100%",
            ],
            width: [
              "0%",
              "50%",
              "50%",
              "0%",
            ],
            opacity: [
              1,
              1,
              1,
              1,
            ],
          }}
          transition={{
            duration: 8,
            times: [
              0,
              0.80,
              0.92,
              1,
            ],
            ease: "easeInOut",
          }}
        >
          {/* Shine */}
{/* 
          <motion.div
            className="
              absolute
              inset-y-0
              left-[-80px]
              w-[80px]
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
              opacity-90
            "
            initial={{
              x: -80,
            }}
            animate={{
              x: [
                -80,
                260,
              ],
            }}
            transition={{
              duration: 0.8,
              delay: 2.15,
              ease: "easeInOut",
            }}
          /> */}
        </motion.div>
      )}
    </div>
  );
}

// ============================================================
// TAB BUTTON
// ============================================================

function TabButton({
  active,
  icon,
  children,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        relative
        flex
        items-center
        justify-center
        gap-xs
        py-3
        text-base
        font-bold
        cursor-pointer
      "
    >
      <span
        className={
          active
            ? "text-[#0668E1]"
            : "text-[#303030]"
        }
      >
        {icon}
      </span>

      <span
        className={
          active
            ? "text-[#0668E1]"
            : "text-[#303030]"
        }
      >
        {children}
      </span>
    </button>
  );
}



// ============================================================
// MAIN
// ============================================================

export default function AlignmentTabs() {
  const [activeTab, setActiveTab] =
    useState<"within" | "across">("within");

  // Used to restart the process-line animation
  const [animationKey, setAnimationKey] =
    useState(0);

  // ==========================================================
  // AUTOMATIC TAB SWITCH
  // ==========================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((current) =>
        current === "within"
          ? "across"
          : "within"
      );

      setAnimationKey((value) => value + 1);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [animationKey]);

  // ==========================================================
  // MANUAL TAB
  // ==========================================================

  const changeTab = (
    tab: "within" | "across"
  ) => {
    if (tab === activeTab) return;

    setActiveTab(tab);
    setAnimationKey((value) => value + 1);
  };

  return (
    <section className="w-full ">

      {/* ====================================================
          TAB AREA
      ==================================================== */}

      <div className="px-lg">

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-[700px]
            grid-cols-2
          "
        >

          {/* ==================================================
              TAB 1
          ================================================== */}

          <TabButton
            active={activeTab === "within"}
            onClick={() =>
              changeTab("within")
            }
            icon={
              <IoPersonSharp
                className="size-iconsize-sm"
              />
            }
          >
            Begins Within
          </TabButton>


          {/* ==================================================
              TAB 2
          ================================================== */}

          <TabButton
            active={activeTab === "across"}
            onClick={() =>
              changeTab("across")
            }
            icon={
              <MdGroups
                className="size-iconsize-sm"
              />
            }
          >
            Continues Across
          </TabButton>


          {/* ==================================================
              PROCESS ANIMATION

              THIS IS THE ONLY ANIMATED LINE.
          ================================================== */}

          <ProcessTabLine
            key={animationKey}
            activeTab={activeTab}
          />

        </div>

      </div>


      {/* ====================================================
          CONTENT
      ==================================================== */}

{activeTab === "within" ? (
  <>
  
  <WithinAnimation />
  </>
) : (
  <DemoAcross/>
)}

    </section>
  );
}

// ============================================================
// ALIGNMENT CONTENT ANIMATION
// ============================================================

function AlignmentContentAnimation({
  activeTab,
  animationKey,
}: {
  activeTab: "within" | "across";
  animationKey: number;
}) {
  const roles =
    activeTab === "within"
      ? withinRoles
      : acrossRoles;

  return (
    <div
      key={`${activeTab}-${animationKey}`}
      className="
        relative
        mt-xl
        w-full
        overflow-hidden
        py-md
      "
    >
      {/* =====================================================
          TOP ACTORS
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          items-start
          justify-evenly
        "
      >
        {roles.map((role, index) => (
          <ActorAnimationCard
            key={`${role.role}-${animationKey}`}
            role={role}
            index={index}
          />
        ))}
      </div>

      {/* =====================================================
          CENTER HHH
          Appears after Head / Heart / Hand
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 15,
        }}
        animate={{
          opacity: [
            0,
            0,
            0,
            1,
            1,
            0,
          ],
          scale: [
            0.5,
            0.5,
            0.5,
            1,
            1,
            0.7,
          ],
          y: [
            15,
            15,
            15,
            0,
            0,
            0,
          ],
        }}
        transition={{
          duration: 7,

          times: [
            0,
            0.30,
            0.46,
            0.52,
            0.66,
            0.78,
          ],

          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[150px]
          z-30
          -translate-x-1/2
          text-[30px]
          font-black
          tracking-[0.08em]
          text-[#0668E1]
        "
      >
        HHH
      </motion.div>

      {/* =====================================================
          MOVING HHH
          
          One HHH moves toward each actor.
          This gives the:
          
              HHH
            ↙ ↓ ↘
          
          effect.
      ===================================================== */}

      {roles.map((role, index) => {
        const xPosition =
          index === 0
            ? "-31vw"
            : index === 1
              ? "0vw"
              : "31vw";

        return (
          <motion.div
            key={`moving-hhh-${role.role}-${animationKey}`}
            initial={{
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [
                0,
                0,
                0,
                1,
                1,
                0,
              ],

              x: [
                "0vw",
                "0vw",
                "0vw",
                "0vw",
                xPosition,
                xPosition,
              ],

              y: [
                0,
                0,
                0,
                0,
                -95,
                -95,
              ],

              scale: [
                0.7,
                0.7,
                0.7,
                1,
                0.55,
                0.55,
              ],
            }}
            transition={{
              duration: 7,

              times: [
                0,
                0.55,
                0.63,
                0.67,
                0.79,
                0.84,
              ],

              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[150px]
              z-40
              -translate-x-1/2
              text-[20px]
              font-black
              tracking-[0.05em]
              text-[#0668E1]
            "
          >
            HHH
          </motion.div>
        );
      })}

      {/* =====================================================
          FINAL HARMONY CIRCLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          flex
          justify-evenly
        "
      >
        {roles.map((role, index) => (
          <HarmonyCircle
            key={`harmony-${role.role}-${animationKey}`}
            role={role}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}


// ============================================================
// ACTOR ANIMATION CARD
// ============================================================

function ActorAnimationCard({
  role,
  index,
}: {
  role: Role;
  index: number;
}) {
  /*
   * Small delay between the 3 actors.
   *
   * Actor 1 → 0s
   * Actor 2 → 0.15s
   * Actor 3 → 0.30s
   */
  const delay = index * 0.15;

  return (
    <div
      className="
        relative
        flex
        w-1/3
        flex-col
        items-center
      "
    >
      {/* =====================================================
          ACTOR ICON
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.55,
          y: 35,
        }}
        animate={{
          opacity: [
            0,
            1,
            1,
            1,
            0,
          ],

          scale: [
            0.55,
            1,
            1,
            1,
            0.9,
          ],

          y: [
            35,
            0,
            0,
            0,
            -10,
          ],
        }}
        transition={{
          duration: 7,

          delay,

          times: [
            0,
            0.18,
            0.40,
            0.62,
            0.79,
          ],

          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          size-iconsize-2xl
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-full
          bg-[#DDEBFF]
        "
      >
        <img
          src={role.img}
          alt={role.role}
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>


      {/* =====================================================
          HEAD · HEART · HAND
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.9,
        }}
        animate={{
          opacity: [
            0,
            0,
            1,
            1,
            0,
          ],

          y: [
            20,
            20,
            0,
            0,
            -18,
          ],

          scale: [
            0.9,
            0.9,
            1,
            1,
            0.9,
          ],
        }}
        transition={{
          duration: 7,

          delay,

          times: [
            0,
            0.22,
            0.31,
            0.48,
            0.68,
          ],

          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-md
          whitespace-nowrap
          text-center
          text-[18px]
          font-medium
          tracking-[0.02em]
          text-[#303030]
        "
      >
        <span>Head</span>

        <span className="mx-2">
          ·
        </span>

        <span>Heart</span>

        <span className="mx-2">
          ·
        </span>

        <span>Hand</span>
      </motion.div>
    </div>
  );
}


// ============================================================
// HARMONY CIRCLE
// ============================================================

function HarmonyCircle({
  role,
  index,
}: {
  role: Role;
  index: number;
}) {
  /*
   * Every circle has EXACTLY the same size.
   */
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.65,
      }}
      animate={{
        opacity: [
          0,
          0,
          0,
          0,
          1,
          1,
        ],

        scale: [
          0.65,
          0.65,
          0.65,
          0.8,
          1,
          1,
        ],
      }}
      transition={{
        duration: 7,

        delay: index * 0.05,

        times: [
          0,
          0.58,
          0.68,
          0.76,
          0.84,
          1,
        ],

        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        size-[150px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border-[2px]
        border-[#0668E1]
        bg-[#F2F7FF]
      "
    >
      {/* =================================================
          ACTOR IMAGE
          
          HHH reaches this circle first,
          then actor image appears.
      ================================================= */}

      <motion.img
        src={role.img}
        alt=""
        initial={{
          opacity: 0,
          scale: 0.45,
        }}
        animate={{
          opacity: [
            0,
            0,
            0,
            1,
            1,
            0,
          ],

          scale: [
            0.45,
            0.45,
            0.45,
            0.65,
            1,
            0.5,
          ],
        }}
        transition={{
          duration: 7,

          delay: index * 0.05,

          times: [
            0,
            0.68,
            0.76,
            0.82,
            0.88,
            0.94,
          ],

          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          h-full
          w-full
          rounded-full
          object-cover
        "
      />


      {/* =================================================
          IN HARMONY
      ================================================= */}

      <motion.span
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: [
            0,
            0,
            0,
            0,
            0,
            1,
          ],

          scale: [
            0.7,
            0.7,
            0.7,
            0.7,
            0.8,
            1,
          ],
        }}
        transition={{
          duration: 7,

          delay: index * 0.05,

          times: [
            0,
            0.70,
            0.78,
            0.84,
            0.90,
            0.96,
          ],

          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-20
          whitespace-nowrap
          text-[18px]
          font-extrabold
          text-[#0668E1]
        "
      >
        In Harmony
      </motion.span>
    </motion.div>
  );
}