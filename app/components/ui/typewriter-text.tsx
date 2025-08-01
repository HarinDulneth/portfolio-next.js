"use client";

import React from "react";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  showCursor = false,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start the animation after the delay
    if (!hasStarted) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }

    if (hasStarted && currentIndex < text.length) {
      const timeout: NodeJS.Timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (hasStarted && currentIndex >= text.length && !isComplete) {
      setIsComplete(true);
      // Call the completion callback after a short delay
      setTimeout(() => {
        onComplete?.();
      }, 500);
    }
  }, [currentIndex, text, speed, delay, isComplete, onComplete, hasStarted]);

  return (
    <span className={`inline-block ${className}`} style={{ minHeight: '1em' }}>
      {displayText}
      {showCursor && (
        <span
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
            isComplete ? "animate-pulse" : "animate-pulse"
          }`}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TypewriterText;