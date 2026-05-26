import type { LiveInfo } from "@/data/live";

type LiveBarProps = {
  liveInfo: LiveInfo;
};

export function LiveBar({ liveInfo }: LiveBarProps) {
  return (
    <aside className="bg-[#351F14] px-5 py-3 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
        <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#9B8064] bg-[#5A402C] py-1.5 pl-1.5 pr-4 text-xs font-extrabold uppercase tracking-[0.24em] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#725236] shadow-[inset_0_0_10px_rgba(0,0,0,0.18)]">
            <span className="h-3 w-3 rounded-full bg-[#F1CD93] shadow-[0_0_12px_rgba(241,205,147,0.72)]" />
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
