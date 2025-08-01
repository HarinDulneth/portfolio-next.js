"use client";
import React, { ReactNode, useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 1,
}: {
  words: ReactNode;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const childrenArray = Array.isArray(words) ? words : [words];
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {React.Children.map(childrenArray, (child, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 dark:text-[#575757] text-black"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {child}
          </motion.span>
        ))}
      </motion.div>
    );
  };  

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
