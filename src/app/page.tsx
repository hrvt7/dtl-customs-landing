import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/Hero/HeroSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="h-screen bg-dtl-navy flex items-center justify-center">
          <p className="text-gray-600 font-mono">More sections coming...</p>
        </div>
      </main>
    </>
  );
}
