"use client";

import { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "./data";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((p) => p.category).filter(Boolean)),
  ];

  // Filter projects
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="border-b border-line py-[88px]">
      <div className="mx-auto max-w-wrap px-6 sm:px-8">
        {/* Header */}
        <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
          <div>
            <h2 className="font-display text-[clamp(26px,3vw,34px)] font-normal">
              Selected work
            </h2>
            <p className="mt-2 text-sm text-muted">
              Projects I've built from concept to production
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
            2025 — 2026
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-1.5 text-xs font-mono transition-all duration-300 ${
                filter === category
                  ? "bg-ink text-bg"
                  : "border border-line text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || project.title}
              className="group relative overflow-hidden rounded-xl border border-line bg-bg transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
              onMouseEnter={() =>
                setHoveredProject(project.id || project.title)
              }
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Image/Thumbnail */}
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
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-3xl">🚀</span>
                      <span>Project thumbnail</span>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                {project.category && (
                  <span className="absolute top-3 right-3 rounded-full bg-bg/90 backdrop-blur-sm px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted border border-line/50">
                    {project.category}
                  </span>
                )}

                {/* Hover Overlay with Links */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-3 bg-ink/80 backdrop-blur-sm transition-opacity duration-300 ${
                    hoveredProject === (project.id || project.title)
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-bg p-3 text-ink transition-all duration-300 hover:bg-accent hover:text-bg hover:scale-110"
                      aria-label="Live demo"
                    >
                      <FiExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-bg p-3 text-ink transition-all duration-300 hover:bg-accent hover:text-bg hover:scale-110"
                      aria-label="GitHub repository"
                    >
                      <FiGithub className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-normal group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {project.metrics.slice(0, 3).map((metric, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-accent/80"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                {/* Tags */}
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

                {/* View Project Link */}
                <div className="mt-4 pt-4 border-t border-line/50">
                  <a
                    href={`#project-${project.id || project.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-muted transition-colors duration-300 hover:text-accent group/link"
                  >
                    View case study
                    <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted">No projects found for "{filter}"</p>
          </div>
        )}
      </div>
    </section>
  );
}
