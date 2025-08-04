"use client";

import React, { Suspense, useRef, useEffect } from "react";
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

export function SplineEva() {
  const splineRef = useRef<HTMLDivElement>(null);

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

      removeWatermark();
      setTimeout(removeWatermark, 1000);
      setTimeout(removeWatermark, 3000);
      setTimeout(removeWatermark, 5000);
    };

    setTimeout(hideSplineWatermark, 100);

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <div className="relative z-20 w-full h-96 md:h-[500px] lg:h-[600px] my-20">
      <div
        ref={splineRef}
        className="relative w-full h-full bg-transparent"
        style={{ overflow: "visible" }}
      >
        <div
          className="absolute inset-0 z-25 lg:w-[200%] lg:-left-[25%]"
          style={{ overflow: "visible" }}
        >
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full bg-gray-900">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
              </div>
            }
          >
            {/* @ts-ignore - Suppress TypeScript errors for Spline component */}
            <Spline
              scene="https://prod.spline.design/MUNJ0oT9RD2OXVSJ/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                overflow: "visible",
                position: "relative",
                zIndex: 30,
              }}
              onLoad={(splineApp: any) => {
                console.log("Spline scene loaded successfully");

                setTimeout(() => {
                  try {
                    const canvas = document.querySelector("canvas");
                    if (canvas) {
                      console.log("Canvas found, applying settings");
                      canvas.style.overflow = "visible";
                      canvas.style.pointerEvents = "auto";
                      canvas.style.position = "relative";

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
                    console.warn("Canvas adjustment failed:", error);
                  }
                }, 500);
              }}
              onError={(error: any) => {
                console.error("Spline loading error:", error);
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}