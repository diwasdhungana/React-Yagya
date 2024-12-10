import React from "react";
import { YagyaCulturalRoots } from "./YagyaCulturalRoots";
import { YagyaPhilosophy } from "./YagyaPhilosophy";

export function YagyaMeaning() {
  return (
    <section className="py-24 bg-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            The Meaning Behind <span className="text-[#FFA500]">Yagya</span>
          </h2>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto">
            Discover the profound meaning and rich heritage behind our name,
            rooted in ancient wisdom and reimagined for modern innovation.
          </p>
        </div>

        <div className="space-y-24">
          <YagyaCulturalRoots />
          <YagyaPhilosophy />
        </div>
      </div>
    </section>
  );
}
