import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, Cpu, Code2, Sparkles, ChevronRight } from 'lucide-react';

const treeData = [
  {
    id: "college",
    year: "2024 - Present",
    category: "Education",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Pranveer Singh Institute of Technology, Kanpur",
    icon: GraduationCap,
    summary: "Building strong computer science foundations, algorithms, data structures, and database management systems.",
    highlights: [
      "Core focus on Systems Engineering, Distributed Computing & DBMS",
      "Competitive problem solving & algorithm design"
    ]
  },
  {
    id: "ai-journey",
    year: "2025",
    category: "Specialization",
    title: "AI & Machine Learning Foundations",
    institution: "Autonomous Research & Model Training",
    icon: Cpu,
    summary: "Deep dive into statistical learning, neural networks, PyTorch, and deploying custom inference pipelines.",
    highlights: [
      "Built predictive health analytics engine with HerBalance",
      "Model optimization, data cleaning, and REST API endpoints via FastAPI"
    ]
  },
  {
    id: "p2p-systems",
    year: "2026",
    category: "Distributed Systems",
    title: "P2P Protocols & Real-Time Engineering",
    institution: "ScanDrop Architecture",
    icon: Code2,
    summary: "Engineered serverless peer-to-peer file transfer system using WebSockets for signaling and direct WebRTC channels.",
    highlights: [
      "Zero central cloud storage for end-to-end data security",
      "Integrated seamless QR-code device pairing"
    ]
  },
  {
    id: "hackathons",
    year: "2026",
    category: "Competitions & Challenges",
    title: "National Hackathons & ML Challenges",
    institution: "TCS CodeVita, Amazon ML Challenge & Nerds Hack Days",
    icon: Award,
    summary: "Active participation in high-stakes engineering hackathons, solving algorithmic speed puzzles and sustainability tasks.",
    highlights: [
      "TCS CodeVita Season 14 participant",
      "Amazon ML Challenge problem solver on Unstop",
      "Energy tech innovation at Yuva Yodha Hackathon"
    ]
  }
];

export default function RoadmapTree({ isDark }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Background auto-cycle (pauses when hovering anywhere over the section)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % treeData.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isHovered]);

  const selectedNode = treeData[currentIndex];

  return (
    <section 
      id="roadmap" 
      className="py-24 px-6 max-w-6xl mx-auto relative select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center mb-16">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono uppercase tracking-widest mb-3 ${
          isDark ? "bg-slate-800/80 border-slate-700/60 text-slate-300" : "bg-white border-slate-300 text-slate-800 shadow-sm"
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isDark ? "text-cyan-400" : "text-cyan-600"}`} />
          <span>Interactive Career & Learning Tree</span>
        </div>
        
        <h2 className={`text-3xl md:text-5xl font-black tracking-tight ${
          isDark ? "text-white" : "text-slate-900"
        }`}>
          Execution Roadmap & Milestones
        </h2>
      </div>

      {/* TREE & DETAIL LAYOUT */}
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* LEFT: INTERACTIVE STEM */}
        <div className="md:col-span-7 relative pl-6 border-l-2 border-slate-700/40">
          <div className="space-y-6">
            {treeData.map((node, index) => {
              const Icon = node.icon;
              const isSelected = currentIndex === index;

              return (
                <motion.div
                  key={node.id}
                  /* CLICK KI ZAROORAT NAHI: HOVER KARTE HI INSTANT SWITCH */
                  onMouseEnter={() => setCurrentIndex(index)}
                  whileHover={{ x: 6 }}
                  className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? isDark
                        ? "border-cyan-400/80 bg-gradient-to-r from-cyan-950/30 to-slate-800/80 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                        : "border-cyan-600 bg-cyan-50/90 shadow-md"
                      : isDark
                        ? "border-slate-700/50 bg-[#12151c]/90 hover:border-slate-500 opacity-70"
                        : "border-slate-200 bg-white hover:border-slate-400 opacity-70 shadow-xs"
                  }`}
                >
                  {/* Stem Node Dot Indicator */}
                  <div className={`absolute -left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    isSelected
                      ? "bg-cyan-400 border-white scale-125 shadow-[0_0_12px_#22d3ee]"
                      : isDark
                        ? "bg-slate-800 border-slate-600"
                        : "bg-white border-slate-400"
                  }`} />

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl border transition ${
                        isSelected
                          ? isDark ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "bg-cyan-600 text-white border-cyan-600"
                          : isDark ? "bg-slate-800 border-slate-700 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-700"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                          isSelected ? "text-cyan-500" : isDark ? "text-slate-500" : "text-slate-600"
                        }`}>
                          {node.category} • {node.year}
                        </span>
                        <h4 className={`text-base font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {node.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? "translate-x-1 text-cyan-400" : isDark ? "text-slate-600" : "text-slate-400"
                    }`} />
                  </div>

                  {/* Subtle Loading Line on active card */}
                  {isSelected && !isHovered && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-white"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.2, ease: "linear" }}
                      key={currentIndex}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: INSPECTOR CARD */}
        <div className="md:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className={`rounded-3xl border p-7 shadow-2xl backdrop-blur-xl ${
                isDark
                  ? "border-slate-700/80 bg-gradient-to-b from-[#191d26] to-[#0f1218] text-white"
                  : "border-slate-200 bg-white text-slate-900 shadow-lg"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/30">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  {selectedNode.year}
                </span>
                <span className={`text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  NODE INSPECTOR
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <h3 className="text-xl font-bold leading-tight">
                    {selectedNode.title}
                  </h3>
                  <p className={`text-xs font-mono mt-1 ${isDark ? "text-cyan-400" : "text-cyan-700 font-semibold"}`}>
                    {selectedNode.institution}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-medium"}`}>
                  {selectedNode.summary}
                </p>

                <div className="pt-2">
                  <h5 className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                    isDark ? "text-slate-400" : "text-slate-600"
                  }`}>
                    Key Focus & Deliverables:
                  </h5>
                  <ul className="space-y-2 text-xs">
                    {selectedNode.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span className={isDark ? "text-slate-300" : "text-slate-700"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}