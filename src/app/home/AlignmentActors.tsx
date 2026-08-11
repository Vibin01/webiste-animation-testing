"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ============================================================
// TYPES
// ============================================================

type Actor = {
  id: string;
  role: string;
  title: string;
  keywords: string;
  description: string;
  buttonText: string;
  avatar: string;
};

// ============================================================
// DATA
// ============================================================

const actors: Actor[] = [
  {
    id: "candidate",
    role: "Candidate",
    title: "Career Progress, Aligned",
    keywords: "Coordinate · Prepare · Learn · Decide",
    description:
      "Keep interviews, verified employer insights, feedback, and offer decisions connected across opportunities.",
    buttonText: "Explore Candidate Alignment",
    avatar: "/icons/candidate-round-icon.svg",
  },

  {
    id: "recruiter",
    role: "Recruiter",
    title: "Talent Acquisition, Aligned",
    keywords:
      "Coordinate · Anticipate · Evaluate · Engage",
    description:
      "Keep schedules, participation, feedback, and candidate commitment connected across every hiring stage.",
    buttonText: "Explore Recruiter Alignment",
    avatar: "/icons/recruiters-round-icon.svg",
  },

  {
    id: "employer",
    role: "Employer",
    title: "Hiring Strategy, Aligned",
    keywords:
      "Calibrate · Diagnose · Standardize · Protect",
    description:
      "Keep targets, execution signals, evaluations, and hiring transitions connected as business and market conditions change.",
    buttonText: "Explore Employer Alignment",
    avatar: "/icons/employer-round-icon.svg",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AlignmentActors() {
  return (
    <section className="w-full bg-white py-10">

      <div className="mx-auto w-full">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-7"
        >
          <h2
            className="
              text-h2
              font-extrabold
            "
          >
            ALIGNMENT FOR{" "}

            <span className="text-[#0668E1]">
              EVERY ACTOR
            </span>
          </h2>

          <p
            className="
              text-base

font-medium              "
          >
            The{" "}

            <span className="font-bold">
              Alignment Architecture
            </span>{" "}

            supports three distinct goals across the hiring ecosystem.
          </p>
        </motion.div>


        {/* ====================================================
            DESKTOP ANIMATION
        ==================================================== */}

        <div className="relative hidden md:block">

        

          <div
            className="
              grid
              grid-cols-3
              opacity-0
              pointer-events-none

            "
            aria-hidden="true"
          >
            {actors.map((actor) => (
              <div
                key={actor.id}
                className="min-h-[260px]"
              />
            ))}
          </div>


          {/* ==================================================
              ANIMATION STAGE
          ================================================== */}

          <div
            className="
              absolute
              inset-0
            "
          >

            {/* ==================================================
                RECRUITER
                BOTTOM → CENTER
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: "-50%",
                y: 180,
              }}
              whileInView={{
                opacity: 1,
                x: "-50%",
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-1/2
                top-0
                z-30
                w-[calc((100%-24px)/3)]
                gap-xl
              "
            >
              <AlignmentCard actor={actors[1]} />
            </motion.div>


            {/* ==================================================
                CANDIDATE
                CENTER → LEFT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: "-50%",
                y: 180,
              }}
              whileInView={{
                opacity: 1,
                x: "calc(-150% - 12px)",
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.5,
                delay: 1.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-1/2
                top-0
                z-20
                w-[calc((100%-24px)/3)]
                gap-xl
              "
            >
              <AlignmentCard actor={actors[0]} />
            </motion.div>


            {/* ==================================================
                EMPLOYER
                CENTER → RIGHT
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: "-50%",
                y: 180,
              }}
              whileInView={{
                opacity: 1,
                x: "calc(50% + 12px)",
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.5,
                delay: 1.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-1/2
                top-0
                z-20
                w-[calc((100%-24px)/3)]
                gap-xl
              "
            >
              <AlignmentCard actor={actors[2]} />
            </motion.div>

          </div>

        </div>


        {/* ====================================================
            MOBILE
        ==================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-xl
            md:hidden
          "
        >
          {actors.map((actor, index) => (
            <motion.div
              key={actor.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: index * 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <AlignmentCard actor={actor} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}


// ============================================================
// CARD
// ============================================================

function AlignmentCard({
  actor,
}: {
  actor: Actor;
}) {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={{
        rest: {
          y: 0,
        },

        hover: {
          y: -4,
        },
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        min-h-[260px]
        overflow-hidden
        rounded-[12px]
mt-lg
mx-1
        border
        border-[#dce9f8]
        bg-white


        transition-[box-shadow,border-color]
        duration-400

        hover:border-[#B2D0F6]
        hover:shadow-web-medium
      "
    >

      {/* ====================================================
          CARD CONTENT
      ==================================================== */}

      <div
        className="
          relative
          flex
          flex-col
          rounded-md
          bg-white
          p-md
        "
      >

        {/* ==================================================
            AVATAR
        ================================================== */}

        <div className="flex justify-center">

          <motion.div
            variants={{
              rest: {
                scale: 1,
              },

              hover: {
                scale: 1.15,
                
              },
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            
          >
            <img
              src={actor.avatar}
              alt={actor.role}
              className="
                size-iconsize-xl
              "
            />
          </motion.div>

        </div>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <div className="mt-md flex flex-col justify-center items-center">

          {/* TITLE */}

          <h3
            className="
              text-h6
              font-bold
              text-[#0668E1]
            "
          >
            {actor.title}
          </h3>


          {/* KEYWORDS */}

          <p
            className="
              
              text-xl
              font-bold
            "
          >
            {actor.keywords}
          </p>


          {/* DESCRIPTION */}

          <p
            className="
              mt-md
              text-xl
              font-medium
              text-center
            "
          >
            {actor.description}
          </p>

        </div>


        {/* ==================================================
            CTA
        ================================================== */}

        <div className="mt-auto pt-lg">

          <motion.button
      type="button"
      variants={{
        rest: {},
        hover: {},
      }}
      className="
        group-hover:border-[#0668E1]
        group-hover:border
        border
        border-[#DEEDFF]
        relative
        flex
        h-btn-h
        w-full
        items-center
        justify-center
        
        overflow-hidden
        rounded-[12px]
        bg-white
        text-xl
        font-bold
      "
    >
 


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.span
        variants={{
          rest: {
            color: "#222",
          },

          hover: {
            color: "#0668E1",
          },
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-sm
        "
      >
        <span>
          {actor.buttonText}
        </span>

        <motion.span
          variants={{
            rest: {
              x: 0,
            },

            hover: {
              x: 3,
            },
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ArrowRight
            size={17}
            strokeWidth={1.8}
          />
        </motion.span>
      </motion.span>
    </motion.button>

        </div>

      </div>
    </motion.article>
  );
}
