import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hallan de Sousa Brito - PCD TEA | Operador Logística Jr | Engenheiro de Software",
  description: "Perfil profissional de Hallan de Sousa Brito: PCD TEA, Operador Logística Jr, estudante de Engenharia de Software (5º período), com foco em desenvolvimento back-end (C#, Python, SQL) e automação logística.",
  keywords: [
    "Hallan Brito",
    "PCD TEA",
    "Logística",
    "Engenharia de Software",
    "C#",
    "Python",
    "SQL",
    "Blazor",
    "Power BI",
    "Currículo",
    "Back-end"
  ],
  authors: [{ name: "Hallan de Sousa Brito" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
