import type { LiveInfo } from "@/data/live";

type FooterProps = {
  liveInfo: LiveInfo;
};

export function Footer({ liveInfo }: FooterProps) {
  return (
    <footer className="border-t border-champagne bg-sand px-5 py-10 text-center sm:px-8">
      <div className="mx-auto max-w-[720px] text-xs leading-6 text-clay">
        <p className="font-script text-3xl font-bold text-ink">@{liveInfo.influencerName.toLowerCase().replace(/\s+/g, "")}</p>
        <p className="mt-1">
          {liveInfo.liveName} · {liveInfo.liveDate}
        </p>
        <p className="mt-1">Links organizados para facilitar sua compra.</p>
      </div>
    </footer>
  );
}
