"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import ProjectCard from "../components/ui/project-card";
import { TextScramble } from "../components/ui/text-scramble";

const sampleDescription1 = [
  "The Bus Tracking System is a responsive web app that helps commuters see live bus locations, routes, and ETA information in a clear, map‑based interface. It aims to reduce uncertainty around arrival times and make daily travel planning smoother on both desktop and mobile.",
  "Built with reusable components and clean, scalable code, the project focuses on real‑time data handling, performance, and a straightforward user experience. It demonstrates my ability to create practical, data‑driven interfaces that are reliable, easy to use, and ready for future enhancements",
];

const sampleDescription2 = [
  "This portfolio is a modern, interactive web app built to present my skills, projects, and background in a clean, focused way. It features smooth transitions, responsive layouts, and a visually distinct tech‑stack and projects section that work well on both desktop and mobile.",
  "The site is engineered with reusable components, a consistent design system, and attention to performance and accessibility. Custom UI elements-like the animated backgrounds, interactive skill grid, and 3D‑style project cards - demonstrate my ability to ship polished, production‑ready front‑end experiences.",
];

const sampleDescription3 = [
  "AcademiTrend is a Flask-based API that predicts university course enrollments and academic pathway trends, returning clean, structured JSON for use in dashboards and client apps. It focuses on helping institutions understand future demand across faculties and programs through simple, well-documented endpoints.",
  "The API combines classic machine learning and time-series models (e.g., regression, ensembles, and forecasting methods) to generate reliable predictions and trend summaries. Its modular design, clear API contracts, and reproducible model pipeline highlight my ability to build practical, production-ready data services.",
];

const sampleDescription4 = [
  "CodeMart is a modern e‑commerce web app designed to make discovering and purchasing products fast, intuitive, and visually engaging. It provides a clean, responsive interface with featured products, clear categories, and a guided “How it works” section that walks users through browsing, adding items to the cart, and completing their order. The experience is optimized for both desktop and mobile, so users can shop comfortably on any device.",
  "The project combines thoughtful UX with solid front‑end engineering, using reusable components, consistent styling, and a scalable layout system. Emphasis on performance, clean code, and modular CSS makes CodeMart a strong example of my ability to build polished, production‑ready user interfaces.",
];

const sampleDescription5 = [
  "Nexus is a collaborative canvas web app built for brainstorming, diagramming, and visual note‑taking in one place. It helps users sketch flows, map system architecture, and organize ideas on an infinite canvas, wrapped in a clean, responsive interface. GitHub sign‑in keeps onboarding simple while making the workspace feel personal and secure.",
  "Built with Next.js, React, and Tailwind, Nexus focuses on a polished UX with reusable components and consistent styling. It also integrates modern canvas/diagram tooling to keep interactions smooth and fast, even as boards grow in complexity. Overall, the project showcases my ability to combine authentication, UI engineering, and interactive front‑end features into a production‑ready experience.",
];

const projects = [
  {
    title: "Trowd - Real Time Transit Intelligence Platform",
    description: sampleDescription1,
    imageSrc: "/trowd.png",
    sourceUrl: "https://github.com/Crowd-Based-Bus-Tracking-System",
    variant: "dark" as const,
    featured: true,
  },
  {
    title: "Portfolio Website With AI Assistant",
    description: sampleDescription2,
    sourceUrl: "https://github.com/HarinDulneth/portfolio-next.js.git",
    variant: "light" as const,
    featured: false,
  },
  {
    title: "AcademiTrend - Academic Analytics & Career Prediction Platform",
    description: sampleDescription3,
    sourceUrl: "https://github.com/HarinDulneth/Acedemi-Trend-API.git",
    variant: "light" as const,
    featured: false,
  },
  {
    title: "CodeMart - Digital Project Marketplace",
    description: sampleDescription4,
    sourceUrl: "https://github.com/HarinDulneth/CodeMart.git",
    variant: "light" as const,
    featured: false,
  },
  {
    title: "Nexus - Project Mangement System",
    description: sampleDescription5,
    sourceUrl: "https://github.com/Nexus-PM-System",
    variant: "light" as const,
    featured: false,
  },
];

export default function Projects() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { amount: 0.5 })

  return (
    <div className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div ref={headingRef} className="flex justify-center mb-12">
        <TextScramble as="h2" className="font-orbitron text-4xl md:text-5xl font-semibold text-black" trigger={isInView}>Projects</TextScramble>
      </div>

      {/* Projects container */}
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Featured project */}
        <ProjectCard
          title={projects[0].title}
          description={projects[0].description}
          imageSrc={projects[0].imageSrc}
          sourceUrl={projects[0].sourceUrl}
          variant={projects[0].variant}
          featured={projects[0].featured}
        />

        {/* Two-column row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1, 3).map((project, i) => (
            <ProjectCard
              key={`row1-${i}`}
              title={project.title}
              description={project.description}
              sourceUrl={project.sourceUrl}
              variant={project.variant}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Four-column grid (2x2) — visible on scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(3, 7).map((project, i) => (
            <ProjectCard
              key={`row2-${i}`}
              title={project.title}
              description={project.description}
              sourceUrl={project.sourceUrl}
              variant={project.variant}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
