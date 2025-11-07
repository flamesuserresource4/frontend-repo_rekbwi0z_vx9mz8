import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Cloud Narrative — Director’s Cut',
    tag: 'Film',
    url: 'https://player.vimeo.com/video/76979871?h=8272103f6e'
  },
  {
    title: 'Stage: Light as Story',
    tag: 'Theater',
    url: 'https://player.vimeo.com/video/357274789?h=5c5c8fa3f0'
  },
  {
    title: 'Corporate — Future of Work',
    tag: 'Ads',
    url: 'https://player.vimeo.com/video/40648169?h=25d2a8d1d1'
  },
  {
    title: 'Immersive Projection Suite',
    tag: 'Theater',
    url: 'https://player.vimeo.com/video/32716807?h=0c43e7b38a'
  },
  {
    title: 'Product Launch — Kinetic Edit',
    tag: 'Ads',
    url: 'https://player.vimeo.com/video/1084537?h=1b5b31c6cc'
  }
];

export default function HorizontalReel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <h2 className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Work panorama
          </h2>
          <p className="hidden max-w-sm text-sm leading-relaxed text-blue-100/70 md:block">
            Scroll sideways to surf our world: narrative cuts, stage visuals, and brand films—curated for impact.
          </p>
        </motion.div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-4 [scrollbar-width:none] [-ms-overflow-style:none]"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Hide scrollbar for WebKit */}
          <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
              className="group relative h-[52vh] min-w-[78vw] snap-start overflow-hidden rounded-3xl border border-blue-400/20 bg-slate-900/40 shadow-xl md:h-[60vh] md:min-w-[46vw]"
            >
              <div className="relative h-full w-full">
                <iframe
                  src={it.url}
                  className="h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={it.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60" />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-950/60 px-3 py-1 text-xs text-blue-200 backdrop-blur">
                  {it.tag}
                </div>
                <h3 className="mt-3 text-xl font-bold text-white drop-shadow">{it.title}</h3>
              </div>
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
