"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const withinRoles = [
  {
    role: "Candidate",
    img: "/icons/candidate-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },
  {
    role: "Recruiter",
    img: "/icons/recruiters-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },
  {
    role: "Employer",
    img: "/icons/employer-round-icon.svg",
    url:"https://employer.connectec.app/login"
  },
];

export const DemoAcross = () => {
  return (
    <section className="relative w-full overflow-hidden py-[3%]">
      <div className="grid w-full grid-cols-3 px-[10%]">
        {withinRoles.map((role, index) => (
          <WithinActor
            key={role.role}
            role={role}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

function WithinActor({
  role,
  index,
}: {
  role: {
    role: string;
    img: string;
    url:string;
  };
  index: number;
}) {
    const router=useRouter();
  return (
    <div onClick={()=>router.push(role.url)} className="relative flex h-[200px] w-full flex-col items-center">

      {/* =====================================================
          TWO DASH LINES
          Only between the circles
      ===================================================== */}

    {/* =====================================================
    TWO DASH LINES
    FULL DISTANCE BETWEEN CIRCLES
===================================================== */}

{index < 2 && (
  <div
    className="
      pointer-events-none
      absolute
      left-[calc(50%+75px)]
      top-0
      z-20
      h-[130px]
      w-[calc(100%-150px)]
    "
  >


{/* =====================================================
    CONNECTION AREA
===================================================== */}

{index < 2 && (
  <div
    className="
      pointer-events-none
      absolute
      -left-[5%]
      -right-[5%]
      top-0
      h-[130px]
      overflow-hidden
      z-20
    "
  >

    {/* =================================================
        TOP LINE
        LEFT → RIGHT
    ================================================= */}

    <motion.div
      className="
        absolute
        left-0
        top-[30%]
        flex
        w-[15%]
        gap-[20%]
      "
      initial={{
        x: "-100%",
      }}
      animate={{
        x: [
          "-100%",
          "0%",
          "900%",
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: "linear",
        times: [
          0,
          0.08,
          1,
        ],
      }}
    >
      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />

      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />
    </motion.div>


    {/* =================================================
        BOTTOM LINE
        RIGHT → LEFT
    ================================================= */}

    <motion.div
      className="
        absolute
        right-0
        top-[66%]
        flex
        w-[15%]
        gap-[20%]
      "
      initial={{
        x: "100%",
      }}
      animate={{
        x: [
          "100%",
          "0%",
          "-900%",
        ],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.2,
        ease: "linear",
        times: [
          0,
          0.08,
          1,
        ],
      }}
    >
      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />

      <span
        className="
          block
          h-1
          w-[40%]
          shrink-0
          rounded-full
          bg-[#0668E1]
        "
      />
    </motion.div>

  </div>
)}
  </div>
)}

      {/* =====================================================
          CIRCLE
      ===================================================== */}

      <motion.div
       
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-40
          flex
          size-[130px]
          -translate-x-1/2
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
    -translate-y-1/3
    rounded-full
    bg-[#0668E1]/5
    blur-[30px]
  "
/>
        {/* =================================================
            TEXT
        ================================================= */}
<motion.div
  className="
    relative
    z-50
    flex
    flex-col
    items-center
    justify-center
    whitespace-nowrap
    text-center
    text-h5
    font-extrabold
    text-[#0668E1]
  "
>
  {/* Initial text */}
  <motion.span
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{
      duration: 0.4,
      delay: 1.5,
      ease,
    }}
  >
    Harmony
  </motion.span>

  {/* Aligned text */}
  <motion.span
    className="absolute"
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 0.7,
      delay: 1.5,
      ease,
    }}
  >
    Aligned
  </motion.span>
</motion.div>
      </motion.div>

    </div>
  );
}