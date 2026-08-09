"use client";

import type { Project } from "@/components/data";
import SpotlightOverlay from "@/components/SpotlightOverlay";
import { useSpotlight } from "@/hooks/useSpotlight";
import { FiGithub, FiExternalLink, FiImage } from "react-icons/fi";

type ProjectCardProps = {
  project: Project;
  onClick?: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { ref, handleMouseMove } = useSpotlight<HTMLDivElement>();
  const hasLinks = project.demoUrl || project.githubUrl;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-bg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
    >
      <SpotlightOverlay size={340} />

      {/* Image Section - Fixed Height */}
      <div className="relative h-48 flex-shrink-0 overflow-hidden bg-gradient-to-br from-accent/5 to-line/20">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 font-mono text-xs text-muted/70">
            <FiImage className="h-6 w-6" aria-hidden="true" />
            Thumbnail coming soon
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
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content Section - Flex Column with Equal Height */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title */}
        <h3 className="font-display text-lg font-normal transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>

        {/* Description - Fixed height with line clamp */}
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Metrics - Fixed height area */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-3 flex min-h-[20px] flex-wrap gap-3">
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

        {/* Tags - Fixed height area with flex-wrap */}
        <div className="mt-3 flex min-h-[28px] flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacer to push "Click to view" to bottom */}
        <div className="flex-1" />

        {/* Click to view - Always at bottom */}
        <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-muted/50 transition-colors duration-300 group-hover:text-accent/80">
          Click to view case study →
        </div>
      </div>
    </div>
  );
}
