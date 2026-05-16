import type { Product } from "@/data/live";

type ProductCardProps = {
  product: Product;
};

const categoryLabel: Record<Product["category"], string> = {
  "Terceira Peça": "Terceira Peça",
  Calças: "Calças",
  Saias: "Saias",
  Blusas: "Blusas",
  Botas: "Botas",
};

export function ProductCard({ product }: ProductCardProps) {
  const isSoldOut = product.availability === "oos";

  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-ink/10 bg-pearl shadow-[0_10px_35px_rgba(72,52,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-rosewood/25 hover:shadow-soft">
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-pearl/95 px-3 py-1 text-xs font-semibold text-rosewood shadow-sm">
            {categoryLabel[product.category]}
          </span>
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-pearl shadow-sm">
            {product.number}
          </span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">
          {product.brand}
        </p>
        <h3 className="mt-2 min-h-14 text-lg font-semibold leading-snug text-ink">
          {product.name}
        </h3>
        <div className="mt-3 flex min-h-6 flex-wrap items-center gap-2">
          {product.price ? (
            <p className="text-base font-bold text-ink">{product.price}</p>
          ) : null}
          {isSoldOut ? (
            <span className="rounded-full bg-rosewood/10 px-2.5 py-1 text-xs font-semibold text-rosewood">
              Esgotado na C&A
            </span>
          ) : null}
        </div>
        {product.size ? (
          <p className="mt-2 text-sm text-ink/58">{product.size}</p>
        ) : (
          <p className="mt-2 text-sm text-ink/35">Favorito da live</p>
        )}
        <a
          href={product.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-rosewood px-5 py-3 text-sm font-semibold text-pearl transition hover:bg-ink"
        >
          Ver na loja
        </a>
      </div>
    </article>
  );
}
