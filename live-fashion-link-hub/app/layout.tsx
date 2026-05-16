import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Fashion Hub",
  description: "Vitrine de links para produtos indicados em live de moda.",
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
