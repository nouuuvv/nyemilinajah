"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Crumb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingCrumbs() {
  const [crumbs, setCrumbs] = useState<Crumb[]>([]);

  useEffect(() => {
    // Generate random crumbs
    const newCrumbs = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setCrumbs(newCrumbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {crumbs.map((crumb) => (
        <motion.div
          key={crumb.id}
          className="absolute rounded-full bg-brand-golden/50 blur-[1px]"
          style={{
            width: crumb.size,
            height: crumb.size,
            left: `${crumb.x}%`,
            top: `${crumb.y}%`,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            x: ["0%", "20%", "-20%", "0%"],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: crumb.duration,
            repeat: Infinity,
            delay: crumb.delay,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark pointer-events-none" />
    </div>
  );
}
