"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

interface CVButtonProps {
  href?: string;
  download?: string;
}

export const CVButton = ({
  href = "/cv.pdf",
  download = "Harin_Dulneth_CV.pdf",
}: CVButtonProps) => {
  return (
    <motion.a
      href={href}
      download={download}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="group relative flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B2FBE]/10 to-[#9B59B6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Inner Glow Border */}
      <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-50" />

      <Download className="w-4 h-4 text-[#F3E5FC]/70 group-hover:text-white transition-colors duration-300" />
      <span className="text-[#F3E5FC]/80 font-zendots text-s tracking-wider group-hover:text-white transition-colors duration-300">
        Download my CV
      </span>

      {/* Hover Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
};
