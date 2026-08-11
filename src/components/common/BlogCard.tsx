"use client";

import Link from "next/link";

type BlogCardProps = {
  pathName:string,
  slug: string;
  date: string;
  heading_highlight: string;
  img_url:string;
  heading: string;
  title: string;
};

export default function BlogCard({
  title,
  slug,
  heading_highlight,
  img_url,
  date,
  heading,
  pathName,
}: BlogCardProps) {
  return (
    <Link
      data-title={heading}
      className="blog-section"
      href={`/resources/blogs/${pathName}`}
    >
      <div className="group p-sm flex flex-col justify-between items-stretch bg-[#FAFCFF] border-[#D3E6FF] border  shadow-mobile-small md:shadow-web-small relative overflow-hidden rounded-md transition hover:shadow-mobile-medium md:shadow-web-medium dark:bg-neutral-900">
        
        <img src={img_url} alt={title} className="w-full  object-cover" />
        <div className="h-full flex flex-col justify-between">
         <h4 className="text-base font-bold py-sm">{title}</h4>
         <p className="font-medium text-xl"><span className="font-bold">{heading_highlight}</span> {heading}</p>
        </div>
      </div>
    </Link>
  );
}
