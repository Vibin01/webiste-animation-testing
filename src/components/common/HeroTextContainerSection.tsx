import Link from "next/link";
import React, { JSX } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { AppLinkButton } from "./Button/AppLinkButton";

interface HeroTextContainerSectionProps {
  data: {
    title: string;
    sub_title: string;
    description: string;
    button_text: string;
    button_link: string;
   
  };
}


export const HeroTextContainerSection =  ({
  data,
}: HeroTextContainerSectionProps) => {
  return (
    <>
      <div className="mt-[10%] md:mt-0 w-full flex flex-col pb-[5%] lg:pb-0 items-center justify-center">
          <h1 className="text-h1 font-extrabold text-[#0668E1]">
         {data.title}

        </h1>
        <h2 className="mb-md text-h2 font-extrabold text-center">
          {data.sub_title}

        </h2>
      
        <p className="mb-sm text-center text-h6 font-bold">
          <span className="font-medium">{data.description} </span>
          
        </p>
        <AppLinkButton url={data.button_link} text={data.button_text} />
      </div>
    </>
  );
};
