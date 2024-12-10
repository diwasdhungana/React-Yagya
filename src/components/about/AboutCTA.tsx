import React from "react";
import { Button } from "@/components/ui/button";

export function AboutCTA() {
  return (
    <section className="py-20 bg-[#FFF5E6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#8B4513] mb-6">
          Join Us in Shaping the Future
        </h2>
        <p className="text-lg text-[#654321] mb-8 max-w-2xl mx-auto">
          Whether you&apos;re an innovator, developer, or someone with a vision
          for change, there&apos;s a place for you in our community.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#FFA500] text-white hover:bg-[#FF8C00]">
            Join Our Community
          </Button>
          <Button
            variant="outline"
            className="text-[#8B4513] border-[#8B4513] hover:bg-[#FFF5E6]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
