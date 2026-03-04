import {
  Microscope,
  GraduationCap,
  Briefcase,
  MapPin,
  Calendar,
  type LucideIcon,
} from "lucide-react";
import { Card, Tag } from "@/components/ui";
import type { WorkExperience } from "@/types";

interface RoleSectionProps {
  title: string;
  description: string;
  role: "researcher" | "teaching" | "industry";
  experiences: WorkExperience[];
}

const roleIcons: Record<string, LucideIcon> = {
  researcher: Microscope,
  teaching: GraduationCap,
  industry: Briefcase,
};

const roleColors: Record<string, string> = {
  researcher: "bg-primary/10 text-primary",
  teaching: "bg-secondary/20 text-secondary-content",
  industry: "bg-accent/10 text-accent",
};

export function RoleSection({
  title,
  description,
  role,
  experiences,
}: RoleSectionProps) {
  const Icon = roleIcons[role];
  const colorClass = roleColors[role];

  if (experiences.length === 0) {
    return null;
  }

  return (
    <section className="mb-16 last:mb-0">
      {/* Section header */}
      <div className="flex items-start gap-4 mb-8">
        <div className={`p-3 rounded-xl ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-heading text-2xl mb-1">{title}</h2>
          <p className="text-base-content/70">{description}</p>
        </div>
      </div>

      {/* Experience cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={exp.id}
            hover
            padding="lg"
            className={`animate-fade-in-up opacity-0`}
            style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              {/* Main content */}
              <div className="flex-1">
                <h3 className="font-heading text-xl mb-1">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-base-content/70 mb-3">
                  <span className="font-medium text-base-content">
                    {exp.organization}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-base-content/70 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-base-content/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Tag key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
