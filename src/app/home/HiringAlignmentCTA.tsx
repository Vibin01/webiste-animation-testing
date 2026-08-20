"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

// ============================================================
// TYPES
// ============================================================

type ActorCard = {
  id: string;
  role: string;
  title: string;
  avatar: string;
};

// ============================================================
// DATA
// ============================================================

const actors: ActorCard[] = [
  {
    id: "candidate",
    role: "Candidate",
    title: "Career Progress",
    avatar: "/home/icons/hiring-target-icon.svg",
  },
  {
    id: "recruiter",
    role: "Recruiters",
    title: "Hiring Delivery",
    avatar: "/home/icons/successful-placements-icon.svg",
  },
  {
    id: "employer",
    role: "Employers",
    title: "Hiring Targets",
    avatar: "/home/icons/right-talent-icon.svg",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function HiringAlignmentCTA() {
  return (
    <section className="w-full py-[3]">
      <div
        className="
          relative
          mx-auto
          w-full
          
          overflow-hidden
          rounded-xl
          border
          border-[#5D9DF5]
        p-xl
        "
        style={{
          background:
            "linear-gradient(190.87deg, #0075FF 15.37%, #004BA6 84.69%)",
        }}
      >
        {/* ====================================================
            CONTENT
        ==================================================== */}

        <div
          className="
            flex
            flex-col
            gap-lg

            md:flex-row
            md:items-center
            md:justify-between
            md:gap-xl
          "
        >
          {/* ==================================================
              LEFT SIDE
          ================================================== */}

          <div className="min-w-0 ">
            {/* Actor cards */}

            <div
              className="
                grid
                grid-cols-1
                gap-md

                sm:grid-cols-3

              "
            >
              {actors.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </div>

            {/* ==================================================
                CTA AREA
            ================================================== */}

            <div className="mt-xl">
              <h3
                className="
                  text-base
                  font-bold
                  text-white
                "
              >
                Hiring Alignment Made EASY
              </h3>

       <div className="flex gap-md mt-md">
<motion.div
  className="
    relative
    flex
    h-btn-h
    w-[clamp(160px,calc(240_/_var(--width)*100vw),300px)]
    bg-transparent
    border-2
    border-[#FFFFFF]
    cursor-pointer
    rounded-md
    items-center
    justify-center
    shadow-web-mini
    overflow-hidden
    pl-sm
  "
  initial="rest"
  whileHover="hover"
  variants={{
    rest: {
      borderColor: "#FFFFFF",
    },
    hover: {
      borderColor: "#0668E1",
    },
  }}
  transition={{
    borderColor: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
>
  {/* Blue background */}
  <motion.div
    className="
      absolute
      inset-0
      bg-[#0668E1]
      z-0
      origin-left
    "
    variants={{
      rest: {
        scaleX: 0,
      },
      hover: {
        scaleX: 1,
      },
    }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
  />

  {/* Content */}
  <motion.div
    className="
      relative
      z-10
      flex
      items-center
      justify-center
      gap-sm
      
    "
  >
    {/* Text */}
    <span className="font-bold text-xl text-white">
      Begins Within
    </span>

    {/* Arrow */}
    <motion.div
      variants={{
        rest: {
          opacity: 0,
          x: -10,
        },
        hover: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <FaArrowRight className="text-white size-iconsize-sm scale-90" />
    </motion.div>
  </motion.div>
</motion.div>
<motion.div
  className="
    relative
    flex
    h-btn-h
    w-[clamp(160px,calc(240_/_var(--width)*100vw),300px)]
    bg-transparent
    border-2
    border-[#FFFFFF]
    cursor-pointer
    rounded-md
    items-center
    justify-center
    shadow-web-mini
    overflow-hidden
    pl-sm
  "
  initial="rest"
  whileHover="hover"
  variants={{
    rest: {
      borderColor: "#FFFFFF",
    },
    hover: {
      borderColor: "#0668E1",
    },
  }}
  transition={{
    borderColor: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
>
  {/* Blue background */}
  <motion.div
    className="
      absolute
      inset-0
      bg-[#0668E1]
      z-0
      origin-left
    "
    variants={{
      rest: {
        scaleX: 0,
      },
      hover: {
        scaleX: 1,
      },
    }}
    transition={{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    }}
  />

  {/* Content */}
  <motion.div
    className="
      relative
      z-10
      flex
      items-center
      justify-center
      gap-sm
    "
  >
    {/* Text */}
    <span className="font-bold text-xl text-white">
      Continues Across
    </span>

    {/* Arrow */}
    <motion.div
      variants={{
        rest: {
          opacity: 0,
          x: -10,
        },
        hover: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{
        duration: 0.4,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <FaArrowRight className="text-white size-iconsize-sm scale-90" />
    </motion.div>
  </motion.div>
</motion.div>
</div>
            </div>
          </div>

          {/* ==================================================
              RIGHT PHONE
          ================================================== */}

          <PhonePreview />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ACTOR CARD
// ============================================================

function ActorCard({ actor }: { actor: ActorCard }) {
  return (
    <article
      className="
        flex
        min-h-[152px]
        flex-col
        items-start
        rounded-md
        bg-white
        p-md

        shadow-web-mini

        transition-all
        duration-300

        
        hover:shadow-web-small
      "
    >
      {/* Avatar */}

      <Image
        src={actor.avatar}
        alt={actor.role}
        width={52}
        height={52}
        className="size-iconsize-lg object-cover"
      />

      {/* Role */}

      <h3
        className="
          mt-xs
          text-xl
          font-medium
        "
      >
        {actor.role}
      </h3>

      {/* Title */}

      <p
        className="
        
          text-base
          font-bold
          text-[#0668E1]
        "
      >
        {actor.title}
      </p>
    </article>
  );
}

// ============================================================
// PHONE PREVIEW
// ============================================================

function PhonePreview() {
  return (
    <div>
      <Image
        src="/home/hiring-banner.svg"
        alt="Connect EC mobile application"
        height={200}
        width={200}
        className="h-auto sm:h-full w-full sm:w-auto"
      />
    </div>
  );
}
