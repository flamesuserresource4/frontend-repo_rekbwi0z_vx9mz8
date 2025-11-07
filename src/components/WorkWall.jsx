import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  {
    title: 'Dream Sequence',
    thumb: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ethereal Bloom',
    thumb: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Neon Mirage',
    thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Blue Hour',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Liminal Streets',
    thumb: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function WorkWall() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={ref} className="relative bg-slate-950 text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
            Our Work
          </h3>
          <p className="mt-3 text-sky-100/80">Hover to expand. Click to play fullscreen.</p>
        </div>
      </div>

      <div className="relative h-[420px]">
        <motion.div style={{ x }} className="absolute left-0 top-0 flex gap-6 px-6 will-change-transform">
          {items.concat(items).map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative h-[420px] w-[320px] overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur"
              onClick={() => {
                const el = document.createElement('video');
                el.src = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
                el.controls = true;
                el.autoplay = true;
                el.className = 'fixed inset-0 w-screen h-screen object-cover z-50 bg-black';
                el.addEventListener('click', () => el.remove());
                document.body.appendChild(el);
              }}
            >
              <img
                src={it.thumb}
                alt={it.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-sm text-sky-300/90">Case Study</div>
                <div className="text-lg font-semibold">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress bar */}
      <div className="mx-auto max-w-6xl px-6 mt-8">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="origin-left h-1 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
        />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </section>
  );
}
