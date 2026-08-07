"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, type Project } from "@/components/data";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const categories: Array<Project["category"] | "All"> = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Work() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work"
        subtitle="A collection of projects showcasing my experience in full-stack web development."
      />

      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
              filter === category
                ? "bg-ink text-bg"
                : "border border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const hasLinks = project.demoUrl || project.githubUrl;

          return (
            <Reveal key={project.id} delayMs={index * 80}>
              <div className="group relative overflow-hidden rounded-xl border border-line bg-bg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/5 to-line/20">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-mono text-xs text-muted">
                      Project thumbnail
                    </div>
                  )}

                  <span className="absolute right-3 top-3 rounded-full border border-line/50 bg-bg/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
                    {project.category}
                  </span>

                  {hasLinks && (
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="rounded-full bg-bg p-3 text-ink transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-bg"
                        >
                          <FiExternalLink className="h-5 w-5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} repository on GitHub`}
                          className="rounded-full bg-bg p-3 text-ink transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-bg"
                        >
                          <FiGithub className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-normal transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="font-mono text-[11px] text-accent/80"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-muted">
          No projects found for &quot;{filter}&quot;
        </p>
      )}
    </Section>
  );
}
