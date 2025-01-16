import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, Lock, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: 'AI-Powered Personalization',
    description:
      'We utilize cutting-edge Artificial Intelligence and Large Language Models (LLMs) to deliver highly personalized recommendations. From compatible connections to complementary resources, our platform tailors suggestions based on your unique profile and goals.',
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: 'Explainable AI',
    description:
      'Our commitment to transparency ensures you understand how and why recommendations are made. With explainable AI, we demystify the process, empowering you to make informed decisions and build trust in our technology.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Focus on Collaboration',
    description:
      "Yagya.ai isn't just about making connections—it's about building meaningful partnerships. By prioritizing real-world impact, we foster a culture of collaboration, enabling individuals and organizations to co-create innovative solutions.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'Collective Impact',
    description:
      "These unique elements empower changemakers to unlock their full potential, making Yagya.ai more than a platform—it's a partner in your journey to create positive change.",
  },
];

export function AboutFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Makes Us <span className="text-primary">Unique</span>
          </h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            At Yagya.ai, we stand apart by combining technology, transparency, and collaboration to
            create a truly transformative experience for our users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-background"
            >
              <div className="space-y-6">
                <div className="p-4 bg-background rounded-full w-fit">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-secondary">{feature.title}</h3>
                <p className="text-secondary/80 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
