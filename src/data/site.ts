import type { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Melika Khodabin",
  title: "Melika Khodabin — Researcher & Data Engineer",
  description:
    "Interdisciplinary researcher and data specialist exploring AI Literacy, algorithmic culture, and the role of AI in communications and media.",
  author: {
    name: "Melika Khodabin",
    email: "khodabin.melika@gmail.com",
    bio: "Interdisciplinary researcher and data engineer with a background in media studies and emerging technologies. Interested in AI Literacy, educational studies, and algorithmic culture.",
  },
  social: {
    github: "https://github.com/melika-khodabin",
    linkedin: "https://www.linkedin.com/in/melika-khodabin/",
    email: "khodabin.melika@gmail.com",
  },
};

export const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Welcome to my corner of the internet",
  },
  {
    label: "Education",
    href: "/education",
    description: "My academic journey and learning path",
  },
  {
    label: "Work",
    href: "/work",
    description: "Research, teaching, and professional experience",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Thoughts, ideas, and reflections",
  },
  {
    label: "About",
    href: "/about",
    description: "A bit more about me",
  },
];
