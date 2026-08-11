import { getAllBlogs, getBlog } from "@/lib/mdx";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  // console.log(blogs);

  return blogs.map((b) => ({ blog: b.pathName }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { meta } = await getBlog((await params).blog);

  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
  };
}

export default async function BlogPage(props: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = await props.params;
  const { content } = await getBlog(blog);

  return (
    <article className="">
      <div className=" px-[5%] md:px-[10%] py-[5%]">{content}</div>
    </article>
  );
}
