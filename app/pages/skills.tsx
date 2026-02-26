"use client";

import Image from "next/image";
import { useAnimate, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import { MatrixText } from '../components/ui/matrix-text';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    ],
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg" },
      { name: "Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    ],
  },
];

// Clip-path animation constants
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

function SkillBadge({ skill, large = false }: { skill: Skill; large?: boolean }) {
  return (
    <Image
      src={skill.icon}
      alt={skill.name}
      width={large ? 56 : 40}
      height={large ? 56 : 40}
      className={`object-contain ${large ? "h-14 w-14" : "h-10 w-10"}`}
      unoptimized
    />
  );
}

function SkillCell({
  skill,
  large,
  borderClasses,
}: {
  skill: Skill;
  large: boolean;
  borderClasses: string;
}) {
  const [scope, animate] = useAnimate();

  const getNearestSide = useCallback((e: React.MouseEvent) => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const proximities = [
      { proximity: Math.abs(box.left - e.clientX), side: "left" },
      { proximity: Math.abs(box.right - e.clientX), side: "right" },
      { proximity: Math.abs(box.top - e.clientY), side: "top" },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
    ];
    proximities.sort((a, b) => a.proximity - b.proximity);
    return proximities[0].side;
  }, []);

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <div
      className={`relative flex-1 bg-[#f4f5fb] ${borderClasses}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={
          "flex w-full items-center justify-center " +
          (large ? "h-24 md:h-28 lg:h-32" : "h-16 md:h-20 lg:h-24")
        }
      >
        <SkillBadge skill={skill} large={large} />
      </div>

      {/* Clip-path overlay */}
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 flex items-center justify-center bg-black"
      >
        <span className="text-sm font-semibold text-white text-center md:text-base">
          {skill.name}
        </span>
      </div>
    </div>
  );
}

function BrickWall({
  skills,
  pattern,
  largeIcons = false,
}: {
  skills: Skill[];
  pattern: number[];
  largeIcons?: boolean;
}) {
  let idx = 0;
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-[#f4f5fb]">
      {pattern.map((count, rowIdx) => (
        <div key={rowIdx} className="flex">
          {Array.from({ length: count }).map((_, i) => {
            const skill = skills[idx];
            idx++;
            if (!skill) return null;
            const borderClasses =
              (i > 0 ? " border-l border-black/10" : "") +
              (rowIdx > 0 ? " border-t border-black/10" : "");
            return (
              <SkillCell
                key={i}
                skill={skill}
                large={largeIcons}
                borderClasses={borderClasses}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const allSkills = skillCategories
    .flatMap((c) => c.skills)
    .filter(
      (skill) =>
        skill.name !== "AWS"
    );

  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { amount: 0.5 })

  return (
    <section className="w-full bg-skills-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef}>
          <MatrixText text="Tech Stack" className="font-orbitron mb-8 text-center font-skill-title text-4xl font-semibold text-skills-title md:text-5xl" trigger={isInView} />
        </div>

        <div className="w-full">
          <div className="flex flex-col rounded-3xl bg-skills-card py-10 md:py-12 lg:py-14 px-3 sm:px-4 md:px-6 lg:px-8 shadow-skill-card min-h-[480px]">
            <BrickWall
              skills={allSkills}
              pattern={[5, 7, 6, 5, 6]}
              largeIcons
            />
          </div>
        </div>
      </div>
    </section>
  );
}
