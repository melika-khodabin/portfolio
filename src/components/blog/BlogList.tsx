"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Clock, Tag as TagIcon } from "lucide-react";
import { Card, Tag, SearchInput } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogListProps {
  posts: BlogPost[];
  allTags: string[];
}

export function BlogList({ posts, allTags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === null ||
        post.tags.map((t) => t.toLowerCase()).includes(selectedTag.toLowerCase());

      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search posts..."
          className="max-w-md"
        />

        {/* Tag filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedTag === null
                ? "btn-primary btn-sm"
                : "bg-base-200 text-base-content/70 hover:bg-secondary/20"
            }`}
          >
            <TagIcon className="w-3.5 h-3.5" />
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "btn-primary btn-sm"
                  : "bg-base-200 text-base-content/70 hover:bg-secondary/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-base-content/50 mb-6">
        {filteredPosts.length === 0
          ? "No posts found"
          : `${filteredPosts.length} post${filteredPosts.length === 1 ? "" : "s"} found`}
      </p>

      {/* Posts list */}
      <div className="space-y-6">
        {filteredPosts.map((post, index) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card
              hover
              className={`animate-fade-in-up opacity-0`}
              style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
            >
              <article className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag} name={tag} size="sm" />
                    ))}
                    {post.draft && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-warning/20 text-warning-content">
                        Draft
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-xl md:text-2xl mb-2 text-base-content">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-base-content/70 line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-base-content/50">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </article>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-base-content/70">
            No posts match your search.{" "}
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTag(null);
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
