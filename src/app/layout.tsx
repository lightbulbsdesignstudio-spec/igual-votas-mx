import type { Metadata } from "next";
import { Barlow_Condensed, Barlow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-display",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Igual Votas — Conoce al Congreso que ya elegiste",
  description: "El 6 de junio de 2027 se renuevan 500 diputados federales. Ellos van a decidir tu salario, tus impuestos y cuánto cuesta la gasolina.",
  openGraph: {
    title: "Igual Votas — Conoce al Congreso que ya elegiste",
    description: "Conoce a tus representantes y cómo votan en los temas que te afectan directamente con datos y metodología pública.",
    url: "https://igualvotas.mx",
    siteName: "Igual Votas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Igual Votas",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Igual Votas — Conoce al Congreso que ya elegiste",
    description: "Conoce a tus representantes y cómo votan en los temas que te afectan directamente.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${barlowCondensed.variable} ${barlow.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
