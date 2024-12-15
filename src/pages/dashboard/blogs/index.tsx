import React from 'react';
import { BlogsHero } from '@/components/blogs/BlogsHero';
import { FeaturedBlogs } from '@/components/blogs/FeaturedBlogs';
import { LatestBlogs } from '@/components/blogs/LatestBlogs';

export default function Blogs() {
  return (
    <div className="bg-primary/10 min-h-screen">
      <BlogsHero />
      <FeaturedBlogs />
      <LatestBlogs />
    </div>
  );
}
