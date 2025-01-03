import React from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, Target, Users, Sparkles, Globe, Lightbulb } from 'lucide-react';

export function AboutMission() {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Empowering a global community of changemakers to act as one and grow as all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-primary/10">
            <div className="space-y-6">
              <div className="p-4  rounded-full w-fit">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To empower a global community of changemakers by bridging gaps between people,
                resources, and opportunities. We create an ecosystem where ideas flourish and
                impactful initiatives thrive through the power of AI-driven collaboration.
              </p>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-primary/10">
            <div className="space-y-6">
              <div className="p-4  rounded-full w-fit">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To transform the way changemakers collaborate, innovate, and create impact. We
                strive to be the driving force behind collective development, enabling global
                changemakers to scale their efforts and leave a lasting positive impact on
                communities and the planet.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary">Collaborative Growth</h4>
              <p className="text-foreground">
                Foster an environment where collaboration leads to mutual growth and shared success.
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary">Global Impact</h4>
              <p className="text-foreground">
                Enable changemakers to develop and implement solutions that address pressing global
                challenges.
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-primary">Innovation Focus</h4>
              <p className="text-foreground">
                Leverage advanced AI technology to amplify the power of collective action and
                innovation.
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="p-3 bg-white rounded-full w-fit">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Looking Ahead</h3>
              <p className="text-foreground leading-relaxed">
                We envision a world where collaboration is second nature, where challenges become
                opportunities, and where the shared pursuit of a brighter future unites us all.
                Through our inclusive and dynamic ecosystem, we nurture ideas, forge partnerships,
                and co-create solutions that drive meaningful change.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow bg-accent">
                <h5 className="font-semibold text-primary mb-2">Partnerships</h5>
                <p className="text-sm text-foreground">
                  Forge meaningful connections for greater impact
                </p>
              </Card>
              <Card className="p-4 hover:shadow-md transition-shadow bg-accent">
                <h5 className="font-semibold text-primary mb-2">Innovation</h5>
                <p className="text-sm text-foreground">
                  Drive creative solutions to global challenges
                </p>
              </Card>
              <Card className="p-4 hover:shadow-md transition-shadow bg-accent">
                <h5 className="font-semibold text-primary mb-2">Scale</h5>
                <p className="text-sm text-foreground">Amplify impact through collective action</p>
              </Card>
              <Card className="p-4 hover:shadow-md transition-shadow bg-accent">
                <h5 className="font-semibold text-primary mb-2">Community</h5>
                <p className="text-sm text-foreground">Build lasting relationships for change</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
