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

export default function Home() {
  return (
    <div>
      <StarfieldBackground />
      <ShootingStars />
      <Navbar />

      <div className="flex justify-center relative mt-50 my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-20">
          <h2 className="uppercase tracking-widest text-xs text-center text-magic-blue max-w-80">
            Dynamic WebMagic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl mb-5 goldman-regular uppercase"
            words="Transforming Concepts into seamless Experiences"
          />

          {/* <HeroTextSection /> */}

          <div className="text-center md:tracking-wider my-1 w-full h-[1.2em] md:h-[1.5em] lg:h-[9rem] flex items-center justify-center">
            <div className="max-w-fit min-w-0">
              {" "}
              {/* Added min-w-0 to prevent overflow issues */}
              <AnimatedText
                initialText="Hi, I'm Dulneth"
                staticPrefix="Hi, I'm "
                gooeyTexts={["Harin", "Dulneth"]}
                typewriterSpeed={150}
                typewriterDelay={1000}
                morphTime={1}
                cooldownTime={0.25}
                className="w-full h-full flex items-center justify-center"
              />
            </div>
          </div>

          {/* <button className="bg-black/8 hover:bg-black/12 text-white/80 my-10 px-6 py-2 rounded-full text-md font-medium transition-all duration-200 hover:scale-105 backdrop-blur-xl border-2 border-white/50 shadow-lg shadow-black/20">
            Contact
          </button> */}

          <div className="flex items-center space-x-10 my-12">
            {/* <button className="w-[250px] px-12 py-5 rounded-full bg-[#FFFFFF] font-bold text-black tracking-wider uppercase transform hover:scale-105 hover:bg-[#000000] transition-colors duration-200">
              Show my work
            </button>
            <button className="w-[250px] shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-5 rounded-full tracking-wider uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
              Playlist
            </button> */}
            <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
              Show My Work
            </LiquidButton>
            <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
              Playlist
            </LiquidButton>
          </div>
        </div>
      </div>

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
      <InfiniteMovingCards
        items={[
          { name: "React" },
          { name: "Next.js" },
          { name: "Python" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "Node.js" },
        ]}
        className="mt-50 my-20"
      />
    </div>
  );
}
