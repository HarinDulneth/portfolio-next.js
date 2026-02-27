"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";
import InteractiveShader from "@/app/components/ui/crystal-shader";

interface SkillHoverCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

export function SkillHoverCard({
  title,
  description,
  icon,
  className,
}: SkillHoverCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 p-6 rounded-2xl bg-[#0A0A0A] overflow-hidden transition-all duration-300 group",
        className
      )}
    >
      {/* Crystal shader background */}
      {/* <InteractiveShader
        cellDensity={1.5}
        animationSpeed={0.15}
        warpFactor={0.4}
        mouseInfluence={0.1}
        brightness={0.25}
        className="rounded-2xl"
      /> */}

      {/* Icon container */}
      <div className="relative z-10 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#9100FF]/20 group-hover:text-[#9100FF] transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-white font-bold text-lg leading-tight group-hover:text-[#9100FF]">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-white/50 text-sm leading-relaxed group-hover:text-white/85 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
}
