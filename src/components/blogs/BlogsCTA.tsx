import React from 'react';
import { Button } from '@/components/ui/button';
import { PenTool, Send } from 'lucide-react';

export function BlogsCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-secondary/80 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 mb-6">
            <PenTool className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Share Your Story</h2>
          </div>

          <p className="text-lg mb-8 opacity-90">
            Are you a changemaker with insights to share? Join our community of writers and help
            inspire others on their journey to create positive change.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white space-x-2">
              <span>Start Writing</span>
              <PenTool className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 space-x-2"
            >
              <span>Subscribe to Newsletter</span>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
