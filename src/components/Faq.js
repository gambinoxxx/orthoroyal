import React, { useState } from 'react';

const faqs = [
  {
    id: '01',
    question: 'Can I go to the pool with my prosthetic limb?',
    answer:
      'Yes, but only if you are using a waterproof prosthetic limb. Standard prosthetics are not designed for water exposure and may sustain damage. Ask your prosthetist about waterproof or activity-specific options designed for aquatic environments.',
  },
  {
    id: '02',
    question: 'Can I drive with my prosthetic limb?',
    answer:
      'Yes, you can drive with your prosthetic limb. Depending on which limb is affected, you may need vehicle modifications such as a hand control or pedal adaptation. Your prosthetist and a certified driving rehabilitation specialist can guide you through the process.',
  },
  {
    id: '03',
    question: 'Can I write with my prosthetic hand?',
    answer:
      'Your chances of writing with a prosthetic hand are possible but require practice and depend heavily on the type of prosthetic you have. It is significantly easier to achieve with a bionic or myoelectric hand, which offers finer motor control than a body-powered device.',
  },
  {
    id: '04',
    question: 'Can I run with my prosthetic limb?',
    answer:
      'Yes, you can run with your prosthetic limb. Running-specific prosthetic feet — often called blade prosthetics — are designed to absorb impact and return energy efficiently. Many amputees compete in athletic events using activity-specific prosthetics.',
  },
  {
    id: '05',
    question: 'Can I wear any type of shoe with my prosthetic limb?',
    answer:
      'Yes, generally you can, based on the heel height recommendation from your prosthetist. Significant changes in heel height can affect your alignment and gait, so your prosthetist may need to make adjustments when you switch between flat shoes and heels.',
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState('01');

  const active = faqs.find((f) => f.id === activeId);

  return (
    <section id="ob-faq" className="ob-faq">

      {/* ── HEADER ── */}
      <div className="ob-faq-header" data-aos="fade-up">
        <div className="ob-faq-eyebrow">
          <span className="ob-faq-eyebrow-dot"></span>
          Got Questions?
        </div>
        <h2 className="ob-faq-heading">
          Frequently Asked<br /><em>Questions</em>
        </h2>
        <p className="ob-faq-sub">
          Everything you need to know about living actively
          with a prosthetic limb.
        </p>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="ob-faq-body" data-aos="fade-up" data-aos-delay="150">

        {/* LEFT: question list */}
        <ul className="ob-faq-list">
          {faqs.map((faq) => (
            <li key={faq.id} className="ob-faq-list-item">
              <button
                type="button"
                className={`ob-faq-btn${activeId === faq.id ? ' ob-faq-btn--active' : ''}`}
                onClick={() => setActiveId(faq.id)}
                aria-expanded={activeId === faq.id}
              >
                <span className="ob-faq-btn-num">{faq.id}</span>
                <span className="ob-faq-btn-text">{faq.question}</span>
                <span className="ob-faq-btn-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={activeId === faq.id ? 'ob-faq-chevron--open' : ''}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT: answer panel */}
        <div className="ob-faq-answer-panel" key={activeId}>
          <div className="ob-faq-answer-num">{active.id}</div>
          <div className="ob-faq-answer-quote">&#8220;</div>
          <h3 className="ob-faq-answer-q">{active.question}</h3>
          <p className="ob-faq-answer-a">{active.answer}</p>
          <div className="ob-faq-answer-rule"></div>
          <div className="ob-faq-answer-tag">
            <span className="ob-faq-answer-tag-dot"></span>
            Orthoroyal Clinical Advisory
          </div>
        </div>

      </div>

      {/* Ghost watermark */}
      <div className="ob-faq-geo" aria-hidden="true">FAQ</div>

    </section>
  );
};

export default FAQ;
