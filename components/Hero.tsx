"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowDown, FiFileText } from "react-icons/fi";
import Image from "next/image";
import { profile, stats } from "./data";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "I build clean, reliable, and scalable web applications.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-72px)] items-center border-b border-line pb-24 pt-3 m-0 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-wrap grid grid-cols-1 gap-14 px-6 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-[56px]">
        {/* Left Content */}
        <div className="flex flex-col items-start m-0 p-0">
          {/* Availability Badge */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-1.5 font-mono text-xs text-accent mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </div>

          {/* Role */}
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted mb-3">
            {profile.role}
          </div>

          {/* Heading */}
          <h1 className="font-display text-[clamp(36px,5.4vw,68px)] font-normal leading-[1.04] tracking-[-0.01em] mt-0">
            {isTypingComplete ? (
              <>
                I build clean,{" "}
                <em className="not-italic text-accent">reliable</em> and
                <br className="hidden sm:block" /> scalable web applications.
              </>
            ) : (
              <>
                {typedText}
                <span className="animate-pulse2 inline-block h-[0.08em] w-[0.04em] bg-accent align-middle motion-reduce:animate-none" />
              </>
            )}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-muted sm:mt-6">
            Full-stack developer with 1+ year of internship experience building
            production-grade web applications. I own features end-to-end — from
            API design and database schema to responsive UI.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-3.5 sm:mt-9">
            <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
              <a
                href="#work"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-all duration-300 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] sm:flex-none"
              >
                View my work
                <FiArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-line/5 hover:scale-[1.02] active:scale-[0.98] sm:flex-none"
              >
                Get in touch
              </a>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line px-6 py-3.5 text-sm font-medium text-muted transition-all duration-300 hover:border-ink hover:text-ink hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              <FiFileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs font-mono text-muted">Connect</span>
            <span className="h-px w-8 bg-line" />
            <div className="flex gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted transition-all duration-300 hover:bg-line/20 hover:text-ink hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted transition-all duration-300 hover:bg-line/20 hover:text-ink hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full p-2 text-muted transition-all duration-300 hover:bg-line/20 hover:text-ink hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
            <div className="flex h-full w-full items-center justify-center rounded-xl text-center font-mono text-xs text-muted">
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">📸</div>
                <span>Your photo here</span>
                <span className="text-[10px]">4:5 ratio recommended</span>
              </div>
            </div>
          </div>

          <div className="grid w-full max-w-[320px] grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-xl bg-surface border border-line/50 px-4 py-3 text-center transition-all duration-300 hover:border-accent/20 hover:bg-accent/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-display text-xl font-medium text-ink sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-muted sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform flex-col items-center gap-1.5 text-muted md:flex">
        <span className="text-[10px] font-mono uppercase tracking-[0.12em]">
          Scroll
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
