// ═══════════════════════════════════════════════════════════════════════════
// Type Definitions for Melika Portfolio
// ═══════════════════════════════════════════════════════════════════════════

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | "Present";
  description?: string;
  achievements?: string[];
  gpa?: string;
}

export interface WorkExperience {
  id: string;
  role: "researcher" | "teaching" | "industry";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  draft?: boolean;
}

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  draft?: boolean;
}

export interface Tag {
  id: string;
  name: string;
  count?: number;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: {
    name: string;
    email: string;
    bio: string;
  };
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email: string;
  };
}
