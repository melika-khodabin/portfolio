import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  BookOpen,
  Database,
  Globe,
  Award,
  Code,
  FlaskConical,
} from "lucide-react";
import { PageHeader } from "@/components/layout";
import { Card } from "@/components/ui";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Melika Khodabin — interdisciplinary researcher, data engineer, and author of peer-reviewed publications on AI Literacy and algorithmic culture.",
};

const researchInterests = [
  { label: "AI Literacy", icon: BookOpen },
  { label: "Educational Studies", icon: BookOpen },
  { label: "Algorithmic Culture", icon: Globe },
  { label: "Sociotechnical Systems", icon: FlaskConical },
  { label: "Media Studies", icon: Globe },
  { label: "Semantic Layer of AI Analysis", icon: Database },
];

const skills = [
  { category: "Programming", items: ["Python (Pandas, NumPy, Spark, Streamlit, Plotly)", "OOP Programming", "RStudio", "TensorFlow (familiar)"] },
  { category: "Data & Analytics", items: ["SQL", "T-SQL", "DBeaver", "Power BI", "IBM SPSS", "ML/AI Testing"] },
  { category: "Productivity", items: ["Microsoft Office"] },
];

const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "Pre-Intermediate" },
];

const publications = [
  {
    title: "Telemedicine: An AI Solution, at Last",
    authors: "Toosi, R., Tomraee, S., Khodabin, M., & Sakhaei, S.",
    venue: "Code, Cognition & Society, Vol. 1, No. 1, pp. 59–87",
    year: 2025,
  },
  {
    title: "Critical AI Literacy: Preparing Learners for Algorithmic Societies",
    authors: "Khodabin, M., Sharifi Poor Bgheshmi, M. S., & Movahedzadeh, F.",
    venue: "Journal of Cyberspace Studies, Vol. 8, No. 2, pp. 371–390",
    year: 2024,
  },
  {
    title: "AI Literacy and Digital Readiness in Iranian Media",
    authors: "Khodabin, M., Zibaei, F., & Piriyaei, F.",
    venue: "Journal of Cyberspace Studies, Vol. 7, No. 2, pp. 299–306",
    year: 2023,
  },
  {
    title: "Mapping the Landscape of AI Literacy: An Integrative Review",
    authors: "Khodabin, M., Sharifi Poor Bgheshmi, M. S., Piriyaei, F., & Zibaei, F.",
    venue: "Socio-Spatial Studies",
    year: 2022,
  },
  {
    title: "Anime, Consume, and Participation: Iranian Instagram Users' Participation in Anime Fandom Activities",
    authors: "Golmohammadi, A., Khodabin, M., & Sabbar, S.",
    venue: "Journal of Cyberspace Studies, Vol. 5, No. 2, pp. 163–176",
    year: 2021,
  },
  {
    title: "Disability Representation in Japanese Anime: The Case Study of Watching Anime Influence on Iranian Audiences' Thinking of Disability",
    authors: "A., Khodabin, M., Golmohammadi, & Sabbar, S.",
    venue: "Master Thesis",
    year: 2021,
  },
];

const certificates = [
  { issuer: "TOEFL", title: "Overall Score: 98", year: 2026 },
  { issuer: "Coursera & University of Michigan", title: "Programming For Everybody (Starting with Python)" },
  { issuer: "Coursera & University of Michigan", title: "Python Data Structure" },
  { issuer: "Coursera & IBM", title: "Data Analytics Essentials" },
  { issuer: "Coursera & IBM", title: "Excel Essentials for Data Analytics" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Interdisciplinary researcher and data engineer exploring the intersection of AI, media, and society."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 space-y-16">

          {/* Introduction */}
          <div className="prose-custom animate-fade-in-up opacity-0">
            <p className="text-lg text-base-content leading-relaxed mb-6">
              Hello! I&apos;m {siteConfig.author.name}. I'm an interdisciplinary researcher and data specialist with a strong academic background in media studies and emerging technologies.
            </p>
            <p className="text-base-content/70 leading-relaxed mb-6">
              I am the author of multiple peer-reviewed publications addressing AI Literacy, AI-enabled analytics, and algorithmic culture in social media. My work sits at the intersection of communication sciences, data engineering, and critical technology studies.
            </p>
            <p className="text-base-content/70 leading-relaxed">
              On the industry side, I work as a Data Quality Engineer at Snapp!, where I ensure the reliability and accuracy of large-scale data systems. I am passionate about applying rigorous research thinking to real-world data problems.
            </p>
          </div>

          {/* Research Interests */}
          <div className="animate-fade-in-up opacity-0 delay-100">
            <h2 className="font-heading text-2xl mb-6">Research Interests</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {researchInterests.map(({ label, icon: Icon }) => (
                <Card key={label} padding="md">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-secondary/20 text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="animate-fade-in-up opacity-0 delay-150">
            <h2 className="font-heading text-2xl mb-6">Publications</h2>
            <div className="space-y-4">
              {publications.map((pub) => (
                <div key={pub.title} className="p-4 rounded-xl border border-base-300 bg-base-100">
                  <p className="font-medium text-sm mb-1">{pub.title}</p>
                  <p className="text-xs text-base-content/60 mb-1">{pub.authors}</p>
                  <p className="text-xs text-primary/80">
                    {pub.venue}{pub.year ? `, ${pub.year}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in-up opacity-0 delay-200">
            <h2 className="font-heading text-2xl mb-6">Skills</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {skills.map(({ category, items }) => (
                <Card key={category} padding="md">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4 text-primary" />
                    <h3 className="font-medium text-sm">{category}</h3>
                  </div>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-xs text-base-content/70">{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="animate-fade-in-up opacity-0 delay-200">
            <h2 className="font-heading text-2xl mb-6">Languages</h2>
            <div className="flex flex-wrap gap-3">
              {languages.map(({ name, level }) => (
                <div key={name} className="px-4 py-2 rounded-lg border border-base-300 bg-base-100 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{name}</span>
                  <span className="text-xs text-base-content/50">— {level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="animate-fade-in-up opacity-0 delay-200">
            <h2 className="font-heading text-2xl mb-6">Certificates</h2>
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.title} className="flex items-start gap-3">
                  <Award className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{cert.title}</p>
                    <p className="text-xs text-base-content/50">{cert.issuer}{cert.year ? ` · ${cert.year}` : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="animate-fade-in-up opacity-0 delay-300">
            <h2 className="font-heading text-2xl mb-6">Let&apos;s Connect</h2>
            <p className="text-base-content/70 mb-6">
              I&apos;m always happy to connect with fellow researchers, data practitioners, or anyone curious about AI and its societal implications. Feel free to reach out.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="btn btn-primary"
              >
                <Mail className="w-4 h-4" />
                Send me an email
              </a>
              {siteConfig.social.github && (
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              )}
            </div>

            <div className="p-6 rounded-xl bg-base-200 border border-base-300">
              <p className="text-base-content mb-3">
                Want to see what I&apos;m thinking about?
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Read my blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
