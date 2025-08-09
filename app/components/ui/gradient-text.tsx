import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 2,
  showBorder = false,
}: GradientTextProps) {
  const animationId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      <style>
        {`
          @keyframes ${animationId} {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .gradient-text-${animationId} {
            background: linear-gradient(90deg, ${colors.join(", ")});
            background-size: 300% 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: ${animationId} ${animationSpeed}s linear infinite;
          }
          
          .gradient-border-${animationId} {
            background: linear-gradient(90deg, ${colors.join(", ")});
            background-size: 300% 100%;
            animation: ${animationId} ${animationSpeed}s linear infinite;
          }
        `}
      </style>
      
      <div
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      >
        {showBorder && (
          <div className={`absolute inset-0 bg-cover z-0 pointer-events-none gradient-border-${animationId}`}>
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        )}
        <div className={`inline-block relative z-2 gradient-text-${animationId}`}>
          {children}
        </div>
      </div>
    </>
  );
}