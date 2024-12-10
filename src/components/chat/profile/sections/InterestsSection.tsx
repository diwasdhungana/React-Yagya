import React from 'react';
import { Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InterestsSectionProps {
  interests: string;
  goals: string;
  onInterestsChange: (value: string) => void;
  onGoalsChange: (value: string) => void;
}

export function InterestsSection({
  interests,
  goals,
  onInterestsChange,
  onGoalsChange,
}: InterestsSectionProps) {
  const suggestedTags = [
    'AI & ML',
    'Web Development',
    'Mobile Apps',
    'Data Science',
    'UI/UX Design',
    'Cloud Computing',
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Interests & Focus Areas</label>
        <div className="relative">
          <Tag className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            value={interests}
            onChange={(e) => onInterestsChange(e.target.value)}
            className="w-full p-2 pl-10 border rounded-md min-h-[100px] focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Share your interests and areas of expertise..."
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {suggestedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onInterestsChange(interests ? `${interests}, ${tag}` : tag)}
              className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Goals & Aspirations</label>
        <textarea
          value={goals}
          onChange={(e) => onGoalsChange(e.target.value)}
          className="w-full p-3 border rounded-md min-h-[100px] focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="What do you hope to achieve? Share your professional goals and aspirations..."
        />
      </div>
    </div>
  );
}
