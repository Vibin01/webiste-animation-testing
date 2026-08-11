"use client";

import { ArcherContainer, ArcherElement } from "react-archer";
import GoalCard from "./GoalCard";

export default function GoalsDiagramMobile() {
//  useEffect(() => {
//   console.log("candidate", document.getElementById("candidate-mobile"));
//   console.log("employer", document.getElementById("employer-mobile"));
//   console.log("goals", document.getElementById("goals-mobile"));
// }, []);
  return (
    <ArcherContainer
      strokeColor="#B8D3FF"
      strokeWidth={3}
      endMarker={false}
    >
      <div className="rounded-lg bg-[#F1F7FF] px-4 py-8">
        <div className="flex flex-col items-center">
          {/* Recruiter */}
          <ArcherElement
            id="recruiter-mobile"
            relations={[
              {
                targetId: "candidate-mobile",
                sourceAnchor: "bottom",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "angle",
                },
              },
              {
                targetId: "employer-mobile",
                sourceAnchor: "bottom",
                targetAnchor: "top",
                style: {
                  strokeDasharray: "6,6",
                  lineStyle: "angle",
                },
              },
            ]}
          >
            <div className="mb-8">
              <GoalCard
                title="Recruiters"
                position="middle"
                description="Seek successful Closure."
                icon="recruiter"
              />
            </div>
          </ArcherElement>

          {/* Row */}
          <div className="flex w-full justify-between mt-5">
            <ArcherElement
              id="candidate-mobile"
              relations={[
                {
                  targetId: "goals-mobile-gap-left",
                  sourceAnchor: "top",
                  targetAnchor: "left",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "straight",
                  },
                },
              ]}
            >
                <div>
              <GoalCard
                title="Candidates"
                position="left"
                description="Seek the right opportunity."
                icon="candidate"
              />
              </div>
            </ArcherElement>

            <ArcherElement
              id="employer-mobile"
              relations={[
                {
                  targetId: "goals-mobile-gap-right",
                  sourceAnchor: "top",
                  targetAnchor: "right",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "straight",
                  },
                },
              ]}
            >
                <div>
              <GoalCard
                title="Employers"
                position="right"
                description="Seek efficient Talent."
                icon="employer"
              />
              </div>
            </ArcherElement>
          </div>

          <div className="mt-12 flex items-center gap-sm ">
            <ArcherElement
              id="goals-mobile-gap-left"
              relations={[
                {
                  targetId: "goals-mobile",
                  sourceAnchor: "bottom",
                  targetAnchor: "left",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "straight",
                  },
                },
              ]}
            >
                <div className="size-px">
            
              </div>
            </ArcherElement>
            <ArcherElement id="goals-mobile">
              <div className="flex py-md min-w-[140px] items-center justify-center rounded-full bg-white text-[13px] font-bold border border-[#DEEDFF] shadow-mobile-medium">
                Different goals
              </div>
              
            </ArcherElement>
             <ArcherElement
              id="goals-mobile-gap-right"
              relations={[
                {
                  targetId: "goals-mobile",
                  sourceAnchor: "bottom",
                  targetAnchor: "right",
                  style: {
                    strokeDasharray: "6,6",
                    lineStyle: "straight",
                  },
                },
              ]}
            >
                <div className="size-px"> 
            
              </div>
            </ArcherElement>
          </div>
        </div>
      </div>
    </ArcherContainer>
  );
}