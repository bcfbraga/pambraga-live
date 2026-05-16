"use client";

import { useMemo, useState } from "react";
import { categories, type CategoryFilter, type Product } from "@/data/live";
import { CategoryFilter as CategoryFilterButtons } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
  influencerName: string;
};

export function ProductGrid({ products, influencerName }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Tudo");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Tudo") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <section id="produtos" className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">
              Vitrine da live
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight text-ink sm:text-5xl">
              As favoritas da {influencerName}
            </h2>
          </div>
          <p className="text-sm font-semibold text-ink/60">
            {filteredProducts.length} de {products.length}
          </p>
        </div>

        <CategoryFilterButtons
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
