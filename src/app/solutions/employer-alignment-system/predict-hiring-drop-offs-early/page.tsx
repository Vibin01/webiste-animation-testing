import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyPredictorSection from "./EasyPredictorSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyPredictor } from "@/data/EmployerSolutionPageData";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
      title: "Predict Hiring Drop-Offs Early | Connect EC",
      description:
        "Detect hiring drop-offs early and take proactive actions to improve hiring outcomes with Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HeroInsightCardsSection data={easyPredictor.heroInsightCardsData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyPredictorSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyPredictor.comparisonCards} />
        </section>
      </div>

      <div className="py-[5%] md:py-0 flex justify-center items-center">
        <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyPredictor.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
