import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/config";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ShareButtons from "@/components/ShareButtons";
import Section from "@/components/Section";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXComponents } from "mdx/types";

// Custom components for MDX with proper types
const components: MDXComponents = {
  pre: ({ children }) => (
    <pre className="my-4 overflow-x-auto rounded-lg border border-line bg-surface p-4">
      {children}
    </pre>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="rounded bg-accent/10 px-1.5 py-0.5 font-mono text-sm text-accent">
          {children}
        </code>
      );
    }
    return <code className="block font-mono text-sm text-ink">{children}</code>;
  },
  h1: ({ children }) => (
    <h1 className="mt-8 text-3xl font-display font-normal text-ink first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-6 text-2xl font-display font-normal text-ink">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-4 text-xl font-display font-normal text-ink">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-relaxed text-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-1 text-muted">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-1 text-muted">{children}</ol>
  ),
  li: ({ children }) => <li className="text-muted">{children}</li>,
  a: ({ children, href }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-accent transition-colors duration-300 hover:text-ink hover:underline"
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-4 border-l-3 border-accent pl-4 italic text-muted">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-line" />,
};

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Shreyash Talele"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Section id="blog-post">
      {/* Back Button */}
      <Link
        href="/blog"
        className="group mb-8 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-ink hover:text-ink hover:bg-line/5"
      >
        <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back to all posts
      </Link>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 text-xs text-muted">
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

        <h1 className="mt-2 font-display text-[clamp(28px,3.5vw,44px)] font-normal text-ink">
          {post.title}
        </h1>

        <p className="mt-2 text-lg text-muted">{post.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${encodeURIComponent(tag)}`}
              className="rounded-full border border-line px-3 py-1 font-mono text-[10px] text-muted transition-colors duration-300 hover:border-accent/30 hover:text-ink hover:bg-accent/5"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Post Content - Using MDXRemote with custom components */}
      <div className="blog-content max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>

      {/* Share Buttons */}
      <div className="mt-8 border-t border-line pt-6">
        <ShareButtons title={post.title} slug={post.slug} />
      </div>
    </Section>
  );
}
