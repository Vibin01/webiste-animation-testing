import { HeroSection } from "./HeroSection";
import AlignmentEngine from "./AlignmentEngine";
import AlignmentActors from "./AlignmentActors";
import AspirationAchievement from "./AspirationAchievement";
import HiringAlignmentCTA from "./HiringAlignmentCTA";
import HiringContinuity from "./HiringContinuity";
import ActorCards from "./ActrosCard";
import AlignmentSection from "./AlignmentSection";
import { GiEdgeCrack } from "react-icons/gi";
export const HomePage = () => {
  return (
    <>
      <main className="">
        <div className="px-[5%] ">
          <div className=" relative ">
            <HeroSection />
            <ActorCards />

          </div>

          <div className="mt-[5%] md:mt-0 py-[5%]">
            <HiringContinuity />
          </div>
          <div className="mt-[5%] md:mt-0">
            
            <AlignmentSection />
          </div>
        </div>
         <div className="mt-[5%] md:mt-0 bg-[#0668E1]">
            <AlignmentEngine />
          </div>
        <div className="px-[5%]">
           <div className="mt-[5%] md:mt-0 py-[5%]">
            <AlignmentActors />
          </div>
          
        </div>
        <div className="px-[5%] bg-[#F2F8FF]">
         <div className="mt-[5%] md:mt-0 ">
            <AspirationAchievement />
            
          </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
            <HiringAlignmentCTA />
          </div>
          </div>
      </main>
    </>
  );
};
