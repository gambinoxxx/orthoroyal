import React, { useEffect, useState, useRef, useCallback } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from "emailjs-com";

const contactTiles = [
  {
    icon: "bi-geo-alt",
    label: "Our Location",
    lines: ["#9 Ibiteye St, Off Adeshiyan St,", "Odi-olowo, Lagos — 100001"],
  },
  {
    icon: "bi-envelope",
    label: "Email Us",
    lines: ["info@orthoroyal.com"],
    link: "mailto:info@orthoroyal.com",
  },
  {
    icon: "bi-telephone",
    label: "Call Us",
    lines: ["+234 09083204947"],
    link: "tel:+23409083204947",
  },
  {
    icon: "bi-clock",
    label: "Working Hours",
    lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Sat: 9:00 AM – 1:00 PM"],
  },
];

const Contact = () => {
  const form = useRef();
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const { username, email, subject, message } = inputFields;

  const validateValues = (inputValues) => {
    let errs = {};
    if (inputValues.username.length < 2) errs.username = "Name must be at least 2 characters";
    if (inputValues.email.length < 5)    errs.email    = "Please enter a valid email address";
    if (inputValues.subject.length < 5)  errs.subject  = "Subject must be at least 5 characters";
    if (inputValues.message.length < 10) errs.message  = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
    if (errors[event.target.name]) {
      setErrors({ ...errors, [event.target.name]: null });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateValues(inputFields);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSending(true);
    setSubmitting(true);

    emailjs
      .sendForm("service_k80xoyk", "template_q6z4pl4", form.current, "yV95_dZd7WA5uN3f7")
      .then(
        () => {
          setSending(false);
          setSent(true);
          setInputFields({ username: "", email: "", subject: "", message: "" });
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          // log suppressed for production
          setSending(false);
        }
      );
  };

  const finishSubmit = useCallback(() => {}, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors, submitting, finishSubmit]);

  const fieldClass = (name) =>
    `ob-contact-field${errors[name] ? " ob-contact-field--error" : ""}`;

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="Contact Us" img={contactHeader} />

      <main id="main">
        <section id="ob-contact" className="ob-contact">

          <div className="ob-contact-container">

            {/* ── PAGE HEADER ── */}
            <div className="ob-contact-page-header" data-aos="fade-up">
              <div className="ob-contact-eyebrow">
                <span className="ob-contact-eyebrow-dot"></span>
                Reach Out
              </div>
              <h1 className="ob-contact-page-heading">
                Let's Start a<br /><em>Conversation</em>
              </h1>
              <p className="ob-contact-page-sub">
                Have a question, want to book a consultation, or need support?
                Our team is ready to help — typically within one business day.
              </p>
            </div>

            {/* ── INFO TILES ROW ── */}
            <div className="ob-contact-tiles-row" data-aos="fade-up" data-aos-delay="100">
              {contactTiles.map((tile, i) => (
                <div className="ob-contact-tile" key={i}>
                  <div className="ob-contact-tile-icon">
                    <i className={`bi ${tile.icon}`}></i>
                  </div>
                  <span className="ob-contact-tile-label">{tile.label}</span>
                  {tile.link ? (
                    <a href={tile.link} className="ob-contact-tile-link">{tile.lines[0]}</a>
                  ) : (
                    tile.lines.map((line, j) => (
                      <span className="ob-contact-tile-text" key={j}>{line}</span>
                    ))
                  )}
                </div>
              ))}
            </div>

            {/* ── FORM CARD ── */}
            <div className="ob-contact-card" data-aos="fade-up" data-aos-delay="150">

              {/* Left aside */}
              <div className="ob-contact-card-aside">
                <div>
                  <h2 className="ob-contact-aside-heading">
                    We'd love to<br /><em>hear from you.</em>
                  </h2>
                  <p className="ob-contact-aside-sub">
                    Whether you're seeking a first consultation or returning
                    for ongoing support, we're here every step of the way.
                  </p>
                </div>

                <div className="ob-contact-aside-stats">
                  <div>
                    <span className="ob-contact-aside-stat-num">300<em>+</em></span>
                    <span className="ob-contact-aside-stat-label">Lives Transformed</span>
                  </div>
                  <div className="ob-contact-aside-divider"></div>
                  <div>
                    <span className="ob-contact-aside-stat-num">15<em>+</em></span>
                    <span className="ob-contact-aside-stat-label">Years Experience</span>
                  </div>
                  <div className="ob-contact-aside-divider"></div>
                  <div>
                    <span className="ob-contact-aside-stat-num">1<em>day</em></span>
                    <span className="ob-contact-aside-stat-label">Response Time</span>
                  </div>
                </div>

                <div className="ob-contact-aside-socials">
                  <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer" className="ob-contact-aside-social">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="ob-contact-aside-social">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/orthoroyal" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="ob-contact-aside-social">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="ob-contact-aside-social">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="ob-contact-form-wrap">
                <h3 className="ob-contact-form-heading">Send a Message</h3>
                <p className="ob-contact-form-sub">Fill in the details below and we'll get back to you shortly.</p>

                <form ref={form} className="ob-contact-form" onSubmit={handleSubmit} noValidate>

                  <div className="ob-contact-row">
                    <div className={fieldClass("username")}>
                      <input
                        type="text"
                        name="username"
                        id="ob-username"
                        value={username}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder=" "
                      />
                      <label htmlFor="ob-username">Full Name</label>
                      <span className="ob-contact-field-bar"></span>
                      {errors.username && <small className="ob-contact-error">{errors.username}</small>}
                    </div>

                    <div className={fieldClass("email")}>
                      <input
                        type="email"
                        name="email"
                        id="ob-email"
                        value={email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder=" "
                      />
                      <label htmlFor="ob-email">Email Address</label>
                      <span className="ob-contact-field-bar"></span>
                      {errors.email && <small className="ob-contact-error">{errors.email}</small>}
                    </div>
                  </div>

                  <div className={fieldClass("subject")}>
                    <input
                      type="text"
                      name="subject"
                      id="ob-subject"
                      value={subject}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label htmlFor="ob-subject">Subject</label>
                    <span className="ob-contact-field-bar"></span>
                    {errors.subject && <small className="ob-contact-error">{errors.subject}</small>}
                  </div>

                  <div className={`${fieldClass("message")} ob-contact-field--textarea`}>
                    <textarea
                      name="message"
                      id="ob-message"
                      rows="5"
                      value={message}
                      onChange={handleChange}
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="ob-message">Your Message</label>
                    <span className="ob-contact-field-bar"></span>
                    {errors.message && <small className="ob-contact-error">{errors.message}</small>}
                  </div>

                  {sent && (
                    <div className="ob-contact-success">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Message sent! We'll be in touch soon.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`ob-contact-submit${sending ? " ob-contact-submit--sending" : ""}`}
                    disabled={sending}
                  >
                    {sending ? (
                      <>
                        <span className="ob-contact-spinner"></span>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </button>

                </form>
              </div>

            </div>
          </div>

          {/* Ghost watermark */}
          <div className="ob-contact-geo" aria-hidden="true">TALK</div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
