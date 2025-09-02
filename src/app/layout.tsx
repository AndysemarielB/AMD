import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chez AMB - Vente de Lapins Vivants",
  description: "Vente de lapins vivants en Côte d'Ivoire. 1.5–1.8 kg: 10 000 FCFA. Plus de 1.8 kg: 13 000 FCFA. Contact WhatsApp: +225 0500405056.",
  keywords: "lapins, vente de lapins, animaux, Côte d'Ivoire, Abidjan, AMB",
  authors: [{ name: "Chez AMB" }],
  openGraph: {
    title: "Chez AMB - Vente de Lapins Vivants",
    description: "Tarifs selon poids: 1.5–1.8 kg à 10 000 FCFA, +1.8 kg à 13 000 FCFA.",
    type: "website",
    locale: "fr_FR",
    siteName: "Chez AMB",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lapin vivant - Chez AMB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chez AMB - Vente de Lapins Vivants",
    description: "Tarifs selon poids: 1.5–1.8 kg à 10 000 FCFA, +1.8 kg à 13 000 FCFA.",
    images: ["https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://amb.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
