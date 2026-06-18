"use client";

import { useMemo, useState } from "react";
import { type CategoryFilter, type Product } from "@/data/live";
import { CategoryFilter as CategoryFilterButtons } from "@/components/CategoryFilter";
import { ProductCard } from "@/components/ProductCard";

type ProductGridProps = {
  products: Product[];
  influencerName: string;
};

export function ProductGrid({ products }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("Tudo");

  const liveCategories = useMemo<CategoryFilter[]>(() => {
    const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
    return ["Tudo", ...uniqueCategories];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Tudo") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <section id="produtos" className="px-5 py-9 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[720px]">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-cocoa">
              Vitrine @pambraga
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.65rem,6vw,2rem)] font-extrabold leading-tight tracking-[-0.03em] text-ink">
              escolhidos pra você ;)
            </h2>
          </div>
          <p className="shrink-0 pb-1 text-sm font-bold text-clay">
            {filteredProducts.length} de {products.length}
          </p>
        </div>

        <CategoryFilterButtons
          categories={liveCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
