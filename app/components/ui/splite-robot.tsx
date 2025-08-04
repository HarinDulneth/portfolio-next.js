"use client";

import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";

// Fixed dynamic import - import the default export specifically
const Spline = dynamic(() => import("@splinetool/react-spline").then(mod => ({ default: mod.default })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white text-xl">Loading 3D Scene...</div>
    </div>
  ),
});

export function SplineScene() {
  useEffect(() => {
    // Suppress Spline console errors
    const originalError = console.error;
    
    console.error = (...args: any[]) => {
      const errorMessage = args[0]?.toString() || '';
      if (
        errorMessage.includes('Missing property') ||
        errorMessage.includes('buildTimeline') ||
        errorMessage.includes('@splinetool/runtime')
      ) {
        console.warn('Spline animation warning (suppressed):', ...args);
        return;
      }
      originalError.apply(console, args);
    };

    // Hide watermark function
    const hideSplineWatermark = () => {
      const style = document.createElement('style');
      style.textContent = `
        /* Hide Spline watermark */
        [data-spline-watermark],
        .spline-watermark,
        div[style*="position: absolute"][style*="bottom: 16px"][style*="right: 16px"],
        div[style*="position: absolute"][style*="bottom: 10px"][style*="right: 10px"],
        a[href*="spline.design"],
        a[href*="spline"]:not([href*="your-domain"]) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        
        canvas + div:last-child,
        canvas ~ div[style*="position: absolute"][style*="bottom"],
        div:has(> a[href*="spline"]) {
          display: none !important;
        }
      `;
      document.head.appendChild(style);

      const removeWatermark = () => {
        const selectors = [
          '[data-spline-watermark]',
          '.spline-watermark',
          'div[style*="position: absolute"][style*="bottom: 16px"][style*="right: 16px"]',
          'div[style*="position: absolute"][style*="bottom: 10px"][style*="right: 10px"]',
          'a[href*="spline.design"]'
        ];

        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((el: Element) => {
            if (el && 'remove' in el && typeof el.remove === 'function') {
              el.remove();
            }
          });
        });

        // Check for watermark in canvas siblings
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
          const parent = canvas.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children);
            siblings.forEach(sibling => {
              if (sibling !== canvas && 
                  'querySelector' in sibling && 
                  typeof sibling.querySelector === 'function' &&
                  sibling.querySelector('a[href*="spline"]') &&
                  'remove' in sibling &&
                  typeof sibling.remove === 'function') {
                sibling.remove();
              }
            });
          }
        });
      };

      // Run removal multiple times as Spline might re-add it
      removeWatermark();
      setTimeout(removeWatermark, 1000);
      setTimeout(removeWatermark, 3000);
      setTimeout(removeWatermark, 5000);
    };

    // Apply watermark hiding after component mounts
    setTimeout(hideSplineWatermark, 100);

    return () => {
      console.error = originalError;
    };
  }, []);

  const handleSplineLoad = (splineApp: any) => {
    console.log("Spline scene loaded successfully:", splineApp);

    // Enhanced canvas adjustment with watermark removal
    setTimeout(() => {
      try {
        const canvas = document.querySelector("canvas");
        if (canvas) {
          console.log("Canvas found, applying optimizations");
          canvas.style.pointerEvents = "auto";
          
          // Additional watermark removal after load
          setTimeout(() => {
            const watermarkSelectors = [
              '[data-spline-watermark]',
              'a[href*="spline.design"]',
              'div[style*="position: absolute"][style*="bottom"]'
            ];
            
            watermarkSelectors.forEach(selector => {
              const elements = document.querySelectorAll(selector);
              elements.forEach((el: Element) => {
                if ('remove' in el && typeof el.remove === 'function') {
                  el.remove();
                }
              });
            });
          }, 2000);
        }
      } catch (error) {
        console.warn("Canvas optimization failed:", error);
      }
    }, 500);
  };

  const handleSplineError = (error: any) => {
    console.error("Spline loading error:", error);
    
    // You could add fallback behavior here
    // For example, show a static image or alternative content
  };

  return (
    <div className="relative z-20 w-full h-96 md:h-[500px] lg:h-[600px] my-20">
      {/* Container with proper z-index */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-25">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full bg-gray-900 rounded-2xl">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
                  <div className="text-white text-lg">Loading 3D Scene...</div>
                </div>
              </div>
            }
          >
            {/* @ts-ignore - Suppress TypeScript errors for Spline component */}
            <Spline
              scene="https://prod.spline.design/fSSNhwQuRiMmHfXz/scene.splinecode"
              className="w-full h-full"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "1rem", // Match the container's rounded-2xl
              }}
              onLoad={handleSplineLoad}
              onError={handleSplineError}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}