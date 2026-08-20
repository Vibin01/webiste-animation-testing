"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AlignmentHero() {
  return (
    <section className="relative w-full   ">
      <div className="mx-auto flex items-center justify-between">
        
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 w-full  flex flex-col pt-[5%] "
        >
          {/* Small Title */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className=" text-[16px] font-bold tracking-wide text-[#1E5798]"
          >
            Situations Change
          </motion.p>

          {/* Heading */}
          <h1 className="text-[clamp(38px,4vw,58px)] font-extrabold leading-tight text-[#292D2F]">
            What Happens to
            <br />

            <span className="text-[#2761A8]">
              Your Alignment?
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4  text-[16px] text-[#41464A]"
          >
            See how your{" "}
            <span className="font-bold">Head, Heart, and Hand</span>{" "}
            work together across changing
            <br className="hidden xl:block" />
            hiring situations — and discover the Alignment Mode that emerges.
          </motion.p>

          {/* Meta */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
            className="mt-2 text-[15px] font-medium tracking-wide text-[#666B70]"
          >
            15 situations · 5 conditions · 5 minutes
          </motion.p>

          {/* Button */}
          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              mt-6
              flex
              h-[46px]
              min-w-[250px]
              items-center
              justify-between
              rounded-[10px]
              bg-[#2165B5]
              px-5
              text-[14px]
              font-bold
              text-white
              shadow-[0_5px_12px_rgba(33,101,181,0.25)]
              transition-colors
              hover:bg-[#0668E1]
            "
          >
            <span>Take the Full Alignment Test</span>

            <motion.span
              className="flex"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <ArrowRight
                size={19}
                strokeWidth={2}
              />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
      <motion.div
  initial={{
    opacity: 0,
    scale: 0.9,
    x: 50,
  }}
  animate={{
    opacity: 1,
    scale: 1,
    x: 0,
  }}
  transition={{
    duration: 1,
    delay: 0.3,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    relative
    w-full
    scale-120
    
  "
>
  <Image
    src="/resources/alignment-test/alignment-hero.svg"
    alt="Professional woman using a tablet"
    height={1000}
width={1000}
    priority
    className="object-cover"
  />
</motion.div>
      </div>
    </section>
  );
}