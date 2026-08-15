"use client";

import type { Project } from "@/components/data";
import SpotlightOverlay from "@/components/SpotlightOverlay";
import { useSpotlight } from "@/hooks/useSpotlight";

type ProjectCardProps = {
  project: Project;
  onClick?: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { ref, handleMouseMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-bg transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
    >
      <SpotlightOverlay size={340} />

      {/* Header Section - No Image */}
      <div className="relative h-20 flex-shrink-0 bg-gradient-to-br from-accent/5 to-line/20 px-5 py-4 flex items-center">
        <span className="absolute right-3 top-3 rounded-full border border-line/50 bg-bg/90 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur-sm">
          {project.category}
        </span>
        <h3 className="font-display text-lg font-normal transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
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

        {/* Tags */}
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Click to view */}
        <div className="mt-4 text-[10px] font-mono uppercase tracking-widest text-muted/50 transition-colors duration-300 group-hover:text-accent/80">
          Click to view case study →
        </div>
      </div>
    </div>
  );
}
