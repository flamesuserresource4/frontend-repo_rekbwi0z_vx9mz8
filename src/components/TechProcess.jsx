import { motion } from 'framer-motion';
import { Clock, Palette, Layers, Camera } from 'lucide-react';

const steps = [
  {
    icon: Layers,
    title: 'Discovery Sprint',
    desc: 'We align on outcomes, audience, and tone — fast, focused, practical.',
  },
  {
    icon: Palette,
    title: 'Look Development',
    desc: 'We build visual language: palettes, motion systems, and 3D tests.',
  },
  {
    icon: Camera,
    title: 'Production',
    desc: 'Live action, CG, or hybrid — we choose the right tools for the job.',
  },
  {
    icon: Clock,
    title: 'Post & Delivery',
    desc: 'Editorial cadence, grade, sound — then ship with polish and speed.',
  },
];

export default function TechProcess() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-500">
          Our process
        </h3>
        <p className="mt-3 text-sky-100/80 max-w-2xl">
          Built to meet ambitious timelines without sacrificing craft.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="relative rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur"
            >
              <s.icon className="h-6 w-6 text-cyan-300" />
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-sky-100/80">{s.desc}</div>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/0 group-hover:ring-cyan-400/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>
    </section>
  );
}
