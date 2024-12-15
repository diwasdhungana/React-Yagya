import React from 'react';
import { ArrowRight, Sparkles, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Empowering Changemakers</span>
            </div>

            <h2 className="text-4xl font-bold text-primary leading-tight">
              Your AI-Powered Partner in Creating{' '}
              <span className="text-primary">Positive Change</span>
            </h2>

            <p className="text-lg text-foreground leading-relaxed">
              Yagya.ai is an AI-powered platform designed to empower changemakers by simplifying the
              journey toward achieving impactful goals. We leverage cutting-edge technologies like
              advanced AI and Large Language Models (LLMs) to provide personalized recommendations
              and foster meaningful connections.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center"
                size="lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="text-balck border-black" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-xl">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Right Connections</h3>
                <p className="text-foreground">
                  Bridge gaps between passionate individuals, innovative organizations, and valuable
                  resources.
                </p>
              </div>
              <div className="bg-card border border-primary/20 p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Our Purpose</h3>
                <p className="text-foreground">
                  Create a seamless ecosystem of collaboration to drive forward a brighter, more
                  connected world.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:mt-12">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
                <p className="text-foreground">
                  Empower you to innovate, grow, and create solutions that truly matter—whether it's
                  solving pressing challenges, exploring new ideas, or scaling transformative
                  initiatives.
                </p>
              </div>
              <div className="bg-card border border-primary/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">Impact Focus</h3>
                <p className="text-foreground">
                  Focus less on searching and more on driving real-world change through meaningful
                  collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
