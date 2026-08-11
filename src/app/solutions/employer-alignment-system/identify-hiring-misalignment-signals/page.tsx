import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyNavigatorSection from "./EasyNavigatorSection";
import MisalignmentSignalsCard from "./MisalignmentSignalSection";
import { easyNavigator } from "@/data/EmployerSolutionPageData";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
    title:
        "Identify Hiring Misalignment and Fix Declines | Connect EC",
      description:
        "Detect hiring misalignment signals and reduce offer declines with actionable insights from Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HeroInsightCardsSection data={easyNavigator.heroInsightCardsData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyNavigatorSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <MisalignmentSignalsCard />
          <div className="mt-md">
            <ComparisonCardSection data={easyNavigator.comparisonCards} />
          </div>
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <div className="flex justify-center items-center">
          <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
        </div>
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyNavigator.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
