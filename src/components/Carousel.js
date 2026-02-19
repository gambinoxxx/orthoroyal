import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import shapeImg from "../img/img-wave2.png";
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

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  // Removed [direction, setDirection] because it wasn't being used in the JSX
  const intervalRef = useRef(null);

  const goTo = useCallback((dir, index = null) => {
    if (animating) return;
    setAnimating(true);
    
    setTimeout(() => {
      if (index !== null) {
        setCurrent(index);
      } else {
        setCurrent((prev) =>
          dir === "next"
            ? (prev + 1) % slides.length
            : (prev - 1 + slides.length) % slides.length
        );
      }
      setAnimating(false);
    }, 500);
  }, [animating]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto(); // Clear any existing interval before starting a new one
    intervalRef.current = setInterval(() => {
      goTo("next");
    }, 5000);
  }, [goTo, stopAuto]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]); // Added dependencies to satisfy ESLint

  const handleDotClick = (i) => {
    stopAuto();
    const dir = i > current ? "next" : "prev";
    goTo(dir, i);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --hero-bg: #f7f5f2;
          --accent: #1a5c6b;
          --accent-light: #2a8fa8;
          --accent-gold: #c9a96e;
          --text-dark: #1a1a2e;
          --text-muted: #6b7280;
          --card-radius: 24px;
          --transition: cubic-bezier(0.4, 0, 0.2, 1);
        }

        #hero {
          font-family: 'DM Sans', sans-serif;
          background: var(--hero-bg);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0;
        }

        #hero::before {
          content: '';
          position: absolute;
          top: -120px;
          right: -80px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(26,92,107,0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        #hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -60px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-wave-shape {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 80px 0 60px;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-right: 48px;
          animation: fadeSlideUp 0.9s var(--transition) forwards;
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 20px;
          animation: fadeSlideUp 0.7s var(--transition) 0.1s both;
        }

        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: var(--accent-gold);
          border-radius: 2px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          font-weight: 900;
          line-height: 1.05;
          color: var(--text-dark);
          margin: 0 0 28px;
          animation: fadeSlideUp 0.8s var(--transition) 0.2s both;
        }

        .hero-title span {
          color: var(--accent);
          position: relative;
          display: inline-block;
        }

        .hero-title span::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent-gold);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: lineReveal 0.6s var(--transition) 1s forwards;
        }

        @keyframes lineReveal {
          to { transform: scaleX(1); }
        }

        .hero-desc {
          font-size: clamp(0.95rem, 1.3vw, 1.1rem);
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.85;
          max-width: 480px;
          margin: 0 0 40px;
          animation: fadeSlideUp 0.8s var(--transition) 0.35s both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.8s var(--transition) 0.5s both;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 34px;
          background: var(--accent);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s var(--transition);
          box-shadow: 0 8px 24px rgba(26,92,107,0.28);
          position: relative;
          overflow: hidden;
        }

        .btn-primary-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent-light);
          border-radius: inherit;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s var(--transition);
          z-index: 0;
        }

        .btn-primary-hero:hover::before { transform: scaleX(1); }
        .btn-primary-hero:hover { color: #fff; box-shadow: 0 12px 32px rgba(26,92,107,0.38); transform: translateY(-2px); }
        .btn-primary-hero span { position: relative; z-index: 1; }

        .btn-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.3s;
        }
        .btn-primary-hero:hover .btn-arrow { transform: translateX(4px); }

        .stat-pills {
          display: flex;
          gap: 14px;
          margin-top: 40px;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.8s var(--transition) 0.65s both;
        }

        .stat-pill {
          background: #fff;
          border: 1px solid rgba(26,92,107,0.12);
          border-radius: 14px;
          padding: 12px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
        }

        .stat-pill-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }

        .stat-pill-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }

        .hero-visual {
          position: relative;
          animation: fadeSlideUp 1s var(--transition) 0.3s both;
        }

        .carousel-frame {
          position: relative;
          border-radius: var(--card-radius);
          overflow: hidden;
          aspect-ratio: 4/5;
          max-height: 560px;
          box-shadow:
            0 30px 80px rgba(26,92,107,0.18),
            0 0 0 6px rgba(255,255,255,0.9),
            0 0 0 7px rgba(26,92,107,0.08);
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 0.6s var(--transition), transform 0.8s var(--transition);
          z-index: 1;
        }

        .carousel-slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .carousel-slide::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 45%;
          background: linear-gradient(to top, rgba(26,92,107,0.65), transparent);
          z-index: 1;
        }

        .slide-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 3;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.5s var(--transition) 0.3s;
        }

        .carousel-slide.active .slide-label {
          opacity: 1;
          transform: translateY(0);
        }

        .floating-badge {
          position: absolute;
          top: -22px;
          left: -22px;
          background: #fff;
          border-radius: 18px;
          padding: 14px 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 5;
          animation: floatBadge 4s ease-in-out infinite;
        }

        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .badge-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--accent), var(--accent-light));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.1rem;
        }

        .badge-text-top {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1;
        }

        .badge-text-bottom {
          font-size: 0.65rem;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .floating-tag {
          position: absolute;
          bottom: -18px;
          right: -18px;
          background: var(--accent-gold);
          border-radius: 50px;
          padding: 10px 18px;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          box-shadow: 0 6px 20px rgba(201,169,110,0.4);
          z-index: 5;
          animation: floatTag 4s ease-in-out 2s infinite;
        }

        @keyframes floatTag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .carousel-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 20px;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(26,92,107,0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s var(--transition);
          padding: 0;
        }

        .carousel-dot.active {
          width: 24px;
          border-radius: 4px;
          background: var(--accent);
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          gap: 10px;
          z-index: 6;
        }

        .carousel-nav.left { left: -18px; }
        .carousel-nav.right { right: -18px; }

        .nav-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #fff;
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.12);
          transition: all 0.25s;
          font-size: 1rem;
        }

        .nav-btn:hover {
          background: var(--accent);
          color: #fff;
          transform: scale(1.08);
        }

        @media (max-width: 991px) {
          .hero-inner { padding: 60px 0 40px; }
          .hero-content {
            padding-right: 0;
            padding-bottom: 40px;
            text-align: center;
            align-items: center;
          }
          .hero-desc { max-width: 100%; }
          .floating-badge { top: -14px; left: -14px; }
          .floating-tag { bottom: -14px; right: -14px; }
          .stat-pills { justify-content: center; }
          .carousel-nav.left { left: -12px; }
          .carousel-nav.right { right: -12px; }
        }

        @media (max-width: 576px) {
          .hero-title { font-size: 2.6rem; }
          .carousel-frame { aspect-ratio: 3/4; max-height: 380px; }
          .floating-badge, .floating-tag { display: none; }
          .carousel-nav.left, .carousel-nav.right { display: none; }
          .hero-actions { justify-content: center; }
          .stat-pills { gap: 10px; }
          .stat-pill { padding: 10px 16px; }
        }
      `}</style>

      <section id="hero">
        <img className="hero-wave-shape" src={shapeImg} alt="" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 col-12">
              <div className="hero-content">
                <span className="hero-eyebrow">Orthobox Prosthetics</span>
                <h1 className="hero-title">
                  Beyond<br />
                  <span>Limits</span>
                </h1>
                <p className="hero-desc">
                  We design prosthetic solutions that don't just restore function —
                  they ignite possibility. With fresh thinking and technical excellence,
                  we ensure your abilities always outshine your disabilities.
                </p>
                <div className="hero-actions">
                  <Link to="/about" className="btn-primary-hero">
                    <span>Discover Our Story</span>
                    <svg className="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
                <div className="stat-pills">
                  <div className="stat-pill">
                    <span className="stat-pill-value">15+</span>
                    <span className="stat-pill-label">Years Experience</span>
                  </div>
                  <div className="stat-pill">
                    <span className="stat-pill-value">2k+</span>
                    <span className="stat-pill-label">Lives Changed</span>
                  </div>
                  <div className="stat-pill">
                    <span className="stat-pill-value">98%</span>
                    <span className="stat-pill-label">Satisfaction Rate</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="hero-visual">
                <div className="floating-badge">
                  <div className="badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="badge-text-top">ISO Certified</div>
                    <div className="badge-text-bottom">Medical Grade</div>
                  </div>
                </div>

                <div className="carousel-frame">
                  {slides.map((slide, i) => (
                    <div
                      key={i}
                      className={`carousel-slide${i === current ? " active" : ""}`}
                    >
                      <img src={slide.img} alt={slide.label} />
                      <span className="slide-label">{slide.label}</span>
                    </div>
                  ))}
                </div>

                <div className="carousel-dots">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      className={`carousel-dot${i === current ? " active" : ""}`}
                      onClick={() => handleDotClick(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="carousel-nav left">
                  <button
                    className="nav-btn"
                    onClick={() => { stopAuto(); goTo("prev"); }}
                    aria-label="Previous slide"
                  >
                    ‹
                  </button>
                </div>
                <div className="carousel-nav right">
                  <button
                    className="nav-btn"
                    onClick={() => { stopAuto(); goTo("next"); }}
                    aria-label="Next slide"
                  >
                    ›
                  </button>
                </div>
                <div className="floating-tag">✦ Advanced Prosthetics</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
