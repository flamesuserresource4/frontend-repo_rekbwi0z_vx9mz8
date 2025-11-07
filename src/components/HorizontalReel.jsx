import React, { useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

function TiltCard({ children }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [vars, setVars] = useState({ mx: '50%', my: '50%' });

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * 8; // tilt X
    const ry = (0.5 - px) * 10; // tilt Y
    setTilt({ x: rx, y: ry });
    setVars({ mx: `${px * 100}%`, my: `${py * 100}%` });
  }

  function onLeave() {
    setTilt({ x: 0, y: 0 });
    setVars({ mx: '50%', my: '50%' });
  }

  return (
    <motion.div
      className="group relative h-[60vh] w-[90vw] overflow-hidden rounded-3xl border border-blue-400/20 bg-slate-900/40 shadow-2xl will-change-transform md:h-[70vh] md:w-[60vw]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        ['--mx']: vars.mx,
        ['--my']: vars.my
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {children}
      {/* glow on hover following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(59,130,246,0.18), transparent 40%)'
        }}
      />
    </motion.div>
  );
}

export default function HorizontalReel() {
  // Pinned horizontal scroll mapped from vertical scroll
  const sectionRef = useRef(null);
  const totalPanels = items.length;
  const trackWidthVW = useMemo(() => totalPanels * 100, [totalPanels]);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(totalPanels - 1) * 100}vw`]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.35, 0.15]);
  const progressW = useTransform(scrollYProgress, [0, 1], ['10%', '100%']);

  return (
    <section id="work" ref={sectionRef} className="relative w-full bg-slate-950" style={{ height: `${totalPanels * 100}vh` }}>
      {/* Ambient field */}
      <motion.div className="pointer-events-none absolute inset-0" style={{ opacity: glowOpacity }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute left-1/3 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
      </motion.div>

      {/* Sticky viewport */}
      <div className="sticky top-0 mx-auto h-screen w-full overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl"
            >
              Work panorama
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 max-w-md text-sm leading-relaxed text-blue-100/80"
            >
              A pinned scroll that translates into sideways motion with parallax and tilt. Keep scrolling—each piece reveals a new scene.
            </motion.p>
          </div>
        </div>

        {/* Horizontal track */}
        <motion.div
          style={{ x, width: `${trackWidthVW}vw` }}
          className="relative z-10 flex h-[72vh] items-center gap-8 px-6"
        >
          {items.map((it) => (
            <div key={it.title} className="relative flex h-full w-[90vw] items-stretch md:w-[60vw]">
              <TiltCard>
                <div className="relative h-full w-full">
                  <iframe
                    src={it.url}
                    className="h-full w-full scale-[1.02] transform-gpu transition duration-500 ease-out group-hover:scale-[1.06]"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={it.title}
                  />
                  {/* cinematic vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                  {/* shimmer */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-40"
                    style={{
                      background:
                        'linear-gradient(120deg, transparent 30%, rgba(147,197,253,0.15) 50%, transparent 70%)'
                    }}
                  />

                  {/* tag + title */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-slate-950/60 px-3 py-1 text-xs text-blue-200 backdrop-blur">
                      {it.tag}
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white drop-shadow">{it.title}</h3>
                  </div>
                </div>

                {/* hover accent blobs */}
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
              </TiltCard>
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 w-[70%] -translate-x-1/2">
          <div className="h-1 rounded-full bg-blue-400/20">
            <motion.div className="h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: progressW }} />
          </div>
          <p className="mt-2 text-center text-[11px] tracking-wide text-blue-200/70">Scroll to travel the reel</p>
        </div>
      </div>
    </section>
  );
}
