const roleTrackerData = [
  {
    title: "Unblock Inactive Positions",
    icon: "/solutions/employer/unblock-inactive-icon.svg",
    subtitle: "Instantly uncover roles stuck due to:",
    points: ["Scheduling delays", "Offer hold-ups", "Pipeline inactivity"],
    footer: "Enable focused interventions before momentum loss impacts hiring outcomes.",
  },
  {
    title: "Accelerate Hiring Velocity",
    icon: "/solutions/employer/accelerate-hiring-velocity-icon.svg",
    subtitle: "Monitor recruitment funnels in real time:",
    points: ["Interviews", "Shortlists", "Offers"],
    footer: "Identify slowdowns, prioritize interventions, and optimize funnel movement.",
  },
  {
    title: "Prioritize Strategically",
    icon: "/solutions/employer/prioritize-strategically-icon.svg",
    subtitle: "Flag roles with:",
    points: [
      "Extended open days",
      "Missed touchpoints",
      "Scheduling inactivity",
    ],
    footer: "Ensure critical roles receive immediate attention and timely intervention.",
  },
  {
    title: "Enable Real-Time Interventions",
    icon: "/solutions/employer/enable-interventions-icon.svg",
    subtitle: "Chat instantly with recruiters:",
    points: [
      "Connect directly on stalled roles",
      "Cut down follow-up loops",
      "Resolve issues in real time",
    ],
    footer: "Escalate from silent delays to instant solutions before hiring momentum stalls.",
  },
];

function Card({ item }: { item: (typeof roleTrackerData)[0] }) {
  return (
    <div className="rounded-md border border-[#D3E6FF]  p-md shadow-mobile-medium md:shadow-web-medium">
      {/* Header */}
      <div className="flex items-center gap-xs">
        <img
          src={item.icon}
          alt={`${item.title} icon`}
          className="size-iconsize-md p-[0.5%]"
        />
        <h3 className="text-base font-bold text-[#2C2C2C]">{item.title}</h3>
      </div>

      {/* Subtitle */}
      <p className="mt-sm text-xl font-bold text-[#2C2C2C]">
        {item.subtitle}
      </p>

      {/* Points */}
      <div className="mt-md space-y-xs text-xl font-medium text-[#2C2C2C]">
        {item.points.map((point, index) => (
          <div key={index} className="flex flex-col items-start gap-sm">
            <div className="flex items-start gap-xs">
              <img
                src="/icons/tick-gradient-icon.svg"
                alt="tick icon"
                className="mt-[0.5%] size-iconsize-sm p-[0.1%]"
              />
              <span>{point}</span>
            </div>
            {index !== item.points.length - 1 && (
              <img
                src="/icons/arrow-step-blue-icon.svg"
                alt="arrow icon"
                className=" size-iconsize-sm p-[0.1%]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-md text-xl font-medium text-[#2C2C2C]">{item.footer}</p>
    </div>
  );
}

export default function EasyRoleTrackerSection() {
  return (
    <div className="mx-auto">
      {/* Title */}
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Role Tracker
      </h1>
      <p className="mt-sm text-base font-bold text-[#2C2C2C]">
        Role Momentum Intelligence
      </p>

      {/* Cards */}
      <div className="mt-xl grid grid-cols-1 gap-lg md:grid-cols-2">
        {roleTrackerData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
