"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string[];
  imageSrc?: string;
  sourceUrl?: string;
  variant?: "dark" | "light";
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  sourceUrl = "#",
  variant = "light",
  featured = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  );
  const [shadowStyle, setShadowStyle] = useState("none");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setTransform(
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      );

      const shadowX = ((x - centerX) / centerX) * -8;
      const shadowY = ((y - centerY) / centerY) * -8;
      setShadowStyle(
        `${shadowX}px ${shadowY}px 30px rgba(0,0,0,${variant === "dark" ? 0.4 : 0.15})`
      );
    },
    [variant]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setShadowStyle("none");
  }, []);

  const isDark = variant === "dark";

  return (
    <div
      className={`${!featured ? "gradient-card p-[2px]" : ""} h-full ${
        featured ? "col-span-full" : ""
      }`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-full rounded-2xl overflow-hidden cursor-pointer"
        style={{
          transform,
          boxShadow: shadowStyle,
          transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
          transformStyle: "preserve-3d",
          background: isDark ? "#11001F" : "#F3F3F7",
        }}
      >
        <div
          className={`pb-20 ${
            featured
              ? "flex flex-col md:flex-row items-center gap-8 p-10 md:p-14 min-h-[420px]"
              : "p-8"
          }`}
        >
          {/* Text content */}
          <div className={featured ? "flex-1" : ""}>
            <h3
              className={`font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              } ${featured ? "text-3xl md:text-4xl" : "text-xl"}`}
            >
              {title}
            </h3>
            {description.map((para, i) => (
              <p
                key={i}
                className={`${
                  featured ? "text-base md:text-lg" : "text-sm"
                } leading-relaxed mb-3 ${
                  isDark ? "text-white/85" : "text-black"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Image (for featured card) */}
          {featured && imageSrc && (
            <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[400px] rounded-xl overflow-hidden mb-5">
              <Image
                src={imageSrc}
                alt={title}
                width={400}
                height={280}
                className="w-full h-auto object-cover rounded-xl opacity-75"
              />
            </div>
          )}
        </div>

        {/* Source code button pinned to bottom-right for all cards */}
        {sourceUrl && (
          <div className="absolute bottom-6 right-6">
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Source code
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8l4 4-4 4" />
                <path d="M8 12h8" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
