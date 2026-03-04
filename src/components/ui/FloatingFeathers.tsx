"use client";

import { Feather } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks";

interface FeatherConfig {
  id: number;
  left: string;
  delay: string;
  duration: string;
  size: string;
  opacity: number;
  rotate: number;
}

const feathers: FeatherConfig[] = [
  { id: 1, left: "10%", delay: "0s", duration: "10s", size: "w-4 h-4", opacity: 0.15, rotate: -15 },
  { id: 2, left: "25%", delay: "2s", duration: "12s", size: "w-5 h-5", opacity: 0.2, rotate: 10 },
  { id: 3, left: "45%", delay: "4s", duration: "9s", size: "w-3 h-3", opacity: 0.12, rotate: -20 },
  { id: 4, left: "65%", delay: "1s", duration: "11s", size: "w-4 h-4", opacity: 0.18, rotate: 15 },
  { id: 5, left: "80%", delay: "3s", duration: "10s", size: "w-5 h-5", opacity: 0.15, rotate: -10 },
  { id: 6, left: "90%", delay: "5s", duration: "13s", size: "w-3 h-3", opacity: 0.1, rotate: 25 },
];

export function FloatingFeathers() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {feathers.map((feather) => (
        <div
          key={feather.id}
          className="absolute -top-8"
          style={{
            left: feather.left,
            animationDelay: feather.delay,
            animationDuration: feather.duration,
            animation: `featherFall ${feather.duration} linear ${feather.delay} infinite`,
          }}
        >
          <Feather
            className={cn(feather.size, "text-secondary")}
            style={{
              opacity: feather.opacity,
              transform: `rotate(${feather.rotate}deg)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
