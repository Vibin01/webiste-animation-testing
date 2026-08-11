

export default function AlignmentBreaksDiagram() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <h2 className="text-h2 font-extrabold text-[#1B1C17]">
          Where Alignment Breaks
        </h2>

        <div className="relative flex items-center justify-center mt-sm p-md  overflow-hidden rounded-lg bg-[url('/background/bg-alignment-breaks.svg')] bg-white border border-[#F2F2F2] shadow-mobile-medium md:shadow-web-medium">
    
          {/* Center triangle image */}
          {/* <div className=" flex justify-center items-center h-full">
            <div className=" relative h-[40vh]">
          {cornerCards.map((card) => (
            <CornerBox key={card.position} {...card} />
          ))}
            <img
              src="/home/Triangle.svg"
              alt="Alignment triangle diagram"
              className="h-full w-auto object-contain"
            />
            </div>
          </div> */}
          <div>
          <img
            src="/home/hiring-alignment-gaps-between-recruiter-employer-candidate.svg"
            alt="Diagram showing alignment gaps between recruiter, employer, and candidate in the hiring process"
            className="h-full sm:h-[60vh] w-auto object-cover scale-[105%] sm:scale-none"
            />
            </div>
        </div>
      </div>
    </section>
  );
}