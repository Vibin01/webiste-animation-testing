"use client";

import React, { useState } from "react";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VscArrowBoth } from "react-icons/vsc";
import Link from "next/link";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { toast } from "sonner";
import { ShowDesktopWarning } from "@/components/common/Toast/ShowDesktopWarning";

const withinRoles = [
  {
    role: "Candidates",
    img: "/icons/candidate-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=candidate",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",

  },
  {
    role: "Recruiters",
    img: "/icons/recruiter-icon.svg",
    // url: "/resources/alignment-test/register?mode=single&phase=uncertainty&role=recruiter",
    url: "/resources/alignment-test/register?mode=single&phase=uncertainty",
  },
  {
    role: "Employers",
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

export default function AlignmentTabWithinAcrossComponent() {
  return (
    <Tabs defaultValue="within" className="w-full md:px-[5%]">
      {/* Top Tabs */}
      <TabsList className="w-full grid grid-cols-2 ">
        <TabsTrigger
          value="within"
          className="
    group
    rounded-none
    flex
    items-start
    md:items-center
    gap-sm
    py-sm
    border-b-2
    border-[#EBEBEB]
    text-base
    font-bold
    text-start

    data-[state=active]:border-[#0668E1]
    data-[state=active]:text-[#0668E1]
    data-[state=active]:shadow-none
  "
        >
          <div
            className="
       rounded-sm
       size-iconsize-lg
       flex justify-center items-center
      transition-all
      bg-[#EBEBEB]
      group-data-[state=active]:bg-[#0668E1]
    "
          >
            <IoPersonSharp
              className="
      scale-110
        group-data-[state=active]:text-white
      "
            />
          </div>
          Alignment Within
        </TabsTrigger>

        <TabsTrigger
          value="across"
          className="
    group
    rounded-none
    flex
    md:items-center
    gap-sm
    py-sm
    border-b-2
    border-[#EBEBEB]
    text-base
    font-bold
text-start
    data-[state=active]:border-[#0668E1]
    data-[state=active]:text-[#0668E1]
    data-[state=active]:shadow-none
  "
        >
          <div
            className="
       rounded-sm
       size-iconsize-lg
       flex justify-center items-center
      transition-all
      bg-[#EBEBEB]
      group-data-[state=active]:bg-[#0668E1]
    "
          >
            <MdGroups
              className="
      scale-110
        group-data-[state=active]:text-white
      "
            />
          </div>
          Alignment Across
        </TabsTrigger>
      </TabsList>

      {/* WITHIN */}
      <TabsContent value="within" className="mt-lg ">
        <div className="flex flex-col sm:flex-row items-center   w-full gap-lg- sm:gap-0 ">
          {withinRoles.map((role, index) => (
            <React.Fragment key={role.role}>
              <div className="flex flex-col sm:flex-row items-center w-full ">
                <Link
                  href={role.url}
                  className={`
            group
           w-full
            h-btn-h
            rounded-md
            border
            border-[#DEEDFF]
            hover:border-[#0668E1]
            hover:text-[#0668E1]
            hover:bg-[#F0F6FF]
            bg-white
            flex
            items-center
            justify-center
            gap-sm
            text-base
            font-medium
            transition-all
            duration-300
hover:font-bold


          `}
                >
                  <span>{role.role}</span>

                  <ArrowRight
                    className={`
              size-iconsize-sm 
              scale-90
              stroke-3
              transition-all
              duration-300

              opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
            `}
                  />
                </Link>
              </div>
              {index < withinRoles.length - 1 && (
                <div className="flex self-stretch justify-center items-center mx-lg">
                  <span className=" h-[2px] sm:h-iconsize-lg w-[60%] sm:w-[2px] bg-[#DEEDFF] my-lg md:my-md" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </TabsContent>

      {/* ACROSS mobile */}
   <TabsContent value="across" className="mt-lg md:hidden">
  <div className="flex flex-col md:flex-row items-center">
    {mobileAcrossRoles.map((role, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col md:flex-row items-center w-full">
          {role.type === "toast" ? (
            <button
              type="button"
                       onClick={() =>
  toast.custom((t) => (
       <ShowDesktopWarning toastId={t}/>
   
  ))
}
              className={`
                cursor-pointer
                group
                w-full
                h-btn-h
                rounded-md
                border
                border-[#DEEDFF]
                hover:border-[#0668E1]
                hover:text-[#0668E1]
                hover:bg-[#F0F6FF]
                bg-white
                flex
                items-center
                justify-center
                gap-sm
                text-base
                font-medium
                transition-all
                duration-300
                hover:font-bold
              `}
            >
              <span>{role.role}</span>

              <ArrowRight
                className={`
                  size-iconsize-sm 
                  scale-90
                  stroke-3
                  transition-all
                  duration-300
                  opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                `}
              />
            </button>
          ) : (
            <Link
              href={role.url}
              target="_blank"
              className={`
                cursor-pointer
                group
                w-full
                h-btn-h
                rounded-md
                border
                border-[#DEEDFF]
                hover:border-[#0668E1]
                hover:text-[#0668E1]
                hover:bg-[#F0F6FF]
                bg-white
                flex
                items-center
                justify-center
                gap-sm
                text-base
                font-medium
                transition-all
                duration-300
                hover:font-bold
              `}
            >
              <span>{role.role}</span>

              <ArrowRight
                className={`
                  size-iconsize-sm 
                  scale-90
                  stroke-3
                  transition-all
                  duration-300
                  opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
                `}
              />
            </Link>
          )}
        </div>

        {index < mobileAcrossRoles.length - 1 && (
          <PiArrowsLeftRightBold className="size-iconsize-lg md:size-iconsize-2xl md:scale-125 rotate-90 sm:rotate-0 my-sm font-medium text-[#B2D0F6] mx-md" />
        )}
      </React.Fragment>
    ))}
  </div>
</TabsContent>

      {/* ACROSS web */}

      <TabsContent value="across" className="mt-lg hidden md:flex flex-col">
        <div className="flex flex-col md:flex-row items-center">
          {acrossRoles.map((role, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row items-center w-full ">
                <Link
                  href={role.url}
                  target="_blank"
                  className={`
              cursor-pointer
            group
            w-full
            h-btn-h
            rounded-md
            border
            border-[#DEEDFF]
            hover:border-[#0668E1]
            hover:text-[#0668E1]
            hover:bg-[#F0F6FF]
            bg-white
            flex
            items-center
            justify-center
            gap-sm
            text-base
            font-medium
            transition-all
            duration-300
hover:font-bold


          `}
                >
                  <span>{role.role}</span>

                  <ArrowRight
                    className={`
              size-iconsize-sm 
              scale-90
              stroke-3
              transition-all
              duration-300

              
            opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
              
            `}
                  />
                </Link>
              </div>
              {index < acrossRoles.length - 1 && (
                <PiArrowsLeftRightBold className="size-iconsize-lg md:size-iconsize-2xl md:scale-125 rotate-90 sm:rotate-0 my-sm font-medium text-[#B2D0F6] mx-md" />
              )}
            </React.Fragment>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
