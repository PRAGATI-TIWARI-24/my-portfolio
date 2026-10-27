import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Cpu, BadgeCheck, Sparkles, Terminal, Heart } from 'lucide-react';
import NeuralBackground from './NeuralBackground';

const roles = [
  "AI & ML ENGINEER",
  "DEEP LEARNING SPECIALIST",
  "NEURAL SYSTEM ARCHITECT",
  "FULL STACK DEVELOPER"
];

export default function Hero({ isDark }) {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* 3D Generative Canvas Particles (Interactive Hero Background) */}
      <NeuralBackground isDark={isDark} />

      {/* Ambient Spotlight */}
      <div
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] blur-3xl pointer-events-none rounded-full transition-colors duration-500 ${
          isDark ? "bg-slate-400/10" : "bg-slate-300/40"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 pointer-events-auto">
        {/* ML Status Badge */}
        <div
          className={`mb-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border backdrop-blur-md shadow-xs transition-colors duration-300 ${
            isDark
              ? "bg-slate-800/80 border-slate-700/60 text-slate-300"
              : "bg-white border-slate-300 text-slate-800 shadow-sm"
          }`}
        >
          <Cpu className={`w-3.5 h-3.5 animate-pulse ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
          <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">
            Model Deployment & Architecture
          </span>
        </div>

        {/* Dynamic Animated AI Role Text */}
        <div className="h-20 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={roles[index]}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className={`text-4xl md:text-6xl font-black uppercase tracking-tight ${
                isDark
                  ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400"
                  : "text-slate-900 drop-shadow-sm"
              }`}
            >
              {roles[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* 3D INSTAGRAM FLIP CARD CONTAINER */}
        <div
          className="relative mt-6 w-64 h-84 md:w-76 md:h-96 [perspective:1200px] cursor-pointer group"
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          <motion.div
            className="w-full h-full relative [transform-style:preserve-3d] transition-transform duration-700 rounded-3xl"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* --- FRONT SIDE: INSTA REAL PHOTO CARD --- */}
            <div
              className={`absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl border p-2 flex flex-col justify-between shadow-2xl overflow-hidden ${
                isDark
                  ? "border-slate-700/80 bg-gradient-to-b from-[#1a1e28] to-[#101319]"
                  : "border-slate-300 bg-white shadow-xl"
              }`}
            >
              {/* Instagram Card Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span
                    className={`text-xs font-mono font-bold tracking-tight ${
                      isDark ? "text-slate-200" : "text-slate-900"
                    }`}
                  >
                    pragati_tiwari
                  </span>
                  <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <span className={`text-[10px] font-mono ${isDark ? "text-slate-500" : "text-slate-600"}`}>
                  LIVE
                </span>
              </div>

              {/* Photo View */}
              <div className="relative flex-1 rounded-2xl overflow-hidden my-1 bg-neutral-900">
                <img
                  src="/profile.png"
                  alt="Pragati Tiwari"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>

              {/* Instagram Card Bottom Footer */}
              <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-mono">
                <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                  Core: ML / AI Systems
                </span>
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              </div>
            </div>

            {/* --- BACK SIDE: INSTA AVATAR 3D FLIPPED CARD --- */}
            <div
              className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl border p-3 flex flex-col justify-between shadow-2xl overflow-hidden ${
                isDark
                  ? "border-cyan-500/40 bg-gradient-to-b from-[#121927] to-[#0a0d14]"
                  : "border-cyan-400 bg-slate-900 text-white shadow-2xl"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-2 py-1.5 border-b border-cyan-500/20">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                    AVATAR
                  </span>
                </div>
              </div>

              {/* Center Avatar Display */}
              <div className="relative flex-1 rounded-2xl overflow-hidden my-2 border border-cyan-500/30 flex items-center justify-center bg-radial from-cyan-900/40 via-slate-900 to-black p-2">
                <img
                  src="/avatar.png"
                  alt="Pragati Avatar"
                  onError={(e) => {
                    e.currentTarget.src = "https://api.dicebear.com/7.x/bottts/svg?seed=PragatiAI";
                  }}
                  className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                />
              </div>

              {/* Avatar Metadata / Instagram Bio Spec */}
              <div className="px-2 py-1 font-mono text-left space-y-1">
                <div className="flex items-center justify-between text-[11px] text-cyan-300">
                  <span>@neural_pragati</span>
                  <span className="text-emerald-400 text-[10px]">99.8% ACCURACY</span>
                </div>
                <p className="text-[10px] text-slate-300 line-clamp-2">
                  Autonomous agents, deep neural vision & low-latency P2P pipelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-10 flex items-center space-x-2 text-xs uppercase tracking-widest font-medium ${
            isDark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
          <span>Scroll to explore models & systems</span>
        </div>
      </div>
    </section>
  );
}