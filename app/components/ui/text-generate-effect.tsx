"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

// Utility function (simplified version of cn)
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: string | ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateText = async () => {
      if (scope.current) {
        await animate(
          "span",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
          },
          {
            duration: duration,
            delay: stagger(0.2),
          }
        );
      }
    };

    animateText();
  }, []); // Empty dependency array - run only once after mount

  const renderWords = () => {
    // Check if words is a string, if so split it into words
    const wordsArray = typeof words === "string" ? words.split(" ") : [words];

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 dark:text-white/75 text-black inline-block"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}
            {idx < wordsArray.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white/50 text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

// GradientText Component
interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 2,
  showBorder = false,
}: GradientTextProps) {
  const animationId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <>
      <style>
        {`
          @keyframes ${animationId} {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .gradient-text-${animationId} {
            background: linear-gradient(90deg, ${colors.join(", ")});
            background-size: 300% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${animationId} ${animationSpeed}s linear infinite;
          }
          
          .gradient-border-${animationId} {
            background: linear-gradient(90deg, ${colors.join(", ")});
            background-size: 300% 100%;
            animation: ${animationId} ${animationSpeed}s linear infinite;
          }
        `}
      </style>

      <div
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      >
        {showBorder && (
          <div
            className={`absolute inset-0 bg-cover z-0 pointer-events-none gradient-border-${animationId}`}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
        <div
          className={`inline-block relative z-2 gradient-text-${animationId}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

// Demo Component
export default function HeroSection() {
  return (
    <div className="flex justify-center items-center relative mt-20 my-20 z-10 overflow-x-hidden min-h-[60vh] bg-black">
      <div className="max-w-[89vw] lg:max-w-full xl:max-w-[80vw] flex flex-col items-center justify-center text-center">
        <TextGenerateEffect
          className="uppercase tracking-widest text-xs text-center text-purple-400 max-w-100 mb-8"
          words="Hi, I'm Harin Dulneth"
        />

        <div className="text-center md:tracking-wider my-1 w-full flex items-center justify-center">
          <div className="max-w-fit min-w-0">
            <GradientText
              colors={["#B766F1", "#DBB2F8", "#B766F1", "#DBB2F8", "#B766F1"]}
              className="w-full h-full flex items-center justify-center uppercase text-4xl lg:text-6xl font-bold"
              animationSpeed={3}
              showBorder={false}
            >
              <TextGenerateEffect
                words="Transforming Concepts into seamless Experiences"
                duration={0.8}
                filter={true}
              />
            </GradientText>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-10 my-12">
          <button className="w-[250px] text-black py-5 tracking-wider rounded-full text-lg font-medium bg-white transition duration-200 hover:scale-105">
            Show My Work
          </button>
          <button className="w-[250px] text-white py-5 tracking-wider rounded-full text-lg font-medium bg-purple-600 transition duration-200 hover:scale-105">
            Playlist
          </button>
        </div>
      </div>
    </div>
  );
}
