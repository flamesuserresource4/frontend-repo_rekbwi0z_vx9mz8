import React from 'react';
import { motion } from 'framer-motion';
import { Film, Theater, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Videography',
    desc: 'From narrative films to music videos, we frame emotion with precision and polish. Aesthetic-first, story-always.'
  },
  {
    icon: Theater,
    title: 'Theater',
    desc: 'Stage visuals, projection mapping, and show capture designed to amplify live performance and deepen audience immersion.'
  },
  {
    icon: Briefcase,
    title: 'Corporate Ads',
    desc: 'Strategic, on-brand commercials and product films that make complex ideas feel human and memorable.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl"
        >
          Crafted for stage, screen, and brand
        </motion.h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              className="group relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-6 shadow-lg backdrop-blur"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition group-hover:scale-125" />
              <s.icon className="h-8 w-8 text-blue-300" />
              <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
              <div className="mt-4 text-sm font-semibold text-blue-300 opacity-0 transition group-hover:opacity-100">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
