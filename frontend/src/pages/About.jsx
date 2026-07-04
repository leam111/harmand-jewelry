import { useEffect, useRef } from "react";
import heroImg from "../assets/aboutImage.jpeg";

// ─── Primitives ───────────────────────────────────────────────────────────────

const GoldLineH = ({ className = "" }) => (
  <div
    className={`h-px ${className}`}
    style={{ background: "linear-gradient(to right, transparent, #c9a96e, transparent)" }}
  />
);

const Tag = ({ children }) => (
  <div className="flex items-center gap-3">
    <GoldLineH className="w-10" />
    <span
      className="text-xs uppercase tracking-[0.35em]"
      style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif" }}
    >
      {children}
    </span>
  </div>
);

// ─── Fade hook ────────────────────────────────────────────────────────────────

function useFadeIn(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return {
    ref,
    style: {
      opacity: 0,
      transform: "translateY(28px)",
      transition: "opacity 0.9s ease, transform 0.9s ease",
    },
  };
}

// ─── Stat Band ────────────────────────────────────────────────────────────────

function StatBand() {
  const stats = [
    { num: "135",  label: "Years of Heritage" },
    { num: "12K+", label: "Pieces Created" },
    { num: "48",   label: "Master Artisans" },
    { num: "6",    label: "Generations" },
  ];
  const fade = useFadeIn(0);

  return (
    <section className="py-16 px-6 border-y" style={{ borderColor: "rgba(201,169,110,0.2)" }}>
      <div
        ref={fade.ref}
        style={fade.style}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p
              className="font-light leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem,8vw,3.5rem)", color: "#e8d5a3" }}
            >
              {s.num}
            </p>
            <GoldLineH className="w-10 mx-auto my-3" />
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "#6b7280", fontFamily: "'Tenor Sans', sans-serif", letterSpacing: "0.15em" }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Pillars ──────────────────────────────────────────────────────────────────

const PILLARS = [
  {
    roman: "I.",
    title: "Craftsmanship",
    body: "Every HARMAND creation passes through the hands of our master artisans, who uphold techniques refined over generations. No shortcut, no machine-made substitute.",
    delay: 100,
  },
  {
    roman: "II.",
    title: "Provenance",
    body: "We source only the finest ethically-procured gemstones, each selected by our gemologists for exceptional clarity, colour, and character.",
    delay: 200,
  },
  {
    roman: "III.",
    title: "Legacy",
    body: "A HARMAND jewel is not purchased — it is entrusted. Designed to be passed from one generation to the next, each piece is a living heirloom.",
    delay: 300,
  },
];

function PillarCard({ pillar }) {
  const fade = useFadeIn(pillar.delay);
  return (
    <div
      ref={fade.ref}
      style={{
        ...fade.style,
        border: "1px solid rgba(201,169,110,0.15)",
        background: "rgba(201,169,110,0.03)",
        transition: "opacity 0.9s ease, transform 0.9s ease, border-color 0.3s ease, background 0.3s ease",
      }}
      className="p-7 md:p-8 hover:border-[rgba(201,169,110,0.4)] hover:bg-[rgba(201,169,110,0.06)]"
    >
      <div className="flex items-start gap-5 md:block">
        {/* Roman numeral stays left on mobile, top on desktop */}
        <div className="flex-shrink-0 md:mb-0">
          <span
            className="italic"
            style={{ color: "#c9a96e", opacity: 0.5, fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem" }}
          >
            {pillar.roman}
          </span>
          <GoldLineH className="w-8 my-3 md:my-4 hidden md:block" />
        </div>

        <div className="flex-1">
          {/* Vertical gold accent visible only on mobile */}
          <div className="md:hidden flex items-start gap-4">
            <div style={{ width: "1px", background: "linear-gradient(to bottom, #c9a96e, transparent)", alignSelf: "stretch", flexShrink: 0, marginTop: "4px" }} />
            <div>
              <h3
                className="font-light mb-3 text-white"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-xs leading-loose"
                style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}
              >
                {pillar.body}
              </p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block">
            <h3
              className="font-light mb-4 text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem" }}
            >
              {pillar.title}
            </h3>
            <p
              className="text-xs leading-loose"
              style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}
            >
              {pillar.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pillars() {
  const heading = useFadeIn(0);
  return (
    <section className="py-20 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={heading.ref} style={heading.style} className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <GoldLineH className="w-12 md:w-16" />
            <span
              className="text-xs uppercase tracking-[0.45em]"
              style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif" }}
            >
              Our Foundations
            </span>
            <GoldLineH className="w-12 md:w-16" />
          </div>
          <h2
            className="font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem,5vw,3rem)",
              color: "#f5f0e8",
            }}
          >
            The HARMAND <em style={{ color: "#e8d5a3" }}>Promise</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {PILLARS.map((p) => <PillarCard key={p.title} pillar={p} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Quote ────────────────────────────────────────────────────────────────────

function Quote() {
  const fade = useFadeIn(0);
  return (
    <section
      className="py-16 md:py-20 px-6 relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(201,169,110,0.2)",
        borderBottom: "1px solid rgba(201,169,110,0.2)",
      }}
    >
      <div ref={fade.ref} style={fade.style} className="max-w-3xl mx-auto text-center relative">
        <span
          className="absolute -top-4 left-0 select-none pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(5rem,20vw,8rem)",
            lineHeight: 0.6,
            color: "#c9a96e",
            opacity: 0.12,
          }}
        >
          "
        </span>
        <blockquote
          className="italic font-light leading-relaxed relative z-10 px-4 md:px-0"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.25rem,4.5vw,2.4rem)",
            color: "#e5e7eb",
          }}
        >
          Jewelry is not made — it is born of tradition, passion, and the artistry of 1890 carried gracefully into today.
        </blockquote>
        <GoldLineH className="w-16 mx-auto mt-8 mb-4" />
        <cite
          className="text-xs uppercase tracking-[0.45em] not-italic"
          style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif" }}
        >
          Harmand, Maison Fondatrice
        </cite>
      </div>
    </section>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AboutUs() {
  const heroImgRef = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => {
      if (heroImgRef.current) heroImgRef.current.style.transform = "scale(1.05)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const heroText = useFadeIn(300);
  const mobileText = useFadeIn(400);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Tenor+Sans&display=swap');

        .about-grain::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.35;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
        }
      `}</style>

      <div className="about-grain min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#f5f0e8" }}>

        {/* ── HERO ── */}

        {/* DESKTOP hero — unchanged */}
        <section className="relative hidden md:flex flex-row min-h-screen">
          <div className="relative w-1/2 overflow-hidden">
            <img
              ref={heroImgRef}
              src={heroImg}
              alt="HARMAND Bridal"
              className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-top"
              style={{
                top: "160px",
                filter: "brightness(0.85) contrast(1.05) saturate(0.9)",
                transition: "transform 8s ease",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,13,13,0.05), rgba(13,13,13,0.0) 50%, rgba(13,13,13,0.55))",
              }}
            />
          </div>

          <div
            ref={heroText.ref}
            style={heroText.style}
            className="flex flex-col justify-center w-1/2 px-14 xl:px-24 py-32"
          >
            <Tag>Since 1890</Tag>
            <h1
              className="font-light leading-tight mt-8 mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3.5rem,6vw,5rem)",
                color: "#f5f0e8",
              }}
            >
              About<br />
              <em style={{ color: "#e8d5a3" }}>Us</em>
            </h1>
            <GoldLineH className="w-24 mb-8" />
            <div className="space-y-5 max-w-lg">
              {[
                "Since 1890, HARMAND has been devoted to the art of fine jewelry, preserving a tradition where every detail is shaped by hand and every stone is chosen with reverence. What began in a small atelier over a century ago has grown into a legacy of timeless beauty, where history and craftsmanship intertwine.",
                "Each piece carries the spirit of an ancient time: meticulous artistry, enduring elegance, and the quiet luxury of jewels meant to be cherished for generations. Inspired by the romance of the past yet alive in the present, our creations are not just ornaments, but heirlooms of love, memory, and legacy.",
                "At HARMAND, jewelry is not made — it is born of tradition, passion, and the artistry of 1890 carried gracefully into today.",
              ].map((p, i) => (
                <p
                  key={i}
                  className="text-xs leading-loose"
                  style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* MOBILE hero — full redesign */}
        <section className="md:hidden flex flex-col" style={{ minHeight: "100svh" }}>

          {/* Image: top 60% of viewport */}
          <div className="relative flex-none overflow-hidden" style={{ height: "60svh" }}>
            <img
              src={heroImg}
              alt="HARMAND Bridal"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                filter: "brightness(0.80) contrast(1.05) saturate(0.85)",
              }}
            />
            {/* Bottom fade into dark */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(13,13,13,0.85) 85%, #0d0d0d)" }}
            />

            {/* "Since 1890" tag pinned to bottom of image */}
            <div className="absolute bottom-5 left-6">
              <Tag>Since 1890</Tag>
            </div>
          </div>

          {/* Text panel below the image */}
          <div
            ref={mobileText.ref}
            style={mobileText.style}
            className="flex-1 px-6 pt-8 pb-14"
          >
            <h1
              className="font-light leading-tight mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(3rem,12vw,4rem)",
                color: "#f5f0e8",
              }}
            >
              About <em style={{ color: "#e8d5a3" }}>Us</em>
            </h1>

            <GoldLineH className="w-20 mb-7" />

            <div className="space-y-5">
              <p
                className="text-xs leading-loose"
                style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}
              >
                Since 1890, HARMAND has been devoted to the art of fine jewelry, preserving a tradition where every detail is shaped by hand and every stone is chosen with reverence. What began in a small atelier over a century ago has grown into a legacy of timeless beauty.
              </p>
              <p
                className="text-xs leading-loose"
                style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}
              >
                Each piece carries the spirit of an ancient time: meticulous artistry, enduring elegance, and the quiet luxury of jewels meant to be cherished for generations.
              </p>
            </div>

            {/* Decorative bottom ornament */}
            <div className="flex items-center gap-4 mt-10">
              <GoldLineH className="flex-1" />
              <span
                style={{
                  color: "#c9a96e",
                  opacity: 0.5,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  letterSpacing: "0.3em",
                }}
              >
                ✦
              </span>
              <GoldLineH className="flex-1" />
            </div>
          </div>

        </section>

        {/* ── STATS ── */}
        <StatBand />

        {/* ── PILLARS ── */}
        <Pillars />

        {/* ── QUOTE ── */}
        <Quote />

      </div>
    </>
  );
}
