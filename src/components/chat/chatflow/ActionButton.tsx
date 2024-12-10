import React from 'react';
import { cn } from '../../../lib/utils';

interface ActionButtonsProps {
  options: string[];
  onSelect: (option: string) => void;
  variant?: 'primary' | 'secondary';
}

export function ActionButtons({ options, onSelect, variant = 'primary' }: ActionButtonsProps) {
  return (
    <div className="flex gap-2 justify-center">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={cn(
            'px-4 py-2 rounded-lg font-medium transition-colors',
            variant === 'primary'
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
