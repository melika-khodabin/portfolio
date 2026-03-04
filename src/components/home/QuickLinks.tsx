import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  User,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui";

interface QuickLinkItem {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

const quickLinks: QuickLinkItem[] = [
  {
    title: "Education",
    description:
      "My academic journey from undergraduate studies to doctoral research",
    href: "/education",
    icon: GraduationCap,
  },
  {
    title: "Work",
    description: "Research projects, teaching experience, and industry roles",
    href: "/work",
    icon: Briefcase,
  },
  {
    title: "About",
    description: "A bit more about who I am and what drives my curiosity",
    href: "/about",
    icon: User,
  },
];

export function QuickLinks() {
  return (
    <section className="py-16 md:py-24 bg-base-200">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl mb-2">Explore</h2>
          <p className="text-base-content/70">
            Learn more about my journey and experience
          </p>
        </div>

        {/* Links grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href} className="group">
                <Card
                  hover
                  padding="lg"
                  className={`h-full animate-fade-in-up opacity-0 delay-${(index + 1) * 100}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-secondary/20 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-base-content/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-heading text-xl mb-2">{link.title}</h3>
                  <p className="text-base-content/70 text-sm">
                    {link.description}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
