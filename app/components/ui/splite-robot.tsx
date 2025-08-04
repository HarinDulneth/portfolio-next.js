"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-white text-xl">Loading 3D Scene...</div>
    </div>
  ),
});

export function SplineScene() {
  return (
    <div className="relative z-20 w-full h-96 md:h-[500px] lg:h-[600px] my-20">
      {/* Container with proper z-index */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-25">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full bg-gray-900">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
              </div>
            }
          >
            <Spline
              scene="https://prod.spline.design/fSSNhwQuRiMmHfXz/scene.splinecode"
              className="w-full h-full"
              onLoad={(splineApp) => {
                console.log("Spline scene loaded:", splineApp);
              }}
              onError={(error) => {
                console.error("Spline loading error:", error);
              }}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
