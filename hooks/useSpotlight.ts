import { useCallback, useRef } from "react";

/**
 * Tracks the mouse position within an element via CSS custom properties
 * (--spot-x, --spot-y) written directly to the DOM node — not React state,
 * so the high-frequency mousemove events never trigger a re-render.
 *
 * Usage: spread `ref` and `onMouseMove={handleMouseMove}` onto an element
 * that already has `relative` and `group` classes, then render
 * <SpotlightOverlay /> as its first child.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }, []);

  return { ref, handleMouseMove };
}
