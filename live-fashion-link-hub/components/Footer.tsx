import type { LiveInfo } from "@/data/live";

type FooterProps = {
  liveInfo: LiveInfo;
};

export function Footer({ liveInfo }: FooterProps) {
  return (
    <footer className="px-5 pb-8 pt-4 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink/58 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-ink">{liveInfo.influencerName}</p>
          <p>
            {liveInfo.liveName} · {liveInfo.liveDate}
          </p>
        </div>
        <p>Links organizados para facilitar sua compra.</p>
      </div>
    </footer>
  );
}
