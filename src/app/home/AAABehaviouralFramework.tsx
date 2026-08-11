import React from "react";

type Mechanism = {
  number: string;
  title: string;
  description: string;
};

const mechanisms: Mechanism[] = [
  {
    number: "1",
    title: "Alignment Trigger",
    description: "Captures intent and participation.",
  },
  {
    number: "2",
    title: "Alignment Signal",
    description: "Transforms behaviour into measurable hiring insight.",
  },
  {
    number: "3",
    title: "Alignment Spectrum",
    description:
      "Makes engagement and commitment visible across the hiring system.",
  },
];

export default function AAABehaviouralFramework() {
  return (
    <section className="w-full rounded-lg border border-[#DEEDFF] bg-[#ffffff] p-md md:p-lg shadow-mobile-medium md:shadow-web-medium">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          The Alignment Engine Behind Seamless Yield
        </h2>

        <p className="mt-xs text-base font-medium">
          Connect EC’s proprietary{" "}
          <span className="font-bold">
            Alignment Architecture Approach (AAA)
          </span>{" "}
          governs interaction across the hiring dimensions:
        </p>
      </div>

      {/* Main Box */}
      <div className="mt-xl rounded-md border border-[#D3E6FF] bg-white p-md">
        <div className="grid gap-xl md:grid-cols-[0.4fr_1fr]">
          {/* Left Image */}
          <div className="flex items-center justify-center">
            <img
              src="/home/alignment-model-direction-execution-situation-in-hiring.svg"
              alt="Alignment Architecture Approach"
              className="w-full  object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="md:pl-sm">
            <h3 className="text-base font-bold text-[#1B1C17]">
              AAA restores alignment through three core behavioural mechanisms.
            </h3>

         <div className="relative mt-md space-y-xs">
  {mechanisms.map((item, index) => (
    <div key={item.number}>
      <div className="flex gap-sm">
        <div className="flex flex-col items-center">
        <div className="flex size-lg shrink-0 items-center justify-center rounded-full border border-[#0668E1] bg-white text-xl font-bold text-[#0668E1]">
          {item.number}
        </div>
          {index !== mechanisms.length - 1 && (
        <div className="  mt-xs flex flex-col items-center">
          <div className="h-2 w-2 rounded-full bg-[#0668E1]" />
          <div className="my-1 h-md border-l-2  border-dashed border-[#0668E1]" />
          <div className="h-2 w-2 rounded-full bg-[#0668E1]" />
        </div>
      )}
      </div>

        <div>
          <h4 className="text-xl font-bold text-[#0668E1]">
            {item.title}
          </h4>

          <p className="mt-1 text-xl font-medium ">
            {item.description}
          </p>
        </div>
      </div>

    
    
    </div>
  ))}
</div>
            <p className="mt-md text-xl font-medium text-[#1B1C17]">
              Together, these mechanisms govern participation, feedback, and
              commitment across the hiring journey.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="mt-lg flex  md:items-center gap-md rounded-md border border-[#DEEDFF] bg-[#EEF6FF] p-md">
          <img
            src="/home/icons/AAA-shield-check-icon.svg"
            alt="Shield"
            className="size-[clamp(30px,calc(60/1280*100vw),120px)] "
          />

        <div>
          <h4 className="text-base font-bold text-[#0668E1]">
            AAA restores alignment across every seam of the hiring system.
          </h4>

          <p className="mt-1 text-xl font-medium text-[#0668E1]">
            When intent, behaviour and commitment align, interviews move,
            feedback flows and offers convert.
          </p>
        </div>
      </div>
    </section>
  );
}