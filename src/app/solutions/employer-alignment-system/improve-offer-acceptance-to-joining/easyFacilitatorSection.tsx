const facilitatorCards = [
  {
    title: "DOC Vault",
    img: "/solutions/employer/doc-vault.svg",
    fileCount: "12 Files",
    points: [
      "Instant delivery removes friction",
      "Structured communication clarifies.",
      "Timely access reduces uncertainty",
    ],
  },
  {
    title: "Pix Vault",
    img: "/solutions/employer/pix-vault.svg",
    fileCount: "26 Files",
    points: [
      "Visual storytelling builds connection",
      "Authentic culture signals belonging",
      "Early familiarity reduces hesitation",
    ],
  },
  {
    title: "Vid Vault",
    img: "/solutions/employer/vid-vault.svg",
    fileCount: "5 Files",
    points: [
      "Leadership presence builds trust",
      "Immersive storytelling engages",
      "Humanized communication connects",
    ],
  },
];

export default function EasyFacilitatorSection() {
  return (
    <div className="mx-auto">
      <h1 className="text-h2 font-extrabold text-[#1B1C17]">
        Easy Facilitator
      </h1>

      <p className="mt-sm text-base font-bold text-[#1B1C17]">
        Post-Offer Engagement System
      </p>

      <div className="mt-md grid grid-cols-1 gap-[2%] md:grid-cols-3">
        {facilitatorCards.map((card, index) => (
          <div
            key={index}
            className="flex h-[406px]- w-full flex-col gap-sm rounded-md border border-[#D3E6FF] bg-white p-[4%] shadow-mobile-medium md:shadow-web-medium"
          >
            <div className=" w-full rounded-sm bg-[#F9F9F9] p-[3%]">
              <img src={`${card.img}`} alt={`${card.title}`} className="" />
            </div>

            <div className="space-y-sm text-xl">
              {card.points.map((point, pointIndex) => (
                <div key={pointIndex} className="flex items-center gap-xs">
                  <img
                    src={"/icons/tick-gradient-icon.svg"}
                    alt="tick icon"
                    className="size-iconsize-sm p-[0.1%]"
                  />
                  <span className="text-xl font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
