import React from 'react';
import { ArrowRight, Sparkles, Users, Target, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-[#FFF5E6] rounded-full">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-secondary">Empowering Changemakers</span>
            </div>

            <h2 className="text-4xl font-bold text-secondary leading-tight">
              Your AI-Powered Partner in Creating{' '}
              <span className="text-primary">Positive Change</span>
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-secondary/80 leading-relaxed">
                Yagya.ai is an AI-powered platform designed to empower changemakers by simplifying
                the journey toward achieving impactful goals. At its core, Yagya.ai serves as a
                trusted partner, helping individuals and organizations connect with the right
                people, resources, and opportunities to unlock their full potential.
              </p>

              <div className="bg-[#FFF5E6] p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-secondary">
                    Meet Rishi: Your AI Discovery Engine
                  </h3>
                </div>
                <p className="text-secondary/80 mb-4">
                  At the heart of Yagya.ai is Rishi, our LLM-powered AI assistant designed to
                  revolutionize how you discover opportunities. Rishi acts as your personalized
                  discovery engine, enabling both individuals and organizations to find compatible
                  connections, identify complementary resources, and access suitable opportunities
                  aligned with your needs and aspirations.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-white inline-flex items-center"
                size="lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="text-secondary border-secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-[#FFF5E6] p-6 rounded-xl">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Personalized Connections
                </h3>
                <p className="text-secondary/80">
                  Find compatible connections tailored to your profile and goals through our
                  advanced AI technology.
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-lg">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-2">Our Purpose</h3>
                <p className="text-secondary/80">
                  Bridge gaps between passionate individuals, innovative organizations, and valuable
                  resources to create a seamless ecosystem of collaboration.
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:mt-12">
              <div className="bg-gradient-to-br from-primary/10 to-[#FFF5E6] p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-secondary mb-2">Our Mission</h3>
                <p className="text-secondary/80">
                  Empower you to innovate, grow, and create solutions that truly matter—whether it's
                  solving pressing challenges, exploring new ideas, or scaling transformative
                  initiatives.
                </p>
              </div>
              <div className="bg-white border border-primary/20 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-secondary mb-2">Impact Focus</h3>
                <p className="text-secondary/80">
                  Together, with Rishi as your guide, we amplify the power of collective action and
                  drive forward a brighter, more connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
