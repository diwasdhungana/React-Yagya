import React from 'react';
import { MessageSquare, Star, Archive } from 'lucide-react';

type FilterType = 'all' | 'starred' | 'archived';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  isCollapsed: boolean;
}

export function FilterButtons({ currentFilter, onFilterChange, isCollapsed }: FilterButtonsProps) {
  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center gap-1">
        <button
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
            currentFilter === 'all' ? 'bg-orange-100 text-orange-700' : 'text-gray-600'
          }`}
          onClick={() => onFilterChange('all')}
          title="All Chats"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
            currentFilter === 'starred' ? 'bg-orange-100 text-orange-700' : 'text-gray-600'
          }`}
          onClick={() => onFilterChange('starred')}
          title="Starred Chats"
        >
          <Star className="w-5 h-5" />
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
            currentFilter === 'archived' ? 'bg-orange-100 text-orange-700' : 'text-gray-600'
          }`}
          onClick={() => onFilterChange('archived')}
          title="Archived Chats"
        >
          <Archive className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-1">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex-1 ${
          currentFilter === 'all'
            ? 'bg-orange-100 text-orange-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('starred')}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex-1 ${
          currentFilter === 'starred'
            ? 'bg-orange-100 text-orange-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Starred
      </button>
      <button
        onClick={() => onFilterChange('archived')}
        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex-1 ${
          currentFilter === 'archived'
            ? 'bg-orange-100 text-orange-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        Archived
      </button>
    </div>
  );
}