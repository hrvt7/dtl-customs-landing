import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { BrandsTicker } from "@/components/BrandsTicker";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { PortfolioSection } from "@/components/Portfolio/PortfolioSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrandsTicker />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
