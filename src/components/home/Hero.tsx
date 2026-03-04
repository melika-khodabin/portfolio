"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import {
  FlyingLottieBird,
  FloatingFeathers,
  SparkleWrapper,
} from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Flying bird Lottie animation across the screen */}
      <FlyingLottieBird size={100} duration={12} delay={1} top="5%" />

      {/* Floating feathers in background */}
      <FloatingFeathers />

      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl opacity-20"
        style={{ animation: "float 4s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"
        style={{ animation: "float 4s ease-in-out infinite 2s" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Greeting with sparkles */}
          <SparkleWrapper sparkleCount={3} color="text-accent">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-8 animate-fade-in opacity-0">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to my corner of the internet</span>
            </div>
          </SparkleWrapper>

          {/* Main heading */}
          <h1 className="mb-6 animate-fade-in-up opacity-0 delay-100">
            <span className="block text-base-content/70 text-2xl md:text-3xl font-heading font-normal mb-2">
              Hello, I&apos;m
            </span>
            <span className="text-gradient">{siteConfig.author.name}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-base-content/70 leading-relaxed mb-8 animate-fade-in-up opacity-0 delay-200 text-balance">
            {siteConfig.author.bio}
          </p>

          {/* Description */}
          <p className="text-base-content/70 leading-relaxed mb-10 animate-fade-in-up opacity-0 delay-300 max-w-2xl">
            This is my personal space for sharing thoughts, documenting my
            academic journey, and exploring ideas at the intersection of mind
            and machine. Feel free to look around.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-400">
            <Link
              href="/blog"
              className="btn btn-primary group hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              style={{ transition: "all 0.3s ease-out" }}
            >
              <BookOpen className="w-4 h-4" />
              Read my thoughts
            </Link>
            <Link
              href="/about"
              className="btn btn-outline group hover:scale-105"
              style={{ transition: "all 0.3s ease-out" }}
            >
              Learn more about me
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
