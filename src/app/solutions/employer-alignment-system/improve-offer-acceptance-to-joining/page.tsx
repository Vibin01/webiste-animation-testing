import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyFacilitatorSection from "./easyFacilitatorSection";
import CandidateEngagementFlow from "./CandidateEngagementFlow";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyFacilitator } from "@/data/EmployerSolutionPageData";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata = {
  title:
        "Improve Offer Acceptance to Joining and Reduce Dropouts | Connect EC",
      description:
        "Increase offer acceptance-to-joining rates and reduce hiring dropouts using Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HeroInsightCardsSection
            data={easyFacilitator.heroInsightCardsData}
          />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" py-[7%] px-[5%] md:px-[7%] bg-transparent">
          <EasyFacilitatorSection />
          <CandidateEngagementFlow />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyFacilitator.comparisonCards} />
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
            data={easyFacilitator.outcomeHighlightData}
          />
        </section>
      </div>
    </section>
  );
};

export default page;
