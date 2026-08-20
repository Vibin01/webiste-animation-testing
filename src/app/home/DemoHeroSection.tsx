"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import WithinAnimation from "./DemoBeignWithin";
import { DemoAcross } from "./DemoAcross";




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
            mb-sm
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

<div className="px-[8%]">
{activeTab === "within" ? (
  <>
  
  <WithinAnimation />
  </>
) : (
  <DemoAcross/>
)}
</div>


    </section>
  );
}





