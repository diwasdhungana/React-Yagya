import React from "react";
import { CategoryCard } from "./CategoryCard";
import { ExampleCard } from "./ExampleCard";
import { ActionButtons } from "./ActionButtons";

interface Category {
  id: string;
  title: string;
  description: string;
}

interface Example {
  id: string;
  title: string;
  focus: string;
  compatibility: string;
}

interface CardGroupProps {
  type: "categories" | "examples";
  items: (Category | Example)[];
  selectedId?: string;
  onSelect: (id: string) => void;
  onAction: (action: string) => void;
}

export function CardGroup({
  type,
  items,
  selectedId,
  onSelect,
  onAction,
}: CardGroupProps) {
  const isCategories = type === "categories";
  const actions = isCategories ? ["Yes", "No"] : ["Explore", "Move On", "Skip"];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) =>
          isCategories ? (
            <CategoryCard
              key={item.id}
              title={(item as Category).title}
              description={(item as Category).description}
              isSelected={selectedId === item.id}
              onClick={() => onSelect(item.id)}
            />
          ) : (
            <ExampleCard
              key={item.id}
              title={(item as Example).title}
              focus={(item as Example).focus}
              compatibility={(item as Example).compatibility}
            />
          )
        )}
      </div>
      <div className="flex justify-center pt-4">
        <ActionButtons
          options={actions}
          onSelect={onAction}
          variant={isCategories ? "primary" : "secondary"}
        />
      </div>
    </div>
  );
}
