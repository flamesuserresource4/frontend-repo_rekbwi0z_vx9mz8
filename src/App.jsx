import EnhancedIntroCurtain from './components/EnhancedIntroCurtain';
import Hero3D from './components/Hero3D';
import WorkWall from './components/WorkWall';
import CapabilitiesStrip from './components/CapabilitiesStrip';
import TechProcess from './components/TechProcess';
import CaseTicker from './components/CaseTicker';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Enhanced intro curtain with hover shimmer */}
      <EnhancedIntroCurtain />

      {/* Hero 3D with hover-driven parallax and new Spline asset */}
      <Hero3D />

      {/* Our Work - unchanged */}
      <WorkWall />

      {/* Capabilities and process to lengthen the page without About sections */}
      <CapabilitiesStrip />
      <CaseTicker />
      <TechProcess />

      {/* Footer note only (no CTA form as requested) */}
      <footer className="py-10 text-center text-sky-300/60 text-sm">
        © {new Date().getFullYear()} Cloud Shaped Dream Studio
      </footer>
    </div>
  );
}
