"use client";

import { LiaQuestionSolid } from "react-icons/lia";


interface BannerSectionProps {
  data: {
    cards: {
      text: string;
    }[];
  };
}


export default function BannerSection({data}:BannerSectionProps) {

  const marqueeCards = [...data.cards, ...data.cards];

  return (
    <section className="px-[8%] py-[4%]">
      <div className="  mx-auto text-center">
       
        {/* Mobile Marquee */}
             <div className="flex w-max animate-marquee gap-lg md:hidden">
               {marqueeCards.map((card, index) => (
                 <div key={index} className=" relative flex-shrink-0 basis-[12%] ml-5  bg-[#044AA0] text-white py-md pl-xl pr-sm rounded-md
           shadow-mobile-small md:shadow-web-small
            text-left">
            <p className="text-xl font-medium">
              {card.text}
            </p>

            {/* Icon */}
            <div className="absolute -left-[5%] md:-left-[7%] top-1/2 -translate-y-1/2 bg-[#0668E1] p-xs rounded-sm">
              <img src={"/icons/banner-question-icon.svg"} alt="qustion-icon" className="text-white size-iconsize-md p-[1%]" />
            </div>
          </div> 
               ))}
             </div>

        {/* Content */}
        <div className=" hidden overflow-x-scroll md:overflow-visible scrollbar-hidden w-full px-[7%] py-xl md:py-0  sm:px-0 md:flex items-center justify-between gap-[8%] sm:gap-[3%]">
          
          {data.cards.map((card, index) => (
          <div key={index} className="w-[90%]  md:w-[31%] relative flex-shrink-0 basis-[85%] sm:basis-[50%] md:basis-auto  bg-[#044AA0] text-white py-md pl-xl md:pl-[5%] ml-[4%] md:ml-0 pr-sm rounded-md
           shadow-mobile-small md:shadow-web-small
            text-left">
            <p className="text-xl font-medium">
              {card.text}
            </p>

            {/* Icon */}
            <div className="absolute -left-[5%] md:-left-[7%] top-1/2 -translate-y-1/2 bg-[#0668E1] p-xs rounded-sm">
              <img src={"/icons/banner-question-icon.svg"} alt="qustion-icon" className="text-white size-iconsize-md p-[1%]" />
            </div>
          </div> 
          ))}
        </div>
      </div>
    </section>
  );
}