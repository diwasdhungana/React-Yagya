import React from 'react';
import { Button } from '@/components/ui/button';

export function AboutCTA() {
  return (
    <section className="py-20 bg-[#FFF5E6]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-6">Join Us in Shaping the Future</h2>
        <p className="text-lg text-secondary/80 mb-8 max-w-2xl mx-auto">
          Whether you're an innovator, developer, or someone with a vision for change, there's a
          place for you in our community.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-primary text-white hover:bg-primary/90">Join Our Community</Button>
          <Button variant="outline" className="text-secondary border-secondary hover:bg-[#FFF5E6]">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
