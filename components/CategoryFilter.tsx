"use client";

import type { CategoryFilter as CategoryFilterType } from "@/data/live";

type CategoryFilterProps = {
  categories: CategoryFilterType[];
  activeCategory: CategoryFilterType;
  onChange: (category: CategoryFilterType) => void;
};

const categoryLabel: Record<CategoryFilterType, string> = {
  Tudo: "Tudo",
  Vestidos: "Vestidos",
  Blusas: "Blusas",
  Calças: "Calças",
  Acessórios: "Acessórios",
  Sapatos: "Sapatos",
  Outros: "Outros",
};

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`min-h-10 shrink-0 rounded-full border px-4 text-sm font-semibold transition ${
              isActive
                ? "border-ink bg-ink text-pearl"
                : "border-ink/10 bg-pearl/75 text-ink/70 hover:border-rosewood/35 hover:text-rosewood"
            }`}
          >
            {categoryLabel[category]}
          </button>
        );
      })}
    </div>
  );
}
