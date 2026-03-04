"use client";

import { useState, useCallback, KeyboardEvent } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks";

interface Particle {
  id: number;
  x: number;
  y: number;
}

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const spawnParticle = useCallback(() => {
    if (prefersReducedMotion) return;

    const particle: Particle = {
      id: Date.now() + Math.random(),
      x: Math.random() * 40 - 20, // Random x offset
      y: 0,
    };

    setParticles((prev) => [...prev.slice(-5), particle]); // Keep max 6 particles

    // Remove particle after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== particle.id));
    }, 800);
  }, [prefersReducedMotion]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Spawn sparkle on typing (not on special keys)
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      spawnParticle();
    }
  };

  return (
    <div className={cn("relative", className)}>
      {/* Sparkle particles */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
        {particles.map((particle) => (
          <Sparkles
            key={particle.id}
            className="absolute w-3 h-3 text-accent animate-particle-float"
            style={{
              left: particle.x,
              top: particle.y,
            }}
          />
        ))}
      </div>

      <Search
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-300",
          isFocused ? "text-primary" : "text-base-content/50"
        )}
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={cn(
          "w-full pl-10 pr-10 py-2.5 rounded-lg border bg-base-100 text-base-content placeholder:text-base-content/50 transition-all duration-300",
          isFocused
            ? "border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10"
            : "border-base-300",
          "focus:outline-none"
        )}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-base-content/50 hover:text-base-content hover:rotate-90 transition-all duration-300"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
