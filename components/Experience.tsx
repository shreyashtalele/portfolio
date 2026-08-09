import { experience } from "@/components/data";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Work Experience" />

      <div className="grid grid-cols-1 gap-6">
        {experience.map((role, index) => (
          <div
            key={role.role}
            className="group rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-normal transition-colors duration-300 group-hover:text-accent">
                  {role.role}
                </h3>
                <span className="text-sm font-medium text-muted">
                  @ {role.company}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <FiCalendar className="h-3.5 w-3.5" />
                <span className="font-mono text-xs">{role.period}</span>
              </div>
            </div>

            {/* Location */}
            <div className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <FiMapPin className="h-3.5 w-3.5" />
              <span>{role.location}</span>
            </div>

            {/* Description */}
            {role.description && (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {role.description}
              </p>
            )}

            {/* Achievements */}
            {role.achievements && role.achievements.length > 0 && (
              <div className="mt-4">
                <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                  Key Contributions
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {role.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-muted transition-colors duration-300 group-hover:text-ink/90"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {role.tech && role.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] text-muted transition-all duration-300 group-hover:border-accent/30 group-hover:text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
