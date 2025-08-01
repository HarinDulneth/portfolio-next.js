"use client";

import React, { useState } from "react";
import TypewriterText from "./typewriter-text";
import { GooeyText } from "./gooey-text";

interface AnimatedTextProps {
  initialText: string;
  staticPrefix: string;
  gooeyTexts: string[];
  typewriterSpeed?: number;
  typewriterDelay?: number;
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  initialText,
  staticPrefix,
  gooeyTexts,
  typewriterSpeed = 150,
  typewriterDelay = 1000,
  morphTime = 1,
  cooldownTime = 0.25,
  className = "",
}) => {
  const [showGooey, setShowGooey] = useState(false);

  const handleTypewriterComplete = () => {
    // Start the gooey transition immediately without delay to prevent blink
    setShowGooey(true);
  };

  const longestGooeyText = gooeyTexts.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  return (
    <div className={`relative ${className}`}>
      {/* Master invisible spacer - using the exact same text structure as gooey */}
      <div className="invisible text-center md:tracking-wider text-sm font-black md:text-lg lg:text-9xl whitespace-nowrap audiowide-font">
        {staticPrefix}
        {longestGooeyText}
      </div>

      {/* Typewriter Effect */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          !showGooey ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out`}
      >
        <TypewriterText
          text={initialText}
          speed={typewriterSpeed}
          delay={typewriterDelay}
          showCursor={false}
          onComplete={handleTypewriterComplete}
          className="text-center md:tracking-wider text-sm font-black md:text-lg lg:text-9xl whitespace-nowrap audiowide-font"
        />
      </div>

      {/* Gooey Effect - using identical text rendering as typewriter */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${
          showGooey ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="text-center md:tracking-wider text-sm font-black md:text-lg lg:text-9xl whitespace-nowrap audiowide-font">
          {/* Render the static prefix exactly as it appears in the completed typewriter */}
          {staticPrefix.split("").map((char, index) => (
            <span key={`prefix-${index}`}>{char}</span>
          ))}
          {/* Gooey text positioned with no additional spacing */}
          <div className="inline-block relative">
            <span className="invisible">{longestGooeyText}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <GooeyText
                texts={gooeyTexts}
                morphTime={morphTime}
                cooldownTime={cooldownTime}
                className="font-bold audiowide-font"
                textClassName="text-sm font-black md:text-lg lg:text-9xl text-center md:tracking-wider audiowide-font"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
