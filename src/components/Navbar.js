import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navLinks = [
    { to: "/",        label: "Home",        key: "" },
    { to: "/about",   label: "About Us",    key: "about" },
    { to: "/services",label: "Our Services",key: "services" },
    { to: "/careers", label: "Careers",     key: "careers" },
    { to: "/contact", label: "Contact Us",  key: "contact" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Fraunces:wght@700&display=swap');

        :root {
          --nav-height: 72px;
          --nav-bg-idle: rgba(24, 28, 36, 0);
          --nav-bg-scroll: rgba(16, 19, 26, 0.96);
          --nav-border: rgba(255,255,255,0.06);
          --nav-accent: #0b0ced;
          --nav-text: rgba(255,255,255,0.62);
          --nav-text-hover: #ffffff;
          --nav-active: #ffffff;
        }

        #ortho-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          padding: 0 48px;
          background: var(--nav-bg-idle);
          border-bottom: 1px solid transparent;
          transition:
            background 0.4s ease,
            border-color 0.4s ease,
            box-shadow 0.4s ease;
          font-family: 'Manrope', sans-serif;
        }

        #ortho-navbar.scrolled {
          background: var(--nav-bg-scroll);
          border-color: var(--nav-border);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .nav-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── LOGO ── */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-mark {
          width: 34px;
          height: 34px;
          background: var(--nav-accent);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .nav-logo:hover .nav-logo-mark {
          transform: rotate(-6deg) scale(1.08);
          box-shadow: 0 6px 20px rgba(11,12,237,0.45);
        }

        .nav-logo-mark svg { color: #fff; display: block; }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 1px;
        }

        .nav-logo-name {
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;
        }

        .nav-logo-sub {
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }

        /* ── LINKS ── */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          position: relative;
          display: flex;
          align-items: center;
          padding: 8px 16px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: var(--nav-text);
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.25s ease, background 0.25s ease;
          white-space: nowrap;
        }

        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 16px;
          height: 2px;
          background: var(--nav-accent);
          border-radius: 1px;
          transition: transform 0.3s ease;
        }

        .nav-links li a:hover {
          color: var(--nav-text-hover);
          background: rgba(255,255,255,0.05);
        }

        .nav-links li a:hover::after { transform: translateX(-50%) scaleX(1); }

        .nav-links li a.active {
          color: var(--nav-active);
          background: rgba(255,255,255,0.07);
        }

        .nav-links li a.active::after { transform: translateX(-50%) scaleX(1); }

        /* ── CTA BUTTON ── */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 22px;
          background: var(--nav-accent);
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 0.76rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(11,12,237,0.3);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-cta:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(11,12,237,0.5);
          background: #0a0bc5;
        }

        .nav-cta svg { transition: transform 0.3s; }
        .nav-cta:hover svg { transform: translateX(3px); }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          gap: 5px;
          transition: background 0.25s;
          flex-shrink: 0;
        }

        .nav-hamburger:hover { background: rgba(255,255,255,0.09); }

        .nav-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: all 0.35s ease;
          transform-origin: center;
        }

        .nav-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ── MOBILE DRAWER ── */
        .nav-drawer {
          position: fixed;
          top: var(--nav-height);
          left: 0;
          right: 0;
          background: rgba(14, 17, 23, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 16px 24px 28px;
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
        }

        .nav-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .nav-drawer ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nav-drawer ul li a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 13px 16px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }

        .nav-drawer ul li a:hover {
          color: #fff;
          background: rgba(255,255,255,0.06);
        }

        .nav-drawer ul li a.active {
          color: #fff;
          background: rgba(11,12,237,0.15);
          border-left: 2px solid var(--nav-accent);
          padding-left: 14px;
        }

        .drawer-arrow {
          opacity: 0.3;
          font-size: 0.8rem;
          transition: opacity 0.2s, transform 0.2s;
        }

        .nav-drawer ul li a:hover .drawer-arrow,
        .nav-drawer ul li a.active .drawer-arrow {
          opacity: 1;
          transform: translateX(3px);
        }

        .drawer-cta {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .drawer-cta a {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          background: var(--nav-accent);
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 6px 20px rgba(11,12,237,0.3);
        }

        .drawer-cta a:hover {
          background: #0a0bc5;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(11,12,237,0.45);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          #ortho-navbar { padding: 0 32px; }
          .nav-links li a { padding: 8px 12px; font-size: 0.75rem; }
        }

        @media (max-width: 768px) {
          #ortho-navbar { padding: 0 24px; }
          .nav-links, .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav id="ortho-navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="nav-logo-mark">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Orthobox</span>
              <span className="nav-logo-sub">Prosthetics & Orthotics</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map(({ to, label, key }) => (
              <li key={key}>
                <Link to={to} className={splitLocation[1] === key ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/contact" className="nav-cta">
            <span>Get in Touch</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>

          {/* Hamburger */}
          <div
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && setMenuOpen(v => !v)}
          >
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer${menuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map(({ to, label, key }) => (
            <li key={key}>
              <Link to={to} className={splitLocation[1] === key ? 'active' : ''}>
                {label}
                <span className="drawer-arrow">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="drawer-cta">
          <Link to="/contact">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
