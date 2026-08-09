"use client";

"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowDown, FiFileText } from "react-icons/fi";
import { profile, stats } from "@/components/data";
import { useTypewriter } from "@/hooks/useTypewriter";

const HEADLINE = "I build clean, reliable, and scalable web applications.";
export default function Hero() {
  const { displayedText, isComplete } = useTypewriter(HEADLINE, 35);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden pt-4 pb-12 md:pt-6 md:pb-16"
      style={{ marginTop: 0 }}
    >
      <div className="mx-auto grid w-full max-w-wrap grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[56px]">
        {/* Left content */}
        <div className="flex flex-col items-start">
          <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 font-mono text-xs text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-accent opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </div>

          <div className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            {profile.role}
          </div>

          <h1 className="font-display text-[clamp(28px,3.5vw,48px)] font-normal leading-[1.08] tracking-[-0.01em]">
            {displayedText}
            {!isComplete && (
              <span
                aria-hidden="true"
                className="inline-block h-[0.9em] w-[0.05em] translate-y-[0.05em] animate-pulse2 bg-accent align-middle motion-reduce:hidden"
              />
            )}
          </h1>

          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted sm:mt-6">
            Full-stack developer with 1+ year of internship experience building
            production-grade web applications. I own features end-to-end — from
            API design and database schema to responsive UI.
          </p>

          <div className="mt-7 flex w-full flex-wrap gap-3.5 sm:mt-9 sm:w-auto">
            <a
              href="#work"
              className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all duration-300 hover:scale-[1.02] hover:bg-accent active:scale-[0.98] sm:flex-none"
            >
              View my work
              <FiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:scale-[1.02] hover:border-ink hover:bg-line/5 active:scale-[0.98] sm:flex-none"
            >
              Get in touch
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:scale-[1.02] hover:border-ink hover:text-ink active:scale-[0.98] sm:w-auto"
            >
              <FiFileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-mono text-xs text-muted">Connect</span>
            <span className="h-px w-8 bg-line" />

            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-line/20 hover:text-ink"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-line/20 hover:text-ink"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="rounded-full p-2 text-muted transition-all duration-300 hover:scale-110 hover:bg-line/20 hover:text-ink"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right side: photo + stats */}
        <div className="flex flex-col items-center gap-6">
          {/*
            TODO: replace with next/image once you have a real photo:
            <Image src="/headshot.jpg" alt={profile.name} fill className="object-cover" />
          */}

          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
            <Image
              src="/photo.jpg"
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover"
            />
          </div>

          <div className="grid w-full max-w-[320px] grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-line/50 bg-surface dark:bg-surface px-4 py-3 text-center transition-all duration-300 hover:border-accent/20 hover:bg-accent/5"
              >
                <div className="font-display text-xl font-medium text-ink dark:text-ink sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-muted dark:text-muted sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
