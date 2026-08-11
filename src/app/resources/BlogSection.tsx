"use client";
import BlogCard from "@/components/common/BlogCard";
import { getAllBlogs } from "@/lib/mdx";
import Image from "next/image";
import React, { useState } from "react";


export const BlogSection = ({ blogs }: { blogs: any[] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="relative  py-[7%] px-[5%] md:px-[7%]">
      <h2 className="mb-8 text-h2 font-extrabold text-center md:mb-16 lg:mb-22">
        Every article and framework is designed to help you:
      </h2>
      <div className="grid grid-cols-1 gap-xl md:grid-cols-3">
        {visibleBlogs.map((blog: any) => (
          <BlogCard key={blog.pathName} {...blog} />
        ))}
      </div>

     {blogs.length > 3 && (
  <div className="mt-7 flex justify-center">
    <button
      onClick={() => setShowAll((prev) => !prev)}
      className="h-[34px] rounded-[6px] border border-[#0668E1] px-7 text-[14px] font-bold text-[#0668E1]"
    >
      {showAll ? "Show Less" : "See All"}
    </button>
  </div>
)}
    </section>
  );
};
