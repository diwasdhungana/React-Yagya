import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Globe2, Users } from 'lucide-react';

const highlights = [
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: 'Founded in Nepal',
    description: 'Started with a vision to make AI accessible globally',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-primary" />,
    title: 'Global Vision',
    description: 'Building bridges across borders through technology',
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Community Driven',
    description: 'Growing with passionate innovators worldwide',
  },
];

export function StoryHighlight() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {highlights.map((highlight, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 text-primary/10 rounded-full w-fit">{highlight.icon}</div>
            <h3 className="text-xl font-semibold text-primary mt-4 mb-2">{highlight.title}</h3>
            <p className="text-foreground">{highlight.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
