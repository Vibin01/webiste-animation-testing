

type AlignmentComparisonData = {
  title: string;
  cards: {
    icon: string;
    title: string;
    description: string[];
    points: string[];
    footer: string[];
  }[];
};

export default function AlignmentSection({data}: {data: AlignmentComparisonData}) {
  return (
    <section className="w-full">
      <h2 className="text-h2 font-extrabold  text-[#1B1C17]">
        {data.title}
      </h2>

      <div className="mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
        {data.cards.map((card, index) => {

          return (
            <div
              key={index}
              className="rounded-md border border-[#D3E6FF] bg-white p-md md:p-sm shadow-mobile-small md:shadow-web-small"
            >
              <div className="flex items-center gap-xs">
                <div className="flex size-iconsize-md items-center justify-center rounded-sm bg-[#EAF4FF]">
                  <img src={card.icon} alt={`${card.title} icon`} className="size-iconsize-sm object-contain" />
                </div>

                <h3 className="text-h5 font-bold text-[#1B1C17]">
                  {card.title}
                </h3>
              </div>

              <div className="mt-md space-y-md">
                {card.description.map((text, i) => (
                  <p
                    key={i}
                    className="text-xl font-medium text-[#1B1C17]"
                  >
                    {text}
                  </p>
                ))}
              </div>

              <ul className="mt-md space-y-sm">
                {card.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-xs text-xl font-medium text-[#1B1C17]"
                  >
                   <img
                      src="/icons/tick-gradient-icon.svg"
                      alt="icons tick"
                      className="size-iconsize-sm p-[0.1%] object-contain"
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-md space-y-sm">
                {card.footer.map((text, i) => (
                  <p
                    key={i}
                    className={`text-xl text-[#1B1C17] ${
                      i === card.footer.length - 1
                        ? "font-extrabold"
                        : "font-medium"
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}