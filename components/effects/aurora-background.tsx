"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Top Left */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl"
      />

      {/* Bottom Right */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-violet-500/20 blur-3xl"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
      />
    </div>
  );
}