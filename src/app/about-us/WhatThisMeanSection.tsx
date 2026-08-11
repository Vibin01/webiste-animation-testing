const meansCards = [
  {
    icon: "/about/icons/candidate-icon.svg",
    title: "For Candidates",
    points: [
      "Clear interview timelines",
      "Visibility into progress and next steps",
      "Confidence in career decisions",
    ],
  },
  {
    icon: "/about/icons/recruiters-icon.svg",
    title: "For Recruiters",
    points: [
      "Coordination across hiring stages",
      "Reduced drop-offs and no-shows",
      "Stronger offer conversion",
    ],
  },
  {
    icon: "/about/icons/employers-icon.svg",
    title: "For Employers",
    points: [
      "Visibility into hiring progress",
      "Early signals across hiring stages ",
      "Hiring Priorities and execution aligned",
    ],
  },
];

export default function WhatThisMeansSection() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold leading-[44px] text-[#2C2C2C]">
          What this means
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {meansCards.map((card) => (
            <div
              key={card.title}
              className="rounded-md border border-[#D0E5FF] bg-white p-md"
            >
              <div className="flex items-center gap-4 rounded-md border border-[#D0E5FF] bg-white px-4 py-3">
                                <img src={card.icon} alt="" className="size-[30px] md:size-iconsize-md " />


                <h3 className="text-base font-bold text-[#0668E1]">
                  {card.title}
                </h3>
              </div>

              <div className="mt-md space-y-md">
                {card.points.map((point) => (
                  <div key={point} className="flex items-start gap-xs">
                  <img src={"/icons/tick-gradient-icon.svg"} alt="tick icon" className="size-iconsize-sm" />

                    <p className="text-xl font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}