import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group flex h-full cursor-pointer flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
        {/* Date & Reading Time - Fixed height */}
        <div className="flex h-5 items-center gap-3 text-xs text-muted">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>

        {/* Title - Fixed height with line clamp */}
        <h3 className="mt-2 line-clamp-2 font-display text-xl font-normal transition-colors duration-300 group-hover:text-accent">
          {post.title}
        </h3>

        {/* Description - Fixed height with line clamp */}
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
          {post.description}
        </p>

        {/* Tags - Fixed height */}
        <div className="mt-4 flex min-h-[28px] flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-ink"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
