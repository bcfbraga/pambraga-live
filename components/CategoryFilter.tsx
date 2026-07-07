"use client";

import type { CategoryFilter as CategoryFilterType } from "@/data/live";

type CategoryFilterProps = {
  categories: CategoryFilterType[];
  activeCategory: CategoryFilterType;
  onChange: (category: CategoryFilterType) => void;
};

const categoryLabel: Record<CategoryFilterType, string> = {
  Tudo: "Tudo",
  Jaquetas: "Jaquetas",
  Casacos: "Casacos",
  Blusas: "Blusas",
  Calças: "Calças",
  Saias: "Saias",
  Vestidos: "Vestidos",
  Cintos: "Cintos",
  Brincos: "Brincos",
  Acessórios: "Acessórios",
  Outros: "Outros",
};

export function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => {
        const isActive = category === activeCategory;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`min-h-10 shrink-0 rounded-full border-2 px-4 text-sm font-bold transition ${
              isActive
                ? "border-ink bg-ink text-white"
                : "border-champagne bg-mist text-ink hover:border-ink"
            }`}
          >
            {categoryLabel[category]}
          </button>
        );
      })}
    </div>
  );
}
