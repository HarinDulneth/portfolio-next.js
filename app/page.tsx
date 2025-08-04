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
import StarfieldBackground from "./components/ui/star-background";
import { LiquidButton } from "./components/ui/liquid-glass-button";
import AnimatedText from "./components/ui/animated-text";
import MagicBento from "./components/ui/magic-bento";
import { GlowingEffect } from "./components/ui/glowing-effect";
import { SplineScene } from "./components/ui/splite-robot";
import HeroSection from "./components/ui/herosection";

export default function Home() {
  return (
    <div>
      <StarfieldBackground />
      <ShootingStars />
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

      <section className="relative z-20 w-full px-4 md:px-8 lg:px-16">
        <div className="max-w-full mx-auto">
          <SplineScene />
        </div>
      </section>

      <div className="relative z-10 mt-20">
        <InfiniteMovingCards
          items={[
            { name: "React" },
            { name: "Next.js" },
            { name: "Python" },
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "Node.js" },
          ]}
          className="my-20"
        />
      </div>
    </div>
  );
}
