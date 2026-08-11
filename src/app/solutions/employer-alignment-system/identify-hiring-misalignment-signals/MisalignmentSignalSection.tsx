const misalignmentPoints = [
  "Compensation misalignment",
  "Process misalignment",
  "Role value misalignment",
  "Market misalignment",
];

export default function MisalignmentSignalsCard() {
  return (
    <div className="w-full rounded-md border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
      
      {/* Top Info Box */}
      <div className="w-full rounded-md border border-[#B2D0F6] bg-[#EEF6FF] p-sm text-xl font-medium text-[#0668E1]">
        Decline patterns convert hiring outcomes into{" "}
        <span className="font-bold ">
          measurable alignment signals.
        </span>
        that reveal where intervention may be required.
      </div>

      {/* Title */}
      <div className="mt-md">
        <h3 className="text-base font-bold text-[#2C2C2C]">
          Investigate Misalignment Signals
        </h3>

        {/* Points */}
        <div className="mt-md flex flex-wrap items-center justify-between gap-md">
          {misalignmentPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              
              {/* Number Circle */}
              <div className="flex size-iconsize-sm items-center justify-center rounded-full bg-[#0668E1] text-[12px] font-bold text-white">
                {index + 1}
              </div>

              {/* Text */}
              <p className="text-xl font-medium text-[#2C2C2C]">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}