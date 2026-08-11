import React from "react";
import HiringAlignmentBreakSection from "./HiringAlignmentBreakSection";
import AlignmentSituationsSection from "./AlignmentSituationSection";

export const metadata = {
  title: "Hiring Alignment Assessment for Candidates, Recruiters, and Employers | Connect EC",
  description:
    "A hiring alignment assessment reveals how decisions shift across uncertainty, pressure, control, perception, and outcomes. Explore real hiring scenarios with Connect EC.",
};

const page = () => {
  return (
    <div className="px-[5%] mt-[5%]  md:mt-0">
      <div className="py-[10%] md:py-[5%]">
        <HiringAlignmentBreakSection />
      </div>
      <div className="pt-[5%]">
        <AlignmentSituationsSection />
      </div>
    </div>
  );
};

export default page;
