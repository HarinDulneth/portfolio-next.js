import Navbar from "../components/ui/navbar";
import HeroSection from "../components/ui/herosection";
import CombinedDarkVeilWaves from "../components/ui/combine-backround";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="absolute inset-0 w-full h-50% bg-black overflow-hidden pointer-events-none z-10">
        <CombinedDarkVeilWaves />
      </div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
