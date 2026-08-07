"use client";

import { FiMail, FiDownload } from "react-icons/fi";
import { profile } from "@/components/data";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl">
          Let's build something{" "}
          <span className="text-accent">clean and useful</span> together.
        </h2>

        <p className="mt-6 text-muted">
          I'm currently open to full-time opportunities and freelance work.
          Whether you have a project, an idea, or just want to connect, I'd love
          to hear from you.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-display text-xl italic text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            <FiMail
              className="h-5 w-5 shrink-0 not-italic"
              aria-hidden="true"
            />
            {profile.email}
          </a>

          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
          >
            <FiDownload className="h-4 w-4" aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
