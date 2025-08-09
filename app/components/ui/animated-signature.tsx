"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Custom hook for load-based animation
const useLoadAnimation = (duration: number = 5000, delay: number = 500) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const rawProgress = Math.min(elapsed / duration, 1);

        // Ease out cubic for smooth animation
        const easedProgress = 1 - Math.pow(1 - rawProgress, 3);
        setProgress(easedProgress);

        if (rawProgress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [duration, delay]);

  return progress;
};

// Animated Signature Component
const AnimatedSignature: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationProgress = useLoadAnimation(5000, 500); // 2s duration, 0.5s delay

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll(
        "path"
      ) as NodeListOf<SVGPathElement>;

      paths.forEach((path: SVGPathElement, index: number) => {
        const delay = index * 0.5; // Stagger delay between paths (0.3 = 30% of total animation)
        const adjustedProgress = Math.max(
          0,
          Math.min(1, (animationProgress - delay) / (1 - delay))
        );

        // For filled paths, we'll use a clip-path animation instead
        const clipValue = `inset(0 ${100 - adjustedProgress * 100}% 0 0)`;
        path.style.clipPath = clipValue;
        path.style.opacity = adjustedProgress > 0 ? "1" : "0";
      });
    }
  }, [animationProgress]);

  return (
    <Link
      href="/"
      className="text-white hover:text-gray-300 transition-colors duration-200"
    >
      <div
        className="relative"
        style={{
          transform: "rotate(-2deg) scale(0.85)",
          filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
        }}
      >
        <svg
          ref={svgRef}
          width="123"
          height="45"
          viewBox="0 0 123 65"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        >
          {/* Your actual signature paths as filled paths */}
          <g transform="translate(0,65) scale(0.1,-0.1)" fill="#000000">
            <path
              d="M736 617 c-14 -18 -60 -91 -104 -162 l-79 -130 -59 -2 c-56 -3 -61 -1 -101 35 l-43 37 46 70 c56 86 95 161 87 168 -3 3 -34 -42 -70 -101 -86 -142 -77 -133 -125 -116 -92 32 -234 7 -273 -49 -35 -49 -17 -58 133 -66 l114 -6 -36 -47 c-38 -49 -42 -58 -26 -58 5 0 26 25 47 55 l38 54 73 1 c70 0 73 -1 83 -27 19 -48 12 -123 -16 -187 -51 -116 -18 -89 43 34 91 186 94 190 142 190 l41 0 -18 -30 c-14 -24 -15 -32 -5 -42 10 -10 18 -10 41 3 26 15 29 15 38 0 9 -14 15 -14 44 -4 21 8 35 9 39 3 4 -6 21 8 39 30 31 38 34 40 51 25 9 -8 24 -13 32 -10 12 5 14 0 11 -19 -7 -34 19 -44 62 -23 32 15 34 15 28 -1 -4 -9 14 2 40 26 53 48 67 52 67 18 0 -40 21 -48 68 -25 23 12 42 25 42 30 0 13 -5 12 -44 -12 -40 -23 -56 -19 -56 17 0 30 -24 41 -47 23 -10 -8 -14 -9 -10 -2 4 6 3 14 -2 17 -5 4 -12 -2 -15 -12 -6 -19 -82 -72 -103 -72 -18 0 -16 10 7 45 25 37 26 53 3 33 -32 -28 -63 -32 -83 -10 -10 11 -16 23 -13 26 4 3 1 6 -5 6 -6 0 -20 -13 -31 -29 -22 -30 -79 -71 -100 -71 -17 0 -13 19 10 51 11 16 17 29 12 30 -4 0 -45 0 -91 -1 l-82 -1 71 118 c39 65 84 135 100 155 16 20 25 39 20 43 -5 3 -21 -9 -35 -28z m-445 -220 l29 -12 -21 -32 -21 -33 -123 0 c-126 0 -149 7 -124 36 46 56 176 77 260 41z m96 -52 l28 -24 -58 -1 -57 0 16 25 c20 31 36 31 71 0z m301 -62 c-21 -20 -41 -33 -45 -29 -9 9 51 66 69 66 7 0 -4 -17 -24 -37z m-148 22 c0 -3 -15 -31 -32 -62 l-33 -58 -7 43 c-4 23 -10 47 -14 53 -4 6 0 15 7 20 15 9 79 12 79 4z"
              style={{ transition: "opacity 0.3s ease" }}
            />
            <path
              d="M1000 385 c-7 -9 -10 -18 -7 -22 8 -7 37 15 37 28 0 14 -16 11 -30 -6z"
              style={{ transition: "opacity 0.3s ease" }}
            />
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default AnimatedSignature;
