"use client";

import Link from "next/link";
import { MdGroups } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowRight, TriangleAlert } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { ShowDesktopWarning } from "@/components/common/Toast/ShowDesktopWarning";

import { motion } from "framer-motion";
import AlignmentTabs from "./DemoHeroSection";

const withinRoles = [
  {
    role: "Candidates",
    roleId: "candidate",
    img: "/icons/candidate-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=candidate",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Recruiters",
    roleId: "recruiter",
    img: "/icons/recruiter-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=recruiter",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Employers",
    roleId: "employer",
    img: "/icons/employer-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=employer",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
];
const acrossRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    url: "https://recruiter.connectec.app/register",
  },
  {
    role: "Employers",
    img: "/icons/employer-icon.svg",
    url: "https://employer.connectec.app/register",
  },
];
const mobileAcrossRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    url: "https://play.google.com/store/apps/details?id=com.primethic.connectec",
    type: "link",
  },
  {
    role: "Employers",
    img: "/icons/employer-icon.svg",
    url:"",
    type: "toast",
  },
];


export const HeroSection = () => {

  const [activeTab, setActiveTab] = useState<"within" | "across">("within");

const [autoPlayed, setAutoPlayed] = useState(false);

useEffect(() => {
  // Initial state: Within
  setActiveTab("within");

  // After a short pause, move to Across
  const timer = setTimeout(() => {
    setActiveTab("across");
    setAutoPlayed(true);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

  return (
    <section className="flex items-center justify-center px-[5%] sm:px-0 pt-[5%] pb-[4%]">
     <motion.div
        initial={{
          opacity: 0,
          y: 90,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-[15%] flex w-full flex-col items-center justify-center text-center md:mt-[5%]"
      >
        <h1 className="font-extrabold text-h5 text-[#0668E1]">
          Hiring Alignment{" "}
          <span className="inline-flex  gap-xs">
            System
            <img
              src={"/icons/tm-badge.svg"}
              alt="tm-badge"
              className="size-iconsize-sm inline scale-90"
            />
          </span>
        </h1>

        <h2 className="font-extrabold text-h1 pb-lg">
          Alignment Preserves
          <br/><span className="text-[#0668E1]"> Hiring Continuity.</span>
        </h2>

<div className="w-full mt-sm">

          <AlignmentTabs />

    
        <h2 className="pb-sm text-h5 font-extrabold text-[#0668E1]">
          <span className="inline-flex items-center gap-sm">
            <img
              src={"/icons/star-icon.svg"}
              alt="Star icon"
              className="size-iconsize-md inline animate-pulse"
            />
            Alignment Intelligence
          </span>
        </h2>
      </div>
      </motion.div>
    </section>
  );
};


