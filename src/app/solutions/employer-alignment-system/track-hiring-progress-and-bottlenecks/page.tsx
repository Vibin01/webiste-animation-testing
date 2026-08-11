import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyRoleTrackerSection from "./easyRoleTrackerSection";
import RoleStorySection from "./RoleStorySection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyRoleTracker } from "@/data/EmployerSolutionPageData";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
    title:
        "Track Hiring Progress and Fix Pipeline Bottlenecks | Connect EC",
      description:
        "Monitor hiring progress, identify bottlenecks, and improve recruitment efficiency with Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <section className="relative flex items-center justify-center py-[15%] md:py-[5%] px-[5%] md:px-[7%] bg-transparent">
        <HeroInsightCardsSection data={easyRoleTracker.heroInsightCardsData} />
      </section>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyRoleTrackerSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <RoleStorySection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyRoleTracker.comparisonCards} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <div className="flex justify-center items-center">
          <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
        </div>
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection
            data={easyRoleTracker.outcomeHighlightData}
          />
        </section>
      </div>
    </section>
  );
};

export default page;
