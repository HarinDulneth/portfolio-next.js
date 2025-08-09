import AnimatedText from "./animated-text";
import GradientText from "./gradient-text";
import GradientTextGenerateEffect from "./gradient-textgenerate";
import { LiquidButton } from "./liquid-glass-button";
import { SplineEva } from "./splite-eva";
import { TextGenerateEffect } from "./text-generate-effect";
import TypewriterText from "./typewriter-text";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center relative mt-50 my-20 z-10 overflow-hidden min-h-[60vh]">
      <div className="max-w-[89vw] lg:max-w-full xl:max-w-[75vw] flex flex-col items-center justify-center text-center">
        {/* Centered Content */}
        {/* <h2 className="uppercase tracking-widest text-xs text-center text-magic-blue max-w-80 mb-4">
          Dynamic WebMagic with Next.js
        </h2> */}

        <TypewriterText
          // className="text-center text-[40px] md:text-5xl lg:text-7xl mb-5 goldman-regular uppercase"
          className="relative uppercase tracking-widest text-lg font-semibold text-[#F3E5FC]/75 text-center font-zendots max-w-100"
          // words="Transforming Concepts into seamless Experiences"
          text="Hi, I'm Harin Dulneth"
        />

        <div className="relative text-center md:tracking-wider mb-5 mt-3 w-full flex items-center justify-center">
          <div className="max-w-fit min-w-0">
            {/* <AnimatedText
              initialText="Hi, I'm Dulneth"
              staticPrefix="Hi, I'm "
              gooeyTexts={["Harin", "Dulneth"]}
              typewriterSpeed={150}
              typewriterDelay={1000}
              morphTime={1}
              cooldownTime={0.75}
              className="w-full h-full flex items-center justify-center"
            /> */}
            <GradientTextGenerateEffect
              words="Transforming Concepts into seamless Experiences"
              colors={["#280045, #DBB2F8, #280045, #DBB2F8"]}
              className="w-full h-full flex items-center justify-center uppercase lg:text-7xl font-goldman"
              animationSpeed={15}
              showBorder={false}
              duration={1}
            />
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 my-5">
          <button className="w-[250px] py-5 tracking-wider rounded-full text-lg font-medium bg-gradient-to-b from-[#280045] to-[#7900D1] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button>
          <button className="w-[250px] text-white py-5 tracking-wider rounded-full text-lg font-medium bg-[#8700e9] dark:text-black transition duration-200 hover:scale-105">
            Show My Work
          </button>
          <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
            Playlist
          </LiquidButton>
        </div> */}
      </div>
    </div>
  );
}
