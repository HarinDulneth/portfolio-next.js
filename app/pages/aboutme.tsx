"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Lens } from "@/app/components/ui/lens";
import { Bot } from "lucide-react";
import InteractiveShader from "@/app/components/ui/crystal-shader";
import { SkillHoverCard } from "@/app/components/ui/skill-hover-card";

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
          {/* Card background — flat color base */}
          <div
            className="absolute rounded-[28px] shadow-2xl"
            style={{
              top: "-45px",
              left: "247px",
              right: "0",
              bottom: "-75px",
              background: "#171717",
            }}
          />
          {/* Radial gradient overlay — fades in on hover */}
          <div
            className="absolute rounded-[28px]"
            style={{
              top: "-45px",
              left: "247px",
              right: "0",
              bottom: "-80px",
              background: "radial-gradient(120% 120% at 30% 10%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)",
              opacity: cardHovered ? 1 : 0,
              transition: "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
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
                className="group/hello relative overflow-hidden px-8 py-7 sm:px-10 sm:py-8 ml-5 bg-black hover:bg-[#3F0D77] transition-colors duration-300 cursor-pointer"
                style={{
                  borderRadius: "15px 0 0 15px",
                }}
              >
                <InteractiveShader
                  cellDensity={1.5}
                  animationSpeed={0.15}
                  warpFactor={0.4}
                  mouseInfluence={0.1}
                  brightness={0.25}
                  className="rounded-[15px_0_0_15px]"
                />
                <p className="relative z-10 font-inter text-white/85 text-lg sm:text-2xl font-md">
                  <span className="text-[#9100FF]/85">Hello</span> There!
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
                className="group/cs relative overflow-hidden pl-15 pr-8 py-7 sm:pl-25 sm:pr-10 sm:py-8 mr-5 bg-black hover:bg-[#3F0D77] transition-colors duration-300 cursor-pointer"
                style={{
                  borderRadius: "0 15px 15px 0",
                }}
              >
                <InteractiveShader
                  cellDensity={2}
                  animationSpeed={0.15}
                  warpFactor={0.4}
                  mouseInfluence={0.1}
                  brightness={0.25}
                  className="rounded-[0_15px_15px_0]"
                />
                <p className="relative z-10 font-inter text-white/85 text-base sm:text-lg">
                  I am a <span className="text-[#9100FF]/85">Computer Science</span> undergraduate with a solid foundation
                  in full-stack development and a strong interest in <span className="text-[#9100FF]/85">AI
                  developments</span> and applied Machine Learning.
                </p>
              </div>
            </div>

            {/* Skills cards — 3 horizontal, hover-card style */}
            <div className="grid grid-cols-3 gap-4 mx-8 h-72 mt-4">
              <SkillHoverCard
                title="AI / ML & LLM"
                description="Proficient in AI/ML workflows using Python, PyTorch & modern LLM ecosystems"
                image="/ai.png"
              />
              <SkillHoverCard
                title=".NET & REST APIs"
                description="Experienced in .NET/C# and building RESTful APIs with strong backend skills"
                image="/rest.jpg"
              />
              <SkillHoverCard
                title="Git & DevOps"
                description="Git/GitHub, Docker, and CI/CD focused on delivering reliable solutions"
                image="/git.png"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
