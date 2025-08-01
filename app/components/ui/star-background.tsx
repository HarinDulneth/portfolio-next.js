"use client";

import React, { useEffect, useRef } from "react";

interface StarfieldBackgroundProps {
  className?: string;
  starDensity?: number;
  rotationSpeed?: number;
}

interface Star {
  angle: number;
  radius: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({
  className = "",
  starDensity = 0.000035,
  rotationSpeed = 0.00025,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const starsRef = useRef<Star[]>([]);
  const timeRef = useRef<number>(0);
  const centerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const generateStars = (width: number, height: number) => {
    // Create a much larger area to ensure screen is never empty
    const buffer = Math.max(width, height) * 2;
    const extendedWidth = width + buffer * 2;
    const extendedHeight = height + buffer * 2;
    const area = extendedWidth * extendedHeight;
    const numStars = Math.floor(area * starDensity * 1.5);

    starsRef.current = [];

    // First, ensure we have stars covering the visible screen area
    const screenStars = Math.floor(width * height * starDensity * 2);
    for (let i = 0; i < screenStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      const angle = Math.atan2(
        y - centerRef.current.y,
        x - centerRef.current.x
      );
      const radius = Math.sqrt(
        (x - centerRef.current.x) ** 2 + (y - centerRef.current.y) ** 2
      );

      starsRef.current.push({
        angle,
        radius,
        size: Math.random() * 1.35 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.6,
        twinkleSpeed: 0.5 + Math.random() * 0.5,
      });
    }

    // Then add stars in the extended buffer area
    for (let i = 0; i < numStars - screenStars; i++) {
      const x = Math.random() * extendedWidth - buffer;
      const y = Math.random() * extendedHeight - buffer;

      const angle = Math.atan2(
        y - centerRef.current.y,
        x - centerRef.current.x
      );
      const radius = Math.sqrt(
        (x - centerRef.current.x) ** 2 + (y - centerRef.current.y) ** 2
      );

      starsRef.current.push({
        angle,
        radius,
        size: Math.random() * 1.35 + 0.5,
        baseOpacity: Math.random() * 0.5 + 0.6,
        twinkleSpeed: 0.5 + Math.random() * 0.5,
      });
    }
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    // Get dimensions from parent element
    const rect = parent.getBoundingClientRect();
    const width = rect.width || window.innerWidth;
    const height = rect.height || window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Set center to bottom-right outside the screen
    centerRef.current = {
      x: width + 400,
      y: height + 400,
    };

    generateStars(width, height);
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    timeRef.current += 1;

    for (const star of starsRef.current) {
      // Rotate clockwise
      star.angle += rotationSpeed;

      // Calculate new position
      const x = centerRef.current.x + star.radius * Math.cos(star.angle);
      const y = centerRef.current.y + star.radius * Math.sin(star.angle);

      // Only draw stars that are visible on screen (with small buffer for smooth edges)
      if (
        x >= -10 &&
        x <= canvas.width + 10 &&
        y >= -10 &&
        y <= canvas.height + 10
      ) {
        // Calculate twinkling opacity
        const opacity =
          star.baseOpacity +
          Math.sin((timeRef.current * 0.01) / star.twinkleSpeed) * 0.3;
        
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(
          1,
          Math.max(0, opacity)
        )})`;
        ctx.fill();
      }
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Small delay to ensure parent dimensions are available
    const initTimeout = setTimeout(() => {
      handleResize();
      animate();
    }, 10);

    const resizeHandler = () => handleResize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      clearTimeout(initTimeout);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starDensity, rotationSpeed]);

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black overflow-hidden ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default StarfieldBackground;
