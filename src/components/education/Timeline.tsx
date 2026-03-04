import { GraduationCap, Award, MapPin } from "lucide-react";
import type { Education } from "@/types";

interface TimelineProps {
  items: Education[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      <div className="timeline-line" />

      {/* Timeline items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item relative animate-slide-in-left opacity-0`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline dot */}
            <div className="timeline-dot top-2" />

            {/* Content */}
            <div className="bg-base-100 rounded-xl border border-base-300 p-6 md:p-8 ml-4 card-hover">
              {/* Header */}
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-secondary/20 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-primary">
                      {item.degree}
                    </span>
                    <span className="text-base-content/50">·</span>
                    <span className="text-sm text-base-content/70">
                      {item.startYear} — {item.endYear}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-base-content">
                    {item.field}
                  </h3>
                </div>
              </div>

              {/* Institution & Location */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-base-content/70">
                <span className="font-medium">{item.institution}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>

              {/* Description */}
              {item.description && (
                <p className="text-base-content/70 mb-4 leading-relaxed">
                  {item.description}
                </p>
              )}

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-4 pt-4 border-t border-base-300">
                  <h4 className="flex items-center gap-2 text-sm font-medium text-base-content mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-base-content/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* GPA */}
              {item.gpa && (
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-base-200 text-sm">
                  <span className="text-base-content/50">GPA:</span>
                  <span className="font-medium text-base-content">
                    {item.gpa}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
