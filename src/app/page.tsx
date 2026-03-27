import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";
import { ServicesSection } from "@/components/Services/ServicesSection";
import { PaletteSection } from "@/components/Palette/PaletteSection";
import { WhyUsSection } from "@/components/WhyUs/WhyUsSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { ProcessSection } from "@/components/Process/ProcessSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer";
import { GradientDivider } from "@/components/ui/GradientDivider";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <GradientDivider />
        <ServicesSection />
        <GradientDivider />
        <PaletteSection />
        <GradientDivider />
        <WhyUsSection />
        <GradientDivider />
        <GallerySection />
        <GradientDivider />
        <ProcessSection />
        <GradientDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
