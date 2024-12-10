import React from "react";
import { BlogsHero } from "@/components/blogs/BlogsHero";
import { FeaturedBlogs } from "@/components/blogs/FeaturedBlogs";
import { LatestBlogs } from "@/components/blogs/LatestBlogs";

export default function Blogs() {
  return (
    <div className="bg-[#FFFAF0] min-h-screen">
      <BlogsHero />
      <FeaturedBlogs />
      <LatestBlogs />
    </div>
  );
}
