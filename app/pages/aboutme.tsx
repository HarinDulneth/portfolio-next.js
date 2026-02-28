"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Lens } from "@/app/components/ui/lens";
import { Bot, BrainCircuit, Server, GitBranch } from "lucide-react";
import InteractiveShader from "@/app/components/ui/crystal-shader";
import { SkillHoverCard } from "@/app/components/ui/skill-hover-card";
import { TextScramble } from "@/app/components/ui/text-scramble";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cardHovered, setCardHovered] = useState(false);
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { amount: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black py-16 px-4 sm:px-8">
      {/* Heading */}
      <div ref={headingRef}>
        <TextScramble
          as="h2"
          className="font-orbitron text-white text-4xl sm:text-5xl md:text-5xl font-bold mb-15 tracking-wide pb-15"
          trigger={isHeadingInView}
        >
          About Me
        </TextScramble>
      </div>

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
            boxShadow:
              "0 20px 60px -10px rgba(123,47,190,0.8), 0 10px 30px -5px rgba(155,89,182,0.6)",
            zIndex: 1,
            opacity: cardHovered ? 1 : 0,
            transition: "opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <span className="font-inter text-black text-xs font-normal pb-1 tracking-wide">
            Ask anything from my AI assistant{" "}
            <Bot className="inline h-3.5 w-3.5 ml-1" />
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
              bottom: "-70px",
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
              background:
                "radial-gradient(120% 120% at 30% 10%, #1a1a1a 0%, #0f0f10 60%, #0b0b0c 100%)",
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

            {/* Right: Single intro box — Hello There + line + I'm a ... */}
            <div className="flex flex-col flex-1 mt-5 gap-5">
              <div
                className="mx-10"
                style={{
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transition:
                    "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease",
                }}
              >
                <div className="gradient-card p-[2px] rounded-2xl">
                  <div className="group/intro relative overflow-hidden bg-[#0A0A0A] px-8 py-7 sm:px-10 sm:py-8 transition-colors duration-300 rounded-2xl">
                    <p className="relative z-10 font-inter text-white/85 text-lg sm:text-2xl font-medium">
                      Hello There!
                    </p>
                    <div className="relative z-10 mt-4 mb-5 -mx-8 w-[calc(100%+4rem)] sm:-mx-10 sm:w-[calc(100%+5rem)]">
                      <div className="h-px bg-white/10 transition-colors duration-300" />
                    </div>
                    <p className="relative z-10 font-inter text-white/75 text-base sm:text-lg leading-relaxed">
                      I'm Harin Dulneth, a Computer Science undergraduate with a
                      strong interest in AI developments and applied Machine
                      Learning and a solid foundation in full-stack development.
                      I truly enjoy teamwork - collaborating to solve complex
                      problems and build innovative solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills cards — 3 horizontal */}
              <div className="grid grid-cols-3 gap-4 mx-8 mt-4">
                <SkillHoverCard
                  title="AI / ML & LLM"
                  description="Familiar with AI/ML workflows using Python, PyTorch/TensorFlow, and LLM ecosystems (Hugging Face and Groq APIs), including model integration."
                  icon={<BrainCircuit className="w-5 h-5" />}
                />
                <SkillHoverCard
                  title=".NET & REST APIs"
                  description="Experienced with .NET/C# and building RESTful APIs, alongside JavaScript/TypeScript, React, and Node.js for full-stack development."
                  icon={<Server className="w-5 h-5" />}
                />
                <SkillHoverCard
                  title="Git & DevOps"
                  description="Proficient with Git/GitHub, Docker, and CI/CD pipelines. Comfortable with SQL/NoSQL databases including Supabase and MongoDB."
                  icon={<GitBranch className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
