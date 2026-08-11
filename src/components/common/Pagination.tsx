type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  return (
    <div
      className={`mt-md flex h-[60px] md:h-[100px] items-center justify-center gap-xs ${className}`}
    >
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center rounded-[6px] md:rounded-[8px] cursor-pointer border border-[#0668E1] text-base font-medium transition-all ${
              isActive
                ? "h-[clamp(40px,calc(55_/_var(--width)_*_100vw),80px)] w-[clamp(30px,calc(40_/_var(--width)_*_100vw),60px)] bg-[#0668E1] text-white"
                : "h-[clamp(30px,calc(40_/_var(--width)_*_100vw),60px)] w-[clamp(20px,calc(30_/_var(--width)_*_100vw),45px)] bg-white text-transparent"
            }`}
            aria-label={`Go to page ${page}`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}