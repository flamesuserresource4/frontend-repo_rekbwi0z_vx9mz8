import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Film, Layers } from 'lucide-react';

/*
  HorizontalExperience
  - Full-viewport horizontal scroller with snap points
  - Wheel-to-horizontal translation for desktop
  - Drag-to-scroll (mouse & touch) for precise control
*/
export default function HorizontalExperience() {
  const scrollerRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // Wheel → horizontal
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    // Mouse drag support
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      setDragging(true);
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };
    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1; // sensitivity
      el.scrollLeft = scrollLeftRef.current - walk;
    };
    const endMouseDrag = () => {
      isDraggingRef.current = false;
      setDragging(false);
    };

    // Touch drag support
    const onTouchStart = (e) => {
      isDraggingRef.current = true;
      setDragging(true);
      startXRef.current = e.touches[0].pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };
    const onTouchMove = (e) => {
      if (!isDraggingRef.current) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1;
      el.scrollLeft = scrollLeftRef.current - walk;
    };
    const endTouchDrag = () => {
      isDraggingRef.current = false;
      setDragging(false);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', endMouseDrag);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', endTouchDrag);

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endMouseDrag);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', endTouchDrag);
    };
  }, []);

  const Panel = ({ title, subtitle, icon: Icon, gradient, children }) => (
    <section className={`snap-center shrink-0 w-screen h-[85vh] sm:h-[92vh] relative overflow-hidden ${gradient} border border-white/10`}> 
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.07),transparent_60%)]" />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
            <Icon className="h-6 w-6 text-sky-300" />
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-400 to-fuchsia-400">
            {title}
          </h3>
          <p className="mt-3 text-sky-100/80">{subtitle}</p>
          {children}
        </motion.div>
      </div>
    </section>
  );

  return (
    <div className="relative py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />

      <div
        ref={scrollerRef}
        className={`relative overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar ${dragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
        aria-label="Horizontal experience panels"
      >
        <div className="inline-flex items-stretch gap-6 px-6">
          <Panel
            title="Cinematic Intros"
            subtitle="Set the tone with atmospheric reveals and sound-reactive light."
            icon={Sparkles}
            gradient="bg-gradient-to-br from-slate-900 via-slate-950 to-black"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 grid grid-cols-2 gap-3 text-left"
            >
              <Badge>Shimmer Curtains</Badge>
              <Badge>Depth Glows</Badge>
              <Badge>Parallax Layers</Badge>
              <Badge>Session-aware</Badge>
            </motion.div>
          </Panel>

          <Panel
            title="Realtime 3D Moments"
            subtitle="Interactive hero beats that respond to hover, tilt, and drag."
            icon={Rocket}
            gradient="bg-gradient-to-br from-slate-900 via-slate-950 to-black"
          >
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-sky-100/80"
            >
              <li>Orbit + parallax headline</li>
              <li>Dynamic gradient glows</li>
              <li>Subtle spring physics</li>
              <li>GPU-friendly materials</li>
            </motion.ul>
          </Panel>

          <Panel
            title="Feature Reels"
            subtitle="Horizontal case walls with hover-expand and fullscreen playback."
            icon={Film}
            gradient="bg-gradient-to-br from-slate-900 via-slate-950 to-black"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-sky-100/80"
            >
              Designed to hold attention without sacrificing performance.
            </motion.p>
          </Panel>

          <Panel
            title="Stack + Process"
            subtitle="Four-step pipeline tailored for velocity and craft."
            icon={Layers}
            gradient="bg-gradient-to-br from-slate-900 via-slate-950 to-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-3"
            >
              <Badge>Discover</Badge>
              <Badge>Prototype</Badge>
              <Badge>Build</Badge>
              <Badge>Polish</Badge>
            </motion.div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-100/90 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      {children}
    </span>
  );
}
