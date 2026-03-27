import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DTL Customs | Prémium Autófóliázás Szombathely",
  description:
    "Prémium autóüveg-fóliázás Szombathelyen. Color change wrap, PPF védőfólia, üvegfóliázás. Profi minőség, gyors kivitelezés.",
  keywords: "autófóliázás, szombathely, car wrap, PPF, üvegfólia, color change, DTL Customs",
  openGraph: {
    title: "DTL Customs | Prémium Autófóliázás Szombathely",
    description: "Prémium autóüveg-fóliázás Szombathelyen. Color change wrap, PPF védőfólia, üvegfóliázás.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
