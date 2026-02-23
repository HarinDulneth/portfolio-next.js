"use client";

import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#B8A900" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178C6" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#149ECA" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "#171717" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#E34F26" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572B6" },
      { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776AB" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", color: "#009688" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", color: "#333333" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
      { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", color: "#512BD4" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", color: "#6DB33F" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", color: "#333333" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "#ED8B00" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", color: "#239120" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", color: "#EE4C2C" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", color: "#F7931E" },
      { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", color: "#CF9F00" },
      { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/openai.svg", color: "#0D9488" },
      { name: "Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", color: "#F37626" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", color: "#CC2927" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", color: "#DC382D" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "#1F2328" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "#2496ED" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", color: "#3FCF8E" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", color: "#171717" },
      { name: "MongoDB Atlas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div
      className="flex items-center gap-3 rounded-full border px-5 py-2.5 transition-all duration-300 hover:scale-105 hover:shadow-lg"
      style={{
        borderColor: `${skill.color}40`,
        background: `linear-gradient(135deg, ${skill.color}08, ${skill.color}15)`,
      }}
    >
      <div className="relative h-7 w-7 shrink-0">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          unoptimized
        />
      </div>
      <span
        className="whitespace-nowrap text-base font-semibold"
        style={{ color: skill.color }}
      >
        {skill.name}
      </span>
    </div>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <div className="flex flex-col items-center p-8">
      <h3 className="font-orbitron mb-6 text-xl font-semibold tracking-wider text-black/90">
        {category.title}
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      {/* Title */}
      <div className="relative flex justify-center pt-16 lg:pt-35">
        <h2 className="font-orbitron text-5xl font-semibold text-white">
          Skills
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="mx-auto mt-12 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black bg-white backdrop-blur-sm">
          {/* Row 1: Frontend + Backend */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-r-0 border-black md:border-r">
              <SkillCategoryCard category={skillCategories[0]} />
            </div>
            <div className="border-b border-black">
              <SkillCategoryCard category={skillCategories[1]} />
            </div>
          </div>

          {/* Row 2: AI/ML + Database */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-r-0 border-black md:border-r">
              <SkillCategoryCard category={skillCategories[2]} />
            </div>
            <div className="border-b border-black">
              <SkillCategoryCard category={skillCategories[3]} />
            </div>
          </div>

          {/* Row 3: Other + Cloud */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-r-0 border-black md:border-r">
              <SkillCategoryCard category={skillCategories[4]} />
            </div>
            <div>
              <SkillCategoryCard category={skillCategories[5]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
