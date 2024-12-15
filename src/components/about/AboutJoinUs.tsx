import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Rocket, Gift, Users } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: 'Exclusive Early Access',
    description: 'Be among the first to experience the full potential of Yagya.ai',
  },
  {
    icon: <Gift className="w-6 h-6 text-primary" />,
    title: 'Free Credits',
    description: 'Early adopters receive generous free credits to explore premium features',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Shape the Future',
    description: 'Join a growing network of passionate changemakers and help shape innovation',
  },
];

export function AboutJoinUs() {
  return (
    <section className="py-20 bg-primary/80 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us and Make a Difference</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Ready to turn your ideas into action and be part of something bigger? Join the Yagya.ai
            community today and take the first step toward creating meaningful change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-accent/50 backdrop-blur-sm border-none ">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/50 rounded-full">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
                <p className="text-foreground">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className=" text-white px-8 py-6 text-lg rounded-full">
            Sign Up Now
          </Button>
          <p className="mt-4 text-white/80">
            Don't miss out—join now and unlock opportunities to connect, grow, and make a lasting
            positive impact.
          </p>
          <p className="mt-2 text-lg font-medium">Together, we can act as one and grow as all!</p>
        </div>
      </div>
    </section>
  );
}
