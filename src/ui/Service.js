import React from "react";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from "../img/services-header.jpg";

const services = [
  {
    id: "01",
    anchor: "Educational-content",
    icon: "bi-clipboard2-pulse",
    accent: "#f57813",
    tag: "Assessment & Planning",
    title: "Consultations",
    headline: "Your journey begins with a precise, personalised assessment.",
    image: education,
    imageAlt: "Orthoroyal prosthetic consultation session",
    features: [
      "Full musculoskeletal & lifestyle assessment",
      "Personalised prosthetic recommendations",
      "Activity-level and goal mapping",
      "Fitting blueprint & timeline planning",
    ],
    paragraphs: [
      "Our consultation process is the cornerstone of everything we do. Before a single component is selected, we invest time in understanding you — your body, your daily routine, your ambitions, and the challenges unique to your environment.",
      "Working with a dedicated prosthetist, you will receive a comprehensive biomechanical evaluation and lifestyle assessment. Together, we build a prosthetic roadmap tailored to your exact needs — whether you are a first-time user or seeking an upgrade to a more advanced solution.",
      "Every recommendation is evidence-based, informed by the latest clinical research, and refined by years of hands-on experience across diverse patient profiles.",
    ],
  },
  {
    id: "02",
    anchor: "Entertainment-content",
    icon: "bi-tools",
    accent: "#15a04a",
    tag: "Upkeep & Repairs",
    title: "Device Maintenance",
    headline: "Peak performance, preserved for the long term.",
    image: entertainment,
    imageAlt: "Orthoroyal technician performing prosthetic maintenance",
    features: [
      "Routine socket & component adjustments",
      "Wear assessment and proactive servicing",
      "Emergency and priority repair services",
      "Long-term maintenance care plans",
    ],
    paragraphs: [
      "A prosthetic device is a precision instrument, and like all precision instruments, it demands expert maintenance to perform at its best. Our dedicated maintenance service ensures your device remains comfortable, functional, and reliable — day after day.",
      "From minor socket adjustments triggered by natural body changes, to complex component replacements and full refurbishments, our technicians bring meticulous attention to every repair. We use only manufacturer-approved parts and the latest tooling.",
      "Our proactive care plans are designed to catch issues before they become problems, minimising downtime and keeping you moving without interruption.",
    ],
  },
  {
    id: "03",
    anchor: "Games",
    icon: "bi-puzzle",
    accent: "#d4a800",
    tag: "Technology & Innovation",
    title: "Component Solutions",
    headline: "Access the world's most advanced prosthetic technology.",
    image: games,
    imageAlt: "Advanced prosthetic components and technology",
    features: [
      "Microprocessor-controlled knees & ankles",
      "Bionic and myoelectric hand systems",
      "Activity-specific prosthetic feet",
      "Lightweight carbon-fibre structural components",
    ],
    paragraphs: [
      "The right component can be the difference between merely functioning and truly thriving. We source and supply leading prosthetic components from the world's top manufacturers, giving our patients access to innovations that were unavailable in Africa just a decade ago.",
      "Our component catalogue spans the full spectrum — from robust, practical everyday solutions ideal for active work environments, to cutting-edge microprocessor-controlled joints and bionic systems that respond dynamically to terrain and movement intent.",
      "Our prosthetists guide every selection decision, ensuring the component chosen aligns with your physiology, activity level, and long-term goals. We do not recommend what is most expensive — we recommend what is most right for you.",
    ],
  },
  {
    id: "04",
    anchor: "Sports",
    icon: "bi-bicycle",
    accent: "#0b0ced",
    tag: "Recovery & Independence",
    title: "Rehabilitation Support",
    headline: "Confident, independent movement — step by deliberate step.",
    image: sports,
    imageAlt: "Patient undergoing prosthetic rehabilitation and gait training",
    features: [
      "Personalised gait training programmes",
      "Strength & balance physiotherapy",
      "Occupational therapy and ADL coaching",
      "Psychological support and peer mentoring",
    ],
    paragraphs: [
      "Receiving your prosthetic device is a milestone, not a finish line. The real transformation happens in rehabilitation — the disciplined, guided process through which patients learn to move, adapt, and eventually forget the device is there at all.",
      "Our rehabilitation team combines physiotherapy, occupational therapy, and gait training into a seamless, personalised programme. Sessions are structured progressively: from basic balance and weight-bearing, through to dynamic activities, stairs, uneven terrain, and sport-specific movement.",
      "We also recognise that recovery is not purely physical. Our team includes counsellors and peer mentors — former patients who have walked this path — available to provide encouragement and practical lived-experience guidance throughout your journey.",
    ],
  },
];

const ServiceSection = ({ service, reverse }) => {
  const { id, anchor, icon, accent, tag, title, headline, image, imageAlt, features, paragraphs } = service;

  return (
    <section
      id={anchor}
      className={`ob-svcpage-section${reverse ? " ob-svcpage-section--reverse" : ""}`}
      style={{ "--ob-sp-accent": accent }}
    >
      {/* ── IMAGE PANEL ── */}
      <div className="ob-svcpage-img-col" data-aos={reverse ? "fade-left" : "fade-right"} data-aos-delay="100">
        <div className="ob-svcpage-img-wrap">
          {/* Corner brackets */}
          <div className="ob-svcpage-bracket ob-svcpage-bracket--tl">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M28 2H2V28" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="ob-svcpage-bracket ob-svcpage-bracket--br">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <path d="M0 26H26V0" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="ob-svcpage-img-shadow"></div>
          <img src={image} alt={imageAlt} className="ob-svcpage-img" />

          {/* Floating service tag */}
          <div className="ob-svcpage-img-tag">
            <i className={`bi ${icon}`}></i>
            <span>{tag}</span>
          </div>
        </div>
      </div>

      {/* ── CONTENT PANEL ── */}
      <div className="ob-svcpage-content-col" data-aos={reverse ? "fade-right" : "fade-left"} data-aos-delay="200">

        {/* Eyebrow */}
        <div className="ob-svcpage-eyebrow">
          <span className="ob-svcpage-eyebrow-num">{id}</span>
          <span className="ob-svcpage-eyebrow-sep"></span>
          <span className="ob-svcpage-eyebrow-label">{tag}</span>
        </div>

        {/* Title */}
        <h2 className="ob-svcpage-title">{title}</h2>

        {/* Headline pull */}
        <p className="ob-svcpage-headline">{headline}</p>

        {/* Feature pills */}
        <ul className="ob-svcpage-features">
          {features.map((f, i) => (
            <li key={i} className="ob-svcpage-feature">
              <span className="ob-svcpage-feature-dot"></span>
              {f}
            </li>
          ))}
        </ul>

        {/* Body paragraphs */}
        <div className="ob-svcpage-body">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* CTA */}
        <a href="/contact" className="ob-svcpage-cta">
          Book a Consultation
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Section number watermark */}
      <div className="ob-svcpage-bg-num" aria-hidden="true">{id}</div>
    </section>
  );
};

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="Services" img={serviceHeader} />

      <main id="main">

        {/* ── Page intro strip ── */}
        <div className="ob-svcpage-intro" data-aos="fade-up">
          <div className="ob-svcpage-intro-inner">
            <div className="ob-svcpage-intro-eyebrow">
              <span className="ob-svcpage-intro-dot"></span>
              What We Offer
            </div>
            <h1 className="ob-svcpage-intro-heading">
              End-to-End <em>Prosthetic</em> &amp; Orthotic Services
            </h1>
            <p className="ob-svcpage-intro-sub">
              From your first consultation through to long-term rehabilitation,
              every service we offer is built around one purpose — restoring
              your freedom to move.
            </p>

            {/* Anchor nav */}
            <nav className="ob-svcpage-nav" aria-label="Services navigation">
              {services.map((s) => (
                <a
                  key={s.anchor}
                  href={`#${s.anchor}`}
                  className="ob-svcpage-nav-item"
                  style={{ "--ob-sp-accent": s.accent }}
                >
                  <i className={`bi ${s.icon}`}></i>
                  <span>{s.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Service sections ── */}
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            reverse={index % 2 !== 0}
          />
        ))}

      </main>
      <Footer />
    </>
  );
};

export default Service;
