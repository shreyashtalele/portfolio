"use client";

import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    if (stored) {
      setTheme(stored);
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark (since portfolio is dark themed)
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const initialTheme = prefersDark ? "dark" : "light";
      setTheme(initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Toggling to:", newTheme); // Debug log

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    // Toggle the class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      console.log("✅ Dark mode activated");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("✅ Light mode activated");
    }

    console.log("Current classes:", document.documentElement.className);
  };

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-line" />;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line transition-all duration-300 hover:border-ink hover:bg-line/20"
    >
      {theme === "dark" ? (
        <FiSun
          className="h-5 w-5 text-muted transition-colors hover:text-ink"
          strokeWidth={1.5}
        />
      ) : (
        <FiMoon
          className="h-5 w-5 text-muted transition-colors hover:text-ink"
          strokeWidth={1.5}
        />
      )}
    </button>
  );
}
