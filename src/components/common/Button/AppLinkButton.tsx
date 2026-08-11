"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { ShowDesktopWarning } from "../Toast/ShowDesktopWarning";

type AppLinkButtonProps = {
  url: string;
  text: string;
};

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.primethic.connectec";

export const AppLinkButton = ({ url, text }: AppLinkButtonProps) => {
  const pathname = usePathname();

  const isCandidate = pathname.includes("candidate");
  const isRecruiter = pathname.includes("recruiter");
  const isEmployer = pathname.includes("employer");

  const showDesktopWarning = () => {
    toast.custom((t) => (
         <ShowDesktopWarning toastId={t}/>
     
    ));
  };

  return (
    <>
      {/* Mobile: Candidate & Recruiter → Play Store */}
      {(isCandidate || isRecruiter) && (
        <Link
          href={PLAY_STORE_URL}
          target="_blank"
          className="md:hidden h-btn-h text-nowrap bg-[#0668E1] border-2 border-[#0072FF] cursor-pointer rounded-[12px] px-md py-sm flex items-center justify-center gap-sm"
        >
          <span className="font-bold text-xl text-white">{text}</span>

          <FaArrowRight className="text-white text-base" />
        </Link>
      )}

      {/* Mobile: Employer → Warning Toast */}
      {isEmployer && (
        <button
          type="button"
          onClick={showDesktopWarning}
          className="md:hidden h-btn-h text-nowrap bg-[#0668E1] border-2 border-[#0072FF] cursor-pointer rounded-[12px] px-md py-sm flex items-center justify-center gap-sm"
        >
          <span className="font-bold text-xl text-white">{text}</span>

          <FaArrowRight className="text-white text-base" />
        </button>
      )}

      {/* Desktop: Original URL */}
      <Link
        href={url}
        target="_blank"
        className="hidden md:flex h-btn-h text-nowrap bg-[#0668E1] border-2 border-[#0072FF] cursor-pointer rounded-[12px] px-md py-sm items-center justify-center gap-sm"
      >
        <span className="font-bold text-xl text-white">{text}</span>

        <FaArrowRight className="text-white text-base" />
      </Link>
    </>
  );
};