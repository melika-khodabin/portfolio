import { Hero, FeaturedPosts, QuickLinks } from "@/components/home";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
      <QuickLinks />
    </>
  );
}
