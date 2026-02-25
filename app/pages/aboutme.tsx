"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Lens } from "@/app/components/ui/lens";
import { Bot } from "lucide-react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
      <h2 className="font-orbitron text-white text-4xl sm:text-5xl md:text-5xl font-bold mb-15 tracking-wide pb-15">
        About Me
      </h2>

      {/* Main layout wrapper */}
      <div
        ref={sectionRef}
        className="relative w-full max-w-[1200px]"
        style={{ minHeight: "580px" }}
      >
        {/* Glow stripe — hidden initially, revealed on card hover */}
        <div
          className="pointer-events-none absolute flex items-end justify-center"
          style={{
            left: "247px",
            right: "0",
            bottom: "-75px",
            height: "70px",
            borderRadius: "0 0 28px 28px",
            background: "linear-gradient(90deg, #7B2FBE, #9B59B6, #7B2FBE)",
            boxShadow: "0 20px 60px -10px rgba(123,47,190,0.8), 0 10px 30px -5px rgba(155,89,182,0.6)",
            zIndex: 1,
            opacity: cardHovered ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="font-inter text-black text-xs font-normal pb-1 tracking-wide">
            Ask anything from my AI assistant <Bot className="inline h-3.5 w-3.5 ml-1" />
          </span>
        </div>

        {/* Wrapper for card + content — lifts up on hover */}
        <div
          onMouseEnter={() => setCardHovered(true)}
          onMouseLeave={() => setCardHovered(false)}
          style={{
            position: "relative",
            transform: cardHovered ? "translateY(-25px)" : "translateY(0)",
            transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            zIndex: 2,
          }}
        >
          {/* Card background with radial gradient */}
          <div
            className="absolute rounded-[28px] shadow-2xl"
            style={{
              top: "-45px",
              left: "247px",
              right: "0",
              bottom: "-80px",
              background: "radial-gradient(120% 120% at 30% 10%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)",
            }}
          />

          {/* Content layer */}
        <div className="relative z-10 flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="flex-shrink-0 pt-10" style={{ width: "380px" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] relative">
              <Lens hovering={hovering} setHovering={setHovering}>
                <Image
                  src="/me.jpg"
                  alt="Harin Dulneth"
                  width={380}
                  height={507}
                  className="object-cover w-full h-full"
                  sizes="380px"
                  priority
                />
              </Lens>
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
                className="group/hello px-8 py-7 sm:px-10 sm:py-8 ml-5 bg-[#0B0C0E] hover:bg-[#3F0D77] transition-colors duration-300 cursor-pointer"
                style={{
                  // background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                  borderRadius: "15px 0 0 15px",
                }}
              >
                <p className="font-inter text-white group-hover/hello:text-black text-lg sm:text-2xl font-md transition-colors duration-300">
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
                className="group/cs pl-15 pr-8 py-7 sm:pl-25 sm:pr-10 sm:py-8 mr-5 bg-[#0B0C0E] hover:bg-[#3F0D77] transition-colors duration-300 cursor-pointer"
                style={{
                  // background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                  borderRadius: "0 15px 15px 0",
                }}
              >
                <p className="font-inter text-white group-hover/cs:text-black text-base sm:text-lg leading-relaxed transition-colors duration-300">
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
              className="group/skills px-8 py-8 sm:px-10 sm:py-9 mx-15 bg-white/10 hover:bg-[#3F0D77] transition-colors duration-300 cursor-pointer"
              style={{
                // background: "linear-gradient(135deg, #E6C9FF, #D2CCFF)",
                borderRadius: "15px",
              }}
            >
              <p className="font-inter text-white group-hover/skills:text-black text-base sm:text-md leading-relaxed mb-4 transition-colors duration-300">
                I&apos;m xperienced in .NET/C# and building RESTful APIs, with
                strong skills in JavaScript/TypeScript, React, and Node.js.
                Proficient in AI/ML workflows using Python, PyTorch/TensorFlow
                and modern LLM ecosystems (Hugging Face, Groq APIs), including
                model integration.
              </p>
              <p className="font-inter text-white group-hover/skills:text-black text-base sm:text-md leading-relaxed transition-colors duration-300">
                I also work with SQL/NoSQL databases (PostgreSQL/Supabase,
                MongoDB), Git/GitHub, Docker, and CI/CD, focused on delivering
                reliable, maintainable solutions while continuously learning.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
