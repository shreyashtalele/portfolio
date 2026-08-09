"use client";

import { profile } from "@/components/data";
import Container from "@/components/Container";
import { FiHeart } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-line">
      <Container className="py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted">
          {/* Navigation Links */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-ink"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}

          <span className="text-muted/30">|</span>

          {/* Copyright */}
          <span>
            © {year} {profile.name}
          </span>

          <span className="text-muted/30">|</span>

          {/* Built with */}
          <span className="flex items-center gap-1 text-xs text-muted/60">
            Built with
            <FiHeart className="h-3 w-3 text-accent" />
            using Next.js
          </span>
        </div>
      </Container>
    </footer>
  );
}
