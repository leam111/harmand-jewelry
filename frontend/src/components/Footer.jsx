import { Link, useNavigate } from "react-router-dom";

const PAGES = [
  { label: "Home",       path: "/"           },
  { label: "Collection", path: "/collection" },
  { label: "About Us",   path: "/about"      },
  { label: "Contact",    path: "/contact"    },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
  },
];

const CONTACT = [
  { marker: "◈", text: "Beirut, Lebanon"       },
  { marker: "◈", text: "+961 XX XXX XXX"       },
  { marker: "◈", text: "contact@harmand.com"   },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0a0a0a]">

      {/* Top gold rule */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col items-start gap-5 sm:col-span-2 lg:col-span-1">

            {/* Logo */}
            <div className="flex flex-col items-center gap-0">
              <svg width="32" height="25" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="14,1 27,8 14,21 1,8" fill="none" stroke="#C9A84C" strokeWidth="0.9"/>
                <polygon points="14,1 20,8 14,21 8,8" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.55"/>
                <line x1="1"  y1="8" x2="27" y2="8" stroke="#C9A84C" strokeWidth="0.6" opacity="0.65"/>
                <line x1="14" y1="1" x2="8"  y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.45"/>
                <line x1="14" y1="1" x2="20" y2="8" stroke="#C9A84C" strokeWidth="0.5" opacity="0.45"/>
                <line x1="4"  y1="8" x2="4"  y2="6" stroke="#C9A84C" strokeWidth="0.8" opacity="0.9"/>
                <line x1="3"  y1="7" x2="5"  y2="7" stroke="#C9A84C" strokeWidth="0.8" opacity="0.9"/>
                <line x1="24" y1="8" x2="24" y2="6" stroke="#C9A84C" strokeWidth="0.8" opacity="0.9"/>
                <line x1="23" y1="7" x2="25" y2="7" stroke="#C9A84C" strokeWidth="0.8" opacity="0.9"/>
              </svg>
              <span
                className="text-[#C9A84C] uppercase tracking-[0.3em] leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '20px' }}
              >
                HARMAND
              </span>
              <span
                className="text-[#C9A84C]/60 uppercase tracking-[0.3em] mt-0.5"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 200, fontSize: '7px' }}
              >
                L'ART DE LA PERFECTION
              </span>
            </div>

            {/* Tagline */}
            <p
              className="text-white/30 text-[10px] leading-relaxed tracking-wider font-light max-w-[230px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Crafting exceptional jewellery since 1987. Each piece a testament to time, beauty, and the art of perfection.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/30 hover:text-[#C9A84C] transition-all duration-300 hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[#C9A84C]/70 text-[9px] tracking-[0.35em] uppercase font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {PAGES.map(({ label, path }) => (
                <li key={label}>
                  <button
                    onClick={() => handleNav(path)}
                    className="group relative inline-block text-white/40 hover:text-[#C9A84C] transition-colors duration-300 text-[10px] tracking-[0.2em] uppercase font-light text-left"
                    style={{ fontFamily: "'Montserrat', sans-serif", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    {label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[#C9A84C]/70 text-[9px] tracking-[0.35em] uppercase font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3.5">
              {CONTACT.map(({ marker, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="text-[#C9A84C]/40 text-[8px] mt-0.5 flex-shrink-0">{marker}</span>
                  <span
                    className="text-white/35 text-[10px] tracking-wider font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

        <span
          className="text-white/20 text-[9px] tracking-[0.25em] font-light"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          © {year} Harmand. All rights reserved.
        </span>

        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <button
              key={item}
              className="text-white/20 hover:text-white/40 transition-colors duration-300 text-[9px] tracking-[0.2em] font-light uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {item}
            </button>
          ))}
        </div>

        <span
          className="text-[#C9A84C]/25 text-xs tracking-widest italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          L'art de la perfection
        </span>

      </div>

      {/* Bottom gold rule */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

    </footer>
  );
}
