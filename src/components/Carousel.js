/**
 * DESIGN A — "Corporate Authority"
 * Dark navy left panel split-screen layout. Ultra-professional, editorial weight.
 * Monospace accents, sharp geometry, white carousel on dark.
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import heroImg1 from "../img/header/hero-image-1.jpg";
import heroImg2 from "../img/header/hero-image-2.jpg";
import heroImg3 from "../img/header/hero-image-3.jpg";
import heroImg4 from "../img/header/hero-image-4.jpg";

const slides = [
  { img: heroImg1, label: "Advanced Prosthetics" },
  { img: heroImg2, label: "Precision Engineering" },
  { img: heroImg3, label: "Restoring Mobility" },
  { img: heroImg4, label: "Empowering Lives" },
];

const CarouselA = () => {
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
    }, 500);
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500&family=IBM+Plex+Mono:wght@400&display=swap');

        #hero-a {
          font-family: 'IBM Plex Sans', sans-serif;
          min-height: 100vh;
          background: #0d1117;
          display: flex;
          align-items: stretch;
          position: relative;
          overflow: hidden;
        }

        /* Subtle grid texture overlay */
        #hero-a::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-a-container {
          width: 100%;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          position: relative;
          z-index: 1;
        }

        /* LEFT PANEL */
        .hero-a-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px 80px 80px;
          position: relative;
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        .hero-a-left::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(11,12,237,0.6), transparent);
        }

        .a-tag {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #0b0ced;
          margin-bottom: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
          animation: aFadeUp 0.7s ease 0.1s both;
        }

        .a-tag::before {
          content: '';
          width: 32px;
          height: 1px;
          background: #0b0ced;
        }

        .a-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.5rem, 5vw, 6rem);
          font-weight: 700;
          line-height: 0.95;
          color: #ffffff;
          margin: 0 0 32px;
          animation: aFadeUp 0.8s ease 0.2s both;
        }

        .a-title-accent {
          color: #0b0ced;
          font-style: italic;
          position: relative;
          display: block;
        }

        .a-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, #0b0ced, transparent);
          margin-bottom: 28px;
          animation: aFadeUp 0.6s ease 0.3s both;
        }

        .a-desc {
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.9;
          max-width: 420px;
          margin-bottom: 44px;
          animation: aFadeUp 0.8s ease 0.35s both;
        }

        .a-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 14px 32px;
          background: #0b0ced;
          color: #fff;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          position: relative;
          overflow: hidden;
          animation: aFadeUp 0.8s ease 0.5s both;
        }

        .a-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .a-btn:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(11,12,237,0.4); }
        .a-btn:hover::after { transform: translateX(0); }

        .a-btn svg { transition: transform 0.3s; }
        .a-btn:hover svg { transform: translateX(5px); }

        .a-stats {
          display: flex;
          gap: 0;
          margin-top: 52px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 32px;
          animation: aFadeUp 0.8s ease 0.65s both;
        }

        .a-stat {
          flex: 1;
          padding-right: 24px;
          border-right: 1px solid rgba(255,255,255,0.08);
          margin-right: 24px;
        }

        .a-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }

        .a-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .a-stat-lbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }

        /* RIGHT PANEL */
        .hero-a-right {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 60px 60px 48px;
          background: #080c12;
        }

        .a-carousel-wrap {
          position: relative;
          width: 100%;
          max-width: 420px;
        }

        .a-carousel-frame {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 3/4;
          background: #111;
        }

        /* Corner accents */
        .a-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 10;
        }
        .a-corner.tl { top: -6px; left: -6px; border-top: 2px solid #0b0ced; border-left: 2px solid #0b0ced; }
        .a-corner.tr { top: -6px; right: -6px; border-top: 2px solid #0b0ced; border-right: 2px solid #0b0ced; }
        .a-corner.bl { bottom: -6px; left: -6px; border-bottom: 2px solid #0b0ced; border-left: 2px solid #0b0ced; }
        .a-corner.br { bottom: -6px; right: -6px; border-bottom: 2px solid #0b0ced; border-right: 2px solid #0b0ced; }

        .a-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 1;
        }

        .a-slide.active { opacity: 1; z-index: 2; }

        .a-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.88) contrast(1.05);
        }

        .a-slide::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,12,18,0.7) 0%, transparent 50%);
          z-index: 1;
        }

        .a-slide-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          z-index: 3;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.5s ease 0.3s;
        }

        .a-slide.active .a-slide-label { opacity: 1; transform: translateY(0); }

        /* Progress bar */
        .a-progress {
          display: flex;
          gap: 6px;
          margin-top: 20px;
        }

        .a-progress-bar {
          flex: 1;
          height: 2px;
          background: rgba(255,255,255,0.12);
          border-radius: 1px;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.3s;
        }

        .a-progress-bar.active { background: rgba(11,12,237,0.3); }

        .a-progress-fill {
          height: 100%;
          background: #0b0ced;
          transform: scaleX(0);
          transform-origin: left;
          border-radius: 1px;
        }

        .a-progress-bar.active .a-progress-fill {
          animation: fillBar 5s linear forwards;
        }

        @keyframes fillBar { to { transform: scaleX(1); } }

        /* Nav */
        .a-nav {
          position: absolute;
          bottom: 50px;
          right: -20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }

        .a-nav-btn {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(8,12,18,0.9);
          color: rgba(255,255,255,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          font-size: 1rem;
          backdrop-filter: blur(4px);
        }

        .a-nav-btn:hover { background: #0b0ced; color: #fff; border-color: #0b0ced; }

        /* Counter */
        .a-counter {
          position: absolute;
          top: 20px;
          right: 20px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35);
          z-index: 10;
        }

        /* Certified badge */
        .a-badge {
          position: absolute;
          top: 30px;
          left: -20px;
          background: #0d1117;
          border: 1px solid rgba(11,12,237,0.4);
          padding: 12px 16px;
          z-index: 10;
        }

        .a-badge-inner {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .a-badge-dot {
          width: 8px;
          height: 8px;
          background: #0b0ced;
          border-radius: 50%;
          box-shadow: 0 0 8px #0b0ced;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }

        .a-badge-text {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }

        @keyframes aFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .hero-a-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
          }
          .hero-a-left {
            padding: 60px 40px 40px;
            text-align: center;
            align-items: center;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .hero-a-left::after { display: none; }
          .a-tag { justify-content: center; }
          .a-desc { max-width: 100%; }
          .hero-a-right {
            padding: 48px 40px 60px;
          }
          .a-carousel-wrap { max-width: 360px; }
          .a-badge { display: none; }
          .a-nav { right: -16px; bottom: 40px; }
          .a-stats { justify-content: center; }
        }

        @media (max-width: 576px) {
          .hero-a-left { padding: 48px 24px 32px; }
          .a-title { font-size: 3rem; }
          .hero-a-right { padding: 32px 24px 48px; }
          .a-carousel-wrap { max-width: 100%; }
          .a-nav { display: none; }
          .a-stats { gap: 0; }
          .a-stat { padding-right: 16px; margin-right: 16px; }
          .a-stat-val { font-size: 1.6rem; }
        }
      `}</style>

      <section id="hero-a">
        <div className="hero-a-container">
          {/* LEFT */}
          <div className="hero-a-left">
            <span className="a-tag">Orthobox Prosthetics</span>
            <h1 className="a-title">
              Beyond<br />
              <span className="a-title-accent">Limits</span>
            </h1>
            <div className="a-divider" />
            <p className="a-desc">
              We design prosthetic solutions that don't just restore function —
              they ignite possibility. With fresh thinking and technical excellence,
              we ensure your abilities always outshine your disabilities.
            </p>
            <Link to="/about" className="a-btn">
              <span>Discover Our Story</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <div className="a-stats">
              <div className="a-stat">
                <div className="a-stat-val">15+</div>
                <div className="a-stat-lbl">Years</div>
              </div>
              <div className="a-stat">
                <div className="a-stat-val">2k+</div>
                <div className="a-stat-lbl">Lives Changed</div>
              </div>
              <div className="a-stat">
                <div className="a-stat-val">98%</div>
                <div className="a-stat-lbl">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-a-right">
            <div className="a-carousel-wrap">
              {/* Certified badge */}
              <div className="a-badge">
                <div className="a-badge-inner">
                  <div className="a-badge-dot" />
                  <div className="a-badge-text">ISO Certified<br/>Medical Grade</div>
                </div>
              </div>

              {/* Corner accents */}
              <div className="a-corner tl" />
              <div className="a-corner tr" />
              <div className="a-corner bl" />
              <div className="a-corner br" />

              {/* Counter */}
              <div className="a-counter">{String(current + 1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</div>

              <div className="a-carousel-frame">
                {slides.map((s, i) => (
                  <div key={i} className={`a-slide${i === current ? " active" : ""}`}>
                    <img src={s.img} alt={s.label} />
                    <span className="a-slide-label">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="a-progress">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`a-progress-bar${i === current ? " active" : ""}`}
                    onClick={() => handleDotClick(i)}
                  >
                    <div className="a-progress-fill" />
                  </div>
                ))}
              </div>

              <div className="a-nav">
                <button className="a-nav-btn" onClick={() => { stopAuto(); goTo("prev"); }} aria-label="Previous">&#8593;</button>
                <button className="a-nav-btn" onClick={() => { stopAuto(); goTo("next"); }} aria-label="Next">&#8595;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselA;
