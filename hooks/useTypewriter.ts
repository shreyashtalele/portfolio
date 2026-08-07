import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time. Respects prefers-reduced-motion —
 * users with that preference see the full text immediately instead of a
 * forced animation.
 */
export function useTypewriter(text: string, speedMs = 35) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));
      if (index >= text.length) {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, speedMs]);

  return { displayedText, isComplete };
}
