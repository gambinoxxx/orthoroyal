import React from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <section id="ob-revenue" className="ob-revenue">
      <div className="ob-revenue-inner">

        {/* ── LEFT: Content ── */}
        <div className="ob-revenue-content" data-aos="fade-right" data-aos-delay="100">

          {/* Eyebrow label */}
          <div className="ob-revenue-eyebrow">
            <span className="ob-revenue-eyebrow-dot"></span>
            Our Mission
          </div>

          {/* Headline */}
          <h2 className="ob-revenue-heading">
            The Future of<br />
            Prosthetics in<br />
            <em>Africa</em> — Redefined.
          </h2>

          {/* Pull quote / body */}
          <p className="ob-revenue-body">
            While Africa presents unique challenges in prosthetic care,
            we see boundless opportunity. Orthoroyal combines global expertise
            with local understanding to bridge accessibility gaps, bringing
            world-class prosthetic solutions to communities across the continent.
          </p>

          <p className="ob-revenue-body ob-revenue-body--accent">
            We're not just navigating challenges — we're transforming them
            into possibilities for mobility and independence.
          </p>

          {/* Stats row */}
          <div className="ob-revenue-stats">
            <div className="ob-revenue-stat">
              <span className="ob-revenue-stat-num">10<em>+</em></span>
              <span className="ob-revenue-stat-label">Years of expertise</span>
            </div>
            <div className="ob-revenue-stat-divider"></div>
            <div className="ob-revenue-stat">
              <span className="ob-revenue-stat-num">5k<em>+</em></span>
              <span className="ob-revenue-stat-label">Lives transformed</span>
            </div>
            <div className="ob-revenue-stat-divider"></div>
            <div className="ob-revenue-stat">
              <span className="ob-revenue-stat-num">12<em>+</em></span>
              <span className="ob-revenue-stat-label">African nations served</span>
            </div>
          </div>

          <Link to="/about" className="ob-revenue-cta">
            <span>Read Our Story</span>
            <span className="ob-revenue-cta-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </Link>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="ob-revenue-visual" data-aos="fade-left" data-aos-delay="250">

          {/* Decorative corner bracket top-left */}
          <div className="ob-revenue-bracket ob-revenue-bracket--tl">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M28 2H2V28" stroke="#0b0ced" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Decorative corner bracket bottom-right */}
          <div className="ob-revenue-bracket ob-revenue-bracket--br">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M0 26H26V0" stroke="#0b0ced" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Shadow block */}
          <div className="ob-revenue-shadow-block"></div>

          {/* Image */}
          <div className="ob-revenue-img-wrap">
            <img src={dashboard} alt="Orthoroyal prosthetics dashboard" className="ob-revenue-img" />
          </div>

          {/* Floating badge */}
          <div className="ob-revenue-badge">
            <span className="ob-revenue-badge-pulse"></span>
            <span className="ob-revenue-badge-text">ISO Certified</span>
          </div>

          {/* Floating stat card */}
          <div className="ob-revenue-float-card">
            <div className="ob-revenue-float-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <div>
              <div className="ob-revenue-float-num">98%</div>
              <div className="ob-revenue-float-label">Patient satisfaction</div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative geometric accent */}
      <div className="ob-revenue-geo" aria-hidden="true">AFRICA</div>

    </section>
  )
}

export default Revenue
