import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/*
  GalaxyHero
  - Uses the provided Spline asset as a full-bleed, interactive cover
  - Mouse parallax on headline + glow; subtle scroll parallax on overlays
  - Below-the-fold content reveals as you scroll past the hero
*/
export default function GalaxyHero() {
  const [hovered, setHovered] = useState(false);
  const heroRef = useRef(null);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.3 });
  const titleX = useTransform(sx, (v) => v * 10);
  const titleY = useTransform(sy, (v) => v * 6);
  const glowX = useTransform(sx, (v) => v * -20);
  const glowY = useTransform(sy, (v) => v * -12);

  // Scroll parallax (overlay drift)
  const [scrollAmt, setScrollAmt] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.min(Math.max((viewportH - rect.top) / (rect.height + viewportH), 0), 1);
      setScrollAmt(visible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  return (
    <section className="relative bg-black text-white" ref={heroRef}>
      {/* Sticky viewport hero */}
      <div
        className="relative h-[100vh] sm:h-[100vh] overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/XlJAYkODE2pCd85r/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Non-blocking gradient veils with subtle scroll drift */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            style={{
              x: glowX,
              y: glowY,
              opacity: hovered ? 0.5 : 0.32,
              filter: 'blur(64px)'
            }}
            className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15"
          />
          <motion.div
            style={{ y: scrollAmt * -20 }}
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"
          />
        </div>

        {/* Foreground copy with parallax */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ scale: hovered ? 1.03 : 1 }}
              style={{ x: titleX, y: titleY }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400"
            >
              Cloud Shaped Dream Studio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ x: titleX, y: titleY }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-4 max-w-xl text-sky-100/85"
            >
              A rollercoaster in space. Futuristic, vibrant, unforgettable.
            </motion.p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-200/70 text-xs tracking-widest">
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            SCROLL
          </motion.div>
        </div>
      </div>

      {/* Additional content revealed after hero: staggered cards */}
      <div className="relative bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400"
          >
            We add layers as you scroll
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 max-w-2xl text-sky-100/80"
          >
            Parallax, glow, and motion systems build immersion without breaking performance.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Parallax Depth", "Responsive Motion", "GPU Friendly"].map((title, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
              >
                <h3 className="font-semibold text-sky-100">{title}</h3>
                <p className="mt-2 text-sm text-sky-100/75">
                  Carefully tuned easing and layering keep the rollercoaster smooth across devices.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
