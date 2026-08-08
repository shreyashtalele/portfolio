import { useEffect, useState } from "react";

/**
 * Tracks which section is "active" for nav highlighting using a
 * scroll-position-anchor approach rather than IntersectionObserver ratios.
 *
 * Why: a ratio-based observer requires a section to occupy some percentage
 * of *its own height* on screen before it counts as active — which makes it
 * fragile for any section taller than the viewport (it may never cross the
 * threshold, and the previous section stays "stuck" active). This approach
 * instead asks a simpler, height-independent question: which section's top
 * has scrolled past the header? That works the same whether a section is
 * 200px or 2000px tall.
 */
export function useActiveSection(sectionIds: string[], headerOffset = 96) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    let ticking = false;

    const computeActiveSection = () => {
      ticking = false;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1] ?? "");
        return;
      }

      const scrollPosition = window.scrollY + headerOffset;
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActiveSection);
      }
    };

    computeActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, headerOffset]);

  return activeSection;
}
