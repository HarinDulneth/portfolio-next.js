"use client";

import React, { useEffect } from 'react';

const FirefliesBackground = ({ quantity = 15, className = "" }) => {
  useEffect(() => {
    // Create dynamic styles for fireflies
    const style = document.createElement("style");
    style.id = "fireflies-animation-styles";
    
    // Remove existing styles if they exist
    const existingStyle = document.getElementById("fireflies-animation-styles");
    if (existingStyle) {
      existingStyle.remove();
    }

    // Base styles
    let cssContent = `
      .fireflies-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        overflow: hidden;
        pointer-events: none;
        z-index: -1;
      }

      .firefly {
        position: fixed;
        left: 50%;
        top: 50%;
        width: 0.4vw;
        height: 0.4vw;
        margin: -0.2vw 0 0 9.8vw;
        animation: ease 200s alternate infinite;
        pointer-events: none;
      }

      .firefly::before,
      .firefly::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-origin: -10vw;
      }

      .firefly::before {
        background: black;
        opacity: 0.4;
        animation: drift 10s ease alternate infinite;
      }

      .firefly::after {
        background: white;
        opacity: 0;
        box-shadow: 0 0 0vw 0vw yellow;
        animation: drift 10s ease alternate infinite, flash 6s ease infinite;
        animation-delay: 0ms, 500ms;
      }

      @keyframes drift {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes flash {
        0%, 30%, 100% {
          opacity: 0;
          box-shadow: 0 0 0vw 0vw yellow;
        }
        5% {
          opacity: 1;
          box-shadow: 0 0 2vw 0.4vw yellow;
        }
      }
    `;
    
    // Generate individual firefly animations
    for (let i = 1; i <= quantity; i++) {
      const steps = Math.floor(Math.random() * 12) + 16;
      const duration = Math.floor(Math.random() * 10) + 8;
      const flashDuration = Math.floor(Math.random() * 6000) + 5000;
      const flashDelay = Math.floor(Math.random() * 8000) + 500;

      let keyframes = `@keyframes move${i} {`;
      for (let s = 0; s <= steps; s++) {
        const percent = (s * 100) / steps;
        const x = Math.floor(Math.random() * 100) - 50;
        const y = Math.floor(Math.random() * 100) - 50;
        const scale = (Math.random() * 0.75 + 0.25).toFixed(2);
        keyframes += `
          ${percent}% {
            transform: translateX(${x}vw) translateY(${y}vh) scale(${scale});
          }
        `;
      }
      keyframes += `}`;

      cssContent += `
        .firefly:nth-child(${i}) {
          animation-name: move${i};
        }

        .firefly:nth-child(${i})::before {
          animation-duration: ${duration}s;
        }

        .firefly:nth-child(${i})::after {
          animation-duration: ${duration}s, ${flashDuration}ms;
          animation-delay: 0ms, ${flashDelay}ms;
        }

        ${keyframes}
      `;
    }

    style.innerHTML = cssContent;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      const styleToRemove = document.getElementById("fireflies-animation-styles");
      if (styleToRemove) {
        styleToRemove.remove();
      }
    };
  }, [quantity]);

  // Generate firefly elements
  const fireflies = Array.from({ length: quantity }, (_, index) => (
    <div key={index} className="firefly" />
  ));

  return (
    <div className={`fireflies-container ${className}`}>
      {fireflies}
    </div>
  );
};

export default FirefliesBackground;