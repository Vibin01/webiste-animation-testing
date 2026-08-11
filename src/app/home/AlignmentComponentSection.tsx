export default function AlignmentCompoundsSection() {
  const cards = [
    {
      icon: "/home/icons/visibility-enables-intervention-icon.svg",
      title: "Visibility enables intervention",
      class: "h-[clamp(3.5rem,5.4vw,12rem)] w-[75%] lg:w-auto mb-7 lg:mb-0",
      pClass:"mb-1 md:mb-0",
      iconSize: "size-[clamp(2rem,1.4vw,10rem)]",
    },
    {
      icon: "/home/icons/intervention-sharpens-strategy-icon.svg",
      title: "Intervention sharpens strategy",
      class: "h-[clamp(4rem,6.5vw,15rem)] w-[80%] lg:w-auto mb-8 lg:mb-0",
      pClass:"mt-1",
      iconSize: "size-[clamp(2.5rem,2.8vw,13rem)]",
    },
    {
      icon: "/home/icons/strategy-improves-decisions-icon.svg",
      title: "Strategy improves decisions",
      class: "h-[clamp(4.5rem,8.5vw,18rem)] w-[85%] lg:w-auto mb-10 lg:mb-0",
      pClass:"mt-2",
      iconSize: "size-[clamp(3rem,4vw,16rem)]",
    },
    {
      icon: "/home/icons/decisions-drive-execution-icon.svg",
      title: "Decisions drive execution",
      class: "h-[clamp(5rem,10.5vw,21rem)] w-[90%] lg:w-auto mb-11 lg:mb-0",
      pClass:"mt-3 md:mt-5",
      iconSize: "size-[clamp(3.5rem,5.5vw,19rem)]",
    },
    {
      icon: "/home/icons/execution-builds-momentum-icon.svg",
      title: "Execution builds momentum",
      class: "h-[clamp(5.5rem,12.5vw,24rem)] w-[95%] lg:w-auto mb-12 lg:mb-0",
      pClass:"mt-4 md:mt-7",
      iconSize: "size-[clamp(4rem,6.5vw,21rem)] ",
    },
    {
      icon: "/home/icons/momentum-compounds-results-icon.svg",
      title: "Momentum compounds results",
      class: "h-[clamp(6rem,14.5vw,27rem)] w-full",
      pClass:"mt-5 md:mt-9",
      iconSize: "size-[clamp(4.5rem,7.5vw,24rem)]",
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-[5%]">
      <div className="mx-auto w-full">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-h2 font-extrabold text-[#1B1C17] ">
            Alignment Compounds Outcomes Accelerate
          </h2>

          <p className="mt-1 font-bold text-[#1B1C17] text-base">
            Closing one gap strengthens the system.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-[clamp(3rem,6vw,7rem)]
            grid
            lg:grid-cols-6
            
            lg:items-end
            
            md:gap-[clamp(0.5rem,1.1vw,1.25rem)]
          "
        >
          {cards.map((card, index) => {
            const words = card.title.split(" ");
const lastWord = words.pop();
const remainingText = words.join(" ");
            return (
            
            <div
              key={index}
              className={`
                relative
              mx-auto lg:mx-0
                lg:w-full
                ${card.class}
                rounded-md
                border
                border-[#D8E8FF]
                bg-white
                p-sm
                
              `}
            >
              {/* Floating Icon */}
              <div
                className={`
                  absolute
                  left-1/2
                  top-0
                  -translate-x-1/2
                  -translate-y-1/2
                  ${card.iconSize}
                `}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex h-full items-center justify-center">
  <p
    className={`
      ${card.pClass}
      text-center
      ${
        card.highlight
          ? "text-base font-bold text-[#0668E1]"
          : "text-[#1B1C17] text-xl font-medium"
      }
    `}
  >
    {remainingText}{" "}
    <span className="font-bold">{lastWord}</span>
  </p>
</div>
            </div>
)})}
        </div>

        {/* Bottom Pill */}
        <div className="mt-xl flex justify-center">
          <div
            className="
              flex
              w-full
              md:w-[80%]
              items-center
              justify-center
              rounded-full
              bg-[#0668E1]
              p-md
              
            "
          >
            <div className="text-center flex justify-center items-center gap-xs ">
              <img
                src="/home/icons/responsive-insights-icon.svg"
                alt="icon"
                className="size-iconsize-sm scale-125"
              />
              <p className="text-white text-base font-medium">
                Seamless Yield is no longer chased —
                <span className="italic font-bold">
                  {" "}
                  it is produced by the system.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
