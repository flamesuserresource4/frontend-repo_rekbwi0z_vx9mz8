import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

/*
  GalaxyHero
  - Uses the provided Spline asset as a full-bleed, interactive cover
  - Foreground headline adapts to hover with gentle scale and glow
  - Non-blocking overlays keep the scene interactive
*/
export default function GalaxyHero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative min-h-[92vh] bg-black text-white overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Non-blocking gradient veils */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        <motion.div
          animate={{ opacity: hovered ? 0.45 : 0.25 }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl items-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            animate={{ scale: hovered ? 1.02 : 1 }}
            className="text-4xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400"
          >
            Cloud Shaped Dream Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-xl text-sky-100/85"
          >
            Trippy galaxy rollercoaster. Futuristic. Immersive. Built for brands who want unforgettable.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
