import { useState, useCallback, useEffect } from "react";

export function useModal<T = any>() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const open = useCallback((modalData?: T) => {
    setData(modalData || null);
    setIsOpen(true);
    // Lock body scroll
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Unlock body scroll
    document.body.style.overflow = "unset";
    // Clear data after animation
    setTimeout(() => setData(null), 300);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        close();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, close]);

  return { isOpen, data, open, close };
}
