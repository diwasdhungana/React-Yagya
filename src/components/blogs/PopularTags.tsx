import React from 'react';
import { Tag } from 'lucide-react';

const tags = [
  { name: 'Innovation', count: 42 },
  { name: 'AI', count: 38 },
  { name: 'Collaboration', count: 35 },
  { name: 'Social Impact', count: 31 },
  { name: 'Sustainability', count: 28 },
  { name: 'Community', count: 25 },
  { name: 'Technology', count: 24 },
  { name: 'Leadership', count: 22 },
  { name: 'Development', count: 20 },
  { name: 'Future', count: 18 },
  { name: 'Change', count: 16 },
  { name: 'Growth', count: 15 },
];

export function PopularTags() {
  return (
    <section className="py-16 bg-[#FFF5E6]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <Tag className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-secondary">Popular Topics</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`
                  px-4 py-2 rounded-full transition-all duration-300
                  ${
                    index < 4
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-white text-secondary hover:bg-primary hover:text-white'
                  }
                  text-sm font-medium
                `}
              >
                {tag.name}
                <span className="ml-2 text-xs opacity-80">({tag.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
