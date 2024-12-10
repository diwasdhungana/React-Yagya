import React from 'react';
import { cn } from '../../../lib/utils';

interface SubcategoryCardProps {
  title: string;
  onClick: () => void;
  isSelected?: boolean;
}

export function SubcategoryCard({ title, onClick, isSelected }: SubcategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left p-4 rounded-xl transition-all duration-200',
        'hover:shadow-md hover:scale-[1.02]',
        isSelected
          ? 'bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-500'
          : 'bg-white border border-gray-200 hover:border-orange-200'
      )}
    >
      <h3 className="font-semibold text-gray-900">{title}</h3>
    </button>
  );
}
