const roleStories = [
  {
    title: "Active Role",
    points: [
      "No intervention required",
      "Signals confirm steady forward progress",
      "Hiring flows without friction buildup, seamlessly executed",
    ],
  },
  {
    title: "Stalled role",
    points: [
      "Early intervention recommended",
      "Delays quietly build across stages",
      "Progress requires timely intervention before momentum deteriorates further.",
    ],
  },
  {
    title: "Critical Role",
    points: [
      "Immediate intervention required",
      "Signals demand immediate intervention to restore hiring momentum.",
      "Hiring outcome is now at risk",
    ],
  },
];

export default function RoleStorySection() {
  return (
    <div className="w-full ">
      <div className="mx-auto">
        {/* Title */}
        <h2 className="text-center text-h2 font-extrabold text-[#1B1C17]">
          Every Role tells a story.
        </h2>

        {/* Cards */}
        <div className="mt-xl grid grid-cols-1 gap-md md:grid-cols-3">
          {roleStories.map((role, index) => (
            <div
              key={index}
              className="rounded-md border-l-8 border-[#0668E1] bg-[#E6F0FC] p-[5%] relative"
            >
          
              {/* Title */}
              <h3 className="text-base font-bold text-[#0668E1]">
                {role.title}
              </h3>

              {/* Divider */}
              <div className="mt-2 h-[1px] w-full bg-[#BFD4F3]" />

              {/* Points */}
              <ul className="list-disc list-outside pl-5 mt-4 space-y-3 text-xl font-medium text-[#2C2C2C]">
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-xl text-center">
          <p className="text-base font-medium text-[#2C2C2C]">
            Easy Role Tracker transforms role activity into
            <span className="font-bold md:block">
              {" "}
              visible momentum signals.
            </span>
            that reveal where intervention is needed.
          </p>

          {/* Arrow */}
          <div className="mt-4 flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6F0FC]">
              <img
                src="/icons/arrow-step-blue-icon.svg"
                alt="arrow icon"
                className="size-iconsize-sm p-[0.1%]"
              />
            </div>
          </div>

          <p className="mt-4 text-base font-medium text-[#2C2C2C]">
            Hiring moves from unclear queues to 
            <span className="font-bold md:block"> timely intervention and sustained momentum.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
