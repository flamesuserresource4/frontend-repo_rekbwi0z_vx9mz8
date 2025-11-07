import { useEffect, useRef } from 'react';

/* ScrollOrchestrator
   - Provides alternating vertical and horizontal flows:
     1) GalaxyHero (vertical)
     2) HorizontalExperience (horizontal)
     3) VerticalSections (vertical)
   - Smooth snap behavior is handled by native CSS + wheel translation inside HorizontalExperience
*/
export default function ScrollOrchestrator({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Ensure the body doesn't introduce unexpected scrollbars when horizontal bands are active
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <main ref={containerRef} className="bg-slate-950 text-white">
      {children}
    </main>
  );
}
