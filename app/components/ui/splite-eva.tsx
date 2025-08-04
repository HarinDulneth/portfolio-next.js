"use client";

import { Suspense, lazy, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white text-xl">Loading 3D Scene...</div>
    </div>
  ),
});

export function SplineEva() {
  const splineRef = useRef(null);

  // Suppress Spline console errors
  useEffect(() => {
    const originalError = console.error;
    
    console.error = (...args) => {
      // Filter out known Spline animation errors
      const errorMessage = args[0]?.toString() || '';
      if (
        errorMessage.includes('Missing property') ||
        errorMessage.includes('buildTimeline') ||
        errorMessage.includes('@splinetool/runtime')
      ) {
        // Log as warning instead to avoid console spam
        console.warn('Spline animation warning (suppressed):', ...args);
        return;
      }
      originalError.apply(console, args);
    };

    // Cleanup on unmount
    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <div className="relative z-20 w-full h-96 md:h-[500px] lg:h-[600px] my-20">
      {/* Container with overflow visible */}
      <div
        ref={splineRef}
        className="relative w-full h-full bg-transparent"
        style={{ overflow: "visible" }}
      >
        {/* Spline container that extends beyond parent */}
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
            <Spline
              scene="https://prod.spline.design/MUNJ0oT9RD2OXVSJ/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                overflow: "visible",
                position: "relative",
                zIndex: 30,
              }}
              onLoad={(splineApp) => {
                console.log("Spline scene loaded successfully");

                // Enhanced canvas adjustment with error handling
                setTimeout(() => {
                  try {
                    const canvas = document.querySelector("canvas");
                    if (canvas) {
                      console.log("Canvas found, applying overflow settings");
                      canvas.style.overflow = "visible";
                      
                      // Additional canvas optimizations
                      canvas.style.pointerEvents = "auto";
                      canvas.style.position = "relative";
                    }
                  } catch (error) {
                    console.warn("Canvas adjustment failed:", error);
                  }
                }, 500);

                // Try to access and validate the scene
                try {
                  if (splineApp && typeof splineApp.setZoom === 'function') {
                    // Scene is properly loaded
                    console.log("Spline app methods available");
                  }
                } catch (error) {
                  console.warn("Spline app validation warning:", error);
                }
              }}
              onError={(error) => {
                console.error("Spline loading error:", error);
                
                // You could add fallback behavior here
                // For example, show a static image or alternative content
              }}
              // Add mouse events handling to prevent errors
              onMouseDown={(e) => {
                try {
                  // Handle mouse events safely
                } catch (error) {
                  console.warn("Mouse event error suppressed:", error);
                }
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}