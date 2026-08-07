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
            I&apos;m a software developer based in Pune, working across frontend
            engineering and full-stack web development. I like turning designs
            into fast, responsive interfaces, and I&apos;m just as comfortable
            wiring up the REST API and database behind them.
          </p>
          <p className="mt-4 max-w-[60ch] text-base text-muted">
            I completed a Software Development Trainee internship building a
            Shipment Management System with Next.js, FastAPI, and PostgreSQL.
            These days I&apos;m sharpening my TypeScript, backend architecture,
            and DSA fundamentals to build scalable, production-ready software.
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
