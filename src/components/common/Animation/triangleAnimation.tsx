"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Aspire · Align · Achieve — signature merge animation
 * Connect EC alignment system
 *
 * Usage:
 *   import AspireAlignAchieve from "@/components/AspireAlignAchieve";
 *   <AspireAlignAchieve />
 *
 * Requires:
 *   npm install framer-motion
 *   Tailwind color "primary" mapped to #0668E1 (see tailwind.config)
 *   "Lexend" font loaded (see README)
 */

const DURATION = 7; // seconds per full loop
const EASE: [number, number, number, number] = [0.5, 0, 0.3, 1];
const TIMES = [0, 0.14, 0.38, 0.46, 0.8, 0.92, 1];

const nodeTransition = {
  duration: DURATION,
  repeat: Infinity,
  ease: EASE,
  times: TIMES,
};

function CornerNode({
  icon,
  label,
  className,
  x,
  y,
}: {
  icon: ReactNode;
  label: string;
  className: string;
  x: number[];
  y: number[];
}) {
  return (
    <motion.div
      className={`absolute flex w-[150px] flex-col items-center gap-2.5 ${className}`}
      animate={{
        x,
        y,
        scale: [1, 1, 0.55, 0.3, 0.3, 1, 1],
        opacity: [1, 1, 0.9, 0, 0, 1, 1],
      }}
      transition={nodeTransition}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-[0_10px_26px_-8px_rgba(15,23,42,0.15)]">
        {icon}
      </div>
      <div className="font-lexend text-[15px] font-bold text-slate-900">
        {label}
      </div>
    </motion.div>
  );
}

function AlignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[30px] w-[30px]">
      <rect x="4" y="5" width="16" height="4" rx="1.3" />
      <rect x="4" y="11" width="16" height="4" rx="1.3" />
      <rect x="4" y="17" width="10" height="4" rx="1.3" />
    </svg>
  );
}

function AspireIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[30px] w-[30px]">
      <path d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2z" />
    </svg>
  );
}

function AchieveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-[30px] w-[30px]">
      <path d="M8 21h8M12 17v4" />
      <path d="M7 4h10v5a5 5 0 01-10 0V4z" />
      <path d="M7 6H4a1 1 0 00-1 1c0 3 2 5 4 5.3M17 6h3a1 1 0 011 1c0 3-2 5-4 5.3" />
    </svg>
  );
}

export default function AspireAlignAchieve() {
  return (
    <div className="mx-auto w-full max-w-[760px] rounded-[28px] border border-slate-100 bg-white p-2 shadow-[0_30px_60px_-18px_rgba(6,104,225,0.25)]">
      <div className="relative h-[460px] w-full overflow-hidden rounded-[22px] bg-[radial-gradient(ellipse_at_50%_30%,#EAF2FE,white_65%)]">
        {/* faint triangle guide lines */}
        <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 700 460">
          <line x1="350" y1="70" x2="140" y2="360" stroke="#0668E1" strokeWidth={1.5} strokeDasharray="4 6" />
          <line x1="350" y1="70" x2="560" y2="360" stroke="#0668E1" strokeWidth={1.5} strokeDasharray="4 6" />
          <line x1="140" y1="360" x2="560" y2="360" stroke="#0668E1" strokeWidth={1.5} strokeDasharray="4 6" />
        </svg>

        {/* pulse rings behind the merged mark */}
        {[0, 0.35].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 -ml-[90px] -mt-[90px] h-[180px] w-[180px] rounded-full border border-primary/30"
            animate={{
              opacity: [0, 0, 0.8, 0, 0],
              scale: [0.6, 0.6, 0.85, 1.5, 0.6],
            }}
            transition={{
              duration: DURATION,
              repeat: Infinity,
              ease: EASE,
              times: [0, 0.44, 0.5, 0.7, 1],
              delay,
            }}
          />
        ))}

        {/* three corner nodes */}
        <CornerNode
          className="left-1/2 top-[26px] -ml-[75px]"
          label="Align"
          x={[0, 0, 0, 0, 0, 0, 0]}
          y={[0, 0, 164, 164, 164, 0, 0]}
          icon={<AlignIcon />}
        />
        <CornerNode
          className="bottom-[60px] left-[8%]"
          label="Aspire"
          x={[0, 0, 190, 190, 190, 0, 0]}
          y={[0, 0, -118, -118, -118, 0, 0]}
          icon={<AspireIcon />}
        />
        <CornerNode
          className="bottom-[60px] right-[8%]"
          label="Achieve"
          x={[0, 0, -190, -190, -190, 0, 0]}
          y={[0, 0, -118, -118, -118, 0, 0]}
          icon={<AchieveIcon />}
        />

        {/* merged AAA mark */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 flex-col items-center gap-3.5"
          animate={{
            opacity: [0, 0, 1, 1, 0, 0],
            scale: [0.6, 0.6, 1, 1, 0.6, 0.6],
            y: ["-46%", "-46%", "-56%", "-56%", "-46%", "-46%"],
          }}
          transition={{
            duration: DURATION,
            repeat: Infinity,
            ease: EASE,
            times: [0, 0.4, 0.5, 0.78, 0.88, 1],
          }}
        >
          <svg viewBox="0 0 200 170" className="h-[110px] w-[130px] drop-shadow-[0_14px_26px_rgba(6,104,225,0.35)]">
            <path d="M85 10 L20 155 L58 155 L100 45 L142 155 L180 155 Z" fill="#043D85" />
            <path d="M100 25 L45 155 L80 155 L112 68 L144 155 L162 155 Z" fill="#0668E1" />
            <path d="M112 40 L70 155 L102 155 L124 92 L146 155 L165 155 Z" fill="#4C9BFF" />
          </svg>
          <div className="font-lexend flex items-center gap-2 text-[22px] font-extrabold text-slate-900">
            <span className="text-primary">AAA</span>
            <span>in Action</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}