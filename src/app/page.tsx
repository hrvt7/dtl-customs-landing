import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { PaletteSection } from "@/components/Palette/PaletteSection";
import { WhyUsSection } from "@/components/WhyUs/WhyUsSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { ProcessSection } from "@/components/Process/ProcessSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero — saját videó háttérrel, nincs garage bg */}
        <HeroSection />

        {/* Minden szekció a hero alatt — garage háttérkép CSS-ben */}
        <div
          className="relative"
          style={{
            backgroundImage: "url(/garage-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Sötétítő overlay a háttérképre */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />

          {/* Tartalom */}
          <div className="relative z-10">
            <ServicesSection />
            <PaletteSection />
            <WhyUsSection />
            <GallerySection />
            <ProcessSection />
            <ContactSection />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
