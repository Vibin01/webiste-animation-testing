"use client";

import React, { useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export type AlignmentHeader = {
  title: string;
  icon?: string;
};

export type AlignmentRow = {
  left: string;
  middle: string;
  right: string;
};

export type AlignmentComparisonData = {
  sectionTitle: string;
  headers: AlignmentHeader[];
  rows: AlignmentRow[];
};
type AlignmentComparisonSectionProps = {
  data: AlignmentComparisonData;
};

function HeaderCard({ item }: { item: AlignmentHeader }) {
  return (
    <div className="relative">
      <div className="absolute -left-[5%] top-[20%] flex h-[38px] w-[34px] items-center justify-center rounded-sm bg-[#0668E1] text-xl text-white sm:h-[3.5vw] sm:w-[3vw]">
        <img src={"/icons/banner-question-icon.svg"} alt="question-icon" className="size-iconsize-sm" />
      </div>

      <div
        className="flex items-center rounded-md bg-[#044AA0] py-[4%] pl-[12%]"
      >
        <span className="text-base font-bold text-white">{item.title}</span>
      </div>
    </div>
  );
}

function DesktopRow({ row }: { row: AlignmentRow }) {
  return (
    <div className="grid grid-cols-3 items-center rounded-sm border-l-[0.5vw] border-[#0668E1] bg-[#E6F0FC] px-[1%] py-[1%]">
      <div className="w-[85%] text-xl font-semibold">{row.left}</div>

      <div className="flex items-center gap-4">
        <div className="h-[8vh] border-l border-[#8CBAF1]"></div>
        <span className="w-[85%] text-xl font-semibold">{row.middle}</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-[8vh] border-l border-[#8CBAF1]"></div>
        <span className="w-[85%] text-xl font-bold text-[#0668E1]">
          {row.right}
        </span>
      </div>
    </div>
  );
}

function MobileHeaderRow({
  headers,
  activeIndex,
}: {
  headers: AlignmentHeader[];
  activeIndex: number;
}) {
  return (
    <div
      className="grid w-[240%] grid-cols-3 bg-white px-[5%] gap-4 transition-transform duration-300 ease-in-out"
      style={{
        transform: `translateX(-${activeIndex * 30}%)`,
      }}
    >
      {headers.map((item, index) => (
        <div key={index} className="relative min-w-0 ml-1.5">
          <div className="absolute -left-[12px] top-1/2 z-10 flex h-[32px] w-[28px] -translate-y-1/2 items-center justify-center rounded-[4px] bg-[#0A6BEB] text-sm text-white">
                    <img src={"/icons/banner-question-icon.svg"} alt="question-icon" className="size-iconsize-sm" />
          </div>

          <div className="flex min-h-[54px] items-center rounded-[12px] bg-[#044AA0] py-3 pl-7 pr-3">
            <span className="line-clamp-2 text-xl font-bold leading-[1.15] text-white">
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MobileRow({ row }: { row: AlignmentRow }) {
  return (
    <div className="grid w-[260%] grid-cols-3 overflow-hidden rounded-md bg-[#E6F0FC]">
      <div className="border-l-[6px] flex items-center border-[#0668E1] px-[4%] py-md">
        <p className="text-xl font-semibold">
          {row.left}
        </p>
      </div>

      <div className="px-[2%] py-5">
        <div className="h-full border-l flex items-center border-[#8CBAF1] pl-4">
          <p className="text-xl font-semibold ">
            {row.middle}
          </p>
        </div>
      </div>

      <div className="px-[2%] py-5">
        <div className="h-full border-l flex items-center border-[#8CBAF1] pl-4">
          <p className="text-xl font-bold text-[#0668E1]">
            {row.right}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobilePagination({
  current,
  total,
  onChange,
}: {
  current: number;
  total: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(current - 1, 0))}
        disabled={current === 0}
        className={`flex h-11 w-11 items-center justify-center rounded-full text-2xl ${
          current === 0
            ? "bg-[#A9C7F2] text-white"
            : "bg-[#0668E1] text-white"
        }`}
        aria-label="Previous"
      >
        <FaArrowLeft className="size-iconsize-md"/>
      </button>

      <button
        type="button"
        onClick={() => onChange(Math.min(current + 1, total - 1))}
        disabled={current === total - 1}
        className={`flex h-11 w-11 items-center justify-center rounded-full ${
          current === total - 1
            ? "bg-[#A9C7F2] text-white"
            : "bg-[#0668E1] text-white"
        }`}
        aria-label="Next"
      >
        <FaArrowRight className="size-iconsize-md"/>
      </button>
    </div>
  );
}



export default function AlignmentComparisonSection({
  data,
}: AlignmentComparisonSectionProps) {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  return (
    <section>
      <h1 className="mb-6 text-h2 font-extrabold">{data.sectionTitle}</h1>

      {/* Desktop */}
      <div
        className="hidden sm:block"
      >
        <div className="grid grid-cols-3 mt-lg gap-[5%] px-[2%]">
          {data.headers.map((item, index) => (
            <HeaderCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-lg space-y-md">
          {data.rows.map((row, index) => (
            <DesktopRow key={index} row={row} />
          ))}
        </div>
      </div>

         {/* Mobile */}
       <div className="sm:hidden">
        <div className="overflow-hidden bg-white py-[1vw]">
          <MobileHeaderRow
            headers={data.headers}
            activeIndex={activeMobileIndex}
          />
        </div>

        <div className="mt-4 space-y-4 overflow-hidden">
          {data.rows.map((row, index) => (
            <div
              key={index}
              className="transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${activeMobileIndex * 80}%)`,
              }}
            >
              <MobileRow row={row} />
            </div>
          ))}
        </div>

        <MobilePagination
          current={activeMobileIndex}
          total={3}
          onChange={setActiveMobileIndex}
        />
      </div>
    </section>
  );
}