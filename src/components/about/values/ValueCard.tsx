'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

export function ValueCard({ icon, title, description, details }: ValueCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card
      className={`p-6 border-none shadow-lg transition-all duration-300 ${
        isExpanded ? 'shadow-2xl -translate-y-2' : 'hover:shadow-xl hover:-translate-y-1'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col items-center text-center cursor-pointer">
        <div
          className={`mb-4 p-3 bg-primary/5 rounded-full transition-transform duration-300 ${
            isExpanded ? 'scale-110' : ''
          }`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-foreground mb-4">{description}</p>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <ul className="space-y-2 text-sm text-left">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-1.5 mr-2 bg-primary rounded-full" />
                <span className="text-primary/80">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
