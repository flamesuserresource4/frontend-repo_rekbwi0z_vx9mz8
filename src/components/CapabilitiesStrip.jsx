import { motion } from 'framer-motion';
import { Rocket, Sparkles, Video, Wand2 } from 'lucide-react';

const capabilities = [
  {
    icon: Rocket,
    title: 'Launch Films',
    desc: 'Cinematic product launches that convert attention into momentum.',
  },
  {
    icon: Video,
    title: 'Brand Stories',
    desc: 'Narratives that fuse craft and clarity to move audiences.',
  },
  {
    icon: Sparkles,
    title: '3D & Motion',
    desc: 'Realtime 3D, Spline interactions, and stylized motion systems.',
  },
  {
    icon: Wand2,
    title: 'Post & Grade',
    desc: 'Editorial rhythm, sound design, and color grading with intent.',
  },
];

const clients = [
  'AURORA',
  'NEBULA LABS',
  'POLARIS',
  'ZENITH',
  'ECLIPSE',
  'HALCYON',
  'GRAVITY',
  'IONIC',
];

export default function CapabilitiesStrip() {
  return (
    <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-400">
          What we do
        </h3>
        <p className="mt-3 text-sky-100/80 max-w-2xl">
          Precision-crafted visuals across the full arc of production, tailored to your launch goals.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, rotateX: 5, rotateY: -5 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-5 backdrop-blur will-change-transform"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10" />
              <c.icon className="h-6 w-6 text-cyan-300" />
              <div className="mt-3 text-lg font-semibold">{c.title}</div>
              <div className="mt-2 text-sm text-sky-100/80">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client marquee */}
      <div className="mt-16 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="flex gap-10 whitespace-nowrap px-6"
        >
          {[...clients, ...clients].map((name, idx) => (
            <div
              key={idx}
              className="text-sm sm:text-base tracking-widest text-sky-200/70 font-medium"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-300">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
    </section>
  );
}
