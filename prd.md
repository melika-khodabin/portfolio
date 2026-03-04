# Product Requirements Document (PRD)

## Product Name (Working)

**Melika — Portfolio & Ideas Space**
(Subtle, human, not startup-y. Can be refined later.)

---

## 1. Product Vision

This web application is a **personal, idea-centric portfolio** that blends education, professional work, and reflective writing into a single coherent identity.

The goal is not self-promotion in the loud sense, but **resonance**:
people who share similar interests should feel _seen_, curious, and intellectually invited.

The site should feel:

- Thoughtful, calm, and intentional
- Softly expressive (cute, but never childish)
- Professional without rigidity

The emotional aftertaste:

> “I want to read more of her thoughts.”

---

## 2. Target Audience

### Primary Audience

People who **share overlapping interests**, including:

- Academic thinkers
- Technologists interested in ideas, not hype
- Readers of reflective, semi-academic writing
- Creatives at the intersection of culture, media, and technology

### Secondary Audience

- Potential collaborators
- Curious professionals
- Like-minded peers discovering the site organically (SEO, shared links)

This is **not** optimized for recruiters or supervisors first — clarity and authenticity come before conversion.

---

## 3. Core Goals & Non-Goals

### Goals

- Present a unified personal identity across education, work, and ideas
- Enable thoughtful blog discovery via search and tags
- Feel warm and memorable through visual storytelling (Chairo, illustrations)
- Remain fast, static, and simple to maintain

### Non-Goals

- No backend or CMS
- No dashboards, analytics, or heavy interactivity
- No aggressive personal branding or marketing language
- No future-proofing beyond reasonable structure

---

## 4. Information Architecture

### Pages (Fully Separate)

1. **Home**
2. **Education**
3. **Work**
4. **Blog**
5. **About**

Navigation is persistent and minimal.

---

## 5. Page-Level Requirements

### 5.1 Home Page

**Purpose:** First emotional and intellectual impression.

**Above the Fold (Critical):**

- Short identity statement (1–2 sentences)
- Soft illustration (bird + human presence)
- Personal avatar
- One primary CTA (e.g., “Read my thoughts” or “Explore my work”)

**Content Below:**

- Brief section previews (Education / Work / Blog)
- Light visual separators using bird motifs
- No dense text blocks

**Tone:** Quiet confidence, curiosity-first.

---

### 5.2 Education Page

**Purpose:** Factual, clean record of academic path.

**Structure:**

- Vertical timeline:

  - Degree
  - Institution
  - Years

- Each timeline node expands into a **card** containing:

  - Focus areas
  - Skills gained
  - Outcomes (no future aspirations)

**Design Notes:**

- No speculation about future academic direction
- Calm typography
- Minimal illustrations (section dividers only)

---

### 5.3 Work Page

**Purpose:** Show competence without self-advertising.

**Structure:**

- Role-based sections:

  - Title
  - Organization
  - Duration

- Within each role:

  - Responsibilities (qualitative)
  - Skill tags (tools, domains)

- No metrics, KPIs, or quantified impact

**Design Notes:**

- Clean DaisyUI cards
- Skill tags use soft Indigo/Periwinkle variants
- Emphasis on clarity, not performance

---

### 5.4 Blog Page

**Purpose:** The intellectual heart of the site.

**Content Types:**

- Academic reflections
- Tech / data / AI writing
- Creative & cultural analysis

**Tone:**
Semi-academic but personal.
Clear thinking, human voice, no jargon flexing.

**Structure:**

- Blog index with:

  - Title
  - Short excerpt
  - Tags

- Optional bird illustration accents per category

**Search:**

- Client-side search
- Matches:

  - Title
  - Tags

- No synonym expansion or fuzzy logic

**Tags:**

- Hybrid system:

  - Suggested tags (for consistency)
  - Custom tags allowed

---

### 5.5 About Page

**Purpose:** Human grounding.

**Content:**

- Short narrative bio
- Personal values
- Interests
- Gentle mention of worldview (no slogans)

**Design Notes:**

- Most intimate page
- One or two soft illustrations
- Minimal structure, more breathing space

---

## 6. Visual & Design System

### Design Philosophy

**Tool-first.**
DaisyUI components are used as-is whenever possible.

No custom Tailwind re-implementation unless necessary.

### Color Theme

- **Primary:** Indigo
- **Secondary:** Periwinkle
- Soft neutrals for background
- No high-contrast aggression

### Typography

- Readable, calm, slightly literary
- No techy monospace emphasis except where needed

### Illustration System

- Chairo appears as:

  - Small recurring mascot (corners, dividers, blog headers)
  - Occasional hand-painted illustrations per section

- Always subtle, never dominant
- Artistic, soft, non-cartoonish

---

## 7. Technical Requirements

### Stack

- React
- Next.js
- Tailwind CSS
- DaisyUI (component + theme provider)

### Content Management

- **Blogs:** MDX + frontmatter
- **Configs / structured data:** Local JSON files
- No external APIs
- No backend

### SEO

- Static metadata per page
- Blog-level metadata from frontmatter
- Clean URLs
- Semantic HTML via DaisyUI components

---

## 8. Performance & Constraints

- Fully static build
- Fast load time
- Mobile-first responsiveness
- Accessible color contrast
- No tracking scripts required

---

## 9. Success Criteria

The product is successful if:

- Readers explore more than one page voluntarily
- Blog posts feel discoverable, not buried
- The site feels _memorable_, not generic
- Maintenance feels light, not burdensome

---

## 10. Guiding Principle (North Star)

> “Clarity over cleverness.
> Warmth over performance.
> Thoughtfulness over optimization.”

---

## Recommended MDX frontmatter (YAML)

```yaml
---
title: "Your post title"
slug: "your-post-title" # optional: auto-generate from title if missing
date: "2025-12-29" # ISO-8601 (YYYY-MM-DD)
updated: "2026-01-03" # optional
status: "published" # published | draft
category: "tech" # academic | tech | culture (your 3 main types)
tags:
  - "data-quality"
  - "great-expectations"
  - "clickhouse"
summary: "1–2 sentence summary used on the Blog index and for SEO."
cover:
  image: "/images/blog/your-cover.webp" # optional
  alt: "Short accessible description"
readingTimeMinutes: 6 # optional: can be computed, but allowed manually
featured: false # optional: pins on top of blog index
language: "en" # fixed to en for now, but explicit
seo:
  title: "Optional SEO title (defaults to title)"
  description: "Optional SEO description (defaults to summary)"
  keywords:
    - "AI literacy"
    - "data engineering"
    - "digital culture"
  ogImage: "/images/og/your-post-og.webp" # optional
chairo:
  variant: "header" # none | corner | header | divider
  note: "Soft bird motif near the title" # optional, for your own reference
---
```

## Field rules (so your code stays sane)

- **Required:** `title`, `date`, `category`, `tags`, `summary`, `status`
- **Optional:** everything else
- **Search uses:** `title` + `tags` (exact/contains match)
- **SEO defaults:**

  - `seo.title` → `title`
  - `seo.description` → `summary`

## Allowed values (tight enough to prevent chaos)

- `status`: `published` | `draft`
- `category`: `academic` | `tech` | `culture`
- `chairo.variant`: `none` | `corner` | `header` | `divider`

## Example MDX post stub

```mdx
---
title: "Why Data Quality Is a Cultural Problem Too"
date: "2025-12-29"
status: "published"
category: "culture"
tags: ["data-quality", "metrics", "meaning"]
summary: "Data quality isn’t only engineering; it’s also about what we decide matters and why."
featured: true
chairo:
  variant: "header"
---
```

---

## 1) Education timeline entries (JSON)

**File suggestion:** `src/data/education.json`

```json
{
  "education": [
    {
      "id": "ut-japan-studies-ma",
      "degree": "M.A.",
      "field": "Japanese Studies (Media & Cultural Studies)",
      "institution": "University of Tehran",
      "location": "Tehran, Iran",
      "startDate": "2021-09",
      "endDate": "2023-09",
      "status": "completed",
      "summary": "A short 1–2 sentence overview shown on the timeline card.",
      "highlights": [
        "Thesis: Disability representation in Japanese anime",
        "Focused on media, culture, and digital narratives"
      ],
      "skills": ["qualitative research", "academic writing", "media analysis"],
      "links": [
        {
          "label": "Thesis abstract",
          "url": "https://example.com",
          "type": "external"
        }
      ],
      "media": {
        "badge": "MA",
        "icon": "GraduationCap",
        "chairoVariant": "divider"
      }
    }
  ],
  "meta": {
    "order": "desc",
    "dateFormat": "YYYY-MM"
  }
}
```

### Notes

- `startDate/endDate` use **YYYY-MM** so you avoid day-level fuss.
- `highlights` become bullet points inside the DaisyUI card.
- `skills` become DaisyUI `badge` elements.
- `media.icon` is a string so you can map it to lucide-react icons in code (no backend needed).
- `chairoVariant` lets you sprinkle bird art consistently on this page.

**Recommended required fields per entry:**
`id, degree, field, institution, startDate, endDate, status, summary, skills`

---

## 2) Work role entries (JSON)

**File suggestion:** `src/data/work.json`

```json
{
  "roles": [
    {
      "id": "snapp-dq-engineer",
      "title": "Data Quality Engineer",
      "company": "Snapp!",
      "employmentType": "full-time",
      "location": "Tehran, Iran",
      "workMode": "hybrid",
      "startDate": "2021-10",
      "endDate": null,
      "status": "current",
      "summary": "Short qualitative summary (no metrics).",
      "responsibilities": [
        "Designed and maintained automated data quality validations for analytics tables",
        "Improved reliability of ingestion monitoring using Great Expectations and metric stores"
      ],
      "skills": [
        "Python",
        "SQL",
        "Great Expectations",
        "ClickHouse",
        "Airflow"
      ],
      "selectedWork": [
        {
          "name": "DQ Rules Library",
          "description": "Reusable validations and checks for ingestion volume, freshness, and anomalies.",
          "tags": ["data-quality", "monitoring"],
          "links": [
            {
              "label": "GitLab repo",
              "url": "https://example.com",
              "type": "external"
            }
          ]
        }
      ],
      "links": [
        { "label": "Company", "url": "https://example.com", "type": "external" }
      ],
      "media": {
        "icon": "Briefcase",
        "accent": "indigo",
        "chairoVariant": "corner"
      }
    }
  ],
  "meta": {
    "order": "desc",
    "dateFormat": "YYYY-MM"
  }
}
```

### Notes

- This matches your decision: **Role-based + skill-based, simple**, and **qualitative only**.
- `selectedWork` is optional: use it only when you want 1–3 “mini-cards” under a role.
- Keep `responsibilities` human and story-like; don’t turn it into a KPI cemetery.

**Recommended required fields per role:**
`id, title, company, startDate, status, summary, responsibilities, skills`

---

## Tiny extras that help a lot (still static)

### Suggested tags list (for your hybrid tagging system)

**File:** `src/data/tags.json`

```json
{
  "suggested": [
    "academic-reflection",
    "data-quality",
    "ai-literacy",
    "digital-culture",
    "great-expectations",
    "clickhouse"
  ]
}
```

This keeps your tags from exploding into “ai” vs “AI” vs “A.I.” chaos.

---
