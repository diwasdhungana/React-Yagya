import React from 'react';
import { cn } from '../../../lib/utils';

interface CategoryCardProps {
  title: string;
  description: string;
  onClick: () => void;
  isSelected?: boolean;
}

export function CategoryCard({ title, description, onClick, isSelected }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-6 rounded-xl transition-all duration-200',
        'hover:shadow-lg hover:scale-[1.02]',
        isSelected
          ? 'bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-500'
          : 'bg-white border border-gray-200 hover:border-orange-200'
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
}
