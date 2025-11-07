import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles, Play, Mail } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <div className="relative z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-900/30">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-blue-200/90">CLOUD SHAPED</p>
              <p className="text-lg font-bold text-white">Dream Studio</p>
            </div>
          </motion.a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:from-blue-400 hover:to-indigo-500 transition-colors"
            >
              Let's collaborate
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 pt-10 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.h1 variants={item} className="mx-auto max-w-5xl bg-gradient-to-b from-blue-50 via-white to-blue-200 bg-clip-text text-5xl font-extrabold leading-tight text-transparent drop-shadow-sm sm:text-6xl md:text-7xl">
            Cinematic stories shaped in the clouds
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/80">
            We craft striking videography, theatrical experiences, and corporate films that feel handcrafted—not templated.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-blue-50 backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-4 w-4 text-blue-300 transition group-hover:translate-x-0.5" />
              Our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:from-blue-400 hover:to-indigo-500"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Floating badges */}
        <motion.div
          className="pointer-events-none absolute left-6 top-44 hidden select-none md:block"
          initial={{ opacity: 0, y: 10, rotate: -8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
        >
          <div className="rounded-2xl border border-blue-400/20 bg-slate-900/40 p-4 text-left shadow-lg backdrop-blur">
            <p className="text-[11px] font-semibold tracking-widest text-blue-300/80">SPECIALTY</p>
            <p className="mt-1 text-sm font-bold text-white">Theater & Live Arts</p>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute right-6 bottom-24 hidden select-none md:block"
          initial={{ opacity: 0, y: 10, rotate: 8 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
        >
          <div className="rounded-2xl border border-blue-400/20 bg-slate-900/40 p-4 text-left shadow-lg backdrop-blur">
            <p className="text-[11px] font-semibold tracking-widest text-blue-300/80">WE HELP BRANDS</p>
            <p className="mt-1 text-sm font-bold text-white">Corporate Ads that resonate</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient divider */}
      <div className="pointer-events-none relative z-20 mt-20 h-24 w-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
    </section>
  );
}
