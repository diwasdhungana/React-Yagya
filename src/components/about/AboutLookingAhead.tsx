import React from 'react';
import { FutureFeatures } from './looking-ahead/FutureFeatures';
import { GlobalImpact } from './looking-ahead/GlobalImpact';
import { FuturePromise } from './looking-ahead/FuturePromise';

export function AboutLookingAhead() {
  return (
    <section className="py-24 bg-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Looking Ahead</h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            At Yagya.ai, we're just getting started. Our vision for the future is bold and
            ambitious, driven by our commitment to empower changemakers worldwide.
          </p>
        </div>

        <div className="space-y-24">
          <FutureFeatures />
          <GlobalImpact />
          <FuturePromise />
        </div>
      </div>
    </section>
  );
}
