import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#5A9E52",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NutraViva | Transformação Corporal com Ciência",
  description:
    "Plano nutricional inteligente e personalizado para transformar o físico com orientação profissional, sem fome e sem soluções milagrosas.",
  generator: "Next.js",
  authors: [{ name: "Dra. Letícia", url: "https://nutraviva.com.br" }],
  openGraph: {
    title: "NutraViva - Nutricionista",
    description: "Plano nutricional inteligente e personalizado para transformar o físico.",
    url: "https://nutraviva.com.br",
    siteName: "NutraViva",
    images: [
      {
        url: "/images/og.jpg", // To create later
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased font-body bg-off-white text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
