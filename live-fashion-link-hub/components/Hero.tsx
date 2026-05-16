import type { LiveInfo } from "@/data/live";

type HeroProps = {
  liveInfo: LiveInfo;
  productCount: number;
};

export function Hero({ liveInfo, productCount }: HeroProps) {
  return (
    <section className="px-5 pb-10 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl items-end gap-8 border-b border-ink/10 pb-10 pt-4 md:grid-cols-[1.15fr_0.85fr] md:pt-10">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-rosewood/20 bg-rosewood px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-pearl">
            LIVE
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            {liveInfo.liveTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink/70 sm:text-lg">
            {liveInfo.liveDate} · {liveInfo.liveTime} · {liveInfo.liveChannel}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={liveInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-pearl transition hover:-translate-y-0.5 hover:bg-rosewood"
            >
              Assistir no Instagram
            </a>
            <a
              href="#produtos"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-pearl/70 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-rosewood/35 hover:text-rosewood"
            >
              Ver as peças
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-ink/10 bg-pearl/80 p-5 shadow-soft backdrop-blur">
          <div className="aspect-[4/5] rounded-[1.5rem] border border-champagne/40 bg-[linear-gradient(145deg,#ede1d6_0%,#fffaf2_50%,#cba994_100%)] p-5">
            <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/70 bg-white/45 p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rosewood">
                  {liveInfo.influencerName}
                </p>
                <p className="mt-2 text-sm text-ink/60">{liveInfo.partnerName}</p>
              </div>
              <div>
                <p className="font-display text-6xl text-ink">{productCount}</p>
                <p className="mt-1 text-sm font-medium text-ink/65">peças favoritas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
