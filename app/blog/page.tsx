import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";
import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "Blog | Shreyash Talele",
  description:
    "Thoughts on web development, React, Next.js, and software engineering.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogPageClient posts={posts} />;
}
