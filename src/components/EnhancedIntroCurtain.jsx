import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const narrativeLines = [
  'Loading Scene 1…',
  'Adjusting Lights…',
  'Rolling Camera…',
  'Cue the score…',
  'Stand by… Action!',
];

export default function EnhancedIntroCurtain() {
  const [step, setStep] = useState(0);
  const [showCurtain, setShowCurtain] = useState(true);

  // Hover shimmer effect during loading
  const shimmer = useMotionValue(0);
  const glow = useTransform(shimmer, [0, 1], [0.2, 0.6]);

  useEffect(() => {
    let mounted = true;
    const run = async () => {
      for (let i = 0; i < narrativeLines.length; i++) {
        if (!mounted) return;
        setStep(i + 1);
        await new Promise((r) => setTimeout(r, 800));
      }
      await new Promise((r) => setTimeout(r, 420));
      if (mounted) setShowCurtain(false);
    };
    run();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Narrative loading overlay with hover shimmer */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key="narrative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-40 grid place-items-center"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width; // 0..1
              shimmer.set(x);
            }}
          >
            <div className="text-center relative">
              <div className="mb-6 text-sm tracking-widest text-sky-300/80">CLOUD SHAPED DREAM STUDIO</div>
              <div className="space-y-1 font-mono text-lg">
                {narrativeLines.slice(0, step).map((line, idx) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="text-sky-100"
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
              <motion.div
                style={{ opacity: glow }}
                className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_var(--x,_50%)_50%,_rgba(56,189,248,0.15),_transparent_60%)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Curtains with subtle parallax on hover */}
      <AnimatePresence>
        {showCurtain && (
          <>
            <motion.div
              key="curtain-left"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ skewY: -2 }}
              className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-sky-900 to-slate-900 z-30"
            />
            <motion.div
              key="curtain-right"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ skewY: 2 }}
              className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-tl from-sky-900 to-slate-900 z-30"
            />
          </>
        )}
      </AnimatePresence>

      {/* Tagline under curtains */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-sky-200 via-sky-400 to-sky-200">
            We don’t make ads.
            <br className="hidden sm:block" />
            We stage performances.
          </h1>
          <p className="mt-6 text-sky-100/80 max-w-2xl mx-auto">
            Bespoke, immersive storytelling crafted with cinematic precision. Scroll to begin the show.
          </p>
        </motion.div>

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
