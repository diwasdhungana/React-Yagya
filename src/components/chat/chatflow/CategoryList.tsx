import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../lib/utils';
import type { Category, Subcategory } from '../../../types';

interface CategoryListProps {
  categories: Category[];
  subcategories: Subcategory[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategorySelect: (id: string) => void;
  onSubcategorySelect: (id: string) => void;
}

export function CategoryList({
  categories,
  subcategories,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
}: CategoryListProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="p-3 border-b bg-white">
        <h2 className="text-lg font-semibold">Categories</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              onClick={() => onCategorySelect(category.id)}
              className={cn(
                'w-full flex items-center justify-between p-3 rounded-lg text-left',
                'hover:bg-white hover:shadow-sm transition-all duration-200',
                selectedCategory === category.id ? 'bg-white shadow-sm' : ''
              )}
            >
              <div>
                <h3 className="font-medium text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-600 mt-0.5">{category.description}</p>
              </div>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-gray-400 transition-transform',
                  selectedCategory === category.id ? 'rotate-180' : ''
                )}
              />
            </button>

            {selectedCategory === category.id && (
              <div className="mt-1 ml-3 space-y-0.5">
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => onSubcategorySelect(subcategory.id)}
                    className={cn(
                      'w-full p-2 rounded-lg text-left text-sm',
                      'hover:bg-white transition-colors',
                      selectedSubcategory === subcategory.id
                        ? 'bg-white font-medium text-orange-600'
                        : 'text-gray-600'
                    )}
                  >
                    {subcategory.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
