import Navbar from "../components/ui/navbar";
import HeroSection from "../components/ui/herosection";
import CombinedDarkVeilWaves from "../components/ui/combine-backround";
import { CVButton } from "../components/ui/cv-button";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="absolute inset-0 w-full h-50% bg-black overflow-hidden pointer-events-none z-10">
        <CombinedDarkVeilWaves />
      </div>
      <Navbar />
      <HeroSection />

      {/* CV Download Button */}
      <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-20">
        <CVButton />
      </div>
    </div>
  );
}
