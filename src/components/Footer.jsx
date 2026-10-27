import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import AudioWaveBackground from './AudioWaveBackground';

export default function Footer({ isDark }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- AI CIPHER SCRAMBLE LOGIC ---
  const targetText = "PRAGATI";
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#";
  const [displayText, setDisplayText] = useState(targetText);
  const intervalRef = useRef(null);

  const triggerScramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        targetText
          .split("")
          .map((char, index) => {
            if (index < iteration) return targetText[index];
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("")
      );

      // Decoding complete hone par interval clear karein
      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
      }

      // Decoding speed (number jitna chota hoga, scramble utni der chalega)
      iteration += 1 / 4; 
    }, 35);
  };

  // Component unmount hone par memory leak rokne ke liye cleanup
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <footer className={`relative pt-28 pb-12 overflow-hidden border-t transition-colors duration-500 ${
      isDark 
        ? "border-slate-800/80 bg-gradient-to-b from-[#11141a] via-[#0d0f13] to-[#07080a]" 
        : "border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200"
    }`}>
      {/* Background Audio Wave Engine */}
      <AudioWaveBackground isDark={isDark} />

      {/* Ambient Radial Spotlight */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Top Tagline */}
        <div className={`flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border backdrop-blur-md ${
          isDark 
            ? "border-slate-700/60 bg-slate-800/40 text-slate-300" 
            : "border-slate-300 bg-white/80 text-slate-800 shadow-xs"
        }`}>
          <Terminal className={`w-3.5 h-3.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
          <span className="text-[11px] font-mono tracking-widest uppercase font-semibold">
            Architecting The Future with AI
          </span>
        </div>

        

        {/* AI CIPHER SCRAMBLE EFFECT TEXT */}
        <div className="py-6 select-none cursor-pointer">
          <motion.h1
            onMouseEnter={triggerScramble}
            className={`text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter font-mono ${
              isDark 
                ? "text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-300 to-slate-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "text-slate-900 drop-shadow-[0_0_30px_rgba(0,0,0,0.15)]"
            }`}
            whileHover={{
              scale: 1.02,
              filter: isDark 
                ? "drop-shadow(0px 0px 40px rgba(34, 211, 238, 0.45))" // Cyan glow on hover
                : "drop-shadow(0px 0px 30px rgba(2, 132, 199, 0.35))",
              transition: { duration: 3.5 }
            }}
          >
            {displayText}
          </motion.h1>
        </div>

        {/* Bottom Metadata & Scroll to Top */}
        <div className={`w-full mt-20 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium ${
          isDark ? "border-slate-800/60 text-slate-400" : "border-slate-300 text-slate-700"
        }`}>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>PRAGATI © 2026 • AI / ML PORTFOLIO</span>
          </div>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition cursor-pointer font-semibold ${
              isDark 
                ? "bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700" 
                : "bg-white border-slate-300 text-slate-800 hover:text-black hover:bg-slate-100 shadow-xs"
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}