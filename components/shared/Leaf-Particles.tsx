/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { leavesGenerated } from "@/common/data/leafs";

export function LeafParticles() {
  const leaves = useMemo(() => leavesGenerated(25), []);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {leaves.map(({ id, delay, duration, opacity, size, x }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{
            left: `${x}%`,
            width: size,
            height: size,
            opacity,
          }}
          initial={{ y: -100, rotate: 0 }}
          animate={{
            y: windowHeight + 100,
            rotate: 360,
            x: Math.sin(id) * 100,
          }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 302.4 252.72"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              <style>{`.cls-1{fill:#1d7c2a;}.cls-2{fill:#20331c;}`}</style>
            </defs>
            <path
              className="cls-1"
              d="M60.75,55C80.24,244.37,237.28,190.31,237.28,190.31,270.47,29.42,60.75,55,60.75,55Z"
            />
            <path
              className="cls-2"
              d="M109.35,87.32c12.64,5.85,25,12.37,37.05,19.34s23.82,14.5,35.18,22.59c5.64,4.11,11.19,8.34,16.55,12.8s10.56,9.13,15.46,14.1a144.93,144.93,0,0,1,13.58,15.91,79.63,79.63,0,0,1,10.11,18.25,79.81,79.81,0,0,0-10.49-18,144.92,144.92,0,0,0-13.72-15.67q-7.45-7.29-15.5-13.94c-5.36-4.43-10.92-8.62-16.56-12.69-11.27-8.15-23-15.65-35-22.74Q137,102,127.87,97C121.76,93.63,115.61,90.38,109.35,87.32Z"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
