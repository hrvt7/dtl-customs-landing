import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
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
    <html lang="hu" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
