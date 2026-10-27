import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Share2, Bot, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "JARVIS AI Assistant",
    badge: "Autonomous Voice & System Agent",
    description: "An intelligent autonomous desktop assistant capable of natural voice execution, automated workflow orchestration, real-time web querying, and zero-terminal interaction.",
    tags: ["LLM Agents", "Python", "Speech Recognition", "Automation", "FastAPI"],
    icon: Bot,
    github: "https://github.com",
    vercel: "https://jarvis-ai.vercel.app",
    cutoutImage: "/projects/jarvis-cutout.png"
  },
  {
    title: "HerBalance",
    badge: "AI & Women's Health",
    description: "An intelligent personalized wellness and cycle-tracking platform integrating data-driven health insights, symptom predictions, and responsive lifestyle recommendations.",
    tags: ["Machine Learning", "Python", "React", "Predictive Analytics"],
    icon: Activity,
    github: "https://github.com",
    vercel: "https://herbalance.vercel.app",
    cutoutImage: "/projects/herbalance-cutout.png"
  },
  {
    title: "ScanDrop",
    badge: "P2P File Transfer System",
    description: "A fast, encrypted peer-to-peer file sharing web application utilizing QR code handshakes and direct WebRTC channels to transfer data seamlessly without central server storage.",
    tags: ["WebRTC", "P2P Protocols", "JavaScript", "Security"],
    icon: Share2,
    github: "https://github.com",
    vercel: "https://scandrop.vercel.app",
    cutoutImage: "/projects/scandrop-cutout.png"
  }
];

export default function Projects({ isDark }) {
  const duplicatedProjects = [...projects, ...projects, ...projects];

  return (
    <section id="projects" className="py-24 overflow-hidden relative">
      <div className="text-center mb-14 px-6 max-w-5xl mx-auto">
        <p className={`text-xs tracking-[0.25em] uppercase mb-2 font-semibold ${
          isDark ? "text-slate-400" : "text-slate-600"
        }`}>
          ENGINEERING LAB & SHOWCASE
        </p>
        <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Featured AI & Systems Projects
        </h2>
        <p className={`text-xs mt-2 font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          [ Hover on any card to pause flow ]
        </p>
      </div>

      <div className="flex select-none relative z-10">
        <motion.div
          className="flex shrink-0 gap-8 pr-8"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          whileHover={{ transition: { duration: 0 } }} 
        >
          {duplicatedProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className={`w-[340px] md:w-[420px] shrink-0 rounded-3xl border p-7 flex flex-col justify-between transition-all duration-500 group shadow-lg relative overflow-hidden ${
                  isDark 
                    ? "border-slate-700/80 bg-[#121620] text-white hover:border-cyan-500/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]" 
                    : "border-slate-300 bg-white text-slate-900 hover:border-slate-400 shadow-md hover:shadow-xl"
                }`}
              >
                {/* 1. DYNAMIC WATERMARK LAYER (Light Mode mein soft, Dark Mode mein punchy) */}
                <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                  <img
                    src={project.cutoutImage}
                    alt={project.title}
                    className={`max-w-full max-h-full object-contain transition-all duration-500 ease-out group-hover:scale-105 ${
                      isDark
                        ? "opacity-65 contrast-125 brightness-100 group-hover:opacity-85"
                        : "opacity-22 contrast-110 brightness-100 grayscale group-hover:opacity-35"
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* 2. PROTECTIVE SHIELD GRADIENT */}
                <div className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
                  isDark
                    ? "bg-gradient-to-t from-[#0e1118]/85 via-[#0e1118]/45 to-[#0e1118]/70"
                    : "bg-gradient-to-t from-white/95 via-white/85 to-white/90"
                }`} />

                {/* 3. FOREGROUND HIGH-CONTRAST CONTENT */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${
                        isDark 
                          ? "bg-slate-900/90 border-slate-700 text-cyan-400 backdrop-blur-md" 
                          : "bg-slate-50 border-slate-200 text-cyan-700 shadow-xs"
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-semibold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full border shadow-xs ${
                        isDark 
                          ? "bg-slate-900/85 border-slate-700 text-slate-200" 
                          : "bg-slate-100 border-slate-300 text-slate-800"
                      }`}>
                        {project.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub Code"
                        className={`p-2 rounded-xl border transition shadow-xs ${
                          isDark 
                            ? "bg-slate-900/85 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800" 
                            : "bg-slate-100 border-slate-300 text-slate-700 hover:text-black hover:bg-slate-200"
                        }`}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                      <a
                        href={project.vercel}
                        target="_blank"
                        rel="noreferrer"
                        title="Live Vercel Demo"
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border text-xs font-semibold transition shadow-xs ${
                          isDark 
                            ? "bg-slate-900/85 border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800" 
                            : "bg-slate-900 border-slate-900 text-white hover:bg-slate-800"
                        }`}
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 1L24 22H0L12 1Z" />
                        </svg>
                        <span>Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-black mb-3 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed mb-6 font-semibold ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* BOTTOM TECH TAGS */}
                <div className={`relative z-10 flex flex-wrap gap-2 pt-4 border-t ${
                  isDark ? "border-slate-700/80" : "border-slate-200"
                }`}>
                  {project.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`text-[11px] font-mono px-2.5 py-1 rounded-md border font-bold shadow-xs backdrop-blur-sm ${
                        isDark 
                          ? "bg-slate-900/85 text-cyan-300 border-slate-700" 
                          : "bg-slate-100 text-slate-800 border-slate-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}