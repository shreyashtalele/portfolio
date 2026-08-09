import { FiMail, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/components/data";
import Section from "@/components/Section";

export default function Contact() {
  return (
    <Section id="contact" noBorder>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-normal">
          Let's build something{" "}
          <span className="text-accent">clean and useful</span> together.
        </h2>

        <p className="mt-4 text-muted">
          I'm currently open to full-time opportunities and freelance work.
          Whether you have a project, an idea, or just want to connect, I'd love
          to hear from you.
        </p>

        {/* Contact Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm text-ink transition-all duration-300 hover:border-ink hover:bg-line/5"
          >
            <FiMail className="h-4 w-4" />
            {profile.email}
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm text-ink transition-all duration-300 hover:border-ink hover:bg-line/5"
          >
            <FiGithub className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm text-ink transition-all duration-300 hover:border-ink hover:bg-line/5"
          >
            <FiLinkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-medium text-bg transition-all duration-300 hover:scale-[1.02] hover:bg-accent"
          >
            <FiDownload className="h-4 w-4" />
            Download Résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
