"use client";

import React, { useRef, useState, useCallback } from "react";
import { useInView } from "framer-motion";
import { Timeline } from "../components/ui/timeline";
import { TextScramble } from "../components/ui/text-scramble";

import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  institution: string;
  subtitle: string;
  logoImg: string;
  bgImg: string;
}

const ExperienceCard = ({ title, institution, subtitle, logoImg, bgImg }: ExperienceCardProps) => {
  return (
    <div className="gradient-card p-[2px] h-[350px] md:h-[450px] w-full mb-10 md:mb-0 group/card relative rounded-2xl">
      <div 
        className="relative h-full w-full rounded-2xl overflow-hidden group-hover/card:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        style={{ background: "#111111" }}
      >
        {/* Background Image */}
        <Image 
          src={bgImg} 
          alt={institution} 
          fill 
          className="object-cover transition-transform duration-500 group-hover/card:scale-105 opacity-80" 
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover/card:bg-black/20" />

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10 overflow-hidden">
          {/* Top Badge */}
          <div className="self-start">
            <span className="bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs md:text-sm text-white/90 font-medium tracking-wide border border-white/10">
              {title}
            </span>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col gap-4 transform transition-transform duration-300">
            {/* Logo */}
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image 
                src={logoImg} 
                alt={`${institution} logo`} 
                fill 
                className="object-contain" 
              />
            </div>
            
            {/* Text */}
            <div>
              <h3 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl mb-2">
                {institution}
              </h3>
              <div className="flex items-center gap-2 group-hover/card:gap-3 transition-all duration-300">
                <p className="text-sm md:text-lg font-medium text-white/90">
                  {subtitle}
                </p>
                <span className="text-white/90 text-sm md:text-base opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform -translate-x-2 group-hover/card:translate-x-0">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Experience() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { amount: 0.5 });

  const data = [
    {
      title: "2008 - 2022",
      content: (
        <ExperienceCard 
          title="Grade 01 - A/Ls" 
          institution="Isipathana College"
          subtitle="Colombo 05"
          logoImg="/image copy 2.png"
          bgImg="/image copy 4.png"
        />
      ),
    },
    {
      title: "2023 - Present",
      content: (
        <ExperienceCard 
          title="Bsc. in Computer Science (Hons)" 
          institution="University of Kelaniya"
          subtitle="Sri Lanka"
          logoImg="/image copy.png"
          bgImg="/image copy 3.png"
        />
      ),
    },
  ];

  return (
    <section data-theme="light" className="min-h-screen py-20 pb-3 px-4 sm:px-6 lg:px-8 md:py-40 md:pb-5 bg-white">
      {/* Title */}
      <div ref={headingRef} className="flex justify-center mb-15">
        <TextScramble 
          as="h2" 
          className="font-orbitron text-4xl md:text-5xl font-semibold text-black" 
          trigger={isInView}
        >
          Experience
        </TextScramble>
      </div>

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </section>
  );
}
