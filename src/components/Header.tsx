"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import dynamic from "next/dynamic";

const SolutionsDropdown = dynamic(() => import("./SolutionsDropdown"));

const ResourcesDropdown = dynamic(() => import("./ResourcesDropdown"));

const MobileMenu = dynamic(() => import("./MobileMenu"));

const navItems = [
  { name: "Home", link: "/" },
  { name: "Employers", link: "/employer-alignment-system" },
  { name: "Candidates", link: "/candidate-alignment-system" },
  { name: "Recruiters", link: "/recruiter-alignment-system" },
  { name: "Solutions", link: "#solutions" },

  { name: "Resources", link: "#resources" },

  { name: "Pricing", link: "/hiring-platform-pricing" },
];

const authOptions = [
  {
    label: "Candidate",
    login:
      "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    register: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    icon: "/icons/candidate-round-icon.svg",
  },
  {
    label: "Recruiter",
    login: "https://recruiter.connectec.app/login",
    register: "https://recruiter.connectec.app/register",
    icon: "/icons/recruiters-round-icon.svg",
  },
  {
    label: "Employer",
    login: "https://employer.connectec.app/login",
    register: "https://employer.connectec.app/register",
    icon: "/icons/employer-round-icon.svg",
  },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [authDropdown, setAuthDropdown] = useState<"login" | "register" | null>(
    null,
  );

  const authTimer = useRef<NodeJS.Timeout | null>(null);

  const resourcesTimer = useRef<NodeJS.Timeout | null>(null);

  const handleResourcesEnter = () => {
    if (resourcesTimer.current) {
      clearTimeout(resourcesTimer.current);
    }
    setShowSolutions(false);
    setShowResources(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimer.current = setTimeout(() => {
      setShowResources(false);
    }, 200);
  };
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setShowResources(false);
    setShowSolutions(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setShowSolutions(false);
    }, 200);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`${isMenuOpen ? "hidden" : ""} overflow-x-hidden no-print h-[60px] lg:h-[100px] max-h-[100px]`}
      />

      <div
        className={`${isMenuOpen ? "h-0" : "h-[60px]"} no-print fixed left-0 top-0 z-50 flex w-full max-h-[100px] bg-cover bg-no-repeat transition-transform duration-300 lg:h-[100px] ${
          show ? "translate-y-0 bg-white" : "-translate-y-full"
        }`}
      >
        <nav className="relative z-[9999] flex w-full items-center justify-between border-b border-[#D1E5FF] bg-[#FFFFFF33] px-3 py-6 md:border-[#E5E5E5] md:bg-[#FFFFFF66] md:py-4 lg:px-4 lg:text-[14px] xl:px-6 xl:text-[18px] 2xl:px-8 2xl:text-[24px]">
          <div className="flex items-center lg:w-1/5">
            <Link href="https://connectec.app/">
              <Image
                src="/Connect_EC_Logo.svg"
                alt="Logo"
                width={280}
                height={100}
                className="h-auto w-[65%] cursor-pointer object-contain md:w-full xl:min-w-[200px] 2xl:min-w-[280px]"
              />
            </Link>
          </div>

          {!pathname.includes("login") &&
            !pathname.includes("register") &&
            !pathname.includes("reset-password") &&
            !pathname.includes("forgot-password") &&
            !pathname.includes("account-verify") && (
              <>
                <ul className="hidden  w-4/5 items-center justify-center text-[#1B1C17] lg:flex lg:gap-[15px] xl:gap-[2.5%]">
                  {navItems.map((item) => {
                    const isActive =
                      item.name === "Home"
                        ? pathname === "/" || pathname.startsWith("/home")
                        : pathname.startsWith(item.link);

                    // Solutions Dropdown
                    if (item.name === "Solutions") {
                      return (
                        <li
                          key={item.name}
                          className="flex cursor-pointer flex-col items-center justify-center font-medium text-[#1B1C17]"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={
                                showSolutions || pathname.includes("/solutions")
                                  ? "font-semibold text-[#0668E1]"
                                  : ""
                              }
                            >
                              Solutions
                            </span>

                            <FaChevronDown
                              className={`transition-transform duration-200 ${
                                showSolutions ? "rotate-180 text-[#0668E1]" : ""
                              }`}
                            />
                          </div>

                          <div className="mt-1 h-[4px] w-[85%]" />

                          {showSolutions && (
                            <SolutionsDropdown
                              onClose={() => setShowSolutions(false)}
                            />
                          )}
                        </li>
                      );
                    }

                    // Resources Dropdown
                    if (item.name === "Resources") {
                      return (
                        <li
                          key={item.name}
                          className="flex cursor-pointer flex-col items-center justify-center font-medium text-[#1B1C17]"
                          onMouseEnter={handleResourcesEnter}
                          onMouseLeave={handleResourcesLeave}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={
                                showResources || pathname.includes("/resources")
                                  ? "font-semibold text-[#0668E1]"
                                  : ""
                              }
                            >
                              Resources
                            </span>

                            <FaChevronDown
                              className={`transition-transform duration-200 ${
                                showResources ? "rotate-180 text-[#0668E1]" : ""
                              }`}
                            />
                          </div>

                          <div className="mt-1 h-[4px] w-[85%]" />

                          {showResources && (
                            <ResourcesDropdown
                              onClose={() => setShowResources(false)}
                            />
                          )}
                        </li>
                      );
                    }

                    // Normal Nav Items
                    return (
                      <li
                        key={item.name}
                        className={`cursor-pointer ${
                          isActive
                            ? "font-semibold text-[#0668E1]"
                            : "font-medium"
                        } flex flex-col items-center justify-center`}
                        onClick={() => router.push(item.link)}
                      >
                        {item.name}

                        {isActive ? (
                          <div className="mt-1 rounded-[4px] bg-[#0668E1] lg:h-[4px] lg:w-[40px] 2xl:h-[6px]" />
                        ) : (
                          <div className="mt-1 w-[85%] lg:h-[4px] 2xl:h-[6px]" />
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className=" md:flex md:w-[30%] gap-lg items-center justify-end lg:justify-center relative">
                  {/* Login */}
                  <div
                    className="relative hidden md:flex"
                    onMouseEnter={() => {
                      if (authTimer.current) {
                        clearTimeout(authTimer.current);
                      }

                      setTimeout(() => {
                        setAuthDropdown("login");
                      }, 300);
                    }}
                    onMouseLeave={() => {
                      authTimer.current = setTimeout(() => {
                        setAuthDropdown(null);
                      }, 500);
                    }}
                  >
                    <button
                      onClick={() =>
                        setAuthDropdown((prev) =>
                          prev === "login" ? null : "login",
                        )
                      }
                      className="w-[110px] h-[44px] cursor-pointer border border-[#0668E1] text-[#0668E1] rounded-sm"
                    >
                      Login
                    </button>

                    {authDropdown === "login" && (
                      <div className="absolute top-[60px] right-0 w-[200px] rounded-md border border-[#D6E8FF] bg-white p-sm z-[9999]">
                        <div className="space-y-sm">
                          {authOptions.map((item) => (
                            <Link
                              key={item.label}
                              href={item.login}
                              target="_blank"
                              className={`
          cursor-pointer
          group
          relative
          flex
          items-center
          gap-3
          rounded-sm
          p-sm
          hover:text-[#0668E1]
        `}
                            >
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="size-iconsize-sm object-contain"
                              />

                              <span className="text-xl font-semibold">
                                {item.label}
                              </span>

                              {/* Bottom Border Animation */}
                              <span
                                className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            bg-[#0668E1]
            transition-all
            duration-300
            ease-out
            group-hover:w-[calc(100%-16px)]
          "
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Register */}
                  <div
                    className="relative hidden md:flex"
                    onMouseEnter={() => {
                      if (authTimer.current) {
                        clearTimeout(authTimer.current);
                      }

                      setTimeout(() => {
                        setAuthDropdown("register");
                      }, 300);
                    }}
                    onMouseLeave={() => {
                      authTimer.current = setTimeout(() => {
                        setAuthDropdown(null);
                      }, 500);
                    }}
                  >
                    <button
                      onClick={() =>
                        setAuthDropdown((prev) =>
                          prev === "register" ? null : "register",
                        )
                      }
                      className="w-[110px] h-[44px] cursor-pointer bg-[#0668E1] rounded-sm text-white"
                    >
                      Register
                    </button>

                    {authDropdown === "register" && (
                      <div className="absolute top-[60px] right-0 w-[200px] rounded-md border border-[#D6E8FF] bg-white p-sm z-[9999]">
                        <div className="space-y-sm">
                          {authOptions.map((item) => (
                            <Link
                              key={item.label}
                              href={item.register}
                              target="_blank"
                              
                              className={`
          cursor-pointer
          group
          relative
          flex
          items-center
          gap-3
          rounded-xl
          p-sm
          transition-all
          duration-300
          hover:text-[#0668E1]
        `}
                            >
                              <img
                                src={item.icon}
                                alt={item.label}
                                className="size-iconsize-sm object-contain"
                              />

                              <span className="text-xl font-semibold">
                                {item.label}
                              </span>

                              {/* Animated Bottom Border */}
                              <span
                                className="
            absolute
            bottom-0
            left-1/2
            h-[2px]
            w-0
            -translate-x-1/2
            bg-[#0668E1]
            transition-all
            duration-300
            ease-out
            group-hover:w-[90%]
          "
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <MobileMenu
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                </div>
              </>
            )}
        </nav>
      </div>
    </>
  );
};
