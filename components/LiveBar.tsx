import type { LiveInfo } from "@/data/live";

type LiveBarProps = {
  liveInfo: LiveInfo;
};

export function LiveBar({ liveInfo }: LiveBarProps) {
  return (
    <aside className="bg-[#351F14] px-5 py-3 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
        <span className="inline-flex w-fit items-center gap-3 rounded-full border-2 border-[#9B8064] bg-[#5A402C] py-2 pl-2 pr-5 text-sm font-extrabold uppercase tracking-[0.2em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#725236] shadow-inner">
            <span className="h-3.5 w-3.5 rounded-full bg-[#F1CD93] shadow-[0_0_16px_rgba(241,205,147,0.8)]" />
          </span>
          Live
        </span>

        <p className="min-w-0 text-lg font-extrabold leading-snug text-white sm:text-xl">
          {liveInfo.liveDate} · {liveInfo.liveTime}
          <span className="mx-2 text-white/35">·</span>
          <span className="font-semibold text-white/72">Ao vivo no Instagram da Pam</span>
        </p>
      </div>
    </aside>
  );
}
