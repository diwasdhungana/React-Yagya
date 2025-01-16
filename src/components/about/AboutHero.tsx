import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Brain, Users, Target } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/80 to-secondary/80 text-white py-32 overflow-hidden">
      {/* Background Animation Layer */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />

      {/* Animated Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium">Meet Rishi, Your AI Discovery Engine</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Personalized AI Guide to{' '}
            <span className="text-primary">Connections, Resources, and Opportunities</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
            Powered by Yagya.ai, Rishi redefines discovery. It's not just about finding the right
            people, resources, and opportunities—it's about accelerating your journey toward impact,
            innovation, and success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group transition-all duration-300"
            >
              Let Rishi Guide You
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 group"
            >
              Explore Yagya.ai
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Compatible Connections</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Tailored Resources</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium">Growth Opportunities</span>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="italic text-lg">
              "With Rishi's guidance, I found the perfect team and resources to launch my social
              impact initiative in weeks!"
            </p>
            <p className="mt-2 text-sm opacity-80">- Sarah Chen, Social Entrepreneur</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
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
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
    </section>
  );
}
