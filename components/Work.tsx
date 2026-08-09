"use client";

import { useState } from "react";
import { projects, type Project } from "@/components/data";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const categories: Array<Project["category"] | "All"> = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export default function Work() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Work"
        title="Selected work"
        subtitle="Projects I've built from concept to production"
        meta="2025 — 2026"
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
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delayMs={index * 80}>
            <ProjectCard
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          </Reveal>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="py-12 text-center text-muted">
          No projects found for &quot;{filter}&quot;
        </p>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Section>
  );
}
