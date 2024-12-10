import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function FAQsHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#8B4513] to-[#654321] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Find answers to common questions about Yagya.ai and how we can help
            you make a difference.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 
                text-white placeholder:text-white/60 focus:ring-[#FFA500] focus:border-[#FFA500]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFFAF0] transform -skew-y-2"></div>
    </section>
  );
}
