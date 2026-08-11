export default function ActionStepsCard() {
  const steps = [
    { icon: "/home/icons/aspire.svg", label: "Aspire" },
    { icon: "/home/icons/align.svg", label: "Align" },
    { icon: "/home/icons/achieve.svg", label: "Achieve" },
  ];

  return (
    <div className="w-full rounded-md border border-[#DEEDFF] p-md bg-white shadow-mobile-small md:shadow-web-small">
      <div className="flex flex-col gap-md md:grid md:grid-cols-[1.3fr_1fr_1.1fr_0.7fr] md:items-center">
        <div className="flex items-end gap-xs ">
          <div className="relative h--[clamp(80px,calc(130/_var(--width)_*_100vw),250px)]">
            <img  src="/home/icons/a-action.svg" alt="A Action" className=" h-full w-full object-contain" />
          </div>

          <p className=" text-h5 font-bold">
            in Action
          </p>
        </div>
<div className="grid grid-cols-3 gap-sm mt-md md:mt-0 md:contents">
        {steps.map((item,index) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center ${index===0?"border-l-0 md:border-l":""} border-l border-[#D6E8FF]`}
          >
            <div className="w-full flex flex-col pl-md">
            <div className="flex size-iconsize-xl  items-center justify-center rounded-sm border border-[#D6E8FF] bg-white text-[#0668E1] shadow-mobile-small md:shadow-web-small">
              <img src={item.icon} alt={item.label} className="size-iconsize-md p-[2%]" />
            </div>

            <p className="mt-xs text-h5 font-bold">
              {item.label}
            </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}