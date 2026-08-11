"use client";
import dynamic from "next/dynamic";
import {  useState } from "react";

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
  "Explore hiring pressure before alignment breaks.",
  "Easy Explorer reveals where pressure is forming and where alignment is beginning to drift.",
  "Realign early before disruption occurs.",
];

const rangeCards = [
  {
    title: "Aligned",
    value: "0.0 - 0.4",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },

  {
    title: "Drifting",
    value: "0.4 - 0.7",
    border: "border-[#D3E6FF]",
    titleColor: "text-[#2C2C2C]",
    valueColor: "text-[#2C2C2C]",
  },
  {
    title: "Misaligned",
    value: "0.7 - 1.0",
    border: "border-[#FFD3CA]",
    titleColor: "text-[#F0431D]",
    valueColor: "text-[#F0431D]",
  },
];

export default function EasyExplorer() {

  const [fields, setFields] = useState([
    { label: "Active Positions", value: "30" },
    { label: "Joins in Period", value: "5" },
  ]);
  const [gaugeValue, setGaugeValue] = useState(0);

  const [result, setResult] = useState<any>(null);



  // useEffect(() => {
  //   setGaugeValue(result ? Number(result.api) * 100 : 0);
  // }, [result,gaugeValue]);

const handleChange = (index: number, value: string) => {
  // Allow empty while typing
  if (value === "") {
    const updated = [...fields];
    updated[index].value = "";
    setFields(updated);
    return;
  }

  const numberValue = Number(value);

  if (numberValue < 1) return;

  if (numberValue > 999) return;

  const updated = [...fields];
  updated[index].value = value;
  setFields(updated);
};

  const handleCalculate = () => {
    const D = Number(fields[0].value);
    const S = Number(fields[1].value);

    if (!D) return;

    const apiValue = (D - S) / D;
    const api = Math.max(0, Math.min(1, apiValue));
    const score = api.toFixed(2);

    setGaugeValue(api);

    let rangeState = "";
    if (api <= 0.4) rangeState = "Aligned";
    else if (api <= 0.7) rangeState = "Drifting";
    else rangeState = "Misaligned";

    let message = "";
    let state = "";
    let window = "";

    if (D > S) {
      message =
        "Hiring demand remains unfulfilled. Current velocity is insufficient to maintain alignment.";
      state = api >= 0.7 ? "Severe" : "Emerging";
      window = api >= 0.7 ? "Critical" : "Narrowing";
    } else if (D === S) {
      message =
        "Hiring demand and joins are aligned. Current system is stable.";
      state = "Aligned";
      window = "Stable";
    } else {
      message =
        "Hiring demand has been met. Join volume exceeds current demand—review allocation.";
      state = "Aligned";
      window = "Stable";
    }

    setResult({
      api: score,
      percent: Math.round(api * 100),
      rangeState,
      message,
      state,
      window,
    });
  };

  //  setGaugeValue(result ? Number(result.api) * 100 : 0);
  // const needleRotation = (gaugeValue / 100) * 180 - 90;

  return (
    <div className="mx-auto">
      {/* Header */}
      <h1 className=" text-h2 font-extrabold text-[#1B1C17]">Easy Explorer</h1>
      <p className="mt-sm text-base font-bold text-[#1B1C17]">
        The Hiring Alignment Explorer
      </p>

      {/* Points */}
      <div className="mt-md space-y-sm">
        {explorerPoints.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-xs text-base text-[#1B1C17]"
          >
            <img
              src="/icons/tick-gradient-icon.svg"
              alt="tick icon"
              className="size-iconsize-sm p-[0.1%] mt-[0.5%] sm:mt-0"
            />
            <span className="font-medium text-base">{point}</span>
          </div>
        ))}
      </div>

      {/* Main Layout */}
      <div className="mt-md flex flex-col-reverse md:flex-row  gap-lg">
        {/* Left Card */}
        <div className="md:w-[65%] rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Index
          </h3>

          <CommonGauge value={gaugeValue} mode="decimal" />

          {/* Range Boxes */}
          <div className="mt-md grid grid-cols-1 gap-md md:grid-cols-3">
            {rangeCards.map((card, index) => {
              const isActive = result?.rangeState === card.title;

              return (
                <div
                  key={index}
                  className={`rounded-md border p-sm transition-all duration-300 ${
                    isActive
                      ? card.title === "Misaligned"
                        ? "border-[#F0431D] bg-[#FFF4F2]"
                        : card.title === "Drifting"
                          ? "border-[#0668E1] bg-[#EEF6FF]"
                          : "border-[#2B9B43] bg-[#E7FFF3]"
                      : "border-[#D3E6FF] bg-white"
                  }`}
                >
                  <p
                    className={`text-xl font-bold ${
                      isActive
                        ? card.title === "Misaligned"
                          ? "text-[#F0431D]"
                          : card.title === "Drifting"
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
                        ? card.title === "Misaligned"
                          ? "text-[#F0431D]"
                          : card.title === "Drifting"
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

          {result && (
            <div
              className={`mt-md rounded-md border p-md ${
                result.rangeState === "Misaligned"
                  ? "border-[#FFD3CA] bg-[#FFF4F2] text-[#F0431D]"
                  : result.rangeState === "Drifting"
                    ? "border-[#79ace4] bg-[#EEF6FF] text-[#0668E1]"
                    : "border-[#9ADFA9] bg-[#E7FFF3] text-[#2B9B43]"
              }`}
            >
              <p className="text-base font-bold">
                Current load score: {result.api}
              </p>

              <p className="mt-2 text-xl font-medium">
                {result.percent}% of hiring demand remains unbalanced by Joins.
              </p>

              <p className="text-xl font-medium">{result.message}</p>
            </div>
          )}

          {/* Footer Text */}
          {result && (
            <div className="mt-sm md:flex gap-lg text-xl font-medium inline-block ">
              <div>
                <span className="font-bold">State:</span>{" "}
                <span className="text-[#2C2C2C]">{result.state}</span>
              </div>

              <div className="mt-sm md:mt-0">
                <span className="font-bold">Intervention Window:</span>{" "}
                <span className="text-[#2C2C2C]">{result.window}</span>
              </div>
            </div>
          )}
        </div>

        {/* Right Card */}
        <div className="md:w-[35%] rounded-md h-fit border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
          <h3 className="text-base font-bold text-[#2C2C2C]">
            Alignment Pressure Calculator
          </h3>

          <div className="mt-6 space-y-4">
            {fields.map((field, index) => (
              <div key={index}>
                <label className="text-xl font-medium text-[#2C2C2C]">
                  {field.label}
                </label>

                <input
                  type="number"
             
  min={1}
  max={999}
  onWheel={(e) => e.currentTarget.blur()}
                  value={fields[index].value}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="mt-1 h-[44px] w-full rounded-[8px] border border-[#EEEEEE] px-5 text-xl outline-none"
                />
              </div>
            ))}

            <button
              onClick={handleCalculate}
              className="h-[46px] w-full rounded-[8px] bg-[#0668E1] text-xl font-bold text-white"
            >
              Calculate Alignment Pressure
            </button>

            {/* {result && (
              <div className="mt-4 rounded-[8px] border border-[#D1E4FF] bg-[#EEF6FF] p-4">
                <p className="text-xl font-bold text-[#0668E1]">
                  API = {result.api}
                </p>

                <p className="mt-1 text-[16px] text-[#2C2C2C]">
                  result: {result.api}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
