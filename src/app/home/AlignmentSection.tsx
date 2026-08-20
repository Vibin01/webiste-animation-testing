"use client";

import Image from "next/image";

export default function AlignmentSection() {

const alignmentCards = [
  {
    id: "within",
    type: "side",
    icon: "/home/icons/alignment-within-icon.svg",
    label: "Alignment Within",
    title: (
      <>
        Head, Heart, Hand.
        <br />
        In Harmony.
      </>
    ),
    description:
      "Understanding, intention, and action remain coherent as conditions change.",
  },
  {
    id: "intelligence",
    type: "center",
    icon: "/home/icons/star-white-icon.svg",
    label: "Alignment Intelligence",
    title: (
      <>
        Alignment Within. Alignment
        <br className="hidden sm:block" />
        Across. Actively Sustained.
      </>
    ),
    description:
      "Recognizes shifts in alignment, evaluates coherence, and enables timely adaptation before continuity breaks.",
  },
  {
    id: "across",
    type: "side",
    icon: "/home/icons/alignment-across-icon.svg",
    label: "Alignment Across",
    title: (
      <>
        Employers. Recruiters.
        <br />
        Candidates. In Sync.
      </>
    ),
    description:
      "Expectations, priorities, and actions remain coordinated across hiring interactions.",
  },
];

  return (
    <section className=" bg-white py-[5%]">
      <div className="mx-auto w-full ">
        {/* Header */}
        <div className="text-center">
          <p className=" text-xl text-primary font-bold">
            HOW ALIGNMENT PRESERVES CONTINUITY
          </p>

          <h1 className="text-h2 font-extrabold ">
            Within. Across. Actively Sustained.
          </h1>

          <p className="mx-auto font-medium text-base">
            Alignment is the structural condition that enables behavioural
            continuity to remain coherent through change.
          </p>
        </div>

    <div className="mt-xl grid grid-cols-1 items-stretch gap-md md:grid-cols-[1fr_1.1fr_1fr]">
  {alignmentCards.map((card) => {
    const isCenter = card.type === "center";

    return (
      <article
        key={card.id}
        className={
          isCenter
            ? "flex scale-105 flex-col items-center rounded-md bg-[linear-gradient(193.87deg,#0075FF_25.37%,#004BA6_81.69%)] p-md text-center text-white shadow-web-medium"
            : "flex  flex-col items-center justify-between rounded-md border border-[#DEEDFF] bg-white p-md text-center shadow-web-medium"
        }
      >
        {/* Icon */}
        <div
          className={
            isCenter
              ? "mb-sm grid p-sm scale-110 place-items-center rounded-full bg-[#0668E166]"
              : "mb-sm grid p-sm  place-items-center rounded-full bg-[#edf5ff]"
          }
        >
          <Image
            src={card.icon}
            alt={card.label}
            width={58}
            height={58}
            className={isCenter
              ? "object-contain size-iconsize-xl":"object-contain size-iconsize-md"}
          />
        </div>

        {/* Label */}
        <p
          className={
            isCenter
              ? "mb-xs text-xl font-bold"
              : "mb-xs text-xl font-bold text-[#006bea]"
          }
        >
          {card.label}
        </p>

        {/* Title */}
        <h2
          className={
            isCenter
              ? "text-h5 font-bold leading-tight"
              : "text-h5 font-bold leading-tight"
          }
        >
          {card.title}
        </h2>

        {/* Description */}
        <p
          className={
            isCenter
              ? "mt-xs text-xl font-medium px-md"
              : "mt-xs text-xl font-medium px-[8%]"
          }
        >
          {card.description}
        </p>
      </article>
    );
  })}
</div>

        {/* Bottom message */}
        <div className="mt-xl flex flex-col items-center justify-center gap-xs rounded-md border border-[#d8e8fc] bg-white px-5 py-[13px] text-center shadow-[0_7px_24px_rgba(27,104,187,0.07),0_1px_3px_rgba(27,104,187,0.04)]">
          <strong className="text-base font-bold">
            Connect EC makes Alignment Within and Alignment Across visible and
            actionable.
          </strong>

          <span className="text-base font-medium">
            It reveals emerging drift early—enabling intervention before
            continuity breaks and hiring outcomes fail.
          </span>
        </div>
      </div>
    </section>
  );
}