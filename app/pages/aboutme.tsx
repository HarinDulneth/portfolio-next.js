"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black py-16 px-4 sm:px-8">
      {/* Heading */}
      <h2 className="font-orbitron text-white text-4xl sm:text-5xl md:text-5xl font-bold mb-12 tracking-wide pb-15">
        About Me
      </h2>

      {/* Main layout wrapper */}
      <div
        ref={sectionRef}
        className="relative w-full max-w-[1200px]"
        style={{ minHeight: "580px" }}
      >
        {/* White card background - only 1/4 of image overlaps */}
        <div
          className="absolute bg-white rounded-2xl shadow-2xl"
          style={{
            top: "-45px",
            left: "247px",
            right: "0",
            bottom: "-60px",
          }}
        />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="flex-shrink-0 pt-10" style={{ width: "380px" }}>
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-[3/4] relative">
              <Image
                src="/me.jpg"
                alt="Harin Dulneth"
                fill
                className="object-cover"
                sizes="380px"
                priority
              />
            </div>
          </div>

          {/* Right: Content stripes */}
          <div className="flex flex-col flex-1 mt-5 gap-5 overflow-hidden">
            {/* 
              Hello There stripe:
              - GAP on LEFT (from image) → ml-6
              - NO GAP on RIGHT (flush to white bg edge) → no mr
              - Rounded LEFT borders only
              - Slides right → left
            */}
            <div
              className="ml-10"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(100%)",
                opacity: isVisible ? 1 : 0,
                transition:
                  "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease",
              }}
            >
              <div
                className="px-8 py-7 sm:px-10 sm:py-8 ml-5"
                style={{
                  background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                  borderRadius: "10px 0 0 10px",
                }}
              >
                <p className="font-inter text-black text-xl sm:text-2xl font-md">
                  Hello There!
                </p>
              </div>
            </div>

            {/* 
              CS undergraduate stripe:
              - NO GAP on LEFT (touches image edge) → no ml
              - GAP on RIGHT (from white bg edge) → mr-6
              - Rounded RIGHT borders only
              - Slides left → right
            */}
            <div
              className="mr-10"
              style={{
                transform: isVisible ? "translateX(0)" : "translateX(-100%)",
                opacity: isVisible ? 1 : 0,
                transition:
                  "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s, opacity 0.8s ease 0.2s",
              }}
            >
              <div
                className="pl-15 pr-8 py-8 sm:pl-25 sm:pr-10 sm:py-9 mr-5"
                style={{
                  background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <p className="font-inter text-black text-base sm:text-lg leading-relaxed">
                  I am a Computer Science undergraduate with a solid foundation
                  in full-stack development and a strong interest in AI
                  developments and applied ML.
                </p>
              </div>
            </div>

            {/* 
              Skills detail card:
              - GAP on LEFT → ml-6
              - GAP on RIGHT → mr-6
              - All borders rounded
            */}
            <div
              className="px-8 py-8 sm:px-10 sm:py-9 mx-15"
              style={{
                background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                borderRadius: "10px",
              }}
            >
              <p className="font-inter text-black text-base sm:text-lg leading-relaxed mb-4">
                I&apos;m xperienced in .NET/C# and building RESTful APIs, with
                strong skills in JavaScript/TypeScript, React, and Node.js.
                Proficient in AI/ML workflows using Python, PyTorch/TensorFlow
                and modern LLM ecosystems (Hugging Face, Groq APIs), including
                model integration.
              </p>
              <p className="font-inter text-black text-base sm:text-lg leading-relaxed">
                I also work with SQL/NoSQL databases (PostgreSQL/Supabase,
                MongoDB), Git/GitHub, Docker, and CI/CD, focused on delivering
                reliable, maintainable solutions while continuously learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
