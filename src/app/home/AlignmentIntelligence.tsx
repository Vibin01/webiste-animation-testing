"use client";

import {
  Lock,
  Sparkles,
  BarChart3,
  Rocket,
  HandCoins,
  PartyPopper,
  ChevronRight,
} from "lucide-react";

const topCards = [
  {
    icon: "/home/icons/expectation-icon.svg",
    title: "Expectation",
    description: "becomes visible.",
  },
  {
    icon: "/home/icons/direction-icon.svg",
    title: "Direction",
    description: "becomes informed.",
  },
  {
    icon: "/home/icons/execution-icon.svg",
    title: "Execution",
    description: "becomes coordinated.",
  },
];

const resultCards = [
  {
    icon: "/home/icons/momentum-icon.svg",
    title: "Momentum",
    description: "strengthens.",
  },
  {
    icon: "/home/icons/outcomes-icon.svg",
    title: "Outcomes",
    description: "compound.",
  },
  {
    icon: "/home/icons/seamless-yield-icon.svg",
    title: "Seamless Yield",
    description: "emerges.",
  },
];

export default function AlignmentIntelligence() {
  return (
    <section className="py-xl">
      <div className=" mx-auto  ">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-h2 font-extrabold">
            Alignment Intelligence
          </h2>

          <p className="mt-xs text-base font-medium px-[10%]">
            Alignment Intelligence emerges as alignment strengthens within
            every actor and across every seam, enabling the system to develop
            intelligent capabilities.
          </p>
        </div>

        {/* Top Section */}
        <div className="mt-xl grid gap-xl md:grid-cols-3">
          {topCards.map((item, index) => {

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                  <img src={item.icon} alt={item.title} className="size-[45px] sm:size-iconsize-2xl"/>

                <h3 className="mt-sm text-base font-bold">
                  {item.title}
                </h3>

                <p className="mt-1 text-xl font-medium">
                  {item.description.split(" ")[0]}{" "}
                  <span className="font-bold text-[#0668E1]">
                    {item.description.split(" ").slice(1).join(" ")}
                  </span>
                </p>

                <button className="mt-md p-[0.5%] md:p-1.5 flex rotate-90 sm:rotate-0  items-center justify-center rounded-full bg-[#0668E1] text-white transition hover:scale-110">
                  <ChevronRight className="size-iconsize-sm md:scale-105" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="relative mt-xl flex items-center">
          <div className="h-px flex-1 bg-[#B2D0F6]" />
          <span className=" px-md text-h5 font-bold text-[#0668E1]">
            The Result
          </span>
          <div className="h-px flex-1 bg-[#B2D0F6]" />
        </div>

        {/* Result Cards */}
        <div className="mt-xl grid gap-xl md:grid-cols-3">
          {resultCards.map((item, index) => {

            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center group rounded-lg bg-[#0668E1] p-xl text-center text-white shadow-mobile-small md:shadow-web-small transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <img 
                src={item.icon}
                alt={item.title}
                  
                  className={`${index !== resultCards.length - 1 ?" size-iconsize-lg":"size-iconsize-[clamp(30px,_calc(60_/_var(--width)_*_100vw),_100px)] "} mx-auto mb-5 transition-transform duration-300 group-hover:scale-110`}
                />

                <h3 className="text-base font-bold">{item.title}</h3>

                <p className="mt-2 font-medium text-xl text-white">{item.description}</p>
{index !== resultCards.length - 1 && (
                <button className="mx-auto mt-md p-[1%] md:p-1.5 rotate-90 sm:rotate-0 flex  items-center justify-center rounded-full bg-white text-[#0668E1] transition hover:scale-110">

                  <ChevronRight className="size-iconsize-sm md:scale-105"/>
                </button>
)}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}