import { profile } from "./data";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-4 px-8 py-8 text-sm text-muted sm:flex-row">
        <span>© 2026 {profile.name}</span>
        <div className="flex gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
