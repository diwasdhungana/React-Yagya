import React from 'react';
import { CategoryList } from './CategoryList';
import { ExampleList } from './ExampleList';
import type { Category, Subcategory, Example } from '../../../types';

interface SplitViewProps {
  categories: Category[];
  subcategories: Record<string, Subcategory[]>;
  examples: Record<string, Example[]>;
  selectedCategory: string | null;
  selectedSubcategory: string | null;
  onCategorySelect: (id: string) => void;
  onSubcategorySelect: (id: string) => void;
}

export function SplitView({
  categories,
  subcategories,
  examples,
  selectedCategory,
  selectedSubcategory,
  onCategorySelect,
  onSubcategorySelect,
}: SplitViewProps) {
  return (
    <div className="h-full grid grid-cols-2 divide-x col-span-2">
      <CategoryList
        categories={categories}
        subcategories={selectedCategory ? subcategories[selectedCategory] : []}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onCategorySelect={onCategorySelect}
        onSubcategorySelect={onSubcategorySelect}
      />
      <ExampleList examples={selectedSubcategory ? examples[selectedSubcategory] : []} />
    </div>
  );
}
