"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { FiArrowLeft } from "react-icons/fi";

type BlogPageClientProps = {
  posts: BlogPost[];
  tags: string[];
};

export default function BlogPageClient({
  posts: allPosts,
  tags: allTags,
}: BlogPageClientProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const posts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts;

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

      {/* Tags Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
            selectedTag === null
              ? "bg-ink text-bg"
              : "border border-line text-muted hover:border-ink hover:text-ink"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
              selectedTag === tag
                ? "bg-ink text-bg"
                : "border border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post Count */}
      <p className="mb-4 text-sm text-muted">
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>

      {/* Blog Posts Grid */}
      {posts.length === 0 ? (
        <div className="py-12 text-center text-muted">
          <p className="text-lg">No posts found for "{selectedTag}"</p>
          <p className="text-sm">Try selecting a different tag</p>
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
