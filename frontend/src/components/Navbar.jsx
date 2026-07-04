import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",        path: "/"           },
  { label: "Collection",  path: "/collection" },
  { label: "About Us",    path: "/about"      },
  { label: "Contact",     path: "/contact"    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <style>{`
        :root {
          --gold-base: #C4A962;
          --warm-light: #EBE3D7;
          --off-black: #141311;
        }

        .gold-underline {
          position: relative;
        }
        .gold-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold-base);
          transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .gold-underline:hover::after,
        .gold-underline.active::after {
          width: 100%;
        }
        .gold-underline.active {
          color: #D4BD6A;
        }

        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navLinkIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .menu-open { animation: menuSlideDown 0.5s cubic-bezier(0.33, 1, 0.68, 1) both; }

        .nav-link-item { animation: navLinkIn 0.4s ease both; }
        .nav-link-item:nth-child(1) { animation-delay: 0.08s; }
        .nav-link-item:nth-child(2) { animation-delay: 0.14s; }
        .nav-link-item:nth-child(3) { animation-delay: 0.20s; }
        .nav-link-item:nth-child(4) { animation-delay: 0.26s; }

        .bar {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--gold-base);
          transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1);
          transform-origin: center;
        }
        .bar-top-open { transform: translateY(5px) rotate(45deg); }
        .bar-mid-open { opacity: 0; transform: scaleX(0); }
        .bar-bot-open { transform: translateY(-5px) rotate(-45deg); }

        .nav-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 128px 128px;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      {/* Removed absolute – now a normal block inside the page-container */}
      <header className="nav-grain relative w-full">
        {/* Top gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold-base)]/30 to-transparent" />

        <div className="flex items-center justify-between py-5 sm:py-6 relative z-10">
          {/* ── Logo ── */}
          <Link to="/" className="flex flex-col items-center gap-0 no-underline group">
            <svg width="38" height="30" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-700 ease-out group-hover:scale-105">
              <polygon points="14,1 27,8 14,21 1,8" fill="none" stroke="#C4A962" strokeWidth="0.8"/>
              <polygon points="14,1 20,8 14,21 8,8" fill="none" stroke="#C4A962" strokeWidth="0.5" opacity="0.5"/>
              <line x1="1"  y1="8" x2="27" y2="8" stroke="#C4A962" strokeWidth="0.5" opacity="0.6"/>
              <line x1="14" y1="1" x2="8"  y2="8" stroke="#C4A962" strokeWidth="0.4" opacity="0.4"/>
              <line x1="14" y1="1" x2="20" y2="8" stroke="#C4A962" strokeWidth="0.4" opacity="0.4"/>
              <line x1="4"  y1="8" x2="4"  y2="6" stroke="#C4A962" strokeWidth="0.7" opacity="0.85"/>
              <line x1="3"  y1="7" x2="5"  y2="7" stroke="#C4A962" strokeWidth="0.7" opacity="0.85"/>
              <line x1="24" y1="8" x2="24" y2="6" stroke="#C4A962" strokeWidth="0.7" opacity="0.85"/>
              <line x1="23" y1="7" x2="25" y2="7" stroke="#C4A962" strokeWidth="0.7" opacity="0.85"/>
            </svg>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: 'clamp(20px, 2.8vw, 30px)',
                letterSpacing: '0.35em',
                color: '#C4A962',
                lineHeight: 1.1,
                textTransform: 'uppercase',
              }}
              className="group-hover:text-[#D4BD6A] transition-colors duration-700"
            >
              HARMAND
            </span>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 200,
                fontSize: 'clamp(7px, 0.8vw, 10px)',
                letterSpacing: '0.38em',
                color: '#C4A962',
                opacity: 0.7,
                textTransform: 'uppercase',
                marginTop: '3px',
              }}
            >
              L'ART DE LA PERFECTION
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`gold-underline font-montserrat font-light text-[#EBE3D7]/65 hover:text-[#D4BD6A] transition-colors duration-500 text-[10px] tracking-[0.3em] uppercase no-underline ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Tablet nav links */}
          <nav className="hidden md:flex lg:hidden items-center gap-8">
            {NAV_LINKS.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={label}
                  to={path}
                  className={`gold-underline font-montserrat font-light text-[#EBE3D7]/55 hover:text-[#D4BD6A] transition-colors duration-500 text-[9px] tracking-[0.28em] uppercase no-underline ${
                    isActive ? 'active' : ''
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          >
            <span className={`bar ${menuOpen ? "bar-top-open" : ""}`} />
            <span className={`bar ${menuOpen ? "bar-mid-open" : ""}`} />
            <span className={`bar ${menuOpen ? "bar-bot-open" : ""}`} />
          </button>
        </div>

        {/* Bottom gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold-base)]/20 to-transparent" />

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="menu-open md:hidden bg-[#141311]/95 backdrop-blur-lg border-b border-[#C4A962]/15 relative z-10">
            <div className="flex flex-col px-8 py-7 gap-1">
              {NAV_LINKS.map(({ label, path }, i) => {
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`nav-link-item font-montserrat font-light text-[#EBE3D7]/60 hover:text-[#D4BD6A] transition-colors duration-500 text-[11px] tracking-[0.32em] uppercase py-3.5 text-left border-b border-[#C4A962]/8 last:border-0 no-underline ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    <span className={`text-[#C4A962]/30 mr-3 font-light text-[10px] ${isActive ? 'text-[#C4A962]/60' : ''}`}>0{i + 1}</span>
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}