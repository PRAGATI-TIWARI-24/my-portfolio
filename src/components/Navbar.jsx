import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, X, Copy, Check, Sparkles, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const email = "pragati015tiwari@gmail.com";
  const phone = "8470847704";

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      {/* Top Floating Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md border-b transition-colors duration-300 ${
          isDark
            ? "bg-[#0d0f13]/80 border-slate-700/40 text-white"
            : "bg-white/85 border-slate-200 text-slate-900 shadow-sm"
        }`}
      >
        {/* Brand Logo */}
        <div className="font-extrabold tracking-widest text-lg uppercase">
          PRAGATI
          <span className={isDark ? "text-slate-500" : "text-cyan-600"}>.</span>
        </div>

        {/* Navigation Links */}
        <div
          className={`hidden md:flex items-center space-x-8 text-xs tracking-wider uppercase font-semibold ${
            isDark ? "text-slate-400" : "text-slate-700"
          }`}
        >
          <a
            href="#about"
            className={`transition ${isDark ? "hover:text-white" : "hover:text-black"}`}
          >
            About
          </a>
          <a
            href="#skills"
            className={`transition ${isDark ? "hover:text-white" : "hover:text-black"}`}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={`transition ${isDark ? "hover:text-white" : "hover:text-black"}`}
          >
            Projects
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className={`transition uppercase cursor-pointer ${
              isDark ? "hover:text-white" : "hover:text-black"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Right Section: Hire Me + Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Hire Me Button */}
          <button
            onClick={() => setIsOpen(true)}
            className={`text-xs px-5 py-2 rounded-full border transition uppercase font-semibold cursor-pointer shadow-sm ${
              isDark
                ? "border-slate-600/70 bg-slate-800/60 hover:bg-white hover:text-black hover:border-white text-slate-200"
                : "border-slate-300 bg-slate-900 hover:bg-slate-800 text-white"
            }`}
          >
            Hire Me
          </button>

          {/* Sun / Moon Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer flex items-center justify-center ${
              isDark
                ? "border-slate-700 bg-slate-800/90 text-yellow-400 hover:border-slate-500 hover:bg-slate-700 shadow-md"
                : "border-slate-300 bg-slate-100 text-slate-900 hover:border-slate-400 hover:bg-slate-200 shadow-xs"
            }`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>
        </div>
      </nav>

      {/* Interactive Contact Modal Card */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`relative w-full max-w-md rounded-3xl border p-7 shadow-2xl z-10 ${
                isDark
                  ? "border-slate-600/60 bg-gradient-to-b from-[#1b1f29] to-[#11141a] text-white shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                  : "border-slate-200 bg-white text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              }`}
            >
              {/* Top Bar */}
              <div
                className={`flex items-center justify-between pb-5 border-b ${
                  isDark ? "border-slate-700/50" : "border-slate-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-lg border ${
                      isDark
                        ? "bg-slate-800 border-slate-700 text-cyan-400"
                        : "bg-slate-100 border-slate-200 text-cyan-600"
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold tracking-wide">
                      Get in Touch
                    </h3>
                    <p
                      className={`text-[11px] font-mono ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Let's build something intelligent
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-full transition cursor-pointer ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-400 hover:text-white"
                      : "hover:bg-slate-100 text-slate-500 hover:text-black"
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Info Rows */}
              <div className="mt-6 space-y-4">
                {/* Email Row */}
                <div
                  className={`rounded-2xl border p-4 transition ${
                    isDark
                      ? "border-slate-700/60 bg-slate-800/40 hover:border-slate-500/80 hover:bg-slate-800/70"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div
                      className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email me:</span>
                    </div>
                    <button
                      onClick={() => handleCopy(email, 'email')}
                      className={`transition flex items-center gap-1 text-[11px] font-mono cursor-pointer ${
                        isDark
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-600 hover:text-black"
                      }`}
                      title="Copy email"
                    >
                      {copiedField === 'email' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-500 font-semibold">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className={`text-sm md:text-base font-semibold break-all hover:underline ${
                      isDark ? "text-cyan-300" : "text-cyan-700"
                    }`}
                  >
                    {email}
                  </a>
                </div>

                {/* Phone Row */}
                <div
                  className={`rounded-2xl border p-4 transition ${
                    isDark
                      ? "border-slate-700/60 bg-slate-800/40 hover:border-slate-500/80 hover:bg-slate-800/70"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div
                      className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Contact number:</span>
                    </div>
                    <button
                      onClick={() => handleCopy(phone, 'phone')}
                      className={`transition flex items-center gap-1 text-[11px] font-mono cursor-pointer ${
                        isDark
                          ? "text-slate-400 hover:text-white"
                          : "text-slate-600 hover:text-black"
                      }`}
                      title="Copy number"
                    >
                      {copiedField === 'phone' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span className="text-emerald-500 font-semibold">
                            Copied
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`tel:${phone}`}
                    className={`text-sm md:text-base font-semibold hover:underline ${
                      isDark ? "text-cyan-300" : "text-cyan-700"
                    }`}
                  >
                    {phone}
                  </a>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 text-center">
                <p
                  className={`text-[11px] ${
                    isDark ? "text-slate-500" : "text-slate-500"
                  }`}
                >
                  Click on the email or phone number to open direct apps, or click outside to dismiss.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}