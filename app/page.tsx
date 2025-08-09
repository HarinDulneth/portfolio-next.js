import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import Navbar from "./components/ui/navbar";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import MagicButton from "./components/ui/magic-button";
import Skills from "./components/ui/skills";
import TypewriterText from "./components/ui/typewriter-text";
import FirefliesBackground from "./components/ui/fireflies-backround";
import StarsBackground from "./components/ui/stars-background";
import ShootingStars from "./components/ui/shooting-stars";
import ThreeDMarquee from "./components/ui/3d-marquee";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import GenerateButton from "./components/ui/glass-button";
import { LiquidButton } from "./components/ui/liquid-glass-button";
import AnimatedText from "./components/ui/animated-text";
import MagicBento from "./components/ui/magic-bento";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { SplineScene } from "./components/ui/splite-robot";
import HeroSection from "./components/ui/herosection";
import Particles from "./components/ui/particle-backround";
import { Waves } from "lucide-react";
import WavesBackround from "./components/ui/beam-backround";
import DarkVeil from "./components/ui/dark-vail";
import { BackgroundPaths } from "./components/ui/path-backround";
import Smoke from "./components/ui/glow-smoke";
import Lightning from "./components/ui/glow-smoke";
import CombinedDarkVeilWaves from "./components/ui/combine-backround";
import CombinedVeilWaves from "./components/ui/combine-backround";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* <div className="fixed inset-0 w-full h-50% bg-black overflow-hidden pointer-events-none z-10">
        <DarkVeil />
      </div>
      <div className="fixed inset-0 w-full h-50% bg-black overflow-hidden pointer-events-none z-10">
        <WavesBackround
          lineColor="#151515"
          backgroundColor="rgba(0,0,0)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div> */}

      <div className="fixed inset-0 w-full h-50% bg-black overflow-hidden pointer-events-none z-10">
        <CombinedDarkVeilWaves />
      </div>

      <Navbar />

      <HeroSection />

      {/* <div className="relative z-10 px-8 pt-32">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black leading-none mb-4 tracking-tight">
            <span className="block text-[#575757]">I'M HARIN</span>
          </h1>

          <h2 className="text-9xl md:text-7xl lg:text-9xl xl:text-9xl font-black text-white leading-tight mt-8 whitespace-nowrap">
            PRODUCT DESIGNER
          </h2>
        </div>

        <div className="absolute ">
          <MagicButton title="Show my work" otherClasses="" />
        </div>
      </div> */}

      {/* <section className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <SplineScene />
        </div>
      </section> */}

      <div className="relative z-10 mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-7xl">
          <InfiniteMovingCards
            items={[
              { name: "React" },
              { name: "Next.js" },
              { name: "Python" },
              { name: "TypeScript" },
              { name: "JavaScript" },
              { name: "Node.js" },
            ]}
            className="my-10 sm:my-16 md:my-20"
          />
        </div>
      </div>
    </div>
  );
}
