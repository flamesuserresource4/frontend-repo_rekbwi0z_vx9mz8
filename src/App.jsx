import EnhancedIntroCurtain from './components/EnhancedIntroCurtain';
import ScrollOrchestrator from './components/ScrollOrchestrator';
import GalaxyHero from './components/GalaxyHero';
import HorizontalExperience from './components/HorizontalExperience';
import VerticalSections from './components/VerticalSections';
import WorkWall from './components/WorkWall';
import CaseTicker from './components/CaseTicker';
import TechProcess from './components/TechProcess';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <EnhancedIntroCurtain />
      <ScrollOrchestrator>
        {/* Vertical cover with Spline galaxy asset */}
        <GalaxyHero />

        {/* Horizontal band with guided wheel scrolling */}
        <HorizontalExperience />

        {/* Vertical stack to reset pacing */}
        <VerticalSections />

        {/* Keep the original WorkWall (horizontal interactions inside) */}
        <WorkWall />

        {/* Vertical informational flow */}
        <CaseTicker />
        <TechProcess />
      </ScrollOrchestrator>

      <footer className="py-10 text-center text-sky-300/60 text-sm">
        © {new Date().getFullYear()} Cloud Shaped Dream Studio
      </footer>
    </div>
  );
}
