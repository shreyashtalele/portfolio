import { experience } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-[88px]">
      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-11">
          <h2 className="font-display text-[clamp(26px,3vw,34px)] font-normal">
            Experience
          </h2>
        </div>
        <div className="flex flex-col">
          {experience.map((role) => (
            <div
              key={role.role}
              className="grid grid-cols-1 items-center gap-1.5 border-b border-line py-5 first:border-t md:grid-cols-[1fr_2fr_1fr] md:gap-6"
            >
              <div className="font-mono text-xs text-muted">
                {role.period}
              </div>
              <div>
                <h3 className="font-display text-lg font-normal">
                  {role.role}
                </h3>
                <span className="text-sm text-muted">{role.company}</span>
              </div>
              <div className="text-sm text-muted md:text-right">
                {role.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
