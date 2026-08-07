import { experience } from "@/components/data";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Experience" />
      <div className="flex flex-col">
        {experience.map((role) => (
          <div
            key={role.role}
            className="grid grid-cols-1 items-center gap-1.5 border-b border-line py-5 first:border-t md:grid-cols-[1fr_2fr_1fr] md:gap-6"
          >
            <div className="font-mono text-xs text-muted">{role.period}</div>
            <div>
              <h3 className="font-display text-lg font-normal">{role.role}</h3>
              <span className="text-sm text-muted">{role.company}</span>
            </div>
            <div className="text-sm text-muted md:text-right">
              {role.location}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
