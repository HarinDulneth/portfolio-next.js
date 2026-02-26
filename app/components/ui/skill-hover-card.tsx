"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillHoverCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function SkillHoverCard({
  title,
  description,
  image,
  className,
}: SkillHoverCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = !shouldReduceMotion;

  const containerVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: shouldAnimate
      ? {
          scale: 1.02,
          y: -4,
          transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 28,
            mass: 0.6,
          },
        }
      : {},
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.08 },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.95,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      data-slot="skill-hover-card"
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "relative w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-black/10 cursor-pointer group",
        "dark:shadow-black/30",
        className
      )}
    >
      {/* Full Cover Image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        variants={imageVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Blur Overlay - Multiple layers for smooth fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-black/20 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 via-black/60 via-black/30 via-black/15 via-black/8 to-transparent backdrop-blur-[1px]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent backdrop-blur-sm" />

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 right-0 p-5 space-y-2"
      >
        {/* Title */}
        <motion.div variants={itemVariants}>
          <motion.h3
            className="text-lg font-bold text-white"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.02,
                },
              },
            }}
          >
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h3>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-300 text-sm leading-relaxed"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
