import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Network } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#8B4513] to-[#654321] text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <Network className="w-4 h-4 text-[#FFA500] mr-2" />
            <span className="text-sm font-medium">
              Empowering Innovation Through AI
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transforming Ideas into{" "}
            <span className="text-[#FFA500]">Impactful Solutions</span>
          </h1>

          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            We&apos;re on a mission to democratize AI-driven innovation and make
            it accessible to everyone. Join us in creating a future where
            collaboration knows no bounds.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#FFA500] hover:bg-[#FF8C00] text-white"
            >
              Join Our Community
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
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
