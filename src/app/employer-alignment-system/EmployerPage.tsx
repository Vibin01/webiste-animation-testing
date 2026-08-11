import { HeroTextContainerSection } from "@/components/common/HeroTextContainerSection";
import React from "react";
import {
  bannerSectionData,
  employerFaqs,
  HeroData,
  insightComparisonData,
  outcomeHighlightData,
  signalFlowData,
  workflowAlignmentSectionData,
} from "@/data/EmployerPageData";
import SignalFlowSection from "@/components/common/SignalFlowSection";
import BannerSection from "@/components/common/BannerSection";
import InsightComparisonSection from "@/components/common/InsightComparisonSection ";
import WorkflowAlignmentSection from "@/components/common/WorkflowAlignmentSection";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import FAQSection from "@/components/common/FAQSection";
import ECLoadingAnimation from "@/components/common/Animation/LoadingEcAnimation";

export const EmployerPage = () => {
  return (
    <>
      <section className="relative overflow-x-hidden ">
                  <div className="bg-[url('/background/bg-hero-candidate-section.svg')] bg-no-repeat bg-cover bg-center">

          <section className="relative flex items-center justify-center bg-transparent">
            <div className="mt-[5%] pt-[5%] pb-[15%] px-[5%]">
              <HeroTextContainerSection data={HeroData} />
              {/* <ECLoadingAnimation/> */}
            </div>
          </section>
        </div>
        <div className="">
          <section className=" relative pb-[5%] px-[5%]- md:px-[7%] bg-transparent">
            <SignalFlowSection data={signalFlowData} />
          </section>
        </div>
        <div className="">
          <section className="-mx-[10%] md:-mx-0">
            <BannerSection data={bannerSectionData} />
          </section>
        </div>
        <div className="">
          <section className="relative  py-[5%] px-[5%]">
            <InsightComparisonSection data={insightComparisonData} />
          </section>
        </div>
        <div className="">
          <section className="mt-[5%] md:mt-0 relative py-[5%] px-[5%] ">
            <WorkflowAlignmentSection data={workflowAlignmentSectionData} />
          </section>
        </div>
        <div className="relative mt-[5%] md:mt-0 py-[5%] px-[5%]">
          <OutcomeHighlightSection data={outcomeHighlightData} />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
        </div>
        <div className="relative mt-[5%] md:mt-0 py-[5%] px-[5%]">
          <FAQSection data={employerFaqs} />
        </div>
      </section>
    </>
  );
};
