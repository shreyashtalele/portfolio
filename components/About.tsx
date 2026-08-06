import { facts } from "./data";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-[88px]">
      <div className="mx-auto grid max-w-wrap grid-cols-1 gap-14 px-8 md:grid-cols-[1.3fr_1fr] md:gap-[56px]">
        <div>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
            About
          </div>
          <p className="max-w-[60ch] text-base text-muted">
            I&apos;m a software developer based in Pune, working across
            frontend engineering and full-stack web development. I like
            turning designs into fast, responsive interfaces, and I&apos;m
            just as comfortable wiring up the REST API and database behind
            them.
          </p>
          <p className="mt-4 max-w-[60ch] text-base text-muted">
            I completed a Software Development Trainee internship building a
            Shipment Management System with Next.js, FastAPI, and PostgreSQL.
            These days I&apos;m sharpening my TypeScript, backend
            architecture, and DSA fundamentals to build scalable,
            production-ready software.
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
    </section>
  );
}
