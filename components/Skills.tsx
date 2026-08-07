import { skillGroups } from "@/components/data";
import { skillIconMap } from "@/components/skillIcons";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import SkillChip from "@/components/SkillChip";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Skills & tools" />

      <div className="flex flex-col gap-10">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.title} delayMs={groupIndex * 100}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
              {group.title}
            </h3>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {group.items.map((item) => (
                <SkillChip key={item} name={item} icon={skillIconMap[item]} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
