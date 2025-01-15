import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Brain, Trophy, Globe } from 'lucide-react';

const categories = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Collaboration Insights',
    description: 'Strategies and stories about effective teamwork and partnerships',
    count: 24,
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: 'AI & Innovation',
    description: 'Latest developments in AI technology and innovative solutions',
    count: 18,
  },
  {
    icon: <Trophy className="w-8 h-8 text-primary" />,
    title: 'Success Stories',
    description: 'Inspiring stories of changemakers creating real impact',
    count: 31,
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Sustainability',
    description: 'Insights on creating lasting environmental and social impact',
    count: 15,
  },
];

export function BlogCategories() {
  return (
    <section className="py-16 bg-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-secondary mb-8">Explore by Category</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-[#FFF5E6] rounded-full w-fit group-hover:bg-primary/10 transition-colors">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-secondary/80 mb-4">{category.description}</p>
                  <span className="text-sm text-secondary/60">{category.count} articles</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
