"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { DotLottieReact, DotLottie } from "@lottiefiles/dotlottie-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks";

interface FlyingLottieBirdProps {
  className?: string;
  size?: number;
  duration?: number; // Animation duration in seconds
  delay?: number; // Initial delay before first flight
  top?: string; // CSS top position
}

export function FlyingLottieBird({
  className,
  size = 80,
  duration = 10,
  delay = 2,
  top = "15%",
}: FlyingLottieBirdProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  // Callback when dotLottie instance is ready
  const dotLottieRefCallback = useCallback((dotLottie: DotLottie | null) => {
    dotLottieRef.current = dotLottie;
    if (dotLottie) {
      setIsReady(true);
    }
  }, []);

  // Intersection Observer to pause animation when not in view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Pause/play Lottie animation based on visibility
  useEffect(() => {
    const dotLottie = dotLottieRef.current;
    if (!dotLottie) return;

    if (isInView && isVisible) {
      dotLottie.play();
    } else {
      dotLottie.pause();
    }
  }, [isInView, isVisible]);

  // Start the animation after the initial delay
  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  const shouldAnimate = isVisible && isReady && isInView;

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute pointer-events-none z-40",
        shouldAnimate ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        top,
        left: 0,
        width: size,
        height: size,
        animation: shouldAnimate
          ? `birdFlyAcross ${duration}s ease-in-out infinite`
          : "none",
        transition: "opacity 0.5s ease-out",
      }}
      aria-hidden="true"
    >
      <DotLottieReact
        src="/animations/bird-flying.lottie"
        loop
        autoplay={isInView}
        style={{
          width: "100%",
          height: "100%",
        }}
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </div>
  );
}
