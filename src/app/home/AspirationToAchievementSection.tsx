import { ChevronLeftIcon, ChevronRight } from "lucide-react";

function AchievementDiagramCard() {
  return (
    <div className="relative overflow-hidden rounded-md p-md border  border-[#DEEDFF] bg-white shadow-mobile-medium md:shadow-web-medium">


<div className=" relative p-lg rounded-md h-full">
  <div className="absolute inset-0 rounded-md bg-[linear-gradient(180deg,_#F1F8FF_0%,_#FFFFFF_100%)] md:bg-[linear-gradient(270deg,_#FFFFFF_0%,_#F0F8FF_100%)] h-[20%] md:h-full md:w-[30%]"/>
      <div className=" grid grid-cols-1  md:grid-cols-3 items-center gap-md">
 
        {/* Left faded */}
        <div className="relative  ">

          <h1 className="inline md:flex flex-col items-start  text-center text-h2 font-extrabold text-[#0668E1CC] leading-tight gap-xs">
          <span >
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">E</span>veryone{" "}
          </span>
          <span >
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">A</span>spires{" "}
          </span>
          <br className="md:hidden" />
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">S</span>eamless
          </span>
          <span>
            {" "}
            <span className="font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">Y</span>
            <span className="inline-flex gap-xs">
              ield
              <img
                 src={"/icons/tm-badge.svg"}
                alt="tm-badge"
                className="size-[14px] inline opacity-80"
              />
            </span>
          </span>



        </h1>

        </div>


        {/* Arrow */}
        <div className="relative py-md md:absolute md:left-1/4 md:top-1/2 md:-translate-y-1/2 w-full md:w-fit flex justify-center items-center">
        <div className="rotate-90 md:rotate-0 w-fit flex justify-end items-center rounded-[50px] border border-[#F4F9FF] bg-[#FFFFFF] ">

          <ChevronRight className="size-iconsize-md text-[#DEEDFF]  ml-xl"/>

        </div></div>

        {/* Main Text */}
        <div className="relative md:px-xl">

          <h1 className="inline md:flex flex-col items-start  text-center text-h2 font-extrabold text-[#0668E1] leading-tight gap-xs">
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">E</span>veryone{" "}
          </span>
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">A</span>chieves{" "}
          </span>
          <br className="md:hidden" />
          <span>
            {" "}
            <span className="inline font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">S</span>eamless
          </span>
          <span>
            {" "}
            <span className="font-extrabold text-[clamp(25px,calc(44_/_var(--width)*100vw),180px)]">Y</span>
            <span className="inline-flex gap-xs">
              ield
              <img
                 src={"/icons/tm-badge.svg"}
                alt="tm-badge"
                className="size-[14px] inline"
              />
            </span>
          </span>
        </h1>

        </div>

        {/* Illustration */}
        <div className="flex justify-center mt-xl md:mt-0 -m-lg md:-m-0  ">

          <img
            src="/home/aspire-align-achieve-hiring-alignment-across-candidate-recruiter-employer.svg"
            className="max-h-[300px] w-auto"
          />

        </div>

      </div>

      {/* Bottom Pills */}

      <div className="relative pt-xl mt-md md:mt-0">

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-xl md:gap-md lg:gap-xl">
 
 <div className="grid md:grid-cols-3 gap-md">
          <button className="py-sm rounded-md border border-[#B2D0F6] pl-sm flex items-center text-base font-medium gap-xs bg-white">
            <img
              src="/icons/employer-round-icon.svg"
              className="size-iconsize-sm"
            />
            Employer
          </button>

          <button className="py-sm rounded-md border border-[#B2D0F6] pl-sm flex items-center text-base font-medium gap-xs bg-white">
            <img
              src="/icons/recruiters-round-icon.svg"
              className="size-iconsize-sm"
            />
            Recruiter
          </button>

          <button className="py-sm rounded-md border border-[#B2D0F6] pl-sm flex items-center text-base gap-xs font-medium bg-white">
            <img
              src="/icons/candidate-round-icon.svg"
              className="size-iconsize-sm"
            />
            Candidate
          </button>
</div>
          <button className="py-sm rounded-md border border-[#B2D0F6] text-nowrap bg-white px-sm text-h5 font-bold text-[#0668E1]">
            Hiring Alignment Made EASY
          </button>

        </div>

      </div>
      </div>

    </div>
  );
}



export default function AspirationToAchievementSection() {
  return (
    <>
      <div className="py-[5%]">
        <h2 className="text-h2 font-extrabold text-center ">Aspiration to Achievement</h2>
        <p className="text-base font-bold mt-xs text-center">
          When alignment becomes a system, aspiration converts into
          achievement.{" "}
        </p>

        {/* <div className="mt-lg grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-md">
          <AAAFrameworkCard />
          <AAAAppliedCard />
        </div> */}
        <div className="mt-xl ">
          <AchievementDiagramCard />
        </div>

        {/* <ResultCard /> */}
      </div>
    </>
  );
}
