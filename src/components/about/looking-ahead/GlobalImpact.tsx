import React from 'react';
import { Card } from '@/components/ui/card';
import { Globe, Users, Network, Rocket } from 'lucide-react';

const expansionPlans = [
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'Regional Growth',
    description: 'Systematic expansion across South Asia',
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Cultural Adaptation',
    description: 'Localized versions for different regions',
  },
  {
    icon: <Network className="w-5 h-5 text-primary" />,
    title: 'Global Partnerships',
    description: 'Collaborations with international organizations',
  },
  {
    icon: <Rocket className="w-5 h-5 text-primary" />,
    title: 'Local Impact',
    description: 'Supporting region-specific challenges',
  },
];

const focusRegions = [
  'Southeast Asian nations facing similar development challenges',
  'African countries with growing social entrepreneurship ecosystems',
  'Latin American communities driving innovative social solutions',
  'Other regions where technology can amplify social impact',
];

export function GlobalImpact() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-secondary mb-4">Global Impact Vision</h3>
        <p className="text-lg text-secondary/80">
          While our journey began in Nepal, our vision extends far beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {expansionPlans.map((plan, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-[#FFF5E6] rounded-full">{plan.icon}</div>
              <div>
                <h4 className="font-semibold text-secondary">{plan.title}</h4>
                <p className="text-sm text-secondary/80">{plan.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold text-secondary mb-4">Focus Regions</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {focusRegions.map((region, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="inline-block w-2 h-2 mt-2 bg-primary rounded-full" />
              <p className="text-secondary/80">{region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
