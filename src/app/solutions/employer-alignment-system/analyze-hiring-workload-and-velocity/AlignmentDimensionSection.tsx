const alignmentDimensions = [
  {
    title: "Position Load (P)",
    icon:"/solutions/employer/position-load-icon.svg",
    descriptions: [
      "Hiring Demand pressure.",
      "Number of active positions.",
    ],
  },
  {
    title: "Execution Intensity (S/P)",
    icon:"/solutions/employer/execution-intensity-icon.svg",
    descriptions: [
      "Execution efforts per position.",
      "Recruiter Capacity allocation.",
    ],
  },
  {
    title: "Commitment Rate (Oa/Or)",
    icon:"/solutions/employer/commitment-rate-icon.svg",
    descriptions: [
      "Offer acceptance alignment.",
      "Conversion reliability.",
    ],
  },
  {
    title: "Hiring Velocity (J/P)",
    icon:"/solutions/employer/hiring-velocity-icon.svg",
    descriptions: [
      "Joiners per active position.",
      "Hiring throughput capacity.",
    ],
  },
];

const explanationPoints = [
  "Why misalignment emerges.",
  "Where it accumulates.",
  "How to restore alignment.",
];



export default function AlignmentDimensionsSection() {
  return (
    <div className="mx-auto space-y-sm">
      {/* Top Box */}
      <div className="w-full rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
        <h3 className="text-base font-bold text-[#1B1C17]">
          The four Alignment Dimensions
        </h3>

        {/* 4 Columns */}
        <div className="mt-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-md">
          {alignmentDimensions.map((item, index) => (
            <div key={index} className=" flex gap-sm md:flex-col">
              <img src={item.icon} alt={`${item.title} icon`} className="size-iconsize-md" />
              <div className="space-y-xs">
              <p className="text-xl font-bold">
                {item.title}
              </p>
              {item.descriptions.map((description, descIndex) => (
                <p key={descIndex} className="text-xl font-medium ">
                  {description}
                </p>
              ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="mt-lg">
          <p className="text-base font-bold text-[#2C2C2C]">
            These four dimensions explain:
          </p>

          <div className="mt-md flex flex-col  text-xl gap-sm md:flex-row justify-between md:flex-wrap">
            {explanationPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-xs">
                <img
                    src="/icons/tick-gradient-icon.svg"
                    alt="tick icon"
                    className="mt-[0.5%] size-iconsize-sm p-[0.2%]"
                  />
                <span className="font-medium text-xl">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
}