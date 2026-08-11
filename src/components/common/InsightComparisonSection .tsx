"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";
import Pagination from "./Pagination";
 interface InsightHeader {
  title: string,
  label: string,
  description: string;
  icon?: string;
};

interface InsightCard {
  title: string;
  data: ReactNode;
};

interface InsightComparisonPage {
  id: number;
  header: InsightHeader;
  cards: InsightCard[];
}

type InsightComparisonPageArray = InsightComparisonPage[];

type MobileAccordionItemProps = {
  title: string;
    index: number;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
};

function MobileAccordionItem({
  index,
  title,
  isOpen,
  onToggle,
  children,
}: MobileAccordionItemProps) {
  return (
    <div className={`${index === 2 ? '' : 'border-b'} border-[#D3E6FF] py-md`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-base font-bold text-[#1B1C17]">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#1B1C17]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#1B1C17]" />
        )}
      </button>

      {isOpen && <div className="pt-sm">{children}</div>}
    </div>
  );
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};




function DesktopView({
  pageData,
  currentPage,
  totalPages,
  onPageChange,
  maxCardHeight,
  measureRef,
}: {
  pageData: InsightComparisonPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxCardHeight: number;
  measureRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="hidden md:block">
      <div className="rounded-t-md border border-[#D3E6FF] p-sm shadow-mobile-medium md:shadow-web-medium">
        <div>
          <div className="flex   gap-sm">
            <div className="flex my-[0.4%] w-[6%] items-center justify-center rounded-sm bg-[#E6F0FC]">
              {pageData.header.icon ? (
                <img
                  src={pageData.header.icon}
                  alt={pageData.header.title}
                  className="size-iconsize-xl object-contain"
                />
              ) : (
                <FaCommentDots className="size-[65%] text-[#0668E1]" />
              )}
            </div>

            <div>
              <h2 className="text-h2 font-extrabold">{pageData.header.title}</h2>
              <p className="text-xl font-medium">
                <span className="text-base font-bold text-[#0668E1]">
                  {pageData.header.label.split(":")[0]}:
                </span>{" "}
                {pageData.header.label.split(":")[1]?.trim()}
              </p>
            </div>
          </div>

          <p className="mt-sm text-xl font-medium">
            {pageData.header.description}
          </p>
        </div>
      </div>

      <div className="mt-sm md:min-h-[360px] grid gap-sm md:grid-cols-3">
        {pageData.cards.map((card, index) => (
          <div
            key={`${pageData.id}-${index}`}
            ref={index === 0 ? measureRef : null}
            style={{ minHeight: maxCardHeight ? `${maxCardHeight}px` : undefined }}
            className="rounded-b-md border border-[#D3E6FF] bg-white p-[4%] shadow-mobile-small md:shadow-web-small"
          >
            <h3 className="mb-sm text-xl font-bold">{card.title}</h3>
            {card.data}
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

function MobileView({
  pageData,
  currentPage,
  totalPages,
  onPageChange,
}: {
  pageData: InsightComparisonPage;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const [openItem, setOpenItem] = useState<string>(pageData.cards[0]?.title || "");

  useEffect(() => {
    setOpenItem(pageData.cards[0]?.title || "");
  }, [pageData]);

  const toggleItem = (title: string) => {
    setOpenItem((prev) => (prev === title ? "" : title));
  };

  return (
    <div className="block md:hidden">
      <div className="rounded-[16px] border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
        <div className="flex items-start gap-md">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#E6F0FC]">
            {pageData.header.icon ? (
              <img
                src={pageData.header.icon}
                alt={pageData.header.title}
                className="size-iconsize-xl object-contain"
              />
            ) : (
              <FaCommentDots className="text-[#0668E1]" />
            )}
          </div>

          <div>
            <h2 className="text-h2 font-extrabold text-[#1B1C17]">
              {pageData.header.title}
            </h2>

            <p className="mt-[1.5%] text-base font-medium text-[#2C2C2C]">
              <span className="font-bold text-[#0668E1]">
                {pageData.header.label.split(":")[0]}:
              </span>{" "}
              {pageData.header.label.split(":")[1]?.trim()}
            </p>
          </div>
        </div>

        <p className="mt-md text-xl font-medium">
          {pageData.header.description}
        </p>
      </div>

      <div className="mt-[3.5%] rounded-[16px] border border-[#D3E6FF] bg-white p-md shadow-mobile-medium md:shadow-web-medium">
        {pageData.cards.map((card, index) => (
          <MobileAccordionItem
            key={`${pageData.id}-${index}`}
            index={index}
            title={card.title}
            isOpen={openItem === card.title}
            onToggle={() => toggleItem(card.title)}
          >
            <div className="mobile-card-content">{card.data}</div>
          </MobileAccordionItem>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default function InsightComparisonSection({data}:{data:InsightComparisonPageArray}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  const totalPages = data.length;
  const pageData = data[currentPage - 1];

  const measureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (measureRef.current) {
      const measuredHeight = measureRef.current.offsetHeight;
      setMaxCardHeight((prev) => Math.max(prev, measuredHeight));
    }
  }, [currentPage]);

  return (
    <section>
      <div className="mx-auto">
        <DesktopView
          pageData={pageData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxCardHeight={maxCardHeight}
          measureRef={(el) => {
            measureRef.current = el;
          }}
        />

        <MobileView
          pageData={pageData}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}