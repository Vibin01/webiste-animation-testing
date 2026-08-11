"use client";

import Image from "next/image";
import { MdCheck } from "react-icons/md";

interface WorkflowStep {
  id: number;
  text: string;
};

interface WorkflowPanel  {
  title: string;
  subtitle: string;
  signals: string[];
  description: string;
};

interface WorkflowAlignmentSectionData  {
  title: string;
  subtitle: string;
  footerText: string;
  steps: WorkflowStep[];
  leftPanel: WorkflowPanel;
  rightPanel: WorkflowPanel;
};

function CheckPill() {
  return (
    <div className="flex items-center justify-center rounded-full ">
      <img src={"/icons/tick-gradient-icon.svg"} alt="tick circle" className="size-[14px] md:size-iconsize-sm  p-[2%]" />
    </div>
  );
}

export default function WorkflowAlignmentSection({
  data 
}: { data: WorkflowAlignmentSectionData }) {
  return (
    <div className="mx-auto w-full">
      <h2 className="text-h2 font-extrabold">{data.title}</h2>

      <p className="mt-lg text-base font-bold">{data.subtitle}</p>

      <div className="mt-sm grid grid-cols-1 gap-md sm:gap-sm md:grid-cols-4">
        {data.steps.map((step) => (
          <div
            key={step.id}
            className="relative rounded-md border-2 border-[#D3E6FF] bg-white py-md sm:p-sm shadow-mobile-small md:shadow-web-small"
          >
            <div className="absolute left-0 top-0 flex size-iconsize-sm items-center justify-center rounded bg-[#0668E1] text-lg font-bold text-white">
              {step.id}
            </div>

            <p className="pl-lg text-xl font-medium py-">{step.text}</p>
          </div>
        ))}
      </div>

      {/* <p className="mt-sm text-xl font-semibold">{data.footerText}</p> */}

      <section className="mt-lg flex justify-center w-full bg-white">
        <div className="relative grid  w-full max-w-[320px] md:max-w-full  grid-cols-1 md:grid-cols-2 items-stretch gap-md  ">
          {/* LEFT PANEL */}
          <div
            className="relative  h-[400px] md:h-full px-[5%] pt-[8%] pb-[20%] md:p-[4%] flex w-full flex-col justify-between md:border md:border-[#C3DEFF] md:border-r-0 rounded-lg bg-[url('/background/rectangle-left-mobile.svg')] md:bg-[url('/background/rectangle-left.svg')] bg-no-repeat bg-center bg-[length:100%_auto] text-white"
          >
            <h3 className="text-base font-bold fon">{data.leftPanel.title}</h3>

            <h3 className="mt-md md:mt-[2%] text-xl font-bold">
              {data.leftPanel.subtitle}
            </h3>

            <div className="mt-md md:mt-[1.5%] flex gap-[3%]">
              <div className="flex flex-col items-center justify-between gap-[1.5vw] rounded-full bg-white p-[2%]">
                <CheckPill />
                <CheckPill />
                <CheckPill />
              </div>

              <div className="flex flex-col gap-[1.5vw] py-[1.5%]">
                {data.leftPanel.signals.map((item, i) => (
                  <p key={i} className="text-[12px] md:text-xl font-medium mt-[2%]">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <p className="mt-[2%] mr-auto md:max-w-[80%] py-[5%] md:py-[2%] text-xl font-medium">
              {data.leftPanel.description}
            </p>
          </div>

          {/* CENTER ICON */}
          <div className="absolute left-1/2 top-1/2 z-20 flex w-[25%] md:w-[10%] -translate-x-1/2 -translate-y-1/2 justify-center">
            <Image
              src={"/icons/ec-connect-icon.svg"}
              width= "60"
                  height= "60"
                  alt= "EC Connect Icon"
              className="size-[100%]"
            />
          </div>

          {/* RIGHT PANEL */}
          <div
            className="relative h-[400px] md:h-full flex flex-col justify-between px-[5%] pb-[5%] pt-[20%] md:p-[4%] w-full rounded-lg md:border border-[#C3DEFF] md:border-l-0 bg-[url('/background/rectangle-right-mobile.svg')] md:bg-[url('/background/rectangle-right.svg')] bg-no-repeat bg-center bg-[length:100%_auto] text-white"
          >
            <h3 className="text-right text-base font-bold">
              {data.rightPanel.title}
            </h3>

            <h3 className="mt-md md:mt-[2%] text-right text-xl font-bold">
              {data.rightPanel.subtitle}
            </h3>

            <div className="mt-md md:mt-[1.5%] flex justify-end gap-[3%]">
              <div className="flex flex-col items-end gap-[1.5vw] py-[1.5%] text-right">
                {data.rightPanel.signals.map((item, i) => (
                  <p key={i} className=" text-[12px] md:text-xl font-medium">
                    {item}
                  </p>
                ))}
              </div>

              <div className="flex flex-col items-center justify-between gap-[1.5vw] rounded-full bg-white p-[2%]">
                <CheckPill />
                <CheckPill />
                <CheckPill />
              </div>
            </div>

            <p className="mt-[2%] ml-auto md:max-w-[80%] py-[5%] md:py-[2%] text-right text-xl font-medium">
              {data.rightPanel.description}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}