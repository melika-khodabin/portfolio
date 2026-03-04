"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook to track page scroll progress (0 to 1)
 * Throttled to 60fps for performance
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const newProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    setProgress(Math.min(1, Math.max(0, newProgress)));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initial calculation
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => window.removeEventListener("scroll", scrollListener);
  }, [handleScroll]);

  return progress;
}
