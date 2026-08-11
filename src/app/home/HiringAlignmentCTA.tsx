"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AppLinkButton } from "@/components/common/Button/AppLinkButton";


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
    avatar: "/icons/candidate-round-icon.svg",
  },
  {
    id: "recruiter",
    role: "Recruiters",
    title: "Hiring Delivery",
    avatar: "/icons/recruiters-round-icon.svg",
  },
  {
    id: "employer",
    role: "Employers",
    title: "Hiring Targets",
    avatar: "/icons/employer-round-icon.svg",
  },
];


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function HiringAlignmentCTA() {
  return (
    <section className="w-full py-8">

      <div
        className="
          relative
          mx-auto
          w-full
          
          overflow-hidden
          rounded-xl
          border
          border-[#5D9DF5]
          bg-[#F5F9FF]
        p-xl
        "
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
                <ActorCard
                  key={actor.id}
                  actor={actor}
                />
              ))}
            </div>


            {/* ==================================================
                CTA AREA
            ================================================== */}

            <div className="mt-xl">

              <h3
                className="
                  text-h5
                  font-bold
                  
                "
              >
                Hiring Alignment Made EASY
              </h3>


<div className="w-fit mt-md">
            <AppLinkButton text="Unlock Connect EC for Free" url="https://play.google.com/store/apps/details?id=com.primethic.connectec" />
            
            </div></div>

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

function ActorCard({
  actor,
}: {
  actor: ActorCard;
}) {
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

        hover:-translate-y-[3px]
        hover:shadow-web-small
      "
    >

      {/* Avatar */}

      
        <Image
          src={actor.avatar}
          alt={actor.role}
          width={52}
          height={52}
          className="size-iconsize-2xl object-cover"
        />


      {/* Role */}

      <h3
        className="
          mt-sm
          text-base
          font-bold
        "
      >
        {actor.role}
      </h3>


      {/* Title */}

      <p
        className="
        
          text-h5
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
    <div
      
      
    >


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