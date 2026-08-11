"use client";

import { FaArrowRight } from "react-icons/fa6";

const cardData = [
  {
    icon: "/home/icons/three-actors-icon.svg",
    title: "Three actors",
    items: ["Candidate", "Employer", "Recruiter"],
  },
  {
    icon: "/home/icons/three-dimensions-icon.svg",
    title: "Three Goals",
    items: ["Opportunity", "Talent", "Closure"],
  },
  {
    icon: "/home/icons/one-outcome-icon.svg",
    title: "Three Seams",
    items: ["Expectation","Direction","Execution"],
  },
];

export default function FlowCards() {
  const marqueeCards = [...cardData, ...cardData];

  return (
    <div className="w-full overflow-hidden md:overflow-visible px-[5%]">
      
      {/* Mobile Marquee */}
      <div className="flex w-max animate-marquee gap-lg md:hidden">
        {marqueeCards.map((card, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 basis-[27%]  pr-[2%]"
          >
            {/* Icon Box */}
            <div className="absolute left-[4%] top-1/2 flex size-[40px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm bg-[#0668E1] p-[1.5%] sm:rounded-[8px]">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="size-iconsize-lg"
              />
            </div>

            {/* Main Box */}
            <div className="ml-[5%] flex flex-col justify-center rounded-md bg-[#044AA0] py-sm pl-[10%] text-nowrap">
              <p className="mb-[2%] text-base font-bold text-white">
                {card.title}
              </p>

              <div className="flex items-center gap-xs  text-xl font-semibold text-white">
                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-xs "
                  >
                    <span className="text-xl font-medium">
                      {item}
                    </span>

                    {itemIndex !== card.items.length - 1 && (
                      <span>
                        <FaArrowRight />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-lg">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative"
          >
            {/* Icon Box */}
            <div className="absolute left-[4%] top-1/2 flex size-iconsize-xl -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[8px] bg-[#0668E1] p-[2.5%]">
              <img
                src={card.icon}
                alt={`${card.title} icon`}
                className="size-iconsize-lg"
              />
            </div>

            {/* Main Box */}
            <div className="ml-[5%] flex flex-col justify-center rounded-md bg-[#044AA0] py-[3%] pl-[10%] text-nowrap">
              <p className="mb-[2%] text-base font-bold text-white">
                {card.title}
              </p>

              <div className="flex items-center gap-xs text-lg font-semibold text-white">
                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center gap-xs"
                  >
                    <span className="text-lg font-medium">
                      {item}
                    </span>

                    {itemIndex !== card.items.length - 1 && (
                      <span>
                        <FaArrowRight />
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}