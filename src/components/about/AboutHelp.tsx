import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, Lightbulb, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: 'Simplifying Access',
    description:
      'We streamline the process of finding compatible connections and relevant resources tailored to your unique goals. By leveraging AI-powered recommendations, we save you the hassle of endless searching.',
    highlight: 'Focus on creating value',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: 'Facilitating Innovation',
    description:
      'Our platform encourages collaboration and brainstorming with like-minded individuals, helping you refine ideas and uncover hidden opportunities.',
    highlight: 'Turn vision into reality',
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: 'Saving Time, Enhancing Productivity',
    description:
      'We understand the value of your time. Yagya.ai enhances productivity by connecting you with the right people, tools, and opportunities faster.',
    highlight: 'Focus on what matters',
  },
];

export function AboutHelp() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Help <span className="text-primary">You</span>
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            Yagya.ai is designed to be your trusted partner, simplifying your journey toward
            impactful change.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-accent to-primary/10"
            >
              <div className="space-y-6">
                <div className="p-4 bg-primary/10 rounded-full w-fit">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-primary">{benefit.title}</h3>
                <p className="text-foreground leading-relaxed">{benefit.description}</p>
                <div className="pt-4">
                  <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to Make a Difference?</h3>
          <p className="text-foreground max-w-2xl mx-auto mb-8">
            With Yagya.ai, you spend less time searching and more time innovating, collaborating,
            and making a difference.
          </p>
          <Button size="lg" className=" text-white">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
