import { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero3D() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  // Mouse-driven parallax for headline
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-8, 8]);
  const glow = useTransform(mx, [-0.5, 0.5], [0.2, 0.6]);

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-h-[95vh] bg-black text-white overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hovered ? 1.02 : 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Non-blocking gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ opacity: glow }}
          className="absolute inset-0 bg-gradient-to-b from-cyan-300/10 via-transparent to-sky-600/20"
        />
        <motion.div
          style={{ opacity: glow }}
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl"
        />
      </div>

      <div className="relative z-10 flex min-h-[95vh] items-center justify-center px-6">
        <motion.div
          style={{ rotateX, rotateY }}
          className="text-center will-change-transform"
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]"
          >
            Shape the impossible
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-sky-100/85 max-w-xl mx-auto"
          >
            Interactive 3D built for brands who move fast. Hover to add energy—drag, orbit, and explore.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
