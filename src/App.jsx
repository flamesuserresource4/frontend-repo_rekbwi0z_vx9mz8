import React from 'react';
import Hero from './components/Hero';
import HorizontalReel from './components/HorizontalReel';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-blue-50">
      <Hero />
      <HorizontalReel />
      <Services />
      <Contact />
      <footer className="border-t border-blue-400/10 bg-slate-950/80 py-10 text-center">
        <p className="text-sm text-blue-200/60">© {new Date().getFullYear()} Cloud Shaped Dream Studio — crafted with care.</p>
      </footer>
    </div>
  );
}
