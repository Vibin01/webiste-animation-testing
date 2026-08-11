"use client";
import { ArcherContainer, ArcherElement } from "react-archer";
import GoalCard from "./GoalCard";

export default function GoalsDiagramDesktop() {
  return (
<ArcherContainer
      strokeColor="#B8D3FF"
      strokeWidth={4}
      endMarker={false}
      className="relative"
      svgContainerStyle={{
        pointerEvents: "none",
      }}
    >
      <div
        className="
          rounded-lg
          bg-[#F1F7FF]
          pt-[clamp(40px,10vw,200px)]
          pb-[clamp(16px,3vw,60px)]
          px-[clamp(16px,calc(56/1280*100vw),112px)]
        "
      >
  
{/* web version */}
        <div
          className="
            mb-[clamp(40px,calc(80/1280*100vw),160px)]
            hidden
            sm:flex
            flex-col
            items-center
            gap-[clamp(16px,calc(40/1280*100vw),80px)]
            sm:flex-row
            sm:justify-between
          "
        >
          {/* Candidate */}
          <ArcherElement
            id="candidate"
            relations={[
              {
                targetId: "recruiter",
                sourceAnchor: "right",
                targetAnchor: "left",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "curve",
                },
              },
              {
                targetId: "leftLine",
                sourceAnchor: "bottom",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "straight",
                },
              },
            ]}
          >
            <div className="w-[clamp(130px,calc(220/1280*100vw),440px)]">
              <GoalCard
                title="Candidates"
                position="left"
                description="Seek the right opportunity."
                icon="candidate"
              />
            </div>
          </ArcherElement>

          {/* Recruiter */}
          <ArcherElement
            id="recruiter"
            relations={[
              {
                targetId: "employer",
                sourceAnchor: "right",
                targetAnchor: "left",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "curve",
                },
              },
            ]}
          >
            <div className="w-[clamp(130px,calc(220/1280*100vw),440px)] sm:-mt-[clamp(80px,calc(160/1280*100vw),320px)]">
              <GoalCard
                title="Recruiters"
                position="middle"
                description="Seek successful Closure"
                icon="recruiter"
              />
            </div>
          </ArcherElement>

          {/* Employer */}
          <ArcherElement
            id="employer"
            relations={[
              {
                targetId: "rightLine",
                sourceAnchor: "bottom",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "straight",
                },
              },
            ]}
          >
            <div className="w-[clamp(130px,calc(220/1280*100vw),440px)]">
              <GoalCard
                title="Employers"
                position="right"
                description="Seek efficient Talent."
                icon="employer"
              />
            </div>
          </ArcherElement>
        </div>

        {/* Bottom Pill */}
        <div className="mt-10 sm:mt-0 relative sm:absolute left-0 -bottom-[clamp(16px,calc(32/1280*100vw),64px)] flex w-full items-center justify-center sm:justify-between">
          <div className="hidden sm:flex">
            <div className="mr-[clamp(16px,calc(56/1280*100vw),112px)] h-[10px] w-[clamp(40px,calc(110/1280*100vw),220px)]" />

            <ArcherElement
              id="leftLine"
              relations={[
                {
                  targetId: "rightLine",
                  sourceAnchor: "right",
                  targetAnchor: "left",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "straight",
                  },
                },
              ]}
            >
              <div className="h-[1px] w-[1px]" />
            </ArcherElement>
          </div>

          <ArcherElement id="goals-mobile">
            <div
              className="
                flex
                py-md
                min-w-[140px]
                md:min-w-[260px]
                items-center
                justify-center
                rounded-full
                bg-white
                text-xl
                font-bold
                 border border-[#DEEDFF] shadow-mobile-medium md:shadow-web-medium
                z-20
              "
            >
              Different goals
            </div>
          </ArcherElement>

          <div className="hidden sm:flex">
            <ArcherElement id="rightLine">
              <div className="h-[1px] w-[1px]" />
            </ArcherElement>

            <div className="ml-[clamp(16px,calc(56/1280*100vw),112px)] h-[10px] w-[clamp(40px,calc(110/1280*100vw),220px)]" />
          </div>
        </div>
      </div>
    </ArcherContainer>
  );
}