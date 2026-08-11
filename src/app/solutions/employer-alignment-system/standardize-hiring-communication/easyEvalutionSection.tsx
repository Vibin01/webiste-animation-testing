"use client";

import Image from "next/image";

export default function EasyEvaluatorSection() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-md">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Easy Evaluator
        </h2>

        <p className="mt-sm text-base font-semibold">
          The Brand-Aligned Hiring Communication System
        </p>

        <p className="mt-sm text-xl font-medium ">
          Every hiring interaction shapes candidate perception and reflects organizational alignment.
        </p>

        <p className=" mt-sm text-xl font-medium ">
         Easy Evaluator ensures your organization communicates in one aligned voice across every hiring stage and recruiter interaction.
        </p>
      </div>

      {/* Content */}
      <div className="mt-sm grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-md   ">
        
        <img src="/solutions/employer/resume.svg" alt="ec-resume" className="w-full object-contain " />

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-md">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#D3E6FF] rounded-md p-md shadow-mobile-medium md:shadow-web-medium">
            <div className="w-full ">
              <Image
                src="/solutions/employer/system-structured.svg" // replace with your image
                alt="System Structured"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p className="mt-md font-semibold text-base">
              System-structured (Tier 1-Free)
            </p>

            <p className=" mt-sm text-xl font-medium ">
              Pre-defined hiring communication templates ensure consistent
              messaging across hiring stages.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#D3E6FF] rounded-md p-md shadow-mobile-medium md:shadow-web-medium">
            <div className="">
              <Image
                src="/solutions/employer/brand-aligned.svg" // replace with your image
                alt="Brand Aligned"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            <p className="mt-md font-semibold text-base">
              Brand-Aligned (Tier 2 & 3)
            </p>

            <p className=" mt-sm text-xl font-medium ">
              Organizations customize communication frameworks to reflect their
              brand voice, tone, and hiring philosophy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}