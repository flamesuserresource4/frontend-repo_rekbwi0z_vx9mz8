import React from 'react';
import { motion } from 'framer-motion';

const reels = [
  {
    title: 'Narrative Reel',
    url: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    tag: 'Film'
  },
  {
    title: 'Theater Design',
    url: 'https://player.vimeo.com/video/357274789?h=5c5c8fa3f0',
    tag: 'Theater'
  },
  {
    title: 'Corporate Montage',
    url: 'https://player.vimeo.com/video/40648169?h=25d2a8d1d1',
    tag: 'Ads'
  }
];

export default function Showcase() {
  return (
    <section id="work" className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl"
        >
          Selected reels
        </motion.h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reels.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              className="group overflow-hidden rounded-2xl border border-blue-400/20 bg-slate-900/40 shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <iframe
                  src={r.url}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={r.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{r.title}</h3>
                  <span className="rounded-full border border-blue-400/30 px-2 py-1 text-xs text-blue-200">{r.tag}</span>
                </div>
                <p className="mt-2 text-sm text-blue-100/80">A glimpse into our texture, pacing, and color work across genres.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
