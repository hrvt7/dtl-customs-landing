import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "DTL Customs | Prémium Autófóliázás Szombathely",
  description:
    "Prémium autófóliázás Szombathelyen. PPF védőfólia, karosszériafóliázás, autóüveg fóliázás, kerámia bevonat. Profi minőség, gyors kivitelezés.",
  keywords: "autófóliázás, szombathely, PPF, üvegfólia, karosszériafólia, kerámia bevonat, DTL Customs, XPEL, STEK, 3M",
  openGraph: {
    title: "DTL Customs | Prémium Autófóliázás Szombathely",
    description: "Prémium autófóliázás Szombathelyen. PPF védőfólia, karosszériafóliázás, autóüveg fóliázás.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={`${inter.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
