import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    delay: 100,
    icon: "bi-clipboard2-pulse",
    accent: "#f57813",
    title: "Consultations",
    shortLine: "Your personalized roadmap to mobility.",
    description:
      "Begin with clarity and confidence. Our comprehensive assessments create your personalized roadmap to optimal mobility, matching the perfect prosthetic solution to your lifestyle, goals, and unique needs.",
  },
  {
    id: "02",
    delay: 200,
    icon: "bi-tools",
    accent: "#15a04a",
    title: "Device Maintenance",
    shortLine: "Peak performance, every single day.",
    description:
      "Keep your prosthesis performing at its best. From routine adjustments to complex repairs, our maintenance services ensure your device remains comfortable, functional, and reliable for the long term.",
  },
  {
    id: "03",
    delay: 300,
    icon: "bi-puzzle",
    accent: "#d4a800",
    title: "Component Solutions",
    shortLine: "Leading-edge technology, tailored for you.",
    description:
      "Access the best in prosthetic technology. We offer premium components and the latest innovations to enhance your mobility — whether you need advanced functionality or essential replacements.",
  },
  {
    id: "04",
    delay: 400,
    icon: "bi-bicycle",
    accent: "#0b0ced",
    title: "Rehabilitation Support",
    shortLine: "Confident movement starts here.",
    description:
      "Your journey continues beyond fitting. We provide personalised therapy and gait training to help you master your prosthesis, ensuring a smooth transition to daily life with strength and confidence.",
  },
];

const ServiceCard = ({ id, delay, icon, accent, title, shortLine, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="ob-svc-card"
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ '--ob-svc-accent': accent }}
    >
      {/* Accent top line */}
      <div className="ob-svc-accent-line"></div>

      {/* Card number */}
      <span className="ob-svc-num">{id}</span>

      {/* Icon */}
      <div className="ob-svc-icon-wrap">
        <i className={`bi ${icon} ob-svc-icon`}></i>
      </div>

      {/* Static content */}
      <h3 className="ob-svc-title">{title}</h3>
      <p className="ob-svc-short">{shortLine}</p>

      {/* Hover overlay */}
      <div className={`ob-svc-overlay${hovered ? ' ob-svc-overlay--visible' : ''}`}>
        <div className="ob-svc-overlay-inner">
          <div className="ob-svc-overlay-icon-wrap">
            <i className={`bi ${icon}`}></i>
          </div>
          <h3 className="ob-svc-overlay-title">{title}</h3>
          <p className="ob-svc-overlay-desc">{description}</p>
          <Link to="/services" className="ob-svc-overlay-cta">
            <span>Learn More</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  return (
    <section id="ob-services" className="ob-services">

      {/* ── HEADER ── */}
      <div className="ob-services-header" data-aos="fade-up">
        <div className="ob-services-eyebrow">
          <span className="ob-services-eyebrow-dot"></span>
          What We Do
        </div>
        <div className="ob-services-header-row">
          <h2 className="ob-services-heading">
            End-to-End<br /><em>Prosthetic Care</em>
          </h2>
          <p className="ob-services-sub">
            From first consultation to long-term rehabilitation,
            we provide every service you need to move through
            life with confidence and independence.
          </p>
        </div>
      </div>

      {/* ── CARDS GRID ── */}
      <div className="ob-services-grid">
        {services.map((svc) => (
          <ServiceCard key={svc.id} {...svc} />
        ))}
      </div>

      {/* ── FOOTER CTA ── */}
      <div className="ob-services-footer" data-aos="fade-up" data-aos-delay="300">
        <span className="ob-services-footer-line"></span>
        <Link to="/services" className="ob-services-all-cta">
          View All Services
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="ob-services-footer-line"></span>
      </div>

      {/* Ghost watermark */}
      <div className="ob-services-geo" aria-hidden="true">CARE</div>

    </section>
  );
};

export default ServiceList;
