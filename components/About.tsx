import { facts } from "@/components/data";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A bit about how I work" />
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.3fr_1fr] md:gap-[56px]">
        <div>
          <p className="max-w-[60ch] text-base text-muted">
            Software engineer based in Pune, building clean, performant web
            applications. I specialize in React, Next.js, and full-stack
            development — turning complex problems into intuitive,
            production-ready solutions.
          </p>
          <p className="mt-4 max-w-[60ch] text-base text-muted">
            I've built production applications using modern frameworks and
            technologies. I'm currently deepening my expertise in TypeScript,
            system architecture, and building scalable, high-impact solutions.
          </p>
        </div>
        <div className="flex flex-col border-t border-line">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between border-b border-line py-3.5 text-sm"
            >
              <span className="font-mono text-muted">{fact.label}</span>
              <span>{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
