"use client";

import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};

/** Wrap any block to fade + slide it in once it scrolls into view. */
export default function Reveal({
  children,
  delayMs = 0,
  className = "",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
