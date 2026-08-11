"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RiMenu5Fill } from "react-icons/ri";
import { X } from "lucide-react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

const authOptions = [
  {
    label: "Candidate",
    icon: "/icons/candidate-round-icon.svg",
    login:
      "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    register: "https://candidate.connectec.app/register",
  },
  {
    label: "Recruiter",
    icon: "/icons/recruiters-round-icon.svg",
    login: "https://recruiter.connectec.app/login",
    register: "https://recruiter.connectec.app/register",
  },
  {
    label: "Employer",
    icon: "/icons/employer-round-icon.svg",
    login: "https://employer.connectec.app/login",
    register: "https://employer.connectec.app/register",
  },
];

export default function MobileMenu({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAuthSheet, setShowAuthSheet] = useState(true);
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="relative z-50 lg:hidden"
        onClick={() => {
          const newState = !isMenuOpen;
          setIsMenuOpen(newState);
        }}
        aria-label="Open menu"
      >
        {!isMenuOpen && <RiMenu5Fill className="h-6 w-6 " />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 z-[99999] h-[100dvh] w-full overflow-y-auto bg-[#F8F8F8] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div
          className={` flex items-center justify-between border-b border-[#DCEBFF] px-6 py-7`}
        >
          <div className="flex items-center gap-md">
            <Image
              src="/Connect_EC_Logo.svg"
              alt="Logo"
              width={150}
              height={40}
              className="h-auto w-[160px]"
            />
          </div>

          <X
            onClick={() => setIsMenuOpen(false)}
            className="size-iconsize-xl cursor-pointer text-[#1B1C17]"
          />
        </div>

        {/* Menu */}
        <div
          className={`px-lg ${showAuthSheet && "pointer-events-none  bg-black/10 "}`}
        >
          <nav className="flex flex-col">
            {/* Home */}
            <Link
              href="/"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Home
            </Link>

            {/* Employers */}
            <Link
              href="/employer-alignment-system"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Employers
            </Link>

            {/* Candidates */}
            <Link
              href="/candidate-alignment-system"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Candidates
            </Link>

            {/* Recruiters */}
            <Link
              href="/recruiter-alignment-system"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Recruiters
            </Link>

            {/* Solutions */}
            <div className="border-b border-[#E5E5E5]">
              <div
                className="flex items-center justify-between py-md "
                onClick={() => toggleDropdown("Solutions")}
              >
                <span
                  className={`text-base font-medium ${
                    openDropdown === "Solutions"
                      ? "text-[#0668E1]"
                      : "text-[#1B1C17]"
                  }`}
                >
                  Solutions
                </span>

                <span
                  className={`text-base transition-transform duration-300 ${
                    openDropdown === "Solutions"
                      ? "rotate-180 text-[#0668E1]"
                      : ""
                  }`}
                >
                  <FaChevronDown className="size-iconsize-sm" />
                </span>
              </div>

              {/* FIRST PAGE */}
              {openDropdown === "Solutions" && (
                <div className="pb-4">
                  {/* Candidate */}
                  <details className="group">
                    <summary className=" group-open:text-[#0668E1] flex cursor-pointer items-center justify-between py-3 text-xl font-medium text-[#1B1C17] list-none">
                      Candidate
                      <span className="transition-transform group-open:text-[#0668E1] group-open:rotate-180">
                        <FaChevronDown className="size-iconsize-sm" />
                      </span>
                    </summary>

                    {/* SECOND PAGE */}
                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      <Link
                        href="/solutions/candidate-alignment-system/interview-feedback-for-candidates"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Evaluator
                        <span className="mt-xs block text-lg font-medium">
                          The Feedback Transparency System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/candidate-alignment-system/manage-job-offers"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Facilitator
                        <span className="mt-xs block text-lg font-medium">
                          The Offer Decision System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/candidate-alignment-system/manage-interview-schedule"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Scheduler
                        <span className="mt-xs block text-lg font-medium">
                          The Interview Coordination System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/candidate-alignment-system/verified-employer-interview-insights"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Reviewer
                        <span className="mt-xs block text-lg font-medium">
                          The Employer Insight System.
                        </span>
                      </Link>
                    </div>
                  </details>

                  {/* Recruiter */}
                  <details className="group">
                    <summary className="group-open:text-[#0668E1] flex cursor-pointer items-center justify-between py-3 text-xl font-medium text-[#1B1C17] list-none">
                      Recruiter
                      <span className="transition-transform group-open:text-[#0668E1] group-open:rotate-180">
                        <FaChevronDown className="size-iconsize-sm" />
                      </span>
                    </summary>

                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      <Link
                        href="/solutions/recruiter-alignment-system/collect-interview-feedback"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Evaluator
                        <span className="mt-xs block text-lg font-medium">
                          Interview Evaluation System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/recruiter-alignment-system/improve-offer-to-joining-conversion"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Facilitator
                        <span className="mt-xs block text-lg font-medium">
                          The Offer Decision System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/recruiter-alignment-system/manage-interview-scheduling"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Scheduler
                        <span className="mt-xs block text-lg font-medium">
                          The Interview Coordination System.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/recruiter-alignment-system/predict-interview-no-shows"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Predictor
                        <span className="mt-xs block text-lg font-medium">
                          The Interview Transition System.
                        </span>
                      </Link>
                    </div>
                  </details>

                  {/* Employer */}
                  <details className="group">
                    <summary className="group-open:text-[#0668E1] flex cursor-pointer items-center justify-between py-3 text-xl font-medium text-[#1B1C17] list-none">
                      Employer
                      <span className="transition-transform group-open:text-[#0668E1] group-open:rotate-180">
                        <FaChevronDown className="size-iconsize-sm" />
                      </span>
                    </summary>

                    <div className="mt-2 flex flex-col gap-2 pl-4">
                      <Link
                        href="/solutions/employer-alignment-system/improve-hiring-target-achievement"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Calibrator
                        <span className="mt-xs block text-lg font-medium">
                          Transform Targets into Outcomes.
                        </span>
                      </Link>

                      <Link
                        href="/solutions/employer-alignment-system/standardize-hiring-communication"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Evaluator
                        <span className="mt-xs block text-lg font-medium">
                          Transform Templates into Touchpoints.
                        </span>
                      </Link>

                      <Link
                        onClick={handleCloseMenu}
                        href="/solutions/employer-alignment-system/analyze-hiring-workload-and-velocity"
                        className="py-2 text-xl font-medium"
                      >
                        Easy Explorer
                        <span className="mt-xs block text-lg font-medium">
                          Transform Information into Insights.
                        </span>
                      </Link>

                      <Link
                        onClick={handleCloseMenu}
                        href="/solutions/employer-alignment-system/improve-offer-acceptance-to-joining"
                        className="py-2 text-xl font-medium"
                      >
                        Easy Facilitator
                        <span className="mt-xs block text-lg font-medium">
                          Transform Offer into Onboarding.
                        </span>
                      </Link>

                      <Link
                        onClick={handleCloseMenu}
                        href="/solutions/employer-alignment-system/identify-hiring-misalignment-signals"
                        className="py-2 text-xl font-medium"
                      >
                        Easy Navigator
                        <span className="mt-xs block text-lg font-medium">
                          Transform Declines into directions.
                        </span>
                      </Link>

                      <Link
                        onClick={handleCloseMenu}
                        href="/solutions/employer-alignment-system/predict-hiring-drop-offs-early"
                        className="py-2 text-xl font-medium"
                      >
                        Easy Predictor
                        <span className="mt-xs block text-lg font-medium">
                          Transform No-shows into Know-shows.
                        </span>
                      </Link>
                      <Link
                        href="/solutions/employer-alignment-system/track-hiring-progress-and-bottlenecks"
                        onClick={handleCloseMenu}
                        className="py-2 text-xl font-medium"
                      >
                        Easy Role Tracker
                        <span className="mt-xs block text-lg font-medium">
                          Transform Inactive Pipeline into Active Progress.
                        </span>
                      </Link>
                    </div>
                  </details>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="border-b border-[#E5E5E5]">
              <div
                className="flex items-center justify-between py-md "
                onClick={() => toggleDropdown("Resources")}
              >
                <span
                  className={`text-base font-medium ${
                    openDropdown === "Resources"
                      ? "text-[#0668E1]"
                      : "text-[#1B1C17]"
                  }`}
                >
                  Resources
                </span>

                <span
                  className={`text-base transition-transform duration-300 ${
                    openDropdown === "Resources"
                      ? "rotate-180 text-[#0668E1]"
                      : ""
                  }`}
                >
                  <FaChevronDown className="size-iconsize-sm" />
                </span>
              </div>

              {openDropdown === "Resources" && (
                <div className="flex flex-col gap-3 pb-6">
                  <Link
                    href="/resources/blogs"
                    onClick={handleCloseMenu}
                    className=" flex gap-xs rounded-2xl border border-transparent  p-sm transition-all hover:border-[#D3E6FF] hover:bg-[#F7FBFF]"
                  >
                    <img
                      src={"/resources/icons/blogs-icon.svg"}
                      alt={"icon"}
                      className="size-iconsize-md mt-1"
                    />

                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-[#0668E1]-">
                        Blogs
                      </h3>

                      <p className=" mt-xs text-xl font-medium">
                        Decode Signals. Understand decisions.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/resources/alignment-test"
                    onClick={handleCloseMenu}
                    className="flex gap-xs rounded-2xl border border-transparent hover:border-[#D3E6FF] hover:bg-[#F4F9FF] p-sm"
                  >
                    <img
                      src={"/resources/icons/alignment-test-icon.svg"}
                      alt={"icon"}
                      className="size-iconsize-md mt-1"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-base font-bold text-[#0668E1]">
                        Alignment Test
                      </h3>

                      <p className="mt-xs text-xl font-medium">
                        Reveal patterns. Align Decisions.
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link
              href="/hiring-platform-pricing"
              onClick={handleCloseMenu}
              className="border-b border-[#E5E5E5] py-md text-base font-medium text-[#1B1C17]"
            >
              Pricing
            </Link>
          </nav>
        </div>
        {!showAuthSheet && (
          <button
            onClick={() => setShowAuthSheet(true)}
            className="mt-xl w-full rounded-md bg-[#0668E1] py-4 text-xl font-semibold text-white"
          >
            Log in / Sign up
          </button>
        )}
        {/* Auth Bottom Sheet */}
        <div
          className={`fixed bottom-0 left-0 z-[999999] w-full rounded-t-xl bg-white transition-all duration-300 ${
            showAuthSheet
              ? " translate-y-0 opacity-100"
              : "hidden! translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[#E5E5E5] px-6 py-5">
            <h2 className="text-base font-bold text-[#1B1C17]">
              Log in/Sign up
            </h2>

            <X
              onClick={() => setShowAuthSheet(false)}
              className="size-8 cursor-pointer text-[#B3B3B3]"
            />
          </div>

          <div className="flex flex-col gap-4 p-md">
            {authOptions.map((item, index) => (
              <Link
                key={item.label}
                href={item.login}
                className={`flex items-center gap-4 rounded-md border p-4 transition hover:border hover:border-[#B9D8FF] hover:bg-[#F4F8FF]  border-transparent`}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="size-iconsize-md object-contain"
                />

                <span className={`text-xl font-semibold `}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
