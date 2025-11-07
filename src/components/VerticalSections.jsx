import { motion } from 'framer-motion';

/* VerticalSections
   - A vertical stack with generous breathing room
   - Acts as the contrast layer between horizontal bands
*/
export default function VerticalSections() {
  const Section = ({ kicker, title, body }) => (
    <section className="relative py-24 sm:py-36">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-sky-300/70"
        >
          {kicker}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 max-w-3xl text-sky-100/80"
        >
          {body}
        </motion.p>
      </div>
    </section>
  );

  return (
    <div className="bg-slate-950 text-white">
      <Section
        kicker="Approach"
        title="We choreograph emotion with code"
        body="Every section is designed to feel inevitable—cohesive motion language, precise gradients, and GPU-conscious craft so nothing stutters when the moment hits."
      />
      <Section
        kicker="Capabilities"
        title="Realtime, Cinematic, Composable"
        body="Spline, WebGL, and motion systems fused into a reusable component library so we can move fast without compromise."
      />
    </div>
  );
}
