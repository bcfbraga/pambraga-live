"use client";

import { useEffect, useState } from "react";
import type { LiveInfo } from "@/data/live";

type HeroProps = {
  liveInfo: LiveInfo;
  productCount: number;
};

const heroImageUrl = "https://camaleaohub.com.br/pambragacea/hero-pam-bg.jpg";
const shareText =
  "Olha as 29 peças favoritas da Pam Braga na Live Ótimo Inverno C&A. Link direto pra cada produto:";

export function Hero({ liveInfo, productCount }: HeroProps) {
  const [pageUrl, setPageUrl] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copiar link");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `${shareText} ${pageUrl}`,
  )}`;

  async function copyCurrentLink() {
    const url = pageUrl || window.location.href;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopyLabel("Link copiado");
    window.setTimeout(() => setCopyLabel("Copiar link"), 1800);
  }

  return (
    <section className="relative isolate flex min-h-[92svh] overflow-hidden bg-ink px-5 py-8 text-white sm:px-8 lg:px-10">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-[center_top] sm:bg-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,7,5,0.88)_0%,rgba(10,7,5,0.64)_42%,rgba(10,7,5,0.32)_74%,rgba(10,7,5,0.54)_100%),linear-gradient(180deg,rgba(10,7,5,0.18)_0%,rgba(10,7,5,0.08)_36%,rgba(10,7,5,0.84)_100%)]"
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-[1280px] items-end pb-4 pt-14 sm:pb-8 lg:pt-20">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-4 text-[0.72rem] font-extrabold uppercase tracking-[0.34em] text-[#EADFC8] before:h-[2px] before:w-12 before:bg-[#EADFC8]">
            Vitrine C&A
          </span>

          <h1 className="mt-8 max-w-[1100px] font-display text-[clamp(3.1rem,7.6vw,6.8rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-white">
            As{" "}
            <em className="font-script text-[1.08em] font-bold not-italic tracking-normal text-[#E8C896]">
              favoritas
            </em>
            que a Pam escolheu pra você
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-white/92 sm:text-2xl">
            {productCount} peças escolhidas a dedo pela Pam na Live Ótimo Inverno C&A.
            Link direto pra cada produto.
          </p>

          <ul className="mt-8 grid gap-4 text-lg font-extrabold text-white sm:text-xl">
            <li className="flex items-center gap-4">
              <span className="text-3xl leading-none text-[#6EA046]" aria-hidden="true">
                ✓
              </span>
              <span>{productCount} peças escolhidas a dedo pela Pam</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-3xl leading-none text-[#6EA046]" aria-hidden="true">
                ✓
              </span>
              <span>Link direto pro produto na C&A</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-3xl leading-none text-[#6EA046]" aria-hidden="true">
                ✓
              </span>
              <span>Casacos, calças, suéteres e botas</span>
            </li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#produtos"
              className="inline-flex min-h-16 items-center justify-center gap-4 rounded-full bg-white px-7 py-4 text-[0.95rem] font-extrabold uppercase tracking-[0.16em] text-ink shadow-[0_18px_38px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#F8F2E9] sm:px-9"
            >
              Ver as {productCount} peças
              <span className="text-3xl leading-none" aria-hidden="true">
                ↓
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-4 rounded-full bg-[#25D366] px-7 py-4 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_18px_42px_rgba(37,211,102,0.36)] transition hover:-translate-y-0.5 hover:bg-[#1DA851] sm:px-9"
            >
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Compartilhar no WhatsApp
            </a>

            <button
              type="button"
              onClick={copyCurrentLink}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-full border-2 border-white/42 bg-ink/15 px-7 py-4 text-[0.85rem] font-extrabold uppercase tracking-[0.14em] text-white/82 backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-ink sm:px-8"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 8a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3M5 11a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H8a3 3 0 01-3-3v-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {copyLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
