"use client";

import { motion } from "framer-motion";

function WithinIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-11 w-11"
      fill="none"
      aria-hidden="true"
    >
      {/* top person */}
      <circle
        cx="32"
        cy="15"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M25 24c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* left person */}
      <circle
        cx="15"
        cy="40"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8 49c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* right person */}
      <circle
        cx="49"
        cy="40"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M42 49c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* connecting lines */}
      <path
        d="M28 23 19 36M36 23l9 13"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* center heart */}
      <path
        d="M32 34.5c-1.8-2.3-6-1.1-4.8 2.2.8 2.1 4.8 4.8 4.8 4.8s4-2.7 4.8-4.8c1.2-3.3-3-4.5-4.8-2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AcrossIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-11 w-11"
      fill="none"
      aria-hidden="true"
    >
      {/* top person */}
      <circle
        cx="32"
        cy="14"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M25 23c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* left person */}
      <circle
        cx="15"
        cy="42"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8 51c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* right person */}
      <circle
        cx="49"
        cy="42"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M42 51c0-4 3-7 7-7s7 3 7 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* connections */}
      <path
        d="M28 22 19 38M36 22l9 16M20 42h24"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      {/* center blocks */}
      <path
        d="M29 31h6v6h-6z"
        fill="currentColor"
      />
    </svg>
  );
}

function IntelligenceIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-12 w-12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="
          M32 9
          C34 9 35 11 36 15
          C37 19 39 21 43 22
          C47 23 49 24 49 27
          C49 30 47 31 43 32
          C39 33 37 35 36 39
          C35 43 34 46 32 46
          C29 46 28 43 27 39
          C26 35 24 33 20 32
          C16 31 14 30 14 27
          C14 24 16 23 20 22
          C24 21 26 19 27 15
          C28 11 29 9 32 9Z
        "
        fill="currentColor"
      />

      {/* sparkle */}
      <path
        d="
          M47 10
          C48 10 48.5 11 49 13
          C49.5 14.5 50 15 52 15.5
          C50 16 49.5 16.5 49 18
          C48.5 20 48 20.5 47 20.5
          C46 20.5 45.5 20 45 18
          C44.5 16.5 44 16 42 15.5
          C44 15 44.5 14.5 45 13
          C45.5 11 46 10 47 10Z
        "
        fill="currentColor"
      />
    </svg>
  );
}

const cardTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function AlignmentContinuity() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto ">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2,
            
           }}

          transition={cardTransition}
        >
          <p className="text-xl font-bold uppercase text-[#0668E1]">
            HOW ALIGNMENT PRESERVES CONTINUITY
          </p>

          <h2 className=" text-h2 font-extrabold">
            Within. Across. Actively Sustained.
          </h2>

          <p className=" text-base font-medium">
            Alignment is the structural condition that enables behavioural
            continuity to remain coherent through change.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}

        <div className="mt-md grid gap-md lg:grid-cols-[1.42fr_1fr] lg:grid-rows-2">

          {/* =======================================================
              ALIGNMENT WITHIN
          ======================================================== */}

          <motion.article
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...cardTransition,
              delay: 0.08,
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0 },
            }}
            className="group min-h-[126px] rounded-md border border-[#D8E8FF] bg-white p-sm shadow-[0_8px_25px_rgba(30,100,180,0.05)] "
          >
            <div className="flex flex-col md:flex-row h-full items-start gap-xs">

              {/* Icon */}
              <div className="flex size-iconsize-lg shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#0668E1] ">
                <WithinIcon />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase tracking-[0.025em] text-[#0668E1]">
                  ALIGNMENT WITHIN
                </p>

                <h3 className="mt-xs text-h5 font-extrabold">
                  Head. Heart. Hand. In Harmony.
                </h3>

                <p className="mt-3 text-xl font-medium ">
                  Understanding, intention, and action remain coherent as
                  conditions change.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...cardTransition,
              delay: 0.12,
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.2 },
            }}
            className="md:hidden group md:min-h-[126px] rounded-md border border-[#D8E8FF] bg-white p-md shadow-[0_8px_25px_rgba(30,100,180,0.05)] "
          >
            <div className="flex flex-col md:flex-row h-full items-start gap-xs">

              {/* Icon */}
              <div className="flex size-iconsize-lg shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#0668E1]">
                <AcrossIcon />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase text-[#0668E1]">
                  ALIGNMENT ACROSS
                </p>

                <h3 className="text-base font-extrabold">
                  Candidates. Recruiters. Employers. In Sync.
                </h3>

                <p className="mt-3 text-xl font-medium">
                  Expectations, priorities, and actions remain coordinated
                  across hiring interactions.
                </p>
              </div>
            </div>
          </motion.article>

          {/* =======================================================
              ALIGNMENT INTELLIGENCE
          ======================================================== */}


          <motion.article
            initial={{ opacity: 0, y: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              ...cardTransition,
              delay: 0.16,
            }}
            className="row-span-2 flex  md:min-h-[270px] flex-col items-center justify-center rounded-md border border-[#D8E8FF] bg-white p-md text-center shadow-[0_8px_25px_rgba(30,100,180,0.05)]"
          >
            {/* Icon */}
            <div className="flex size-iconsize-2xl items-center justify-center rounded-full bg-[#EEF6FF] text-[#0668E1]">
              <IntelligenceIcon />
            </div>

            <p className="mt-sm text-xl font-extrabold uppercase tracking-[0.025em] text-[#0668E1]">
              ALIGNMENT INTELLIGENCE
            </p>

            <h3 className="mt-2 text-h5 font-extrabold ">
              Alignment Within. Alignment Across.
              <br />
              Actively Sustained.
            </h3>

            <p className="mt-4 text-xl font-medium">
              Recognizes shifts in alignment, evaluates coherence, and enables
              timely adaptation before continuity breaks.
            </p>
          </motion.article>

          {/* =======================================================
              ALIGNMENT ACROSS
          ======================================================== */}

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              ...cardTransition,
              delay: 0.12,
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.2 },
            }}
            className="hidden md:flex group md:min-h-[126px] rounded-md border border-[#D8E8FF] bg-white p-md shadow-[0_8px_25px_rgba(30,100,180,0.05)] "
          >
            <div className="flex flex-col md:flex-row h-full items-start gap-xs">

              {/* Icon */}
              <div className="flex size-iconsize-lg shrink-0 items-center justify-center rounded-full bg-[#EEF6FF] text-[#0668E1]">
                <AcrossIcon />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <p className="text-xl font-extrabold uppercase text-[#0668E1]">
                  ALIGNMENT ACROSS
                </p>

                <h3 className="text-base font-extrabold">
                  Candidates. Recruiters. Employers. In Sync.
                </h3>

                <p className="mt-3 text-xl font-medium">
                  Expectations, priorities, and actions remain coordinated
                  across hiring interactions.
                </p>
              </div>
            </div>
          </motion.article>
        </div>

        {/* =========================================================
            BOTTOM INSIGHT
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...cardTransition,
            delay: 0.2,
          }}
          className="mt-md rounded-md border border-[#A8D0FF] bg-[#EFF7FF] p-sm"
        >
          <p className="text-base font-extrabold text-[#0668E1]">
            Connect EC makes Alignment Within and Alignment Across visible and
            actionable.
          </p>

          <p className="mt-xs text-base font-medium text-[#0668E1]">
            It reveals emerging drift early—enabling intervention before
            continuity breaks and hiring outcomes fail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}