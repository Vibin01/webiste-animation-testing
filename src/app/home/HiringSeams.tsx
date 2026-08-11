"use client";
import { useRef, useState } from "react";

type CardItem = {
  dimension: string;
  interaction: string;
  outcome: string;
  image: string;
  alt:string;
};

const cardsData: CardItem[] = [
  {
    image: "/home/candidate-employer-alignment-in-hiring.svg",
    alt:"Candidate and employer alignment in hiring decisions and expectations",
    dimension: "Expectation ↔ Direction",
    interaction: "Candidate realities meet employer-designed roles",
    outcome: "Expectation alignment and decision confidence",
  },
  {
    image: "/home/recruiter-candidate-coordination-in-hiring.svg",
    alt:"Recruiter and candidate coordination for interview engagement and communication",
    dimension: "Execution ↔ Expectation",
    interaction: "Recruiter coordination meets candidate engagement",
    outcome: "Communication continuity and interview reliability",
  },
  {
    image: "/home/employer-recruiter-alignment-in-execution.svg",
    alt:"Employer direction and recruiter execution alignment in hiring process",
    dimension: "Direction ↔ Execution",
    interaction: "Employer direction actively guides recruiting activity",
    outcome: "Strategic priority alignment and recruiting execution",
  },
];

function SeamCard({ item }: { item: CardItem }) {

  return (
    <div className="flex-shrink-0 basis-[90%] sm:basis-0 bg-white border border-[#D3E6FF] rounded-md p-sm shadow-mobile-medium md:shadow-web-medium">
      
      {/* Image */}
      <div className="w-full flex items-center justify-center">
        <img src={item.image} alt={item.alt} className="w-full h-full object-contain" />
      </div>

      {/* Content */}
      <div className="mt-sm ">
        <p className="font-bold text-xl">Seam</p>
        <p className="mt-xs text-xl font-medium">{item.dimension}</p>

        <p className="font-bold text-xl mt-sm">
           Interaction
        </p>
        <p className="mt-xs text-xl font-medium">
          {item.interaction}
        </p>

        <p className="font-bold text-xl text-[#0668E1] mt-sm">Outcome</p>
        <p className="mt-xs text-xl font-medium">
          {item.outcome}
        </p>
      </div>
    </div>
  );
}

export default function HiringSeams() {

  const scrollRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState(0);

const handleScroll = () => {
  if (!scrollRef.current) return;

  const container = scrollRef.current;
  const cardWidth = container.clientWidth * 0.9;

  setActiveIndex(Math.round(container.scrollLeft / cardWidth));
};

  return (
      <div className="w-full">

        {/* Heading */}
        <h1 className="text-h2 font-extrabold mb-1">
          The Alignment Challenge
        </h1>
        <h3 className="text-base font-bold mb-sm">Seams of the Hiring System</h3>
          


        {/* Cards */}
        <div ref={scrollRef}
  onScroll={handleScroll} className=" flex overflow-x-scroll py-md sm:overflow-x-visible scrollbar-hidden sm:grid sm:grid-cols-3 gap-md">
          {cardsData.map((item, index) => (
            <SeamCard key={index} item={item} />
          ))}
        </div>
<div className="mt-4 flex justify-center gap-2 sm:hidden">
  {cardsData.map((_, index) => (
    <div
      key={index}
      className={`transition-all duration-300 rounded-full ${
        activeIndex === index
          ? "h-2 w-6 bg-[#0668E1]"
          : "h-2 w-2 bg-[#BFD8FF]"
      }`}
    />
  ))}
</div>
      
      </div>
  );
}