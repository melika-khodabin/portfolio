import type { Metadata } from "next";
import { PageHeader } from "@/components/layout";
import { BlogList } from "@/components/blog";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts, ideas, and reflections on research, cognition, technology, and the academic journey.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const allTags = getAllTags();

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Thoughts, ideas, and reflections on things I'm learning and thinking about."
      />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-base-content/70 text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <BlogList posts={posts} allTags={allTags} />
          )}
        </div>
      </section>
    </>
  );
}
