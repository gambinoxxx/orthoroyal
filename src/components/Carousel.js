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
  const intervalRef = useRef(null);

  const goTo = useCallback((dir, index = null) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      if (index !== null) {
        setCurrent(index);
      } else {
        setCurrent((prev) =>
          dir === "next" ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length
        );
      }
      setAnimating(false);
    }, 500);
  }, [animating]);

  const stopAuto = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    intervalRef.current = setInterval(() => goTo("next"), 5000);
  }, [goTo, stopAuto]);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Lexend:wght@400;600&display=swap');

        :root {
          --brand-blue: #0b0ced;
          --medical-dark: #0f172a;
          --medical-slate: #64748b;
          --bg-light: #ffffff;
          --transition: cubic-bezier(0.4, 0, 0.2, 1);
        }

        #hero {
          font-family: 'Inter', sans-serif;
          background: var(--bg-light);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 80px 0;
        }

        .hero-title {
          font-family: 'Lexend', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          color: var(--medical-dark);
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-title span { color: var(--brand-blue); }

        .hero-desc {
          font-size: 1.1rem;
          color: var(--medical-slate);
          max-width: 520px;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .btn-primary-hero {
          background: var(--brand-blue);
          color: white;
          padding: 16px 40px;
          border-radius: 4px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .btn-primary-hero:hover {
          background: #0808b0;
          transform: translateY(-2px);
          color: white;
          box-shadow: 0 10px 20px rgba(11, 12, 237, 0.2);
        }

        .carousel-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
        }

        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.6s var(--transition);
        }

        .carousel-slide.active { opacity: 1; }
        .carousel-slide img { width: 100%; height: 100%; object-fit: cover; }

        .carousel-dots { display: flex; gap: 8px; justify-content: center; margin-top: 20px; }
        .carousel-dot { width: 10px; height: 10px; border-radius: 50%; background: #cbd5e1; border: none; cursor: pointer; }
        .carousel-dot.active { background: var(--brand-blue); width: 25px; border-radius: 5px; }

        @media (max-width: 991px) {
          .hero-content { text-align: center; align-items: center; margin-bottom: 50px; }
          .hero-visual { display: flex; flex-direction: column; align-items: center; width: 100%; }
          .carousel-frame { width: 90%; max-width: 400px; margin: 0 auto; }
        }
      `}</style>

      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1 className="hero-title">Beyond <span>Limits</span></h1>
                <p className="hero-desc">We design prosthetic solutions that don't just restore function—they ignite possibility. Ensuring your abilities always outshine your disabilities.</p>
                <Link to="/about" className="btn-primary-hero">Discover Our Story</Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-visual">
                <div className="carousel-frame">
                  {slides.map((slide, i) => (
                    <div key={i} className={`carousel-slide ${i === current ? "active" : ""}`}>
                      <img src={slide.img} alt={slide.label} />
                    </div>
                  ))}
                </div>
                <div className="carousel-dots">
                  {slides.map((_, i) => (
                    <button key={i} className={`carousel-dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Carousel;
