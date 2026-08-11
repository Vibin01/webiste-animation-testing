
import Image from "next/image";

const flowSteps = [
  "Application response",
  "Interview Update",
  "Offer Communication",
];

const leftCards = [
  {
    id: 1,
    title: "Recruiters send",
    subtitle: "inconsistent messages",
    position: "top-[18%] left-[9%]",
  },
  {
    id: 3,
    title: "Tone Changes across",
    subtitle: "locations location",
    position: "bottom-[6%] left-[4%]",
  },
];

const rightCards = [
  {
    id: 2,
    title: "Candidates updates vary by",
    subtitle: "recruiter",
    position: "top-[18%] right-[8%]",
  },
  {
    id: 4,
    title: "Candidate experience",
    subtitle: "becomes fragmented",
    position: "bottom-[6%] right-[12%]",
  },
];

function InfoCard({
  id,
  title,
  subtitle,
  className,
}: {
  id: number;
  title: string;
  subtitle: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-[18vw] rounded-md border border-[#D0E5FF] bg-white p-[1%] shadow-mobile-small md:shadow-web-small ${className}`}
    >
      <div className="mb-4 flex size-iconsize-sm items-center justify-center rounded-full bg-[#0B67E9] text-lg font-bold text-white">
        {id}
      </div>

      <p className="text-xl font-semibold">{title}</p>
      <p className="mt-1 text-xl font-medium">{subtitle}</p>
    </div>
  );
}

export default function HiringCommunicationFlow() {
  return (
    <section className="w-full">
      <div className="mx-auto">
        <h2 className="text-center text-h2 font-extrabold">
          Hiring Communication Flow
        </h2>

        <div className="mt-lg flex flex-col md:flex-row flex-wrap items-center justify-center gap-md">
          {flowSteps.map((step, index) => {
            const color = ["bg-[#589AEB]", "bg-[#3886E7]", "bg-[#0668E1]"];
            return (
              
                <div
key={index}
                  className={`relative flex w-[90%] md:w-auto  items-center justify-center px-[5%] py-md md:py-[1.5%] text-center text-base font-bold text-white ${
                    color[index]
                  }`}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10%) 0, 100% 50%, calc(100% - 10%) 100%, 0 100%, 10% 50%)",
                  }}
                >
                  <span className="font-bold text-base px-sm">{step}</span>
                </div>
             
            );
          })}
        </div>

        <p className="mt-10 text-center text-base font-bold">
          Without Structed Communication
        </p>

        <div className="relative mt-8 hidden min-h-[60vh] md:block">
          {leftCards.map((card) => (
            <InfoCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              className={card.position}
            />
          ))}

          {rightCards.map((card) => (
            <InfoCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              className={card.position}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 w-[20vw] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/solutions/employer/communication-flow.svg"
              alt="Hiring communication layered mobile screens"
              width={260}
              height={220}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:hidden">
          <div className="mx-auto w-[80%]">
            <Image
              src="/solutions/employer/communication-flow.svg"
              alt="Hiring communication layered mobile screens"
              width={220}
              height={190}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {[...leftCards, ...rightCards]
            .sort((a, b) => a.id - b.id)
            .map((card) => (
              <div
                key={card.id}
                className="rounded-md border border-[#CFE1F7] bg-[#FFFFFF] px-4 py-3 shadow-mobile-small md:shadow-web-small"
              >
                <div className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#0B67E9] text-[12px] font-bold text-white">
                  {card.id}
                </div>
                <div className="flex items-center">
                  <p className="text-xl font-semibold leading-[1.4]">
                    {card.title} {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
