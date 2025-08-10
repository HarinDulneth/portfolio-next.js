import MagicBento from "./glassss-button";
import GradientTextGenerateEffect from "./gradient-textgenerate";
import TypewriterText from "./typewriter-text";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center relative mt-55 my-20 z-10 overflow-hidden min-h-[60vh]">
      <div className="max-w-[89vw] lg:max-w-full xl:max-w-full flex flex-col items-center justify-center text-center">
        {/* Centered Content */}
        {/* <h2 className="uppercase tracking-widest text-xs text-center text-magic-blue max-w-80 mb-4">
          Dynamic WebMagic with Next.js
        </h2> */}

        <TypewriterText
          // className="text-center text-[40px] md:text-5xl lg:text-7xl mb-5 goldman-regular uppercase"
          className="relative uppercase tracking-widest lg:text-lg font-semibold text-[#F3E5FC]/75 text-center font-zendots max-w-100 md:text-md text-sm"
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
              className="w-full h-full flex items-center justify-center uppercase lg:text-7xl font-goldman md:text-5xl text-4xl"
              animationSpeed={15}
              showBorder={false}
              duration={1}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 gap-3 my-5">
          {/* <button className="w-[250px] py-5 tracking-wider rounded-full text-lg font-medium bg-gradient-to-b from-[#280045] to-[#7900D1] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Gradient
          </button> */}
          {/* <ShinyButton className="w-[250px] text-white py-5 tracking-wider rounded-full text-lg font-medium">
            Show My Work
          </ShinyButton> */}
          {/* <button className="w-[250px] text-white py-5 tracking-wider rounded-full text-lg font-medium bg-gradient-to-b backdrop-blur-xl dark:text-black transition duration-200 hover:scale-105">
            Playlist
          </button> */}
          <MagicBento
            title="Show My Work"
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={3}
            glowColor="135, 0, 233"
          />
          <MagicBento
            title="Playlist"
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={3}
            glowColor="135, 0, 233"
          />
          {/* <button className="relative w-[250px] inset-shadow-sm text-white py-5 tracking-wider rounded-full text-lg font-medium bg-white/5 backdrop-blur-lg border border-white/20 shadow-2xl shadow-black/30 dark:text-black transition duration-200 hover:scale-105 hover:bg-white/15 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-transparent before:opacity-60">
            <span className="relative z-10">Playlist</span>
          </button>
          <button className="relative w-[250px] inline-flex h-12 overflow-hidden rounded-full p-[1px] outline-none ring-1 focus:ring-slate-400 ring-offset-2 ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#280045_0%,#8700e9_50%,#280045_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center tracking-wider rounded-full bg-black px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
              Border Magic
            </span>
          </button> */}
          {/* <LiquidButton className="w-[250px] px-10 py-8 tracking-wider font-medium text-lg">
            Playlist
          </LiquidButton> */}
        </div>
      </div>
    </div>
  );
}
