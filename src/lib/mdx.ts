import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import MDXComponents from "@/components/MDXComponents";
import { notFound } from "next/navigation";

const BLOGS_PATH = path.join(process.cwd(), "src/blog_content");


export async function getBlog(pathnameSlug: string) {
  const files = fs.readdirSync(BLOGS_PATH);

  for (const file of files) {
    const filePath = path.join(BLOGS_PATH, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { content, data } = matter(fileContent);

    // Match pathname from frontmatter
    if (data.pathName === pathnameSlug) {
      const { content: mdxContent } = await compileMDX({
        source: content,
        options: { parseFrontmatter: false },
        components: MDXComponents,
      });

      return {
        content: mdxContent,
        meta: data,
      };
    }
  }

  notFound();
}

export function getAllBlogs(): {
  slug: string;
  pathName: string;
  date: string;
  heading_highlight: string;
  img_url: string;
  heading: string;
  title: string;
}[] {
  return fs.readdirSync(BLOGS_PATH).map((file) => {
    const slug = file.replace(/\.mdx$/, "");

    const fileContent = fs.readFileSync(
      path.join(BLOGS_PATH, file),
      "utf-8"
    );

    const { data } = matter(fileContent);

    return {
      slug,
      pathName: data.pathName,
      date: data.date,
      heading: data.heading,
      heading_highlight: data.heading_highlight,
      img_url: data.img_url,
      title: data.title,
    };
  });
}
