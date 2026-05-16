import type { LiveInfo } from "@/data/live";

type HeroProps = {
  liveInfo: LiveInfo;
};

export function Hero({ liveInfo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#1a1410,#3a2418_55%,#8b4513)] px-5 py-6 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_220px_at_90%_-40px,rgba(212,184,150,0.32),transparent_60%),radial-gradient(420px_220px_at_0%_120%,rgba(168,130,106,0.24),transparent_60%)]" />
      <div className="relative mx-auto max-w-[720px] py-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-wheat/55 bg-wheat/15 py-1 pl-2 pr-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-white">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full border border-wheat opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-wheat shadow-[0_0_12px_rgba(232,220,198,0.8)]" />
          </span>
          LIVE
        </span>
        <p className="mt-5 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-white/70">
          Vitrine C&A
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-[clamp(2rem,8vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-white">
          {liveInfo.liveTitle}
        </h1>
        <p className="mt-4 max-w-xl text-[0.95rem] font-semibold leading-7 text-white/85">
          {liveInfo.liveDate} · {liveInfo.liveTime} · {liveInfo.liveChannel}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={liveInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-ink shadow-[0_14px_30px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-cream"
          >
            Assistir no Instagram
          </a>
          <a
            href="#produtos"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/15"
          >
            Ver as peças
          </a>
        </div>
      </div>
    </section>
  );
}
