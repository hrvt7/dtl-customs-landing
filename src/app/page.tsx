import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { PaletteSection } from "@/components/Palette/PaletteSection";
import { WhyUsSection } from "@/components/WhyUs/WhyUsSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { ProcessSection } from "@/components/Process/ProcessSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        {/* One shared garage background for ALL sections below hero */}
        <div className="relative">
          {/* Fixed garage bg — no per-section parallax, no jumping */}
          <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <Image
              src="/garage-bg.jpg"
              alt=""
              fill
              className="object-cover"
              style={{ filter: "brightness(1.3)" }}
              quality={70}
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(8, 8, 8, 0.6)" }} />
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
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
