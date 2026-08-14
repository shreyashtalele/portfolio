"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../components/data";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About", isPage: false },
  { href: "#work", label: "Work", isPage: false },
  { href: "#skills", label: "Skills", isPage: false },
  { href: "#experience", label: "Experience", isPage: false },
  { href: "/blog", label: "Blog", isPage: true },
  { href: "#contact", label: "Contact", isPage: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname?.startsWith("/blog");

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Track scroll for header shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll (only on homepage)
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = links
      .filter((link) => !link.isPage)
      .map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-72px 0px -72px 0px" },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleLinkClick = (href: string, isPage: boolean) => {
    setOpen(false);

    if (isPage) {
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href: string, isPage: boolean) => {
    if (isPage) {
      return pathname === href || pathname?.startsWith("/blog/");
    }
    return activeSection === href.replace("#", "");
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-xl shadow-lg shadow-black/5 dark:bg-bg/95"
          : "bg-bg/[0.86] backdrop-blur-sm dark:bg-bg/[0.86]"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-wrap items-center justify-between px-6 sm:px-8">
        {/* Logo / Name - FIXED */}
        <Link
          href="/"
          className="font-display text-[19px] font-medium tracking-tight transition-colors duration-300 hover:text-accent"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {profile.name}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) =>
            link.isPage ? (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-300 hover:text-ink ${
                  isActive(link.href, link.isPage)
                    ? "text-ink font-medium"
                    : "text-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
                {isActive(link.href, link.isPage) && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-4 rounded-full bg-accent" />
                )}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.isPage);
                }}
                className={`relative text-sm transition-colors duration-300 hover:text-ink ${
                  isActive(link.href, link.isPage)
                    ? "text-ink font-medium"
                    : "text-muted"
                }`}
              >
                {link.label}
                {isActive(link.href, link.isPage) && (
                  <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-4 rounded-full bg-accent" />
                )}
              </a>
            ),
          )}
        </div>

        {/* Right Side: ThemeToggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors duration-300 hover:bg-line/20 md:hidden"
          >
            {open ? (
              <X className="h-4 w-4 text-ink" strokeWidth={1.5} />
            ) : (
              <Menu className="h-4 w-4 text-ink" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-x-0 top-[72px] z-40 max-h-[calc(100vh-72px)] overflow-y-auto border-b border-line bg-bg px-6 py-8 transition-all duration-300 md:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-6">
          {links.map((link, index) =>
            link.isPage ? (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors duration-300 ${
                  isActive(link.href, link.isPage)
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                }`}
                onClick={() => setOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-sm text-accent font-mono">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  {link.label}
                </span>
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href, link.isPage);
                }}
                className={`text-lg transition-colors duration-300 ${
                  isActive(link.href, link.isPage)
                    ? "text-ink font-medium"
                    : "text-muted hover:text-ink"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-sm text-accent font-mono">
                    {(index + 1).toString().padStart(2, "0")}.
                  </span>
                  {link.label}
                </span>
              </a>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
