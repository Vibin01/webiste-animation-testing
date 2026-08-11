import React from "react";
import OutcomeHighlightSection from "@/components/common/OutcomeHighlightSection";
import EasyEvaluatorSection from "./easyEvalutionSection";
import HiringCommunicationFlow from "./HiringCommunicationsection";
import SignalsSection from "./SiginalSection";
import HeroInsightCardsSection from "../../HeroInsightCardsSerction";
import { easyEvalutor } from "@/data/EmployerSolutionPageData";
import ComparisonCardSection from "../../ComparisonCardSection";

export const metadata =  {
      title:
        "Standardize Hiring Communication Across Teams | Connect EC",
      description:
        "Create consistent and efficient hiring communication processes across teams using Connect EC.",
    };

const page = () => {
  return (
    <section className="relative ">
      <div className="py-[10%] md:py-0">
        <section className="relative flex items-center justify-center py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HeroInsightCardsSection data={easyEvalutor.heroInsightCardsData} />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <EasyEvaluatorSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
          <HiringCommunicationFlow />
          <SignalsSection />
        </section>
      </div>
      <div className="py-[5%] md:py-0">
        <section className="relative pb-[5%] px-[5%] md:px-[7%] bg-transparent">
          <ComparisonCardSection data={easyEvalutor.comparisonCards} />
        </section>
      </div>
      <div className="py-[5%] md:py-0 flex justify-center items-center">
        <div className="w-full -mx-[8%]  border-t-2 border-[#0668E1]" />
      </div>
      <div className="py-[5%] md:py-0">
        <section className=" relative py-[5%] px-[5%] ">
          <OutcomeHighlightSection data={easyEvalutor.outcomeHighlightData} />
        </section>
      </div>
    </section>
  );
};

export default page;
