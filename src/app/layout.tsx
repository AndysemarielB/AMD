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
  title: "Chez AMD - Vente de Lapins et Chats",
  description: "Vente de lapins et chats adultes en excellente santé. Lapin adulte 25,000 FCFA, Chat adulte 35,000 FCFA. Contact WhatsApp: +225 0500405056",
  keywords: "lapins, chats, vente, animaux, Côte d'Ivoire, Abidjan, élevage",
  authors: [{ name: "Chez AMD" }],
  openGraph: {
    title: "Chez AMD - Vente de Lapins et Chats",
    description: "Vente de lapins et chats adultes en excellente santé. Prix attractifs et animaux de qualité.",
    type: "website",
    locale: "fr_FR",
    siteName: "Chez AMD",
    images: [
      {
        url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Lapin adulte - Chez AMD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chez AMD - Vente de Lapins et Chats",
    description: "Vente de lapins et chats adultes en excellente santé. Prix attractifs et animaux de qualité.",
    images: ["https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://amd.vercel.app",
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
