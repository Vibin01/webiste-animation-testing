const goals = [
  {
    title: "To make hiring a system where alignment holds.",
  },
  {
    title: "Where Alignment Within strengthens decisions.",
  },
  {
    title: "Where Alignment Across strengthens continuity.",
  },
];

export default function OurGoal() {
  return (
    <section className="w-full ">
            <div className="mx-auto md:w-[85%]  text-center">
              {/* Title */}
              <h2 className="text-h2 font-extrabold text-[#0668E1]">
                Our goal
              </h2>

                {/* Cards */}
        <div className="mt-xl flex flex-col md:flex-row items-center justify-center gap-md">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex items-center text-left rounded-md border border-[#D3E6FF] bg-white p-md shadow-[1px_9px_20px_0px_#BDDBFF0D,_3px_37px_37px_0px_#BDDBFF0A,_8px_82px_50px_0px_#BDDBFF08,_14px_146px_59px_0px_#BDDBFF03,_21px_229px_64px_0px_#BDDBFF00]"
            >
              <p className="text-xl font-bold">
                {goal.title}
              </p>
            </div>
          ))}
        </div>
            {/* Footer Text */}
        <p className="mt-md text-center text-base font-medium ">
          So candidates, recruiters, and employers move together with
          visibility, continuity, and confidence.
        </p>
            </div>
          </section>
  );
}