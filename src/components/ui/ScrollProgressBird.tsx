"use client";

import { useState, useEffect } from "react";
import { Bird } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollProgress, useReducedMotion } from "@/hooks";

interface ScrollProgressBirdProps {
  className?: string;
}

export function ScrollProgressBird({ className }: ScrollProgressBirdProps) {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't show if user prefers reduced motion or no window height yet
  if (prefersReducedMotion || windowHeight === 0) return null;

  // Only show between 5% and 95% scroll
  const isVisible = progress > 0.05 && progress < 0.95;
  const opacity = isVisible ? 1 : 0;

  // Calculate vertical position (excluding header area)
  const topOffset = 80; // Header height + padding
  const bottomOffset = 100; // Footer offset
  const availableHeight = windowHeight - topOffset - bottomOffset;
  const topPosition = topOffset + progress * availableHeight;

  return (
    <div
      className={cn(
        "fixed right-4 z-40 pointer-events-none transition-opacity duration-500",
        className
      )}
      style={{
        top: `${Math.min(topPosition, windowHeight - bottomOffset)}px`,
        opacity,
      }}
      aria-hidden="true"
    >
      <div className="relative">
        {/* Trail effect */}
        <div
          className="absolute -top-2 right-1 w-1 h-8 bg-gradient-to-t from-transparent to-secondary/30 rounded-full transition-all duration-300"
          style={{
            opacity: progress > 0.1 ? 0.5 : 0,
            transform: `scaleY(${Math.min(progress * 2, 1)})`,
          }}
        />

        {/* Bird */}
        <div className="animate-bird-hover">
          <Bird className="w-6 h-6 text-secondary transform -scale-x-100 drop-shadow-md" />
        </div>

        {/* Progress indicator */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-base-300 rounded-full overflow-hidden">
          <div
            className="w-full bg-secondary rounded-full transition-all duration-300"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
