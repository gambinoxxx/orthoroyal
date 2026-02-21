/**
 * DESIGN C — "Editorial Depth"
 * Deep charcoal/slate background. Full-bleed image right column.
 * Magazine-inspired typography, large counter numerals, sophisticated motion.
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import heroImg1 from "../img/header/hero-image-3.jpg";
import heroImg2 from "../img/header/hero-image-2.jpg";
import heroImg3 from "../img/header/hero-image-1.jpg";
import heroImg4 from "../img/header/hero-image-4.jpg";

const slides = [
  { img: heroImg1, label: "Advanced Prosthetics" },
  { img: heroImg2, label: "Precision Engineering" },
  { img: heroImg3, label: "Restoring Mobility" },
  { img: heroImg4, label: "Empowering Lives" },
];

const CarouselC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = useCallback((dir, index = null) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      if (index !== null) setCurrent(index);
      else setCurrent((prev) => dir === "next" ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length);
      setAnimating(false);
    }, 600);
  }, [animating]);

  const stopAuto = useCallback(() => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);
  const startAuto = useCallback(() => {
    stopAuto();
    intervalRef.current = setInterval(() => goTo("next"), 5000);
  }, [goTo, stopAuto]);

  useEffect(() => { startAuto(); return () => stopAuto(); }, [startAuto, stopAuto]);

  const handleDotClick = (i) => { stopAuto(); goTo(i > current ? "next" : "prev", i); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,700;0,900;1,700&family=Manrope:wght@300;400;500;600&display=swap');

        #hero-c {
          font-family: 'Manrope', sans-serif;
          min-height: 100vh;
          background: #181c24;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          overflow: hidden;
        }

        /* LEFT SIDE */
        .c-left {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px 56px 56px 72px;
          background: #181c24;
          border-right: 1px solid rgba(255,255,255,0.06);
        }

        /* Subtle noise texture via repeating-gradient */
        .c-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .c-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          z-index: 1;
          animation: cFade 0.6s ease both;
        }

        @keyframes cFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .c-logo-area {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .c-logo-mark {
          width: 32px;
          height: 32px;
          background: #0b0ced;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .c-logo-mark svg { color: #fff; }

        .c-brand {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }

        .c-year {
          font-size: 0.72rem;
          font-weight: 300;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.25);
        }

        /* MAIN CONTENT */
        .c-main {
          position: relative;
          z-index: 1;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
        }

        .c-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          animation: cFade 0.7s ease 0.15s both;
        }

        .c-eyebrow-dot {
          width: 6px;
          height: 6px;
          background: #0b0ced;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(11,12,237,0.6);
        }

        .c-eyebrow-text {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .c-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(3.5rem, 5vw, 6.5rem);
          font-weight: 900;
          line-height: 0.92;
          color: #fff;
          margin: 0 0 36px;
          animation: cFade 0.8s ease 0.25s both;
        }

        .c-title-blue {
          color: #0b0ced;
          font-style: italic;
          display: block;
          position: relative;
        }

        /* Ghost text decoration */
        .c-ghost {
          position: absolute;
          top: -8px;
          left: -2px;
          font-family: 'Fraunces', serif;
          font-size: clamp(3.5rem, 5vw, 6.5rem);
          font-weight: 900;
          font-style: italic;
          color: transparent;
          -webkit-text-stroke: 1px rgba(11,12,237,0.15);
          transform: translate(4px, 4px);
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
        }

        .c-desc {
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(255,255,255,0.45);
          line-height: 1.95;
          max-width: 380px;
          margin-bottom: 40px;
          animation: cFade 0.8s ease 0.4s both;
        }

        .c-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 15px 32px;
          background: #0b0ced;
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          width: fit-content;
          transition: all 0.3s ease;
          box-shadow: 0 8px 28px rgba(11,12,237,0.35);
          animation: cFade 0.8s ease 0.55s both;
          position: relative;
          overflow: hidden;
        }

        .c-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          border-radius: inherit;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .c-btn:hover::before { transform: scaleX(1); }
        .c-btn:hover { color: #fff; transform: translateY(-3px); box-shadow: 0 16px 40px rgba(11,12,237,0.5); }
        .c-btn svg { transition: transform 0.3s; position: relative; z-index: 1; }
        .c-btn:hover svg { transform: translateX(4px); }
        .c-btn span { position: relative; z-index: 1; }

        /* BOTTOM ROW: stats */
        .c-bottom {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 28px;
          animation: cFade 0.8s ease 0.7s both;
        }

        .c-stat {
          padding-right: 20px;
        }

        .c-stat:not(:last-child) {
          border-right: 1px solid rgba(255,255,255,0.07);
          margin-right: 20px;
        }

        .c-stat-val {
          font-family: 'Fraunces', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .c-stat-lbl {
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 400;
        }

        /* RIGHT SIDE: Full bleed image */
        .c-right {
          position: relative;
          overflow: hidden;
        }

        .c-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s ease;
          z-index: 1;
        }

        .c-slide.active { opacity: 1; z-index: 2; }

        .c-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.04);
          transition: transform 8s ease;
          filter: brightness(0.75) saturate(0.85);
        }

        .c-slide.active img {
          transform: scale(1);
        }

        /* Gradient overlay from left edge */
        .c-slide::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(24,28,36,0.5) 0%, transparent 40%);
          z-index: 1;
        }

        /* Bottom gradient */
        .c-slide::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(24,28,36,0.8), transparent);
          z-index: 1;
        }

        /* Bottom right overlay controls */
        .c-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 28px 32px;
        }

        .c-slide-info {
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.5s ease 0.4s;
        }

        .c-slide.active .c-slide-info {
          opacity: 1;
          transform: translateY(0);
        }

        .c-slide-num {
          font-family: 'Fraunces', serif;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(255,255,255,0.15);
          line-height: 1;
          margin-bottom: 4px;
        }

        .c-slide-lbl {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }

        .c-nav-group {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .c-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.1rem;
          transition: all 0.25s;
          backdrop-filter: blur(6px);
        }

        .c-nav-btn:hover {
          background: #0b0ced;
          border-color: #0b0ced;
          color: #fff;
          transform: scale(1.05);
        }

        /* ISO badge top right of image */
        .c-iso {
          position: absolute;
          top: 28px;
          right: 28px;
          z-index: 10;
          background: rgba(24,28,36,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(11,12,237,0.3);
          border-radius: 12px;
          padding: 12px 16px;
          text-align: center;
        }

        .c-iso-val {
          font-family: 'Fraunces', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0b0ced;
          line-height: 1;
          margin-bottom: 2px;
        }

        .c-iso-lbl {
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* Dots on right panel edge */
        .c-dots {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 10;
        }

        .c-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .c-dot.active {
          height: 16px;
          border-radius: 2px;
          background: #0b0ced;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          #hero-c {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
          }
          .c-left {
            padding: 48px 32px 40px;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            align-items: center;
            text-align: center;
          }
          .c-main {
            padding: 32px 0;
            align-items: center;
          }
          .c-eyebrow { justify-content: center; }
          .c-desc { max-width: 100%; text-align: center; }
          .c-bottom {
            width: 100%;
            justify-items: center;
          }
          .c-stat { text-align: center; }
          .c-right {
            min-height: 55vw;
            max-height: 480px;
            margin-top: 20px;
          }
          .c-dots { right: 12px; }
          .c-header-row { display: none; }
        }

        @media (max-width: 576px) {
          .c-left { padding: 40px 24px 32px; }
          .c-title { font-size: 2.8rem; }
          .c-right {
            min-height: 70vw;
            max-height: 360px;
            margin-top: 16px;
          }
          .c-iso { display: none; }
          .c-dots { display: none; }
          .c-bottom { gap: 0; }
          .c-stat { padding-right: 12px; }
          .c-stat:not(:last-child) { margin-right: 12px; }
          .c-stat-val { font-size: 1.5rem; }
          .c-slide-num { font-size: 2rem; }
        }
      `}</style>

      <section id="hero-c">
        {/* LEFT */}
        <div className="c-left">
          <div className="c-header-row">
            <div className="c-logo-area">
              <div className="c-logo-mark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="c-brand">Orthobox</span>
            </div>
            <span className="c-year">Est. 2024</span>
          </div>

          <div className="c-main">
            <div className="c-eyebrow">
              <span className="c-eyebrow-dot" />
              <span className="c-eyebrow-text">Prosthetics & Orthotics</span>
            </div>

            <h1 className="c-title">
              Beyond<br />
              <span className="c-title-blue" style={{ position: 'relative' }}>
                <span className="c-ghost" aria-hidden="true">Limits</span>
                Limits
              </span>
            </h1>

            <p className="c-desc">
              We design prosthetic solutions that don't just restore function —
              they ignite possibility. With fresh thinking and technical excellence,
              we ensure your abilities always outshine your disabilities.
            </p>

            <Link to="/about" className="c-btn">
              <span>Discover Our Story</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="c-bottom">
            <div className="c-stat">
              <div className="c-stat-val">15+</div>
              <div className="c-stat-lbl">Years Experience</div>
            </div>
            <div className="c-stat">
              <div className="c-stat-val">300+</div>
              <div className="c-stat-lbl">Lives Changed</div>
            </div>
            <div className="c-stat">
              <div className="c-stat-val">98%</div>
              <div className="c-stat-lbl">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Full bleed image */}
        <div className="c-right">
          {slides.map((s, i) => (
            <div key={i} className={`c-slide${i === current ? " active" : ""}`}>
              <img src={s.img} alt={s.label} />
              <div className="c-controls">
                <div className="c-slide-info">
                  <div className="c-slide-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="c-slide-lbl">{s.label}</div>
                </div>
              </div>
            </div>
          ))}

          {/* ISO badge */}
          <div className="c-iso">
            <div className="c-iso-val">ISO</div>
            <div className="c-iso-lbl">Certified<br />Medical</div>
          </div>

          {/* Dots */}
          <div className="c-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`c-dot${i === current ? " active" : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav */}
          <div style={{ position: 'absolute', bottom: 28, right: 32, display: 'flex', gap: 8, zIndex: 10 }}>
            <button
              className="c-nav-btn"
              onClick={() => { stopAuto(); goTo("prev"); }}
              aria-label="Previous"
            >&#8249;</button>
            <button
              className="c-nav-btn"
              onClick={() => { stopAuto(); goTo("next"); }}
              aria-label="Next"
            >&#8250;</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselC;
