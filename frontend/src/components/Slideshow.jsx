import { useState, useEffect, useRef } from "react";

import l1 from '../assets/1.png'
import l2 from '../assets/2.png'
import l3 from '../assets/3.png'
import l4 from '../assets/4.png'
import l5 from '../assets/5.png'
import l6 from '../assets/6.png'

const slides = [
  {
    id: 1,
    image: l1,
    title: "Touched by",
    subtitle: "Gold",
    description: "Rare. Eternal. Yours.",
    accentClass: "text-amber-200",
  },
  {
    id: 2,
    image: l2,
    title: "Cut from",
    subtitle: "Pure Light",
    description: "Brilliance that outlasts time.",
    accentClass: "text-sky-200",
  },
  {
    id: 3,
    image: l3,
    title: "Crafted for",
    subtitle: "Forever",
    description: "A piece. A promise. A legacy.",
    accentClass: "text-rose-200",
  },
  {
    id: 4,
    image: l4,
    title: "Born from",
    subtitle: "The Earth",
    description: "Where luxury finds its form.",
    accentClass: "text-emerald-900",
  },
  {
    id: 5,
    image: l5,
    title: "Deep as",
    subtitle: "The Ocean",
    description: "Colour so rare, it has no equal.",
    accentClass: "text-blue-300",
  },
  {
    id: 6,
    image: l6,
    title: "Worn by",
    subtitle: "Desire",
    description: "The stone that speaks for itself.",
    accentClass: "text-red-300",
  },
];

const DURATION = 3000;

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const currentRef = useRef(0);
  const transitioningRef = useRef(false);

  const goTo = (index) => {
    if (transitioningRef.current || index === currentRef.current) return;
    transitioningRef.current = true;
    setTransitioning(true);
    setPrev(currentRef.current);
    currentRef.current = index;
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = performance.now();
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
      transitioningRef.current = false;
    }, 900);
  };

  useEffect(() => {
    startTimeRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        const nextIdx = (currentRef.current + 1) % slides.length;
        goTo(nextIdx);
      }
      progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, []);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@200;300;400&display=swap');

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        @keyframes slideEnter {
          from { transform: scale(1.08); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        @keyframes slideExit {
          from { transform: scale(1);    opacity: 1; }
          to   { transform: scale(1.06); opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(34px) skewY(2deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .anim-enter-bg { animation: slideEnter 0.9s cubic-bezier(0.76,0,0.24,1) forwards; }
        .anim-exit-bg  { animation: slideExit  0.9s cubic-bezier(0.76,0,0.24,1) forwards; }
        .anim-t1   { animation: titleReveal 0.7s 0.25s cubic-bezier(0.34,1.56,0.64,1) both; }
        .anim-t2   { animation: titleReveal 0.7s 0.38s cubic-bezier(0.34,1.56,0.64,1) both; }
        .anim-line { animation: lineGrow    0.6s 0.34s ease both; transform-origin: left; }
        .anim-desc { animation: fadeUp      0.7s 0.48s ease both; }

        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 30;
          opacity: 0.35;
        }
      `}</style>

      <div className="grain relative w-full h-screen min-h-[420px] overflow-hidden bg-black flex items-center justify-center">

        {/* Exiting slide */}
        {prevSlide && (
          <div className="absolute inset-0">
            <div
              className="anim-exit-bg absolute inset-0 bg-cover bg-top"
              style={{ backgroundImage: `url(${prevSlide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          </div>
        )}

        {/* Active slide */}
        <div className="absolute inset-0">
          <div
            className={`${transitioning ? "anim-enter-bg" : ""} absolute inset-0 bg-cover bg-top`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        </div>

        {/* Slide content — vertically centered */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 max-w-xl lg:max-w-2xl mr-auto">

          {/* Title line 1 — regular white */}
          <div className="overflow-hidden mb-1">
            <span className={`${transitioning ? "anim-t1" : "opacity-100"} font-cormorant font-light text-white/70 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] block`}>
              {slide.title}
            </span>
          </div>

          {/* Title line 2 — large accent italic */}
          <div className="overflow-hidden mb-6 sm:mb-8">
            <span className={`${transitioning ? "anim-t2" : "opacity-100"} font-cormorant italic font-light text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.88] block ${slide.accentClass}`}>
              {slide.subtitle}
            </span>
          </div>

          {/* Thin divider */}
          <div className={`${transitioning ? "anim-line" : "opacity-100"} w-8 h-px bg-white/15 mb-5 origin-left`} />

          {/* Description */}
          <p className={`${transitioning ? "anim-desc" : "opacity-100"} font-montserrat font-extralight text-white/35 text-[10px] sm:text-[11px] leading-loose tracking-[0.2em] uppercase max-w-[220px]`}>
            {slide.description}
          </p>
        </div>

        {/* Right accent */}
        <div className="hidden lg:flex absolute right-12 xl:right-16 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
          <span className="font-montserrat font-extralight text-white/15 text-[7px] tracking-[0.35em] uppercase [writing-mode:vertical-rl]">
            Discover
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-6 sm:px-10 lg:px-20 py-6 sm:py-8 lg:py-10 bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center gap-5 sm:gap-6">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`flex flex-col items-start gap-2 transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-25 hover:opacity-55"}`}
              >
                <span className="font-montserrat font-extralight text-white text-[9px] tracking-widest">
                  0{i + 1}
                </span>
                <div className="w-8 h-px bg-white/20 relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-white"
                    style={{
                      width: i === current ? `${progress}%` : i < current ? "100%" : "0%",
                    }}
                  />
                </div>
              </button>
            ))}
          </div>

          <span className="font-cormorant font-light text-white/25 text-xs sm:text-sm tracking-widest">
            0{current + 1} — 0{slides.length}
          </span>
        </div>

      </div>
    </>
  );
}
