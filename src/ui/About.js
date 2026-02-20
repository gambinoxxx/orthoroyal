import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import about_img from '../img/about-image.jpg';
import manag_photo1 from '../img/team/Padmakumar.png';
import manag_photo2 from '../img/team/Sundaramoorthy.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import abtHeader from '../img/about-header.jpg';

const values = [
  {
    id: '01',
    icon: 'bi-eye',
    title: 'Our Vision',
    body: 'To be the foremost and most trusted Prosthetic and Orthotics clinic in Africa — dedicated to delivering quality, accessible rehabilitation to every person living with a disability or health challenge, regardless of geography or circumstance.',
  },
  {
    id: '02',
    icon: 'bi-compass',
    title: 'Our Mission',
    body: 'To be the lead supportive agency for persons living with health challenges and disabilities across Africa, and a relentless advocate for the rights and dignity of everyone living with a disability.',
  },
  {
    id: '03',
    icon: 'bi-gem',
    title: 'Our Values',
    body: 'We are driven by compassion, clinical excellence, and an unwavering commitment to our patients. We respect every individual\'s journey, celebrate diverse perspectives, and hold ourselves accountable to the highest standards of care.',
  },
];

const whyUs = [
  { icon: 'bi-award', label: 'ISO Certified Practice' },
  { icon: 'bi-people', label: 'Patient-First Philosophy' },
  { icon: 'bi-cpu', label: 'Latest Prosthetic Technology' },
  { icon: 'bi-geo-alt', label: 'Pan-African Reach' },
  { icon: 'bi-heart-pulse', label: 'Holistic Rehabilitation' },
  { icon: 'bi-shield-check', label: 'Clinically Backed Solutions' },
];

const team = [
  {
    photo: manag_photo1,
    name: 'Ogun Muyiwa',
    role: 'Co-Founder & Clinical Director',
    bio: 'A visionary prosthetist with over 15 years of experience across clinical practice and healthcare leadership. Muyiwa founded Orthoroyal to close the gap in quality prosthetic care across West Africa, bringing international standards to local communities.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
  {
    photo: manag_photo2,
    name: 'Sundaramoorthy A.',
    role: 'Head of Rehabilitation',
    bio: 'A specialist in biomechanics and gait rehabilitation with a decade of experience guiding patients from initial fitting through to full independence. Sundar leads our rehabilitation programme with patience, precision and deep clinical expertise.',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="About Us" img={abtHeader} />

      <main id="main">

        {/* ══════════════════════════════════════
            SECTION 1 — OUR STORY
        ══════════════════════════════════════ */}
        <section id="ob-about-story" className="ob-about-story">
          <div className="ob-about-story-inner">

            {/* Image column */}
            <div className="ob-about-story-img-col" data-aos="fade-right" data-aos-delay="100">
              <div className="ob-about-story-img-wrap">
                <div className="ob-about-story-img-shadow"></div>
                {/* Corner brackets */}
                <div className="ob-about-bracket ob-about-bracket--tl">
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M28 2H2V28" stroke="#0b0ced" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="ob-about-bracket ob-about-bracket--br">
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M0 26H26V0" stroke="#0b0ced" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <img src={about_img} alt="Orthoroyal — Our Story" className="ob-about-story-img" />

                {/* Floating founded badge */}
                <div className="ob-about-story-badge">
                  <span className="ob-about-story-badge-year">2019</span>
                  <span className="ob-about-story-badge-label">Founded in Lagos</span>
                </div>
              </div>
            </div>

            {/* Content column */}
            <div className="ob-about-story-content" data-aos="fade-left" data-aos-delay="200">
              <div className="ob-about-eyebrow">
                <span className="ob-about-eyebrow-dot"></span>
                Who We Are
              </div>

              <h2 className="ob-about-story-heading">
                Restoring Movement,<br />
                Restoring <em>Lives.</em>
              </h2>

              <p className="ob-about-story-lead">
                Orthoroyal was founded in 2019 with a single, clear purpose — to make
                world-class prosthetic and orthotic care accessible to every African
                who needs it.
              </p>

              <p className="ob-about-story-body">
                We recognised that across Africa, millions of people living with limb
                differences, amputations, and mobility challenges lacked access to the
                quality of care available in other parts of the world. Not because the
                solutions didn't exist, but because the right expertise, technology, and
                patient-centred approach had not yet arrived.
              </p>

              <p className="ob-about-story-body">
                We built Orthoroyal to change that. Starting in Lagos, we assembled a
                team of dedicated prosthetists, orthotists, and rehabilitation specialists
                committed to delivering clinical excellence — right here on the continent.
                Today we serve patients across multiple states and continue to grow.
              </p>

              {/* Stats row */}
              <div className="ob-about-story-stats">
                <div className="ob-about-story-stat">
                  <span className="ob-about-story-stat-num">300<em>+</em></span>
                  <span className="ob-about-story-stat-label">Lives Transformed</span>
                </div>
                <div className="ob-about-story-stat-divider"></div>
                <div className="ob-about-story-stat">
                  <span className="ob-about-story-stat-num">15<em>+</em></span>
                  <span className="ob-about-story-stat-label">Years Combined Experience</span>
                </div>
                <div className="ob-about-story-stat-divider"></div>
                <div className="ob-about-story-stat">
                  <span className="ob-about-story-stat-num">8<em>+</em></span>
                  <span className="ob-about-story-stat-label">States Served</span>
                </div>
              </div>
            </div>

          </div>

          <div className="ob-about-story-geo" aria-hidden="true">STORY</div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 2 — VISION / MISSION / VALUES
        ══════════════════════════════════════ */}
        <section id="ob-about-vmv" className="ob-about-vmv">
          <div className="ob-about-vmv-inner">

            <div className="ob-about-vmv-header" data-aos="fade-up">
              <div className="ob-about-eyebrow ob-about-eyebrow--light">
                <span className="ob-about-eyebrow-dot ob-about-eyebrow-dot--light"></span>
                What Drives Us
              </div>
              <h2 className="ob-about-vmv-heading">
                Purpose, Direction<br />&amp; <em>Principles</em>
              </h2>
            </div>

            <div className="ob-about-vmv-grid">
              {values.map((v, i) => (
                <div
                  className="ob-about-vmv-card"
                  key={v.id}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                >
                  <div className="ob-about-vmv-card-top">
                    <span className="ob-about-vmv-num">{v.id}</span>
                    <div className="ob-about-vmv-icon">
                      <i className={`bi ${v.icon}`}></i>
                    </div>
                  </div>
                  <h3 className="ob-about-vmv-title">{v.title}</h3>
                  <p className="ob-about-vmv-body">{v.body}</p>
                  <div className="ob-about-vmv-rule"></div>
                </div>
              ))}
            </div>

          </div>

          <div className="ob-about-vmv-geo" aria-hidden="true">PURPOSE</div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 3 — WHY CHOOSE US
        ══════════════════════════════════════ */}
        <section id="ob-about-why" className="ob-about-why">
          <div className="ob-about-why-inner">

            <div className="ob-about-why-left" data-aos="fade-right" data-aos-delay="100">
              <div className="ob-about-eyebrow">
                <span className="ob-about-eyebrow-dot"></span>
                Why Orthoroyal
              </div>
              <h2 className="ob-about-why-heading">
                Clinical Excellence<br />at Every <em>Step</em>
              </h2>
              <p className="ob-about-why-sub">
                We combine global expertise with deep local understanding to
                deliver prosthetic care that truly fits — your body, your life,
                and your ambitions.
              </p>

              {/* Large stat */}
              <div className="ob-about-why-big-stat">
                <span className="ob-about-why-big-num">98<em>%</em></span>
                <span className="ob-about-why-big-label">Patient Satisfaction Rate</span>
              </div>
            </div>

            <div className="ob-about-why-right" data-aos="fade-left" data-aos-delay="200">
              <div className="ob-about-why-grid">
                {whyUs.map((w, i) => (
                  <div className="ob-about-why-item" key={i}>
                    <div className="ob-about-why-item-icon">
                      <i className={`bi ${w.icon}`}></i>
                    </div>
                    <span className="ob-about-why-item-label">{w.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════
            SECTION 4 — TEAM
        ══════════════════════════════════════ */}
        <section id="ob-about-team" className="ob-about-team">
          <div className="ob-about-team-inner">

            <div className="ob-about-team-header" data-aos="fade-up">
              <div className="ob-about-eyebrow">
                <span className="ob-about-eyebrow-dot"></span>
                The People Behind the Care
              </div>
              <h2 className="ob-about-team-heading">
                Meet Our <em>Team</em>
              </h2>
              <p className="ob-about-team-sub">
                Our leadership team brings together decades of clinical expertise,
                a passion for innovation, and an unwavering commitment to patient outcomes.
              </p>
            </div>

            <div className="ob-about-team-grid">
              {team.map((member, i) => (
                <div
                  className="ob-about-team-card"
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 150}
                >
                  {/* Photo */}
                  <div className="ob-about-team-photo-wrap">
                    <div className="ob-about-team-photo-bg"></div>
                    <img src={member.photo} alt={member.name} className="ob-about-team-photo" />
                    {/* Social links on hover */}
                    <div className="ob-about-team-social-overlay">
                      <a href={member.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="ob-about-team-social">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="ob-about-team-social">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="ob-about-team-info">
                    <h3 className="ob-about-team-name">{member.name}</h3>
                    <span className="ob-about-team-role">{member.role}</span>
                    <div className="ob-about-team-rule"></div>
                    <p className="ob-about-team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="ob-about-team-geo" aria-hidden="true">TEAM</div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default About;
