import { motion } from 'framer-motion';

const cases = [
  'Fintech Launch Film',
  'AR Commerce Teaser',
  'EV Brand Anthem',
  'SaaS Product Story',
  'Luxury Lookbook',
  'AI Platform Sizzle',
  'Healthtech Explainer',
];

export default function CaseTicker() {
  return (
    <section className="relative bg-slate-950 text-white py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-sm uppercase tracking-widest text-sky-300/70">Selected engagements</div>
      </div>
      <div className="mt-4 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap px-6"
        >
          {[...cases, ...cases].map((c, i) => (
            <span key={i} className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-cyan-400">
              {c} ·
            </span>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
    </section>
  );
}
