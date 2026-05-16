import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live C&A · Pam Braga",
  description: "Vitrine de links para produtos indicados na live da Pam Braga com C&A.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
