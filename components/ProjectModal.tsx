"use client";

import { useEffect } from "react";
import type { Project } from "@/components/data";
import { FiX, FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const caseStudy = project.caseStudy;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[101] flex items-center justify-center overflow-y-auto p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-line bg-bg p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-line p-2 text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
            aria-label="Close modal"
          >
            <FiX className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="pt-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {project.category}
                </span>
                {caseStudy?.techStack && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                    {caseStudy.techStack.join(" · ")}
                  </span>
                )}
              </div>
              <h2
                id="modal-title"
                className="mt-3 font-display text-[clamp(24px,3vw,36px)] font-normal"
              >
                {project.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
            </div>

            {/* Problem */}
            {caseStudy?.problem && (
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Problem
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {caseStudy.problem}
                </p>
              </div>
            )}

            {/* Solution */}
            {caseStudy?.solution && (
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Solution
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {caseStudy.solution}
                </p>
              </div>
            )}

            {/* Approach */}
            {caseStudy?.approach && caseStudy.approach.length > 0 && (
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Approach
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {caseStudy.approach.map((item, index) => (
                    <li key={index} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {caseStudy?.techStack && caseStudy.techStack.length > 0 && (
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Tech Stack
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {caseStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Outcomes */}
            {caseStudy?.outcomes && caseStudy.outcomes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Outcomes
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {caseStudy.outcomes.map((outcome, index) => (
                    <li key={index} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">✓</span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors duration-300 hover:border-ink"
                >
                  <FiGithub className="h-4 w-4" />
                  View Code
                </a>
              )}
              {project.demoUrl && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent"
                >
                  <FiExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
