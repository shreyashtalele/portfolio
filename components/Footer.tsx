import { profile } from "@/components/data";
import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <span>
          © {year} {profile.name}
        </span>
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
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}
