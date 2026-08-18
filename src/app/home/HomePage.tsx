import { HeroSection } from "./HeroSection";
import FlowCards from "./FlowCards";
import ECLoadingAnimation from "@/components/common/Animation/LoadingEcAnimation";
import ContinuityBreaks from "./ContinuityBreaks";
import StackedSections from "@/components/common/Animation/StackedSection";
import { Roles } from "@/data/HomePageData";
import AlignmentContinuity from "./AlignmentContinuity";
import AlignmentEngine from "./AlignmentEngine";
import AlignmentActors from "./AlignmentActors";
import AspirationAchievement from "./AspirationAchievement";
import HiringAlignmentCTA from "./HiringAlignmentCTA";
import AlignmentTabs from "./DemoHeroSection";
import WithinContent from "./DemoBeignWithin";
import HiringContinuity from "./HiringContinuity";
import ActorCards from "./ActrosCard";
import AlignmentSection from "./AlignmentSection";
export const HomePage = () => {

  return (
    <>
      <main className="px-[5%]">
        <div className=" relative ">
          <HeroSection />
          <ActorCards/>
        </div>
        <div className=" ">
          {/* <p className="font-bold text-h5">THREE ACTORS. THREE JOURNEYS.</p>
          <h2 className="mb-md font-extrabold text-h2">
            ONE HIRING CONTINUITY.
          </h2>

          <div className="hidden md:flex">
            <StackedSections>
              {Roles.map((role) => (
                <ContinuityBreaks key={role.id} role={role} />
              ))}
            </StackedSections>
          </div>
          <div className="flex flex-col gap-md md:hidden">
            {Roles.map((role) => (
              <ContinuityBreaks key={role.id} role={role} />
            ))}
          </div> */}
          {/* <div className="mt-[5%] md:mt-0 py-[5%]">
          <AlignmentChallenge />
        </div> */}
          <div className="mt-[5%] md:mt-0 py-[5%]">
            <HiringContinuity/>
          </div>
          <div className="mt-[5%] md:mt-0">
            <AlignmentSection/>
          </div>

          <div className="py-[5%] -mx-[7%] md:-mx-0 overflow-x-hidden">
            <FlowCards />
          </div>
          <div className="mt-[5%] md:mt-0 py-[5%]">
            <AlignmentActors />
          </div>

          <div className="py-[5%]  ">
            <AspirationAchievement />
          </div>
          <div className="mt-[5%] md:mt-0 py-[5%]">
            <HiringAlignmentCTA />
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
