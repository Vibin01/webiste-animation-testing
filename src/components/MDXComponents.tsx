import Image from "next/image";

const MDXComponents = {
  h1: (props: any) => <h1 className="my-6 text-h1 font-extrabold" {...props} />,
  h2: (props: any) => (
    <h2
      className="mt-7 lg:mt-10 mb-4 lg:mb-6 text-h2 font-extrabold"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3 className="mt-7 lg:mt-10 mb-4 lg:mb-6 text-h3 font-bold" {...props} />
  ),
  h4: (props: any) => (
    <h4 className=" mt-7 lg:mt-10 mb-4 lg:mb-6 text-h4 font-bold " {...props} />
  ),
  h5: (props: any) => (
    <h4 className=" mt-7 lg:mt-10 mb-4 lg:mb-6 text-h5 font-bold " {...props} />
  ),

  h6: (props: any) => <h6 className="my-4 text-h6 font-bold " {...props} />,

  p: (props: any) => <p className="text-base  font-medium" {...props}></p>,

  strong: (props: any) => <strong className="font-bold  " {...props} />,

  li: (props: any) => (
    <li
      className="list-disc ml-5  "
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul
      {...props}
      className="my-4 lg:my-7 list-disc lg:pl-sm  space-y-3 text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] "
    ></ul>
  ),

  blockquote: ({ children, ...props }: any) => (
    <blockquote className="text-[#0668E1] font-bold" {...props}>
      {children}
    </blockquote>
  ),

  hr: (props: any) => (
    <hr
      className=" border-t lg:border-t-2 border-[#0668E1] w-full my-5"
      {...props}
    />
  ),

  img: (props: any) => (
    <img
      {...props}
      alt={props.alt || ""}
      width={1080}
      height={1080}
      className="w-auto h-auto"
    />
  ),
  Image,
};

export default MDXComponents;
