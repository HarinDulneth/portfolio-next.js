import MagicBento from "./glassss-button";
import GradientTextGenerateEffect from "./gradient-textgenerate";
import TypewriterText from "./typewriter-text";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center relative lg:mt-55 mt-50 my-20 z-10 overflow-hidden min-h-[60vh]">
      <div className="max-w-[89vw] lg:max-w-full xl:max-w-[90vw] flex flex-col items-center justify-center text-center">
        <div className="relative text-center md:tracking-wider mb-5 w-full flex items-center justify-center">
          <div className="max-w-fit min-w-0">
            <GradientTextGenerateEffect
              words="Transforming Concepts into seamless Experiences"
              colors={["#280045, #DBB2F8, #280045, #DBB2F8"]}
              className="w-full h-full flex items-center justify-center uppercase lg:text-7xl font-zendots md:text-5xl text-3xl"
              animationSpeed={15}
              showBorder={false}
              duration={3}
            />
          </div>
        </div>

        <TypewriterText
          className="relative max-w-fit uppercase tracking-widest lg:text-2xl font-semibold text-[#F3E5FC]/75 text-center font-goldman md:text-md text-sm"
          text="Welcome to my Portfolio"
        />

        {/* <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 gap-3 my-5">
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
        </div> */}
      </div>
      {/* Fixed Bottom Right Button - stays on screen while scrolling */}
      <button className="fixed bottom-5 right-5 lg:w-15 lg:h-15 w-13 h-13 bg-black border border-[#252525] ring ring-[#151515] rounded-full flex items-center justify-center text-white text-2xl font-bold hover:border-gray-400 transition-colors duration-200 shadow-lg">
        <svg
          fill="#FFFFFF"
          height="800px"
          stroke="#FFFFFF"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.073 512.073"
          xmlSpace="preserve"
          className="lg:w-6 lg:h-6 w-4 h-4"
        >
          <g transform="translate(-1)">
            <g>
              <g>
                <path
                  d="M269.254,0C134.591,0,25.445,109.147,25.445,243.81c0,34.618,7.24,68.252,21.022,99.192L2.241,480.136
                c-6.632,20.563,14.782,38.953,34.108,29.29l98.856-49.428l0,0c32.504,16.206,92.454,27.621,134.051,27.621
                c134.663,0,243.81-109.147,243.81-243.81S403.917,0,269.254,0z M269.254,438.857c-21.169,0-49.102-3.753-73.036-9.366
                l83.94-41.97c12.044-6.022,16.925-20.667,10.904-32.711c-6.022-12.044-20.667-16.925-32.711-10.904L66.468,439.849l29.358-91.032
                c1.952-6.051,1.462-12.626-1.365-18.322c-13.26-26.719-20.255-56.184-20.255-86.686c0-107.732,87.315-195.048,195.048-195.048
                s195.048,87.315,195.048,195.048S376.987,438.857,269.254,438.857z"
                />
                <path
                  d="M269.254,219.429c-13.458,0-24.381,10.923-24.381,24.381c0,13.458,10.923,24.381,24.381,24.381
                c13.458,0,24.381-10.923,24.381-24.381C293.635,230.351,282.713,219.429,269.254,219.429z"
                />
                <path
                  d="M366.778,219.429c-13.458,0-24.381,10.923-24.381,24.381c0,13.458,10.923,24.381,24.381,24.381
                s24.381-10.923,24.381-24.381C391.159,230.351,380.237,219.429,366.778,219.429z"
                />
                <path
                  d="M171.731,219.429c-13.458,0-24.381,10.923-24.381,24.381c0,13.458,10.923,24.381,24.381,24.381
                c13.458,0,24.381-10.923,24.381-24.381C196.112,230.351,185.189,219.429,171.731,219.429z"
                />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
}
