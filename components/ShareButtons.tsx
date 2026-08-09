"use client";

import { FiTwitter, FiLinkedin, FiLink } from "react-icons/fi";
import { SITE_URL } from "@/lib/config";

type ShareButtonsProps = {
  title: string;
  slug: string;
};

export default function ShareButtons({ title, slug }: ShareButtonsProps) {
  const url = `${SITE_URL}/blog/${slug}`;

  const shareToTwitter = () => {
    const text = encodeURIComponent(`${title}\n\n`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
    );
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-mono text-muted">Share:</span>
      <button
        onClick={shareToTwitter}
        className="rounded-full border border-line p-2 text-muted transition-all duration-300 hover:border-accent/30 hover:text-ink"
        aria-label="Share on Twitter"
      >
        <FiTwitter className="h-4 w-4" />
      </button>
      <button
        onClick={shareToLinkedIn}
        className="rounded-full border border-line p-2 text-muted transition-all duration-300 hover:border-accent/30 hover:text-ink"
        aria-label="Share on LinkedIn"
      >
        <FiLinkedin className="h-4 w-4" />
      </button>
      <button
        onClick={copyLink}
        className="rounded-full border border-line p-2 text-muted transition-all duration-300 hover:border-accent/30 hover:text-ink"
        aria-label="Copy link"
      >
        <FiLink className="h-4 w-4" />
      </button>
    </div>
  );
}
