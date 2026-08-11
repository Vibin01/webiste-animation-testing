import {
  XCircle,
} from "lucide-react";

const alignmentData = [
  {
    icon: "/home/icons/candidate-icon.svg",
    title: "Situation",
    description: "Candidates define the Situation.",
  },
  {
    icon: "/home/icons/employers-icon.svg",
    title: "Direction",
    description: "Employers design the Direction.",
  },
  {
    icon: "/home/icons/recruiters-icon.svg",
    title: "Execution",
    description: "Recruiters drive the Execution.",
  },
];

const aligned = [
  "Interviews move forward.",
  "Feedback flows.",
  "Offers convert.",
];

const misaligned = [
  "Interviews stall.",
  "Feedback slows.",
  "Offers decline.",
];

export default function AlignmentChallenge() {
  return (
    <section className="">
      <h2 className="text-h2 font-extrabold">
        The Alignment Challenge
      </h2>
       <p className="mt-xs text-base font-bold ">
        Seamless Yield depends on alignment across three dimensions of hiring.
      </p>

    <div className="mt-xl w-full rounded-lg border border-[#DEEDFF] bg-[#FFFFFF] p-md shadow-mobile-medium md:shadow-web-medium">     
      <div className=" grid gap-lg lg:grid-cols-[1.1fr_1fr_1fr]">
        {/* Left Card */}
        <div className="">
          <div className="space-y-md">
            {alignmentData.map((item) => {

              return (
                <div key={item.title} className="flex gap-xs">
                    <img src={item.icon} alt={item.title} className="size-iconsize-lg p-[0.3%]" />

                  <div>
                    <h3 className="font-bold text-[#0668E1]">
                      {item.title}
                    </h3>
                    <p className="text-xl font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aligned */}
                <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">

          <h3 className="text-base font-bold">
            When aligned:
          </h3>

          <div className="my-sm h-px bg-[#DEEDFF]" />

          <div className="space-y-sm">
            {aligned.map((item) => (
              <div key={item} className="flex items-center gap-xs">
              <img src={"/icons/tick-gradient-icon.svg"} alt="tick gradient icon" className="size-iconsize-sm p-[0.2%]"/>
                <span className="text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Misaligned */}
        <div className="rounded-md border border-[#DEEDFF] bg-white p-sm">
          <h3 className="text-base font-bold">
            When misaligned:
          </h3>

          <div className="my-4 h-px bg-[#DEEDFF]" />

          <div className="space-y-sm">
            {misaligned.map((item) => (
              <div key={item} className="flex items-center gap-xs">
                <XCircle className="size-iconsize-sm fill-red-500 text-white" />
                <span className="text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}