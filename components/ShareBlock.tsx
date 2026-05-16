"use client";

import { useEffect, useState } from "react";

export function ShareBlock() {
  const [copied, setCopied] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
    `Olha essa vitrine da live: ${pageUrl}`,
  )}`;

  async function copyCurrentUrl() {
    if (!pageUrl) {
      return;
    }

    try {
      await navigator.clipboard.writeText(pageUrl);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = pageUrl;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section className="mx-auto max-w-[720px] border-t border-champagne px-5 pb-12 pt-10 text-center sm:px-8">
      <h2 className="font-display text-[clamp(1.25rem,5vw,1.65rem)] font-extrabold tracking-[-0.025em] text-ink">
        Marca uma amiga que vai amar
      </h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-clay">
        Manda essa vitrine pro grupo das amigas: todos os links em um só lugar.
      </p>
      <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-whatsapp px-6 py-3 text-xs font-extrabold uppercase tracking-[0.06em] text-white shadow-[0_12px_28px_rgba(37,211,102,0.32)] transition hover:-translate-y-0.5 hover:bg-[#1FB957]"
        >
          Compartilhar no WhatsApp
        </a>
        <button
          type="button"
          onClick={copyCurrentUrl}
          className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-champagne bg-mist px-6 py-3 text-xs font-bold uppercase tracking-[0.06em] text-ink transition hover:-translate-y-0.5 hover:border-ink"
        >
          {copied ? "Link copiado" : "Copiar link"}
        </button>
      </div>
    </section>
  );
}
