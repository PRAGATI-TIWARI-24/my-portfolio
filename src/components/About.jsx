import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network } from 'lucide-react';

export default function About({ isDark }) {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`relative rounded-3xl border backdrop-blur-xl p-8 md:p-12 transition-colors duration-500 shadow-xl ${
          isDark 
            ? "border-slate-700/50 bg-gradient-to-b from-slate-800/60 to-slate-900/60 text-white" 
            : "border-slate-200 bg-white/90 text-slate-900 shadow-md"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex flex-col items-center">
            <div className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden border shadow-lg ${
              isDark ? "border-slate-600/50" : "border-slate-300"
            }`}>
              <img 
                src="/profile.png" 
                alt="Pragati" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500"
              />
            </div>
            <div className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-medium tracking-wide ${
              isDark 
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                : "bg-emerald-50 border-emerald-300 text-emerald-700"
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              STATUS: READY TO DEPLOY
            </div>
          </div>

          <div className="flex-1 space-y-5 text-center md:text-left">
            <div className={`inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase font-semibold ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              <Brain className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
              <span>Intelligent Systems & Neural Engineering</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Hello, I'm <span className={isDark ? "text-slate-300" : "text-cyan-700"}>Pragati Tiwari</span>
            </h2>

            <p className={`text-sm md:text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-700 font-medium"
            }`}>
              Aspiring AI & Machine Learning Engineer focused on architecting intelligent models, mathematical optimization, and robust distributed systems. I specialize in bridging research-grade ML algorithms with high-performance web and P2P architectures.
            </p>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
              <div className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs shadow-xs font-medium ${
                isDark 
                  ? "bg-slate-800/80 border-slate-700/70 text-slate-200" 
                  : "bg-slate-100 border-slate-300 text-slate-800"
              }`}>
                <Network className={`w-4 h-4 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
                <span>Deep Learning & ML Pipelines</span>
              </div>
              <div className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs shadow-xs font-medium ${
                isDark 
                  ? "bg-slate-800/80 border-slate-700/70 text-slate-200" 
                  : "bg-slate-100 border-slate-300 text-slate-800"
              }`}>
                <Cpu className={`w-4 h-4 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} />
                <span>Edge & Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}