"use client";

import React from "react";
import ButtonDialog from "./RequestForQuoteDialogBox";

const pricingCards = [
  {
    tier: "Visibility",
    label: "Free Forever",
    subtitle: "See Where friction exists",
    active: false,
    sections: [
      {
        title: "Hiring Foundation",
        features: ["Job Posting", "Recruiter Management", "Panel Management"],
      },
      {
        title: "Evaluation System",
        features: ["Easy Evaluator", "System Templates"],
      },
      {
        title: "Early Signals (Basic)",
        features: ["Interview No-show → 10% ahead", "Offer No-show →10% ahead"],
      },
      {
        title: "Signal Foundation",
        features: ["Easy Facilitator → Doc Vault"],
      },
    ],
    outcome: "You stop guessing where hiring breaks.",
    buttonText: "Start Seeing Friction",
    footer: "",
  },
  {
    tier: "Diagnosis",
    label: "Tier 2",
    subtitle: "Understand Why friction exists",
    active: true,
    sections: [
      {
        title: "Tracking & Exploration",
        features: ["Easy Role Tracker", "Easy Explorer"],
      },
      {
        title: "Advanced Signals",
        features: [
          "Interview No-show → 20% ahead",
          "Offer No-show → 20% ahead",
        ],
      },
      {
        title: "Signal Foundation",
        features: ["Easy Facilitator → Pix Vault"],
      },
    ],
    outcome: "You See patterns behind drop-offs and delays.",
    buttonText: "Unlock Clarity",
    footer: "Everything in Visibility +",
  },
  {
    tier: "Alignment",
    label: "Tier 3",
    subtitle: "Act on friction before compounds",
    active: false,
    sections: [
      {
        title: "Deep Signal Intelligence",
        features: ["Interview No-show 40% ahead", "Offer No-show 40% ahead"],
      },
      {
        title: "Expanded Systems",
        features: ["Easy Calibrator", "Easy Navigator"],
      },
      {
        title: "Full Signal Layer",
        features: ["Easy Facilitator → Vid Vault"],
      },
      {
        title: "Brand Management",
        features: ["Customized Templates"],
      },
    ],
    outcome: "You prevent hiring failures before they happen.",
    buttonText: "Reduce Friction",
    footer: "Everything in Diagnosis +",
  },
];

function CheckIcon({ active }: { active: boolean }) {
  return (
    <img
      src={`${
        active ? "/icons/tick-white-icon.svg" : "/icons/tick-gradient-icon.svg"
      }`}
      alt="question icon"
      className="size-iconsize-sm p-[0.1%]"
    />
  );
}

export default function PricingCardsSection() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {pricingCards.map((card) => (
            <div
              key={card.tier}
              className={`flex flex-col rounded-md border border-[#C8DEFA] shadow-mobile-medium md:shadow-web-medium ${
                card.active
                  ? "bg-[#0668E1] text-white"
                  : "bg-white text-[#1B1C17] "
              }`}
            >
              {/* Header */}
              <div
                className={`border-b px-md md:px-sm py-md ${
                  card.active
                    ? "border-[#2E83EC] bg-[#1E77E4] rounded-t-md"
                    : "border-[#D3E6FF]"
                }`}
              >
                <h2
                  className={`text-h2 font-extrabold  ${
                    card.active ? "text-white" : "text-[#1B1C17]"
                  }`}
                >
                  {card.tier} 
                </h2>

                <p
                  className={`mt-md text-base font-bold ${
                    card.active ? "text-white" : "text-[#0668E1]"
                  }`}
                >
                  {card.label}
                </p>

                <p
                  className={`mt-xs text-base font-medium ${
                    card.active ? "text-white" : "text-[#1B1C17]"
                  }`}
                >
                  {card.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between px-md md:px-sm py-md">
                <div className="space-y-md">
                  {card.sections.map((section) => (
                    <div key={section.title}>
                      <h3
                        className={`text-base font-bold ${
                          card.active ? "text-white" : "text-[#1B1C17]"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <div className="mt-sm space-y-sm">
                        {section.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-xs text-xl font-medium"
                          >
                            <CheckIcon active={card.active} />
                            <span className="text-xl font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-md">
                  <div
                    className={`rounded-sm border px-md py-xs text-xl ${
                      card.active
                        ? "border-white/60 bg-white/10 text-white"
                        : "border-[#BBD7F8] bg-[#EEF6FF] text-[#0668E1]"
                    }`}
                  >
                    <span className="font-bold">Outcome:</span> {card.outcome}
                  </div>

                  <div className="mt-md">
                    <ButtonDialog
                      active={card.active}
                      tier={card.tier}
                      buttonText={card.buttonText}
                    />
                  </div>

                  <p
                    className={`mt-xs text-center text-lg font-medium ${
                      card.active ? "text-white" : "text-[#1B1C17]"
                    } md:min-h-[24px]`}
                  >
                    {card.footer || ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
