import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { siteConfig, navigation } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-base-300 bg-base-200">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-lg mb-3">{siteConfig.name}</h3>
            <p className="text-sm text-base-content/70 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-base-content">
              Explore
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-base-content/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-base-content">
              Connect
            </h4>
            <div className="flex gap-4">
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-base-content/70 hover:text-primary hover:bg-base-100 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-base-content/70 hover:text-primary hover:bg-base-100 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="p-2 rounded-lg text-base-content/70 hover:text-primary hover:bg-base-100 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-base-300 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-base-content/50">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-base-content/50 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary animate-heartbeat" /> and curiosity
          </p>
        </div>
      </div>
    </footer>
  );
}
