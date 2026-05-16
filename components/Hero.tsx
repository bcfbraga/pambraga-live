import type { LiveInfo } from "@/data/live";

type HeroProps = {
  liveInfo: LiveInfo;
};

export function Hero({ liveInfo }: HeroProps) {
  return (
    <section className="px-5 pb-8 pt-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl border-b border-ink/10 pb-10 pt-4 md:pt-10">
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
      </div>
    </section>
  );
}
