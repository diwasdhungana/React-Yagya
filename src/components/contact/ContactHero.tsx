import React from 'react';

export function ContactHero() {
  return (
    <section className="relative bg-secondary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl opacity-90">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-accent transform -skew-y-2"></div>
    </section>
  );
}
