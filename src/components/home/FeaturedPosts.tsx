import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Card, Tag } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-2">
              Recent Thoughts
            </h2>
            <p className="text-base-content/70">
              Reflections, ideas, and things I&apos;ve been thinking about
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all link-underline"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card
                hover
                className={`h-full animate-fade-in-up opacity-0 delay-${(index + 1) * 100}`}
              >
                <article className="flex flex-col h-full">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Tag key={tag} name={tag} size="sm" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl mb-2 text-base-content group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-base-content/70 text-sm flex-1 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-base-content/50">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>
                </article>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            View all posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
