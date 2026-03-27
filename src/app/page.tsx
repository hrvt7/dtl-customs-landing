import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { PaletteSection } from "@/components/Palette/PaletteSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { ProcessSection } from "@/components/Process/ProcessSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PaletteSection />
        <GallerySection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
