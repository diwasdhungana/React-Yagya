import React from 'react';
import { Button } from '@/components/ui/button';

export function AboutCTA() {
  return (
    <section className="py-20 text-primary/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Join Us in Shaping the Future</h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          Whether you&apos;re an innovator, developer, or someone with a vision for change,
          there&apos;s a place for you in our community.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-[#FFA500] text-white hover:bg-[#FF8C00]">Join Our Community</Button>
          <Button variant="outline" className="text-primary border-[#8B4513] hover:text-primary/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
