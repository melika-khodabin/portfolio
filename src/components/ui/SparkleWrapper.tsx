"use client";

import { useState, useEffect, ReactNode } from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks";

interface SparkleConfig {
  id: number;
  top: string;
  left: string;
  delay: number;
  size: number;
}

interface SparkleWrapperProps {
  children: ReactNode;
  className?: string;
  sparkleCount?: number;
  color?: string;
}

function generateSparkle(id: number): SparkleConfig {
  return {
    id,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    size: Math.random() * 6 + 8, // 8-14px
  };
}

export function SparkleWrapper({
  children,
  className,
  sparkleCount = 3,
  color = "text-accent",
}: SparkleWrapperProps) {
  const [sparkles, setSparkles] = useState<SparkleConfig[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Initial sparkles
    const initialSparkles = Array.from({ length: sparkleCount }, (_, i) =>
      generateSparkle(i)
    );
    setSparkles(initialSparkles);

    // Regenerate sparkles periodically for variety
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((sparkle) => ({
          ...sparkle,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 3,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [sparkleCount, prefersReducedMotion]);

  return (
    <span className={cn("relative inline-block", className)}>
      {children}
      {!prefersReducedMotion &&
        sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            className={cn(
              "absolute pointer-events-none animate-sparkle",
              color
            )}
            style={{
              top: sparkle.top,
              left: sparkle.left,
              width: sparkle.size,
              height: sparkle.size,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: "2s",
            }}
            aria-hidden="true"
          />
        ))}
    </span>
  );
}
