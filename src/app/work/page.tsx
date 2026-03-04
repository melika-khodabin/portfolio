import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { RoleSection } from "@/components/work";
import workData from "@/data/work.json";
import type { WorkExperience } from "@/types";

export const metadata: Metadata = {
  title: "Work",
  description:
    "My professional experience spanning research, teaching, and industry roles in cognitive science and technology.",
};

export default function WorkPage() {
  const experiences = workData as WorkExperience[];

  const researchExperiences = experiences.filter(
    (exp) => exp.role === "researcher"
  );
  const teachingExperiences = experiences.filter(
    (exp) => exp.role === "teaching"
  );
  const industryExperiences = experiences.filter(
    (exp) => exp.role === "industry"
  );

  return (
    <>
      <PageHeader
        title="Work"
        subtitle="My professional journey across research, teaching, and industry, exploring the intersection of human cognition and technology."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <RoleSection
            title="Research"
            description="Academic research exploring cognition and AI"
            role="researcher"
            experiences={researchExperiences}
          />

          <RoleSection
            title="Teaching"
            description="Sharing knowledge and mentoring students"
            role="teaching"
            experiences={teachingExperiences}
          />

          <RoleSection
            title="Industry"
            description="Applying research insights to real-world products"
            role="industry"
            experiences={industryExperiences}
          />
        </div>
      </section>
    </>
  );
}
