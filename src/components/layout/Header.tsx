"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Bird } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-300">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-secondary/30">
              <Bird className="w-5 h-5 text-white transform transition-transform duration-300 group-hover:animate-wiggle" />
            </div>
            <span className="font-heading text-xl font-medium tracking-tight">
              Melika
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-primary"
                      : "text-base-content/70 hover:text-base-content"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-base-content/70 hover:text-base-content transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-secondary/20 text-secondary-content"
                        : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                    )}
                  >
                    {item.label}
                    {item.description && (
                      <span className="block text-xs text-base-content/50 mt-0.5">
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
