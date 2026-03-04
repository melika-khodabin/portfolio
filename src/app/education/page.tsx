import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { Timeline } from "@/components/education";
import educationData from "@/data/education.json";
import type { Education } from "@/types";

export const metadata: Metadata = {
  title: "Education",
  description:
    "My academic journey through undergraduate studies, graduate research, and doctoral work in cognitive science.",
};

export default function EducationPage() {
  const education = educationData as Education[];

  return (
    <>
      <PageHeader
        title="Education"
        subtitle="A timeline of my academic journey, from foundational studies to advanced research in cognitive science."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <Timeline items={education} />
        </div>
      </section>
    </>
  );
}
