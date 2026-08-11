"use client";


const icons = {
  candidate: "/home/icons/right-opportunity-icon.svg",
  recruiter: "/home/icons/successful-placements-icon.svg",
  employer: "/home/icons/right-talent-icon.svg",
};

type CardPosition = "left" | "middle" | "right";

interface Props {
  title: string;
  description: string;
  icon: keyof typeof icons;
  position?: CardPosition;
}

export default function GoalCard({
  title,
  description,
  icon,
  position = "middle",
}: Props) {
  const Icon = icons[icon];
const words = description.split(" ");
const lastWord = words.pop();
const remainingText = words.join(" ");
  return (
    <div
      className="
        relative
        h-[clamp(125px,calc(210/1280*100vw),440px)]
        w-[clamp(125px,calc(220/1280*100vw),440px)]
        rounded-md
        bg-[#0668E1]
      "
    >
      <h3
        className="
          pt-[clamp(8px,calc(16/1280*100vw),32px)]
          text-center
          text-[clamp(12px,calc(18/1280*100vw),36px)]
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

 <div
  className={`
    absolute
    bottom-0
    z-10
    flex
    w-[clamp(125px,calc(220/1280*100vw),440px)]
    flex-col
    rounded-2xl
    bg-white
    p-[clamp(12px,calc(20/1280*100vw),40px)]
    shadow-sm

    ${
      position === "left"
        ? `
          -left-2.5
          items-start
          text-left
          sm:-left-[clamp(12px,calc(24/1280*100vw),48px)]
        `
        : ""
    }

    ${
      position === "middle"
        ? `
          left-0 scale-105
          items-center
          text-center
        `
        : ""
    }

    ${
      position === "right"
        ? `
          -right-2.5
          items-end
          text-right

          sm:-right-[clamp(12px,calc(24/1280*100vw),48px)]
        `
        : ""
    }
  `}
>
        <div
          className="
            mb-[clamp(10px,calc(20/1280*100vw),40px)]
            flex
            size-[clamp(28px,calc(42/1280*100vw),80px)]
            items-center
            justify-center
            rounded-full
            bg-blue-100
             p-[clamp(2px,calc(5/1280*100vw),10px)]

          "
        >
          <img src={Icon} alt={`${title} icon`} 
            className="
              object-cover
            "
          />
        </div>

<p className="text-[clamp(12px,calc(18/1280*100vw),36px)] font-medium md:pl-3">
  {remainingText}{" "}
  <span className="font-bold">{lastWord}</span>
</p>
      </div>
    </div>
  );
}