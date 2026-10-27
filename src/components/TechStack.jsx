import React from 'react';
import { motion } from 'framer-motion';

const row1 = [
  "Python", "PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI",
  "React.js", "WebRTC", "Git & GitHub", "Supabase", "Pandas"
];

const row2 = [
  "Machine Learning", "Deep Learning", "NumPy", "Tailwind CSS",
  "P2P Networks", "Flask", "REST APIs", "Computer Vision", "Vercel", "SQL"
];

export default function TechStack({ isDark }) {
  return (
    <section id="skills" className="py-20 overflow-hidden relative">
      <div className="text-center mb-10 px-4">
        <p className={`text-xs tracking-[0.25em] uppercase mb-2 font-semibold ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          EXPERTISE & TOOLING
        </p>
        <h3 className={`text-3xl md:text-4xl font-black tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Technologies & Frameworks
        </h3>
      </div>

      {/* Row 1 */}
      <div className="flex overflow-hidden mb-4 select-none">
        <motion.div
          className="flex shrink-0 gap-4 pr-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 22, repeat: Infinity }}
        >
          {[...row1, ...row1].map((tech, i) => (
            <div
              key={i}
              className={`px-6 py-3 rounded-2xl border text-xs md:text-sm font-semibold tracking-wide transition-colors shadow-sm whitespace-nowrap cursor-default ${
                isDark 
                  ? "bg-[#12141a]/90 border-slate-700/60 text-slate-200 hover:border-slate-400" 
                  : "bg-white border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm"
              }`}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          className="flex shrink-0 gap-4 pr-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 26, repeat: Infinity }}
        >
          {[...row2, ...row2].map((tech, i) => (
            <div
              key={i}
              className={`px-6 py-3 rounded-2xl border text-xs md:text-sm font-semibold tracking-wide transition-colors shadow-sm whitespace-nowrap cursor-default ${
                isDark 
                  ? "bg-[#12141a]/90 border-slate-700/60 text-slate-200 hover:border-slate-400" 
                  : "bg-white border-slate-300 text-slate-800 hover:border-slate-400 shadow-sm"
              }`}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}