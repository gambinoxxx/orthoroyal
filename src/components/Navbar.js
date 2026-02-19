import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navLinks = [
    { to: "/",         label: "Home",         key: "" },
    { to: "/about",    label: "About Us",     key: "about" },
    { to: "/services", label: "Our Services", key: "services" },
    { to: "/careers",  label: "Careers",      key: "careers" },
    { to: "/contact",  label: "Contact Us",   key: "contact" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;1,700&family=Manrope:wght@300;400;500;600&display=swap');

        /* ════════════════════════════════════════
           BASE NAV
        ════════════════════════════════════════ */
        #ob-nav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 1000;
          height: 76px;
          font-family: 'Manrope', sans-serif;
          transition: all 0.5s cubic-bezier(0.4,0,0.2,1);
        }

        /* Ghost state — fully over hero */
        #ob-nav.idle {
          background: transparent;
        }

        /* Scrolled state — rich dark glass */
        #ob-nav.scrolled {
          background: rgba(11, 14, 20, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          box-shadow:
            0 1px 0 rgba(255,255,255,0.05),
            0 20px 60px rgba(0,0,0,0.5);
        }

        /* Thin electric top-line accent on scroll */
        #ob-nav.scrolled::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg,
            transparent 0%,
            #0b0ced 30%,
            rgba(11,12,237,0.4) 70%,
            transparent 100%
          );
          animation: lineSlide 0.6s cubic-bezier(0.4,0,0.2,1) forwards;
        }

        @keyframes lineSlide {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        .ob-nav-inner {
          height: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 56px;
          display: flex;
          align-items: center;
          /* Links left | Logo right */
          flex-direction: row;
          gap: 0;
        }

        /* ════════════════════════════════════════
           DESKTOP LINKS  (left side)
        ════════════════════════════════════════ */
        .ob-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 0;
          flex: 1;
        }

        .ob-links li { position: relative; }

        .ob-links li a {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 10px 18px;
          font-size: 0.76rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.3s ease;
          overflow: hidden;
        }

        /* Sliding fill on hover */
        .ob-links li a::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.04);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          border-radius: 4px;
        }

        .ob-links li a:hover::before { transform: scaleY(1); }
        .ob-links li a:hover { color: rgba(255,255,255,0.9); }

        /* Active indicator — bottom line + colour */
        .ob-links li a.active {
          color: #fff;
        }

        .ob-links li a.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 18px;
          right: 18px;
          height: 1.5px;
          background: #0b0ced;
          border-radius: 1px;
          box-shadow: 0 0 8px rgba(11,12,237,0.8);
        }

        /* Number index shown on hover — editorial touch */
        .ob-links li a .ob-num {
          font-family: 'Fraunces', serif;
          font-size: 0.55rem;
          font-style: italic;
          color: #0b0ced;
          margin-right: 5px;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.3s ease;
          display: inline-block;
        }

        .ob-links li a:hover .ob-num,
        .ob-links li a.active .ob-num {
          opacity: 1;
          transform: translateX(0);
        }

        /* Separator dots between links */
        .ob-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          flex-shrink: 0;
          margin: 0 2px;
        }

        /* ════════════════════════════════════════
           LOGO  (right side — desktop)
        ════════════════════════════════════════ */
        .ob-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
          margin-left: auto;
        }

        .ob-logo-text {
          text-align: right;
        }

        .ob-logo-name {
          font-family: 'Fraunces', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          line-height: 1;
          display: block;
        }

        .ob-logo-tag {
          font-size: 0.55rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          display: block;
          margin-top: 2px;
        }

        /* Logo mark — the shield icon in a glowing square */
        .ob-logo-mark {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #0b0ced;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        /* Inner glow pulse */
        .ob-logo-mark::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.25), transparent 65%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .ob-logo:hover .ob-logo-mark {
          box-shadow:
            0 0 0 1px rgba(11,12,237,0.6),
            0 0 24px rgba(11,12,237,0.6),
            0 8px 24px rgba(0,0,0,0.4);
          transform: scale(1.06);
        }

        .ob-logo:hover .ob-logo-mark::after { opacity: 1; }

        .ob-logo-mark svg {
          color: #fff;
          position: relative;
          z-index: 1;
        }

        /* Vertical divider between text and mark */
        .ob-logo-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        /* ════════════════════════════════════════
           HAMBURGER  (mobile only)
        ════════════════════════════════════════ */
        .ob-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 10px;
          margin-left: auto;
          border: none;
          background: none;
        }

        .ob-burger span {
          display: block;
          height: 1.5px;
          border-radius: 2px;
          background: rgba(255,255,255,0.75);
          transition: all 0.38s cubic-bezier(0.4,0,0.2,1);
          transform-origin: center;
        }

        .ob-burger span:nth-child(1) { width: 24px; }
        .ob-burger span:nth-child(2) { width: 16px; }
        .ob-burger span:nth-child(3) { width: 20px; }

        .ob-burger.open span:nth-child(1) { width: 22px; transform: translateY(6.5px) rotate(45deg); }
        .ob-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .ob-burger.open span:nth-child(3) { width: 22px; transform: translateY(-6.5px) rotate(-45deg); }

        /* ════════════════════════════════════════
           MOBILE DRAWER
        ════════════════════════════════════════ */
        .ob-drawer {
          position: fixed;
          top: 76px;
          left: 0; right: 0;
          z-index: 999;
          background: #0c0f16;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.5s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.4s ease;
          opacity: 0;
        }

        .ob-drawer.open {
          max-height: 520px;
          opacity: 1;
        }

        .ob-drawer-inner {
          padding: 12px 24px 32px;
        }

        /* Mobile logo inside drawer header */
        .ob-drawer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 0 20px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 12px;
          text-decoration: none;
        }

        .ob-drawer-logo-mark {
          width: 32px;
          height: 32px;
          background: #0b0ced;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ob-drawer-logo-name {
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }

        .ob-drawer-logo-tag {
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          display: block;
        }

        /* Drawer links */
        .ob-drawer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .ob-drawer-links li {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          animation: drawerSlide 0.4s ease both;
        }

        @keyframes drawerSlide {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .ob-drawer-links li:nth-child(1) { animation-delay: 0.05s; }
        .ob-drawer-links li:nth-child(2) { animation-delay: 0.10s; }
        .ob-drawer-links li:nth-child(3) { animation-delay: 0.15s; }
        .ob-drawer-links li:nth-child(4) { animation-delay: 0.20s; }
        .ob-drawer-links li:nth-child(5) { animation-delay: 0.25s; }

        .ob-drawer-links li a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 4px;
          font-size: 0.95rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.25s, padding-left 0.25s;
        }

        .ob-drawer-links li a:hover { color: rgba(255,255,255,0.9); padding-left: 8px; }

        .ob-drawer-links li a.active {
          color: #fff;
          padding-left: 8px;
        }

        .ob-drawer-links li a.active .ob-drawer-num { color: #0b0ced; }

        .ob-drawer-num {
          font-family: 'Fraunces', serif;
          font-size: 0.7rem;
          font-style: italic;
          color: rgba(255,255,255,0.2);
          transition: color 0.25s;
        }

        .ob-drawer-chevron {
          color: rgba(255,255,255,0.2);
          font-size: 0.75rem;
          transition: transform 0.25s, color 0.25s;
        }

        .ob-drawer-links li a:hover .ob-drawer-chevron,
        .ob-drawer-links li a.active .ob-drawer-chevron {
          transform: translateX(4px);
          color: #0b0ced;
        }

        /* Contact pill at bottom of drawer */
        .ob-drawer-foot {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .ob-drawer-foot a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 20px;
          background: rgba(11,12,237,0.12);
          border: 1px solid rgba(11,12,237,0.25);
          border-radius: 12px;
          color: #fff;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .ob-drawer-foot a:hover {
          background: #0b0ced;
          border-color: #0b0ced;
          box-shadow: 0 8px 24px rgba(11,12,237,0.4);
        }

        .ob-drawer-foot-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .ob-drawer-foot a:hover .ob-drawer-foot-arrow { background: rgba(255,255,255,0.2); }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 1100px) {
          .ob-nav-inner { padding: 0 36px; }
          .ob-links li a { padding: 10px 13px; }
          .ob-sep { display: none; }
        }

        @media (max-width: 820px) {
          .ob-links,
          .ob-logo { display: none; }
          .ob-burger { display: flex; }
          .ob-nav-inner { padding: 0 24px; }
        }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav id="ob-nav" className={scrolled ? 'scrolled' : 'idle'}>
        <div className="ob-nav-inner">

          {/* Desktop: Links LEFT */}
          <ul className="ob-links">
            {navLinks.map(({ to, label, key }, idx) => (
              <React.Fragment key={key}>
                {idx > 0 && <div className="ob-sep" />}
                <li>
                  <Link to={to} className={splitLocation[1] === key ? 'active' : ''}>
                    <span className="ob-num">0{idx + 1}</span>
                    {label}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>

          {/* Desktop: Logo RIGHT */}
          <Link to="/" className="ob-logo">
            <div className="ob-logo-text">
              <span className="ob-logo-name">Orthobox</span>
              <span className="ob-logo-tag">Prosthetics & Orthotics</span>
            </div>
            <div className="ob-logo-divider" />
            <div className="ob-logo-mark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
          </Link>

          {/* Mobile: Hamburger */}
          <button
            className={`ob-burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>

        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`ob-drawer${menuOpen ? ' open' : ''}`}>
        <div className="ob-drawer-inner">

          {/* Mini logo inside drawer */}
          <Link to="/" className="ob-drawer-logo">
            <div className="ob-drawer-logo-mark">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <span className="ob-drawer-logo-name">Orthobox</span>
              <span className="ob-drawer-logo-tag">Prosthetics & Orthotics</span>
            </div>
          </Link>

          {/* Links */}
          <ul className="ob-drawer-links">
            {navLinks.map(({ to, label, key }, idx) => (
              <li key={key}>
                <Link to={to} className={splitLocation[1] === key ? 'active' : ''}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span className="ob-drawer-num">0{idx + 1}</span>
                    {label}
                  </span>
                  <span className="ob-drawer-chevron">›</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact foot CTA */}
          <div className="ob-drawer-foot">
            <Link to="/contact">
              <span>Get in Touch</span>
              <span className="ob-drawer-foot-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
