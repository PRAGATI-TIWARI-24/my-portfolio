import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RoadmapTree from './components/RoadmapTree';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isDark
          ? "bg-[#0d0f13] text-slate-100 selection:bg-slate-200 selection:text-black"
          : "bg-[#f1f5f9] text-slate-900 selection:bg-slate-900 selection:text-white"
      }`}
    >
      {/* 100% Curtain Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* GLOBAL 3D NEURAL CANVAS - Pure page ke piche har jagah chalega */}
      <NeuralBackground isDark={isDark} />

      {/* Minimal Silver Side Borders & Glow Accents */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[1px] z-40 pointer-events-none transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-b from-transparent via-slate-300/35 to-transparent"
            : "bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"
        }`}
      />
      <div className="fixed top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-slate-400/8 via-slate-500/2 to-transparent blur-xl z-30 pointer-events-none" />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[1px] z-40 pointer-events-none transition-colors duration-500 ${
          isDark
            ? "bg-gradient-to-b from-transparent via-slate-300/35 to-transparent"
            : "bg-gradient-to-b from-transparent via-slate-400/50 to-transparent"
        }`}
      />
      <div className="fixed top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-slate-400/8 via-slate-500/2 to-transparent blur-xl z-30 pointer-events-none" />

      {/* Corner Tech Edge Accents */}
      <div className="fixed top-2 left-2 w-3 h-3 border-t border-l border-slate-400/40 z-50 pointer-events-none" />
      <div className="fixed top-2 right-2 w-3 h-3 border-t border-r border-slate-400/40 z-50 pointer-events-none" />

      {/* Portfolio Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: loading ? 0 : 1, scale: loading ? 0.98 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <RoadmapTree isDark={isDark} />
        <TechStack isDark={isDark} />
        <Projects isDark={isDark} />
        <Footer isDark={isDark} />
      </motion.div>
    </div>
  );
}

export default App;