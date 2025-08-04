import AnimatedText from "./animated-text";
import { LiquidButton } from "./liquid-glass-button";
import { SplineEva } from "./splite-eva";
import { TextGenerateEffect } from "./text-generate-effect";

export default function HeroSection() {
  return (
    <div className="flex justify-center relative mt-43 my-20 z-10 overflow-x-hidden">
      <div className="max-w-[89vw] lg:max-w-[85vw] xl:max-w-[80vw] flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-30">
        {/* Left side - Content */}
        <div className="flex flex-col items-center lg:items-start justify-center lg:flex-1">
          <h2 className="uppercase tracking-widest text-xs text-center lg:text-left text-magic-blue max-w-80">
            Dynamic WebMagic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl mb-5 goldman-regular uppercase"
            words="Transforming Concepts into seamless Experiences"
          />

          <div className="text-center lg:text-left md:tracking-wider my-1 w-full h-[1.2em] md:h-[1.5em] lg:h-[9rem] flex items-center justify-center lg:justify-start">
            <div className="max-w-fit min-w-0">
              <AnimatedText
                initialText="Hi, I'm Dulneth"
                staticPrefix="Hi, I'm "
                gooeyTexts={["Harin", "Dulneth"]}
                typewriterSpeed={150}
                typewriterDelay={1000}
                morphTime={1}
                cooldownTime={0.25}
                className="w-full h-full flex items-center justify-center lg:justify-start"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 my-12">
            <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
              Show My Work
            </LiquidButton>
            <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
              Playlist
            </LiquidButton>
          </div>
        </div>

        {/* Right side - Spline component with visible overflow */}
        <div className="lg:flex-1 w-full lg:w-auto relative">
          <div className="overflow-visible">
            <SplineEva />
          </div>
        </div>
      </div>
    </div>
  );
}
