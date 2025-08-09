"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";

// Utility function (simplified version of cn)
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// Basic TextGenerateEffect Component (standalone)
export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 5,
}: {
  words: string;
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
  }, []);

  const renderWords = () => {
    const wordsArray = words.split(" ");

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 inline-block"
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
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

// Combined GradientTextGenerateEffect Component
interface GradientTextGenerateEffectProps {
  words: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  filter?: boolean;
  duration?: number;
}

function GradientTextGenerateEffect({
  words,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 2,
  showBorder = false,
  filter = true,
  duration = 1,
}: GradientTextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const [animationId, setAnimationId] =
    React.useState<string>("gradient-fallback");
  const [mounted, setMounted] = React.useState(false);

  // Generate stable ID only on client side
  useEffect(() => {
    setAnimationId(
      `gradient-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    const animateText = async () => {
      if (scope.current && mounted) {
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

    // Small delay to ensure DOM is ready
    const timer = setTimeout(animateText, 100);
    return () => clearTimeout(timer);
  }, [mounted, animate, duration, filter]);

  const renderWords = () => {
    const wordsArray = words.split(" ");

    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 inline-block"
            style={{
              filter: filter ? "blur(10px)" : "none",
              background: `linear-gradient(90deg, ${colors.join(", ")})`,
              backgroundSize: "300% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: mounted
                ? `${animationId} ${animationSpeed}s linear infinite`
                : "none",
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
    <>
      <style>
        {`
          @keyframes ${animationId} {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <div className={cn("font-bold", className)}>
        <div className="mt-4">
          <div className="leading-snug tracking-wide">{renderWords()}</div>
        </div>
      </div>
    </>
  );
}
export default GradientTextGenerateEffect;
