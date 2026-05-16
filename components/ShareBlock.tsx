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
    <section className="px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-ink/10 bg-ink px-6 py-8 text-pearl shadow-soft sm:px-8 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 className="font-display text-4xl leading-tight">
            Marca uma amiga que vai amar
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-pearl/72 sm:text-base">
            Manda essa vitrine pro grupo das amigas: todos os links em um só lugar.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-pearl px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-champagne"
          >
            Compartilhar no WhatsApp
          </a>
          <button
            type="button"
            onClick={copyCurrentUrl}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-pearl/20 px-5 py-3 text-sm font-semibold text-pearl transition hover:-translate-y-0.5 hover:bg-pearl/10"
          >
            {copied ? "Link copiado" : "Copiar link"}
          </button>
        </div>
      </div>
    </section>
  );
}
