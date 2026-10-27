import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 7) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  const fluidEase = [0.83, 0, 0.17, 1];

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Background Stagger Layer */}
      <motion.div
        initial={{ y: 0 }}
        exit={{
          y: "-100%",
          transition: { duration: 1.15, ease: fluidEase, delay: 0.08 }
        }}
        className="absolute inset-0 bg-[#161a22] z-10"
      />

      {/* Main Curtain */}
      <motion.div
        initial={{ y: 0 }}
        exit={{
          y: "-100%",
          transition: { duration: 1.05, ease: fluidEase }
        }}
        className="absolute inset-0 bg-[#0a0c10] text-white flex flex-col items-center justify-between py-12 px-8 overflow-hidden select-none z-20 pointer-events-auto"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-slate-300/10 blur-[140px] rounded-full pointer-events-none" />

        <motion.div
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="w-full flex items-center justify-between text-xs font-mono text-slate-400 tracking-widest uppercase"
        >
          <span>PRAGATI TIWARI</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            INITIALIZING CORE
          </span>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
          className="relative flex flex-col items-center"
        >
          <h1 className="text-7xl sm:text-9xl md:text-[11rem] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_0_50px_rgba(255,255,255,0.35)] font-mono">
            {progress}%
          </h1>

          <div className="w-48 sm:w-72 h-[2px] bg-slate-800 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-slate-400 via-white to-cyan-300 shadow-[0_0_12px_#fff] transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
          className="text-[11px] font-mono tracking-[0.25em] text-slate-500 uppercase"
        >
          {progress < 100 ? "LOADING NEURAL PIPELINES..." : "SYSTEM READY"}
        </motion.div>

        <div className="absolute left-0 right-0 -bottom-[120px] h-[120px] w-full overflow-hidden pointer-events-none fill-[#0a0c10]">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C360,110 1080,110 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}