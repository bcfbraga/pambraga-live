import type { Product } from "@/data/live";

type ProductCardProps = {
  product: Product;
};

const categoryLabel: Record<Product["category"], string> = {
  Jaquetas: "Jaquetas",
  Blusas: "Blusas",
  Calças: "Calças",
};

const categoryClass: Record<Product["category"], string> = {
  Jaquetas: "bg-rosewood/90",
  Blusas: "bg-[#A8826A]/90",
  Calças: "bg-pine/90",
};

export function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = product.availability === "oos";
  const colorLabel = product.colors?.length ? `Cor · ${product.colors.join(", ")}` : null;

  return (
    <article className="group flex overflow-hidden rounded-[18px] border border-champagne bg-mist transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-soft">
      <a
        href={product.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="flex w-full flex-col text-inherit no-underline"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full bg-sand object-cover transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.18))]" />
          <span
            className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-white shadow-sm ${categoryClass[product.category]}`}
          >
            {categoryLabel[product.category]}
          </span>
          <span className="absolute right-2 top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-white/90 px-1.5 text-[0.62rem] font-extrabold text-ink shadow-sm backdrop-blur">
            {product.number}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-3.5">
          <h3 className="line-clamp-2 min-h-[2.3rem] text-sm font-bold leading-snug tracking-[-0.005em] text-ink">
            {product.name}
          </h3>
          <div className="min-h-[2.25rem] space-y-0.5">
            {product.size ? (
              <p className="text-xs font-semibold text-clay">{product.size}</p>
            ) : (
              <p className="text-xs font-semibold text-clay/70">Favorito da live</p>
            )}
            {colorLabel ? (
              <p className="text-xs font-semibold text-clay/80">{colorLabel}</p>
            ) : null}
          </div>
          <div className="mt-1 flex min-h-6 flex-wrap items-center gap-2">
            {product.price ? (
              <p className="text-sm font-extrabold text-ink">{product.price}</p>
            ) : null}
            {isSoldOut ? (
              <span className="rounded-full bg-cream px-2 py-1 text-[0.65rem] font-extrabold text-cocoa">
                Esgotado
              </span>
            ) : null}
          </div>
          <span className="mt-auto inline-flex min-h-12 items-center justify-between rounded-full bg-[#EADFC8] px-5 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-ink transition group-hover:bg-ink group-hover:text-white">
            VER NA C&A
            <span className="text-2xl leading-none" aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </a>
    </article>
  );
}
