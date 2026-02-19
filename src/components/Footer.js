import React from "react";
import footerLogo from '../img/sym-logo.svg';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="ob-footer">

      {/* ── MAIN BODY ── */}
      <div className="ob-footer-main">
        <div className="ob-footer-grid">

          {/* COL 1: Brand */}
          <div className="ob-footer-brand">
            <Link to="/" className="ob-footer-logo">
              <div className="ob-footer-logo-mark">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <img src={footerLogo} alt="Orthoroyal" className="ob-footer-logo-img" />
            </Link>

            <div className="ob-footer-tagline">
              Beyond<br /><em>Limits.</em>
            </div>

            <p className="ob-footer-desc">
              A global leader in prosthetic solutions — offering Consultations,
              Device Maintenance, Component Solutions and Rehabilitation Support.
            </p>

            <div className="ob-footer-socials">
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/company/symbiotic-infotech-pvt-ltd/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* COL 2: Navigation */}
          <div>
            <div className="ob-footer-col-title">Navigation</div>
            <ul className="ob-footer-links">
              {[
                { to: "/",         label: "Home" },
                { to: "/about",    label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/careers",  label: "Careers" },
                { to: "/contact",  label: "Contact Us" },
              ].map(({ to, label }, i) => (
                <li key={to}>
                  <Link to={to}>
                    <span className="ob-fl-num">0{i + 1}</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: Services */}
          <div>
            <div className="ob-footer-col-title">Our Services</div>
            <ul className="ob-footer-links">
              {[
                { to: "/services/#Educational-content",   label: "Consultation" },
                { to: "/services/#Entertainment-content", label: "Device Maintenance" },
                { to: "/services/#Games",                 label: "Rehabilitation Support" },
                { to: "/services/#Sports",                label: "Component Solutions" },
              ].map(({ to, label }, i) => (
                <li key={label}>
                  <HashLink smooth to={to}>
                    <span className="ob-fl-num">0{i + 1}</span>
                    {label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: Contact */}
          <div className="ob-footer-contact">
            <div className="ob-footer-col-title">Contact</div>

            <div className="ob-footer-contact-item">
              <div className="ob-footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div className="ob-footer-contact-label">Address</div>
                <div className="ob-footer-contact-val">
                  #9 Ibiteye St, Off Adeshiyan St,<br />
                  Odi-olowo, Lagos — 100001
                </div>
              </div>
            </div>

            <div className="ob-footer-contact-item">
              <div className="ob-footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
              </div>
              <div>
                <div className="ob-footer-contact-label">Phone</div>
                <div className="ob-footer-contact-val">+234 09083204947</div>
              </div>
            </div>

            <div className="ob-footer-contact-item">
              <div className="ob-footer-contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="ob-footer-contact-label">Email</div>
                <div className="ob-footer-contact-val">
                  <a href="mailto:info@orthoroyal.com">info@orthoroyal.com</a>
                </div>
              </div>
            </div>

            <Link to="/contact" className="ob-footer-cta">
              <span className="ob-footer-cta-text">Get in Touch</span>
              <span className="ob-footer-cta-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ob-footer-bottom">
        <div className="ob-footer-copy">
          &copy; {year} <span>Orthoroyal Prosthetics Ltd.</span> All rights reserved.
        </div>

        <div className="ob-footer-bottom-links">
          <button className="ob-footer-bottom-btn" type="button">Privacy Policy</button>
          <span className="ob-footer-bottom-sep"></span>
          <button className="ob-footer-bottom-btn" type="button">Terms of Use</button>
          <span className="ob-footer-bottom-sep"></span>
          <button className="ob-footer-bottom-btn" type="button">Sitemap</button>
        </div>

        <div className="ob-footer-made">
          <span className="ob-footer-made-dot"></span>
          Crafted with precision
        </div>
      </div>

    </footer>
  );
};

export default Footer;
