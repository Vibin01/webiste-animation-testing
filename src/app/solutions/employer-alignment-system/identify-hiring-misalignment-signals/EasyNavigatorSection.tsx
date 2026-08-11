"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

 const CommonGauge = dynamic(
  () => import("../CommonGauge"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[250px] w-full animate-pulse" />
    ),
  }
);

const explorerPoints = [
  "Hiring outcomes reflects alignment.",
  "Decline patterns reveal where alignment weakens and where intervention is required across interviews and offers.",
  "Easy Navigator measures these signals early to support timely intervention.",
];

const rangeCards = [
  {
    title: "Misalignment ",
    value: "0 - 70",
    border: "border-[#FFD3CA]",
    titleColor: "text-[#F0431D]",
    valueColor: "text-[#F0431D]",
  },
  {
    title: "Alignment Drift",
    value: "70 - 85",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
  {
    title: "Aligned",
    value: "85 - 100",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
];

export default function EasyNavigatorSection() {

  const [error, setError] = useState("");

  const [fields, setFields] = useState({
    interviewDeclines: "2",
    totalInterviews: "10",
    offerDeclines: "2",
    totalOffers: "10",
  });

  const [result, setResult] = useState<null | {
    interviewScore: number;
    offerScore: number;
    overallScore: number;
    state: string;
    message: string;
  }>(null);

const handleChange = (key: keyof typeof fields, value: string) => {
  // Allow empty while typing
  if (value === "") {
    setFields((prev) => ({
      ...prev,
      [key]: "",
    }));
    return;
  }

  // Only numbers
  if (!/^\d+$/.test(value)) return;

  const numValue = Number(value);

  // Max 2 digits
  if (value.length > 2) return;


  // Declines minimum = 1
  if (
    (key === "interviewDeclines" || key === "offerDeclines") &&
    numValue < 1
  ) {
    return;
  }

  // Interview Declines cannot exceed Total Interviews
  if (
    key === "interviewDeclines" &&
    numValue > Number(fields.totalInterviews)
  ) {
    return;
  }

  // Offer Declines cannot exceed Total Offers
  if (
    key === "offerDeclines" &&
    numValue > Number(fields.totalOffers)
  ) {
    return;
  }


  setFields((prev) => ({
    ...prev,
    [key]: value,
  }));
};

  const getState = (score: number) => {
    if (score >= 85) return "Aligned";
    if (score >= 70) return "Alignment Drift";
    return "Misalignment Emerging";
  };
  // ID interviewDecline
  // TI TotalInterview
  // OD OffferDecline
  // TO TotalOffers
  const handleCalculate = () => {
    setError("")
    const ID = Number(fields.interviewDeclines);
    const TI = Number(fields.totalInterviews);
    const OD = Number(fields.offerDeclines);
    const TO = Number(fields.totalOffers);

    if (TI < 10) {
      setError("Minimum 10 interviews required");
      return;
    }

    if (TO < 5) {
      setError("Minimum 5 offers required");
      return;
    }

    // existing validation
    if (ID < 0 || OD < 0) {
      setError("Declines must be ≥ 0");
      return;
    }

    if (ID > TI || OD > TO) {
      setError("Declines cannot exceed totals");
      return;
    }

    if (TI === 0 && TO === 0) {
      setError("At least one of Interview or Offer must be > 0");
      return;
    }

    //IDR InterviewDeclineRate
    // ODR OfferDeclineRate
    let IDR = 0;
    let ODR = 0;

    if (TI > 0) {
      IDR = ID / TI;
    }

    if (TO > 0) {
      ODR = OD / TO;
    }

    let WM = 0;

    if (TI > 0 && TO > 0) {
      WM = IDR * 0.6 + ODR * 0.4;
    } else if (TI > 0) {
      WM = IDR;
    } else {
      WM = ODR;
    }

    WM = Math.max(0, Math.min(WM, 1));

    const overallScore = Math.round((1 - WM) * 100);
    const interviewScore = TI > 0 ? Math.round((1 - IDR) * 100) : 100;
    const offerScore = TO > 0 ? Math.round((1 - ODR) * 100) : 100;

    const state = getState(overallScore);

    let message = "";

    if (TI < 10 || TO < 5) {
      message =
        "Low sample size. For reliability, use at least 10 interviews and 5 offers.";
    } else if (state === "Aligned") {
      message = "Hiring alignment is stable. Decline pressure is low.";
    } else if (state === "Alignment Drift") {
      message =
        "Alignment drift is visible. Interview or offer decline patterns need attention.";
    } else {
      message =
        "Misalignment is emerging. Decline signals show hiring pressure.";
    }

    setResult({
      interviewScore,
      offerScore,
      overallScore,
      state,
      message,
    });
  };

  const gaugeScore = result?.overallScore ?? 0;
  const needleRotation = (gaugeScore / 100) * 180 - 90;

  const alignmentScores = [
    {
      title: "Interview Alignment Score",
      value: result?.interviewScore ?? 0,
      subtitle: result ? getState(result.interviewScore) : "Not Calculated",
    },
    {
      title: "Offer Alignment Score",
      value: result?.offerScore ?? 0,
      subtitle: result ? getState(result.offerScore) : "Not Calculated",
    },
  ];

  const getScoreStyle = (state: string) => {
    if (state === "Aligned") {
      return {
        box: "border-[#9ADFA9] bg-[#E7FFF3]",
        text: "text-[#2B9B43]",
      };
    }

    if (state === "Alignment Drift") {
      return {
        box: "border-[#B2D0F6] bg-[#EEF6FF]",
        text: "text-[#0668E1]",
      };
    }

    return {
      box: "border-[#FFD3CA] bg-[#FFF4F2]",
      text: "text-[#F0431D]",
    };
  };

 

  return (
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">Easy Navigator</h1>

      <p className="mt-xs text-base font-bold text-[#1B1C17]">
        The Hiring Alignment Navigator
      </p>

      <div className="mt-sm space-y-xs">
        {explorerPoints.map((point, index) => (
          <div key={index} className="flex items-start gap-xs  text-[#1B1C17]">
            <img
              src="/icons/tick-gradient-icon.svg"
              alt="tick icon"
              className="size-iconsize-sm"
            />
            <span className="text-xl font-medium">{point}</span>
          </div>
        ))}
      </div>

      <div className="mt-md flex flex-col-reverse md:flex-row gap-lg">
        <div className="md:w-[65%] rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Index
          </h3>

          <CommonGauge value={gaugeScore} mode="score" />

         <div className="mt-md grid grid-cols-1 md:grid-cols-3 gap-md">
  {rangeCards.map((card, index) => {
    const isActive =
      result &&
      ((result.state === "Misalignment Emerging" &&
        card.title.includes("Misalignment")) ||
        (result.state === "Alignment Drift" &&
          card.title.includes("Drift")) ||
        (result.state === "Aligned" &&
          card.title.includes("Aligned")));

    return (
      <div
        key={index}
        className={`rounded-md border p-sm transition-all duration-300 ${
          isActive
            ? card.title.includes("Misalignment")
              ? "border-[#F0431D] bg-[#FFF4F2]"
              : card.title.includes("Drift")
                ? "border-[#0668E1] bg-[#EEF6FF]"
                : "border-[#2B9B43] bg-[#E7FFF3]"
            : "border-[#D3E6FF] bg-white"
        }`}
      >
        <p
          className={`text-xl font-bold ${
            isActive
              ? card.title.includes("Misalignment")
                ? "text-[#F0431D]"
                : card.title.includes("Drift")
                  ? "text-[#0668E1]"
                  : "text-[#2B9B43]"
              : "text-[#2C2C2C]"
          }`}
        >
          {card.title}
        </p>

        <p
          className={`text-xl font-bold ${
            isActive
              ? card.title.includes("Misalignment")
                ? "text-[#F0431D]"
                : card.title.includes("Drift")
                  ? "text-[#0668E1]"
                  : "text-[#2B9B43]"
              : "text-[#2C2C2C]"
          }`}
        >
          {card.value}
        </p>
      </div>
    );
  })}
</div>

          <div className="mt-md grid grid-cols-1 gap-[1.5vw] md:grid-cols-2">
            {alignmentScores.map((item, index) => {
              const style = getScoreStyle(item.subtitle);

              return (
                <div
                  key={index}
                  className={`w-full rounded-md border p-sm ${style.box}`}
                >
                  <p className={`text-base font-bold ${style.text}`}>
                    {item.title}: <span>{item.value}</span>
                  </p>

                  <p className={`mt-xs text-xl font-medium ${style.text}`}>
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {result &&
            (() => {
              const style = getScoreStyle(result.state);

              return (
                <div className={`mt-md rounded-md border p-sm ${style.box}`}>
                  <p className={`text-base font-bold ${style.text}`}>
                    Overall Alignment Score: {result.overallScore}
                  </p>

                  <p className={`mt-xs text-xl font-medium ${style.text}`}>
                    {result.state}
                  </p>
                </div>
              );
            })()}
        </div>

        <div className="md:w-[35%] rounded-md border border-[#CFE1FF] bg-[#FDFDFD] p-md shadow-mobile-medium md:shadow-web-medium">
          <h3 className="text-base font-bold leading-[28px] text-[#2C2C2C]">
            Alignment Signal Calculator
          </h3>
  <p className=" text-[12px] font-medium text-red-500">
                  {error}
                </p>



          <div className="mt-sm space-y-md">
            <div>
              <h4 className="text-xl font-bold text-[#2C2C2C]">
                Interview Stage
              </h4>

              <div className="mt-sm space-y-xs">
                <p className="text-xl font-medium text-[#9F9F9F]">
                  Interview Declines
                </p>
                <input
                  type="number"
                  min={1}
                  value={fields.interviewDeclines}
                  onChange={(e) =>
                    handleChange("interviewDeclines", e.target.value)
                  }
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
                />
                <p className="text-xl font-medium text-[#9F9F9F]">
                  Total Interview Conducted
                </p>

                <input
                  type="number"
                min={10}
                  value={fields.totalInterviews}
                  onChange={(e) =>
                    handleChange("totalInterviews", e.target.value)
                  }
                 
                  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
                />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#2C2C2C]">Offer Stage</h4>

              <div className="mt-sm space-y-xs">
                <p className="text-xl font-medium text-[#9F9F9F]">
                  Offer Declines
                </p>

                <input
                  type="number"
                  min={1}
                  
                  value={fields.offerDeclines}
                  onChange={(e) =>
                    handleChange("offerDeclines", e.target.value)
                  }
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-", "."].includes(e.key) &&
                    e.preventDefault()
                  }
                  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
                />
                <p className="text-xl font-medium text-[#9F9F9F]">
                  Total Offers Released
                </p>
                <input
                  type="number"
                  min={10}
                  value={fields.totalOffers}
                  onChange={(e) => handleChange("totalOffers", e.target.value)}
                 
                  className="h-[46px] w-full rounded-sm border border-[#E6E6E6] bg-white px-5 text-[15px] font-medium text-[#2C2C2C] outline-none placeholder:text-[#A3A3A3]"
                />
              </div>
            </div>

            <button
              onClick={handleCalculate}
              className="mt-2 h-[48px] w-full rounded-md md:rounded-sm bg-[#0668E1] text-[16px] font-extrabold text-white"
            >
              Check Alignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
