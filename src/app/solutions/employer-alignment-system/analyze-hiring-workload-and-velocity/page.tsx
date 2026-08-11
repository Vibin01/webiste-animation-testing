import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyExplorer from "./easyExplorer";
import AlignmentDimensionsSection from "./AlignmentDimensionSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyExplorer } from "@/data/EmployerSolutionPageData";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
  title:
        "Analyze Hiring Workload and Prevent Slowdowns | Connect EC",
      description:
        "Analyze hiring workload, team velocity, and recruitment slowdowns to optimize hiring performance with Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HeroInsightCardsSection data={easyExplorer.heroInsightCardsData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyExplorer />
        </section>
      </div>{" "}
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <AlignmentDimensionsSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyExplorer.comparisonCards} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <div className="flex justify-center items-center">
          <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
        </div>
      </div>
      <section className="py-[10%] relative md:py-[5%] px-[5%] ">
        <OutcomeHighlightSection data={easyExplorer.outcomeHighlightData} />
      </section>
    </section>
  );
};

export default page;
