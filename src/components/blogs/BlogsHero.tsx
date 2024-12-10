import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function BlogsHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#8B4513] to-[#654321] text-white py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights, Stories, and Updates
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Discover the latest trends, ideas, and success stories from the
            Yagya.ai community and beyond.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Search blogs by topic, keyword, or author..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 
                text-white placeholder:text-white/60 focus:ring-[#FFA500] focus:border-[#FFA500]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#FFFAF0"
          />
        </svg>
      </div>
    </section>
  );
}
