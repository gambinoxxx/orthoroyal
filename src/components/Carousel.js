/**
 * DESIGN B — "Surgical Precision"
 * Pure white luxury clinical. Generous negative space, sharp geometry,
 * asymmetric layout with overlapping elements. Refined and authoritative.
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

const CarouselB = () => {
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
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500&display=swap');

        #hero-b {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          background: #f8f7f4;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 0;
        }

        /* Large geometric circle BG */
        .b-circle-bg {
          position: absolute;
          top: -200px;
          right: -200px;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(11,12,237,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .b-circle-stroke {
          position: absolute;
          bottom: -150px;
          left: -100px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(11,12,237,0.06);
          pointer-events: none;
        }

        /* Vertical rule */
        .b-vr {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent 0%, rgba(11,12,237,0.08) 30%, rgba(11,12,237,0.08) 70%, transparent 100%);
          pointer-events: none;
        }

        .b-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 0.12;
          pointer-events: none;
        }

        .b-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 100px 0 80px;
        }

        .b-row {
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* LEFT CONTENT */
        .b-content {
          flex: 0 0 55%;
          padding-right: 64px;
          animation: bFade 0.9s ease 0.1s both;
        }

        @keyframes bFade {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .b-sup {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
          animation: bFade 0.7s ease 0.15s both;
        }

        .b-sup-line {
          width: 48px;
          height: 1px;
          background: #0b0ced;
        }

        .b-sup-text {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0b0ced;
        }

        .b-title {
          font-family: 'Libre Baskerville', serif;
          font-size: clamp(3.2rem, 4.8vw, 5.8rem);
          font-weight: 700;
          line-height: 1.0;
          color: #111;
          margin: 0 0 36px;
          animation: bFade 0.8s ease 0.25s both;
        }

        .b-title em {
          font-style: italic;
          color: #0b0ced;
          position: relative;
        }

        /* Underline decoration */
        .b-title em::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #0b0ced;
          opacity: 0.15;
          border-radius: 2px;
        }

        .b-desc {
          font-size: 1rem;
          font-weight: 300;
          color: #6b7280;
          line-height: 1.9;
          max-width: 440px;
          margin: 0 0 44px;
          border-left: 2px solid rgba(11,12,237,0.15);
          padding-left: 20px;
          animation: bFade 0.8s ease 0.4s both;
        }

        .b-cta-row {
          display: flex;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
          animation: bFade 0.8s ease 0.55s both;
        }

        .b-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 36px;
          background: #0b0ced;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          border-radius: 0;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }

        .b-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #0a0bc5;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s ease;
        }

        .b-btn:hover::before { transform: scaleX(1); }
        .b-btn:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 14px 36px rgba(11,12,237,0.3); }
        .b-btn span { position: relative; z-index: 1; }
        .b-btn svg { position: relative; z-index: 1; transition: transform 0.3s; }
        .b-btn:hover svg { transform: translateX(4px); }

        .b-link {
          font-size: 0.82rem;
          color: #111;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
          transition: opacity 0.25s;
          font-weight: 400;
        }

        .b-link:hover { opacity: 1; }

        .b-stats {
          display: flex;
          gap: 36px;
          margin-top: 56px;
          padding-top: 36px;
          border-top: 1px solid rgba(0,0,0,0.08);
          animation: bFade 0.8s ease 0.7s both;
          flex-wrap: wrap;
        }

        .b-stat-val {
          font-family: 'Libre Baskerville', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #111;
          line-height: 1;
          margin-bottom: 4px;
        }

        .b-stat-lbl {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9ca3af;
          font-weight: 400;
        }

        /* RIGHT CAROUSEL */
        .b-visual {
          flex: 0 0 45%;
          position: relative;
          animation: bFadeR 1s ease 0.3s both;
        }

        @keyframes bFadeR {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Background block behind image */
        .b-bg-block {
          position: absolute;
          top: 24px;
          left: 24px;
          right: -12px;
          bottom: -12px;
          background: rgba(11,12,237,0.06);
          border-radius: 4px;
          z-index: 0;
        }

        .b-frame {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          aspect-ratio: 3/4;
          max-height: 580px;
          z-index: 1;
          box-shadow: 0 24px 60px rgba(0,0,0,0.14);
        }

        .b-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.7s ease;
          z-index: 1;
        }

        .b-slide.active { opacity: 1; z-index: 2; }

        .b-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .b-slide::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to top, rgba(0,0,0,0.55), transparent);
          z-index: 1;
        }

        .b-slide-lbl {
          position: absolute;
          bottom: 24px;
          left: 24px;
          z-index: 3;
          color: rgba(255,255,255,0.8);
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.5s ease 0.35s;
        }

        .b-slide.active .b-slide-lbl { opacity: 1; transform: translateY(0); }

        /* Floating ISO badge */
        .b-badge {
          position: absolute;
          bottom: 36px;
          left: -32px;
          background: #fff;
          padding: 16px 20px;
          border-radius: 4px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 4px;
          animation: bFloat 5s ease-in-out infinite;
        }

        @keyframes bFloat {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-8px);}
        }

        .b-badge-val {
          font-family: 'Libre Baskerville', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0b0ced;
          line-height: 1;
        }

        .b-badge-txt {
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* Counter top-right */
        .b-counter {
          position: absolute;
          top: -16px;
          right: 16px;
          background: #0b0ced;
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          letter-spacing: 0.1em;
          z-index: 10;
          border-radius: 2px;
        }

        /* Dots */
        .b-dots {
          position: absolute;
          right: -28px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 10;
        }

        .b-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(0,0,0,0.15);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }

        .b-dot.active {
          height: 20px;
          border-radius: 3px;
          background: #0b0ced;
        }

        /* RESPONSIVE */
        @media (max-width: 991px) {
          .b-row { flex-direction: column; gap: 48px; }
          .b-content { flex: none; width: 100%; padding-right: 0; text-align: center; align-items: center; display: flex; flex-direction: column; }
          .b-sup { justify-content: center; }
          .b-desc { border-left: none; border-top: 2px solid rgba(11,12,237,0.15); padding-left: 0; padding-top: 16px; max-width: 100%; }
          .b-cta-row { justify-content: center; }
          .b-stats { justify-content: center; }
          .b-visual { flex: none; width: 100%; display: flex; justify-content: center; }
          .b-visual > div { width: 100%; max-width: 400px; }
          .b-bg-block { display: none; }
          .b-badge { left: 0; }
          .b-dots { right: -20px; }
        }

        @media (max-width: 576px) {
          .b-inner { padding: 60px 0 60px; }
          .b-title { font-size: 2.8rem; }
          .b-frame { max-height: 400px; }
          .b-badge { display: none; }
          .b-dots { display: none; }
          .b-counter { top: -14px; right: 8px; }
          .b-stats { gap: 20px; }
        }
      `}</style>

      <section id="hero-b">
        <div className="b-circle-bg" />
        <div className="b-circle-stroke" />
        <div className="b-vr" />


        <div className="container b-inner">
          <div className="b-row">
            {/* LEFT */}
            <div className="b-content">
              <div className="b-sup">
                <span className="b-sup-line" />
                <span className="b-sup-text">Orthobox Prosthetics</span>
              </div>

              <h1 className="b-title">
                Beyond<br />
                <em>Limits</em>
              </h1>

              <p className="b-desc">
                We design prosthetic solutions that don't just restore function —
                they ignite possibility. With fresh thinking and technical excellence,
                we ensure your abilities always outshine your disabilities.
              </p>

              <div className="b-cta-row">
                <Link to="/about" className="b-btn">
                  <span>Discover Our Story</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
                <a href="#services" className="b-link">
                  Our Services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l10-10M7 7h10v10"/>
                  </svg>
                </a>
              </div>

              <div className="b-stats">
                <div>
                  <div className="b-stat-val">15+</div>
                  <div className="b-stat-lbl">Years Experience</div>
                </div>
                <div>
                  <div className="b-stat-val">2k+</div>
                  <div className="b-stat-lbl">Lives Changed</div>
                </div>
                <div>
                  <div className="b-stat-val">98%</div>
                  <div className="b-stat-lbl">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="b-visual">
              <div style={{ position: 'relative', width: '100%' }}>
                <div className="b-bg-block" />
                <div className="b-counter">{String(current + 1).padStart(2,'0')} / 04</div>

                <div className="b-frame">
                  {slides.map((s, i) => (
                    <div key={i} className={`b-slide${i === current ? " active" : ""}`}>
                      <img src={s.img} alt={s.label} />
                      <span className="b-slide-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Side dots */}
                <div className="b-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`b-dot${i === current ? " active" : ""}`}
                      onClick={() => handleDotClick(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Badge */}
                <div className="b-badge">
                  <div className="b-badge-val">ISO</div>
                  <div className="b-badge-txt">Certified<br/>Medical Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselB;


