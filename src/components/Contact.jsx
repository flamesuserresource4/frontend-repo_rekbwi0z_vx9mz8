import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-blue-200 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-5xl"
        >
          Let's make something unforgettable
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 grid gap-4 rounded-2xl border border-blue-400/20 bg-slate-900/40 p-6 shadow-xl backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-blue-100/80">Name</label>
              <input className="mt-2 w-full rounded-lg border border-blue-400/20 bg-slate-950/60 px-4 py-3 text-blue-50 placeholder-blue-200/40 outline-none ring-0 focus:border-blue-400/50" placeholder="Alex Doe" />
            </div>
            <div>
              <label className="text-sm font-medium text-blue-100/80">Email</label>
              <input type="email" className="mt-2 w-full rounded-lg border border-blue-400/20 bg-slate-950/60 px-4 py-3 text-blue-50 placeholder-blue-200/40 outline-none ring-0 focus:border-blue-400/50" placeholder="hello@brand.com" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-blue-100/80">Project details</label>
            <textarea rows={5} className="mt-2 w-full rounded-lg border border-blue-400/20 bg-slate-950/60 px-4 py-3 text-blue-50 placeholder-blue-200/40 outline-none ring-0 focus:border-blue-400/50" placeholder="Tell us about the story you want to tell..." />
          </div>
          <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:from-blue-400 hover:to-indigo-500">
            <Send className="h-4 w-4" /> Send inquiry
          </button>
          <p className="text-center text-xs text-blue-200/60">We reply within 1 business day.</p>
        </motion.form>
      </div>
    </section>
  );
}
