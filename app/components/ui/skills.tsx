"use client";

import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    const container = containerRef.current;
    
    if (textContainer && container) {
      // Wait for layout to complete
      const setupAnimation = () => {
        // Calculate dimensions
        const textWidth = textContainer.scrollWidth / 2; // Half because content is duplicated
        const containerWidth = container.offsetWidth;
        
        // Kill any existing animations
        gsap.killTweensOf(textContainer);
        
        // Create seamless infinite loop
        gsap.fromTo(textContainer, 
          { x: containerWidth },
          {
            x: -textWidth,
            duration: textWidth / 50, // Adjust speed (50px per second)
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize(value => parseFloat(value) % (containerWidth + textWidth))
            }
          }
        );
      };

      // Ensure DOM is ready
      const timeoutId = setTimeout(setupAnimation, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, []);

  const skills = ["React", "Next.js", "Python", "TypeScript", "JavaScript", "Node.js"];

  return (
    <div ref={containerRef} className="flex justify-center relative mt-50 my-20 z-10 overflow-hidden">
      <div 
        ref={textContainerRef}
        className="flex space-x-16 whitespace-nowrap"
      >
        {skills.map((skill, index) => (
          <p
            key={index}
            className="md:tracking-wider mb-4 text-sm font-black md:text-lg lg:text-5xl"
          >
            {skill}
          </p>
        ))}
        {/* Duplicate for seamless loop */}
        {skills.map((skill, index) => (
          <p
            key={`duplicate-${index}`}
            className="md:tracking-wider mb-4 text-sm font-black md:text-lg lg:text-5xl"
          >
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;