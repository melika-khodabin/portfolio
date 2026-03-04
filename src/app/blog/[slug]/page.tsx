import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Tag } from "@/components/ui";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { MDXContent } from "@/components/blog/MDXContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;

  return (
    <article className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-base-content/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {frontmatter.tags.map((tag) => (
              <Tag key={tag} name={tag} href={`/blog?tag=${tag}`} />
            ))}
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-balance animate-fade-in-up opacity-0">
            {frontmatter.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-base-content/70 mb-6 animate-fade-in-up opacity-0 delay-100">
            {frontmatter.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/50 animate-fade-in-up opacity-0 delay-200">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={frontmatter.date}>
                {formatDate(frontmatter.date)}
              </time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readingTime}
            </span>
          </div>
        </header>

        {/* Divider */}
        <hr className="border-base-300 mb-12" />

        {/* Content */}
        <div className="mdx-content animate-fade-in opacity-0 delay-300">
          <MDXContent content={content} />
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-base-300">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </footer>
      </div>
    </article>
  );
}
