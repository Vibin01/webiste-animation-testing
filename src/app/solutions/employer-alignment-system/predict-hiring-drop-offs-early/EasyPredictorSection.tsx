"use client";

import { useState } from "react";
import AlignmentIntentCalculator from "./AlignmentIntentCalculator";

type ActiveTab = "interview" | "offer";

export default function EasyPredictorSection() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("interview");
 const [inputCount, setInputCount] = useState(1);
 const [appliedCount, setAppliedCount] = useState(1);
const [calculatedValue, setCalculatedValue] = useState<number | null>(null);

const singleFormula = activeTab === "interview" ? 9.6 : 1.6;
const unit = activeTab === "interview" ? "Hours" : "Days";

  const statsCards = [
    {
      title: "Intervention Time Gained",
      value: `+${calculatedValue !== null ? calculatedValue : singleFormula}`,
      unit,
      desc1: "Before Hiring Cycle Completion",
      desc2: `Misalignment signals detected ${calculatedValue !== null ? calculatedValue : singleFormula} ${unit.toLowerCase()} earlier, creating additional intervention time.`,
    },
    {
      title: "Aggregate Intervention Capacity",
      value: (calculatedValue !== null ? calculatedValue : singleFormula) * 10,
      unit,
      desc1: `Scaled across 10 hiring cycles`,
      desc2: "Early visibility expands intervention capacity across high-risk hiring transitions.",
    },
    {
      title: "Misalignment Risk Reduction",
      value: "Tier 3  ",
      unit: "Visibility",
      desc1: `Based on 10 high-risk transitions`,
      desc2: "Earlier intervention reduces enterprise hiring risk across critical transitions.",
    },
  ];

  const bottomCards = [
    {
      title: "Enterprise Impact",
      bg: "bg-white",
      text: "text-[#2C2C2C]",
      content: [
        {
          head: "Without early Visibility:",
          text: "Drop-off risk often peaks near the end of the hiring cycle.",
        },
        {
          head: "With Alignment Visibility Tier 3:",
          text: "Misalignment risk is detected earlier, enabling intervention before hiring is affected",
        },
      ],
    },
    {
      title: "Execution Impact",
      bg: "bg-[#0668E1]",
      text: "text-white",
      content: [
        { text: `+${calculatedValue !== null ? calculatedValue : singleFormula} ${unit} Gained` },
        { text: "Before the final hiring transition" },
        {
          text: `${(calculatedValue !== null ? calculatedValue : singleFormula) * 10} ${unit} of hiring risk mitigation capacity`,
        },
        { text: "Waiting time becomes intervention time." },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">Easy Predictor</h1>

      <p className="mt-sm text-base font-bold text-[#1B1C17]">
        The Alignment Visibility Law.
      </p>
<p className="text-base font-medium mt-xs">Intervention Time = Hiring Window - AlignmentSignal Detection Time</p>
<p className="text-base font-medium mt-xs">Earlier alignment signals expand the intervention window within the hiring cycle.</p>
      <div className="mt-md flex w-full flex-col-reverse gap-md md:flex-row">
        
        {/* LEFT */}
        <div className="flex md:w-[65%] flex-col gap-md">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium"
            >
              <p className="text-base font-bold text-[#2C2C2C]">
                {card.title}
              </p>

              <div className="my-sm border-t border-[#D3E6FF]" />

              <h2 className="text-h2 font-bold text-[#0668E1]">
                {card.value}{" "}
                <span className="text-base font-bold">{card.unit}</span>
              </h2>

              <p className="mt-sm text-xl font-medium">{card.desc1}</p>
              <p className="mt-xs text-xl font-medium">{card.desc2}</p>
            </div>
          ))}
        </div>

        {/* RIGHT */}
      <AlignmentIntentCalculator
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);

          setInputCount(1);
          setAppliedCount(1);
          setCalculatedValue(null);
        }}
        inputCount={inputCount}
        setInputCount={setInputCount}
        setAppliedCount={setAppliedCount}
        setCalculatedValue={setCalculatedValue}
      />
      </div>

      {/* Bottom */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {bottomCards.map((card, index) => (
          <div
            key={index}
            className={`rounded-md border border-[#D3E6FF] p-4 shadow-mobile-medium md:shadow-web-medium ${card.bg} ${card.text}`}
          >
            <p className="font-bold">{card.title}</p>

            <div className="my-sm border-t border-[#D3E6FF]" />

            {card.content.map((item: any, i) => (
              <div key={i} className="mt-2">
                {item.head && <p className="font-bold">{item.head}</p>}
                <p className="mt-xs text-xl font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-sm text-base font-medium">Alignment visibility enables earlier intervention, protects momentum, prevents disruption.</p>
    </div>
  );
}