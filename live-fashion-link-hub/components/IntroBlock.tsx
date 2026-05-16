type IntroBlockProps = {
  influencerName: string;
};

const benefits = [
  "Peças escolhidas a dedo",
  "Link direto para compra",
  "Looks, acessórios e favoritos da live",
];

export function IntroBlock({ influencerName }: IntroBlockProps) {
  return (
    <section className="px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          As favoritas que {influencerName} escolheu pra você
        </h2>
        <div>
          <p className="max-w-2xl text-base leading-7 text-ink/70">
            Uma curadoria simples para encontrar rápido as peças mostradas na live,
            com links organizados para comprar sem perder tempo.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-ink/10 bg-pearl/70 p-4 text-sm font-medium text-ink/75"
              >
                {benefit}
              </div>
            ))}
          </div>
          <a
            href="#produtos"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-rosewood px-5 py-3 text-sm font-semibold text-pearl transition hover:-translate-y-0.5 hover:bg-ink"
          >
            Ver as peças
          </a>
        </div>
      </div>
    </section>
  );
}
