import { profile } from "./data";

export default function Contact() {
  return (
    <section id="contact" className="py-[88px]">
      <div className="mx-auto max-w-wrap px-8">
        <h2 className="max-w-[18ch] font-display text-[clamp(26px,3vw,34px)] font-normal">
          Let&apos;s build something{" "}
          <em className="not-italic italic text-accent">
            clean and useful
          </em>{" "}
          together.
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-display text-xl italic text-accent underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            {profile.email}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded border border-line px-5 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-ink"
          >
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
