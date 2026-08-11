"use client";

import { motion } from "motion/react";

export default function ECLoadingAnimation() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-[80px] w-[80px]  lg:h-[120px] lg:w-[120px]">

        {/* EC Box */}
        <motion.div
          className="
            relative
            flex
            h-full
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-md
            lg:rounded-xl
            border-[5px]
            md:border-[10px]
            border-transparent
            shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          "
      style={{
  backgroundImage: `
  linear-gradient(
    var(--angle),
    #ffffff80 100%
  ),
    conic-gradient(
  from var(--angle),
  #e5e2e2e4 0deg,
  #0668E100 180deg,
  #0668E1 360deg
)
   
  `,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  "--angle": "0deg",
} as React.CSSProperties}
          animate={{
            "--angle": ["0deg", "360deg"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* EC */}
          <span
            className="
              relative
              z-10
              text-h2
              font-bold
              tracking-[-3px]
              text-[#0668E1]
            "
          >
            EC
          </span>
        </motion.div>

      </div>
    </div>
  );
}