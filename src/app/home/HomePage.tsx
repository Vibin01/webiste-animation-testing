import { HeroSection } from "./HeroSection";
import FlowCards from "./FlowCards";
import HiringSeams from "./HiringSeams";
import ClosingVisionGapCard from "./CloseVissonGapCard";
import AAAActionBanner from "./AAAActionBanner";
import AlignmentBreaksDiagram from "./AlignmentBreaksDiagram";
import StrategyGapSection from "./StrategyGapSection";
import UniversalBehaviorSection from "./UniversalBehaviorSection";
import AspirationToAchievementSection from "./AspirationToAchievementSection";
import AAABehaviouralFramework from "./AAABehaviouralFramework";
import AlignmentTabWithinAcrossComponent from "./AlignmentTabWithinAcrossComponent";
import AlignmentIntelligence from "./AlignmentIntelligence";
import AspireAlignAchieve from "@/components/common/Animation/triangleAnimation";
import ECLoadingAnimation from "@/components/common/Animation/LoadingEcAnimation";
import ContinuityBreaks from "./ContinuityBreaks";
import StackedSections from "@/components/common/Animation/StackedSection";
import { Roles } from "@/data/HomePageData";
import AlignmentChallenge from "./AlignmentChallenge";
import AlignmentContinuity from "./AlignmentContinuity";
import AlignmentEngine from "./AlignmentEngine";
import AlignmentActors from "./AlignmentActors";
import AspirationAchievement from "./AspirationAchievement";
import HiringAlignmentCTA from "./HiringAlignmentCTA";
export const HomePage = () => {
  return (
    <>
      <main className="">
        <div className=" relative bg-[url('/background/bg-hero-home-section.svg')] bg-no-repeat bg-cover bg-center">
          <HeroSection />
        </div>
        <div className="px-[5%] ">

          <p className="font-bold text-h5">THREE ACTORS. THREE JOURNEYS.</p>
          <h2 className="mb-md font-extrabold text-h2">
             ONE HIRING CONTINUITY.
          </h2>
         <StackedSections>
          
  {Roles.map((role) => (
    <ContinuityBreaks
      key={role.id}
      role={role}
    />
  ))}
</StackedSections>

       

        {/* <div className="mt-[5%] md:mt-0 py-[5%]">
          <AlignmentChallenge />
        </div> */}
        <div className="mt-[5%] md:mt-0 py-[5%]">
          <AlignmentContinuity/>
        </div>
        <div className="mt-[5%] md:mt-0">
          <AlignmentEngine />
        </div>
         <div className="py-[5%] -mx-[7%] md:-mx-0 overflow-x-hidden">
          <FlowCards />
          
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
          <AlignmentActors/>
        </div>

        <div className="py-[5%]  ">
          <AspirationAchievement/>
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%]">
         <HiringAlignmentCTA/>
        </div>
        {/* <div className="mt-[5%] md:mt-0 py-[5%]">
          <AAAActionBanner />
        </div>
        <div className="mt-[5%] md:mt-0">
          <ClosingVisionGapCard />
        </div> */}
        {/* <div>
          <AlignmentCompoundsSection />
        </div> */}
        {/* <div>
          <AlignmentIntelligence/>
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%] mb-[15%] md:mb-0">
          <AspirationToAchievementSection />
        </div>
        <div className="mt-[5%] md:mt-0 py-[5%] mb-[15%] md:mb-0">
          <AlignmentTabWithinAcrossComponent />
        </div> */}
        </div>
      </main>
    </>
  );
};
