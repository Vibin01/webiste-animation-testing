import React from "react";
import EasyCalibrator from "./easyCalibrator";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyCalibrator } from "@/data/EmployerSolutionPageData";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
      title:
        "Improve Hiring Targets with Data-Driven Adjustments | Connect EC",
      description:
        "Achieve hiring targets faster with data-driven calibration and hiring optimization tools from Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <div>
          <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
            <HeroInsightCardsSection
              data={easyCalibrator.heroInsightCardsData}
            />
          </section>
        </div>
        </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyCalibrator />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyCalibrator.comparisonCards} />
        </section>
      </div>
      <div className="py-[10%] md:py-0 flex justify-center items-center">
        <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
      </div>
      <div className="py-[10%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyCalibrator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
