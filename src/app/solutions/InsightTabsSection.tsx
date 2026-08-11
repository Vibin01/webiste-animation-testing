"use client";

import { useRef, useState } from "react";

interface InsightTabItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  contentTitle: string;
  paragraphs: string[];
  listTitle?: string;
  bullets?: string[];
  footerLines?: string[];
}
type InsightTabsSectionProps = {
  data: InsightTabItem[];
};

export default function InsightTabsSection({ data }: InsightTabsSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(data[0]?.id ?? 1);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const activeItem = data.find((item) => item.id === activeTab) ?? data[0];

  return (
    <section className="w-full">
      <div className="flex flex-col sm:items-start gap-md sm:flex-row">
        {/* Left Tabs */}
        <div
          ref={scrollContainerRef}
          className=" -mx-[5%] md:-mx-0 pl-[5%] md:pl-0 flex gap-sm overflow-x-auto py-md sm:py-0 scrollbar-hidden sm:w-[32%] sm:flex-col sm:overflow-visible"
        >
          {data.map((item) => {
            const isActive = activeItem.id === item.id;

            return (
              <button
                key={item.id}
                type="button"
                ref={(el) => {
                  tabRefs.current[item.id] = el;
                }}
                onClick={() => {
                  setActiveTab(item.id);

                  const container = scrollContainerRef.current;
                  const element = tabRefs.current[item.id];

                  if (container && element) {
                    const containerWidth = container.offsetWidth;
                    const elementLeft = element.offsetLeft;
                    const elementWidth = element.offsetWidth;

                    container.scrollTo({
                      left: elementLeft - containerWidth / 2 + elementWidth / 2,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative flex flex-shrink-0 basis-[90%] items-center gap-xs rounded-md border p-md text-left shadow-mobile-small md:shadow-web-small transition-all sm:basis-auto ${
                  isActive
                    ? "border-[#0668E1] bg-[#0668E1] text-white"
                    : "border-[#D3E6FF] bg-white text-[#1B1C17]"
                }`}
              >
                <div
                  className={`flex items-center justify-center rounded-sm bg-[#E6F0FC] w-[48px] h-[48px] sm:w-[3vw] sm:h-[3vw] ${
                    isActive ? "bg-[#E6F0FC]" : "bg-[#E6F0FC]"
                  }`}
                >
                  <img src={item.icon} alt="icon" />
                </div>

                <div>
                  <h3
                    className={`text-h6 font-bold ${
                      isActive ? "text-white" : "text-[#1B1C17]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xl font-medium ${
                      isActive ? "text-white" : "text-[#1B1C17]"
                    }`}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Content */}
        <div className="rounded-lg bg-white p-md border border-[#D3E6FF] shadow-mobile-medium md:shadow-web-medium  min-h-[450px]  sm:w-[69%]">
          <h2 className="mb-lg text-h2 font-extrabold text-[#0668E1]">
            {activeItem.contentTitle}
          </h2>

          <div className="space-y-xs">
            {activeItem.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-xl font-medium">
                {paragraph}
              </p>
            ))}
          </div>

          {activeItem.listTitle && (
            <div className="mt-md text-base font-bold">
              {activeItem.listTitle}
            </div>
          )}

          {activeItem.bullets && activeItem.bullets.length > 0 && (
            <ul className="mt-sm space-y-xs">
              {activeItem.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-xs">
                  <img
                    src="/icons/arrow-step-blue-icon.svg"
                    alt="icon"
                    className="size-iconsize-sm"
                  />
                  <span className="text-xl font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {activeItem.footerLines && activeItem.footerLines.length > 0 && (
            <div className="mt-sm space-y-xs">
              {activeItem.footerLines.map((line, index) => (
                <p key={index} className="text-xl font-medium">
                  {line}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
