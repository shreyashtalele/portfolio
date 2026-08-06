import { skillGroups } from "./data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-[88px]">
      <div className="mx-auto max-w-wrap px-8">
        <div className="mb-11">
          <h2 className="font-display text-[clamp(26px,3vw,34px)] font-normal">
            Skills &amp; tools
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
