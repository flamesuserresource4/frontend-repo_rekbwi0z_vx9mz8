import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ClosingCinematic() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h4
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500"
        >
          Let’s craft your next scene
        </motion.h4>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-sky-100/80 max-w-2xl"
        >
          We’ll bring the lighting, lenses, and a little bit of magic. Tell us about your story.
        </motion.p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-slate-800/70 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-slate-800/70 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <textarea
            placeholder="Project details"
            rows={4}
            className="sm:col-span-2 bg-slate-800/70 border border-white/10 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:from-sky-400 hover:to-cyan-400 transition-colors"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>

      {/* Cinematic fade-out loop reel background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full bg-sky-500/30 blur-3xl" />
      </div>

      <div className="mt-16 text-center text-sky-300/70 text-sm">© {new Date().getFullYear()} Cloud Shaped Dream Studio</div>
    </section>
  );
}
