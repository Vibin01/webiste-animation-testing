import Image from "next/image";

const audienceCards = [
  {
    icon: "/resources/alignment-test/candidate-round-icon.svg",
    title: "For Candidates",
    description: "Navigate interviews better",
  },
  {
    icon: "/resources/alignment-test/recruiters-round-icon.svg",
    title: "For Recruiters",
    description: "Reduce drop-offs and wrong hires",
  },
  {
    icon: "/resources/alignment-test/employer-round-icon.svg",
    title: "For Employers",
    description: "Improve role clarity and team fit",
  },
];

export default function HiringAlignmentBreakSection() {
  return (
    <section className="w-full py-[5%]">
      <div className="w-full text-center">
        
        {/* Heading */}
        <h2 className="text-h1 font-extrabold text-[#0668E1]">
         Test Your Alignment Within
        </h2>

        {/* Subtitle */}
        <p className=" text-h6 font-bold text-[#1B1C17]">
          Understand how your decisions shift across real hiring situations.
        </p>

        {/* Cards */}
        <div className="mt-lg flex flex-col gap-sm px-sm md:flex-row justify-center">
          {audienceCards.map((card, index) => (
            <div
              key={index}
              className="md:w-[28%] rounded-md border border-[#D0E5FF] bg-white p-sm shadow-mobile-small md:shadow-web-small"
            >
              
              {/* Icon */}
              <div className="flex size-iconsize-md  items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={28}
                  height={28}
                  className="size-iconsize-md "
                />
              </div>

              {/* Title */}
              <h3 className="mt-sm text-xl font-bold text-[#1B1C17] text-left">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xl font-medium text-[#2C2C2C] text-left">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}