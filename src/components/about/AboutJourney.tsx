import React from "react";
import { FoundingStory } from "./journey/FoundingStory";
import { TeamSection } from "./journey/TeamSection";
import { TrustSection } from "./journey/TrustSection";

export function AboutJourney() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4">
            A Journey of Trust and Impact
          </h2>
          <p className="text-lg text-[#654321] max-w-2xl mx-auto">
            Your trust is vital to our mission of creating positive change. We
            invite you to be part of this journey, where every connection made
            and every collaboration formed brings us closer to our shared goal
            of a better world.
          </p>
        </div>

        <div className="space-y-24">
          <FoundingStory />
          <TeamSection />
          <TrustSection />
        </div>
      </div>
    </section>
  );
}
