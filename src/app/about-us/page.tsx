import React from "react";
import AlignmentWeakensSection from "./AlignmentWeaknesSection";
import AlignmentRestoreSection from "./AlignmentRestoreSection";
import WhatThisMeansSection from "./WhatThisMeanSection";
import OurGoal from "./OurGoal";
import AlignmentCards from "./AlginemntCard";

export const metadata = {
  title: "Bringing Clarity and Predictability to Hiring | Connect EC",
  description:
    "Connecting candidates, recruiters, and employers brings clarity, continuity, and predictability to the hiring journey. Restore hiring alignment with Connect EC.",
};

const Page = () => {
  return (
    <>
      <section className="relative ">
          <div className="py-[10%] md:py-[5%]">
            <section className="relative flex items-center justify-center py-[5%] px-[5%] bg-transparent">
              <div className="w-full flex flex-col gap-1 pb-14 lg:pb-0 items-center justify-center">
                <h1 className="mb-[0.5%] text-h1 font-extrabold text-[#0668E1]">
                  Connect EC
                </h1>
                <h3 className="mb-[2%] text-base font-bold text-center">
                  The Hiring Alignment System
                </h3>

                <p className="text-center text-base font-medium ">
                 Bringing visibility, continuity, and alignment across candidates, recruiters, and employers.
                </p>
              </div>
            </section>
          </div>
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <AlignmentCards />
            </section>
          </div>
          <div className="py-[5%] md:py-0">
            <section className="relative py-[5%] px-[5%] md:px-[7%] bg-transparent">
              <AlignmentWeakensSection />
            </section>
          </div>
        <div className="relative py-[10%] md:py-[5%] px-[5%] md:px-[7%]">
          <section>
            <AlignmentRestoreSection />
          </section>
        </div>

        <div className="py-[5%] md:py-0">
          <section className="relative py-[5%] px-[5%]">
            <WhatThisMeansSection />
          </section>
        </div>

        <div className="bg-[#F7FBFF] px-[5%] py-[10%] md:py-[5%]">
          <OurGoal/>
        </div>
      </section>
    </>
  );
};

export default Page;
