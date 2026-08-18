"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const withinRoles = [
  {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
  {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url:"/resources/alignment-test/register?mode=single&phase=uncertainty"
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function WithinAnimation() {
  return (
    <section className="relative w-full overflow-hidden py-[3%]">
      <div className="grid w-full grid-cols-3 px-[10%] ">
        {withinRoles.map((role) => (
          <WithinActor
            key={role.role}
            role={role}

          />
        ))}
      </div>
    </section>
  );
}

function WithinActor({
  role,
}: {
  role: {
    role: string;
    img: string;
    url:string;
  };
}) {
    const router=useRouter()

  return (
    <div onClick={()=>router.push(role.url)} className="cursor-pointer relative flex h-[200px] w-full flex-col items-center">

<div
  className="
    absolute
    left-1/2
    top-[155px]
    z-30
    flex
    -translate-x-1/2
    items-center
    justify-center
    gap-sm
    whitespace-nowrap
  "
>
  {/* =================================================
      HEAD
      1.0s → enters
      3.2s → immediately moves toward center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      x: -120,
    }}
    animate={{
      opacity: [
        0,  // 0s
        1,  // 1s
        1,  // 3.2s
        0,  // 4.6s
        0,  // 4.7s
      ],
      x: [
        -60, // start
        0,    // 1s
        0,    // 3.2s
        55,   // move toward Heart
        48,   // hide
      ],
    }}
    transition={{
        delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Head
  </motion.span>


  {/* =================================================
      HEART
      1.0s → enters from bottom
      3.2s → already at center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      y: 90,
    }}
    animate={{
      opacity: [
        0,
        1,
        1,
        0,
        0,
      ],
      y: [
        60,
        0,
        0,
        0,
        0,
      ],
    }}
    transition={{
        delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Heart
  </motion.span>


  {/* =================================================
      HAND
      1.0s → enters
      3.2s → immediately moves toward center
  ================================================= */}

  <motion.span
    initial={{
      opacity: 0,
      x: 120,
    }}
    animate={{
      opacity: [
        0,
        1,
        1,
        0,
        0,
      ],
      x: [
        70,  // start
        0,    // 1s
        0,    // 3.2s
        -55,  // move toward Heart
        -48,  // hide
      ],
    }}
    transition={{
       delay:1,
      duration: 3,
      times: [
        0,
        1 / 4,
        3.2 / 4,
        4.6 / 4,
        1,
      ],
      ease,
    }}
    className="
      text-base
      font-medium
      text-[#303030]
    "
  >
    Hand
  </motion.span>
</div>


<motion.div
  initial={{
    opacity: 0,
    scale: 0.5,
    y: 0,
  }}
  animate={{
    opacity: [
      0, // start
      1, // HHH visible
      1, // stay
      1, // after moving up
      0, // fade out
    ],

    scale: [
      0.5,
      1.15,
      1,
      1,
      0.7,
    ],

    y: [
      0,      // initial
      0,      // HHH appears
      0,      // stays
      -110,   // MOVE UP
      -110,   // stay at top while fading
    ],
  }}
  transition={{
    duration: 2.2,
    delay: 3.5,

    times: [
      0,      // 3.8s
      0.32,   // 4.5s
      0.55,   // 5.0s
      0.86,   // 5.7s
      1,      // 6.0s
    ],

    ease,
  }}
  className="
    pointer-events-none
    absolute
    left-1/2
    top-[155px]
    z-50
    -translate-x-1/2
    text-base
    font-extrabold
    tracking-tight
    text-[#0668E1]
  "
>
  HHH
</motion.div>
{/* =====================================================
    STEP 1
    AVATAR + ROLE

    0s     → Avatar appears
    0.3s   → Role appears
    0.8s   → Role fades/moves upward
    1.0s   → Head / Heart / Hand starts
===================================================== */}

<motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 1,
    delay: 0,
    ease,
  }}
  className="
    absolute
    left-1/2
    top-0
    z-20
    flex
    -translate-x-1/2
    flex-col
    items-center
  "
>
  {/* AVATAR */}

  <div
    className="
      flex
      size-[130px]
      items-center
      justify-center
      overflow-hidden
      rounded-full
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
  </div>

  {/* ROLE */}

  <motion.span
    initial={{
      opacity: 0,
      y: 15,
    }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [15, 0, 0, -25],
    }}
    transition={{
      duration: 2,
      times: [0, 0.9, 0.9, 1],
      ease,
    }}
    className="
      mt-3
      whitespace-nowrap
      text-h6
      font-extrabold
uppercase
      text-[#303030]
    "
  >
    {role.role}
  </motion.span>
</motion.div>
{/* =====================================================
    FINAL CIRCLE

    Clean circle.
    No avatar inside.
===================================================== */}

<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: [0, 0, 1, 1],
  }}
  transition={{
    duration: 1.6,
    delay: 4,
    times: [0, 0.35, 0.75, 1],
    ease,
  }}
  className="
    pointer-events-none
    
    left-1/2
    top-0
    z-40
    flex
    size-[130px]
    items-center
    justify-center
    rounded-full
    border-2
    border-[#0668E1]
    bg-white
    
  "
>

<div
  className="
    absolute
    left-1/2
    top-1/2
    size-[220px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-[#0668E1]/5
    blur-[30px]
  "
/>

  {/* =================================================
      IN HARMONY
  ================================================= */}

{/* =====================================================
    FINAL TEXT
    6s → 8s : In Harmony
    8s → 10s : Aligned
===================================================== */}

<div
  className="
    relative
    z-50
    flex
    flex-col
    items-center
    justify-center
    whitespace-nowrap
    text-center
  "
style={{
  backdropFilter: "blur(40px)",
  WebkitBackdropFilter: "blur(200px)",
}}
>
  {/* ROLE + IN HARMONY */}
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0.8, 1, 1, 0.8],
    }}
    transition={{
      duration: 9,
      delay: 5,
      times: [0, 0.2, 0.9, 1],
      ease,
    }}
    className="
      flex
      flex-col
      items-center
      text-center
      text-h5
      font-extrabold
      text-[#0668E1]
    "
  >
    <span>Harmony</span>
  </motion.div>


</div>
</motion.div>

    </div>
  );
}