"use client";

import type { BlogPost } from "@/lib/blog";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import BlogCard from "@/components/BlogCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

type BlogPageClientProps = {
  posts: BlogPost[];
};

export default function BlogPageClient({ posts }: BlogPageClientProps) {
  return (
    <Section id="blog">
      {/* Back to Portfolio Button */}
      <Link
        href="/"
        className="group mb-6 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-ink hover:text-ink hover:bg-line/5"
      >
        <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back to Portfolio
      </Link>

      <SectionHeading
        eyebrow="Blog"
        title="Thoughts & Insights"
        subtitle="Writing about web development, React, Next.js, and more"
      />

      {/* Post Count */}
      <p className="mb-4 text-sm text-muted">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>

      {/* Blog Posts Grid */}
      {posts.length === 0 ? (
        <div className="py-12 text-center text-muted">
          <p className="text-lg">No blog posts yet.</p>
          <p className="text-sm">Stay tuned for upcoming content!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Section>
  );
}
