import React, { useEffect, useState, useRef, useCallback } from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import contactHeader from "../img/contact-header.jpg";
import emailjs from "emailjs-com";

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
    if (inputValues.email.length < 5)    errs.email   = "Please enter a valid email address";
    if (inputValues.subject.length < 5)  errs.subject  = "Subject must be at least 5 characters";
    if (inputValues.message.length < 10) errs.message  = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
    // Clear field error on change
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
          console.log(error.text);
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

  const contactInfo = [
    {
      icon: "bi-geo-alt",
      label: "Our Location",
      lines: [
        "#9 Ibiteye St, Off Adeshiyan St,",
        "Odi-olowo, Lagos — 100001",
        "Nigeria",
      ],
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
      lines: ["Mon – Fri: 8:00 AM – 5:00 PM", "Saturday: 9:00 AM – 1:00 PM"],
    },
  ];

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name="Contact Us" img={contactHeader} />

      <main id="main">
        <section id="ob-contact" className="ob-contact">

          {/* ── LEFT PANEL: info ── */}
          <div className="ob-contact-info" data-aos="fade-right" data-aos-delay="100">

            <div className="ob-contact-info-inner">

              {/* Header */}
              <div className="ob-contact-info-header">
                <div className="ob-contact-eyebrow">
                  <span className="ob-contact-eyebrow-dot"></span>
                  Get in Touch
                </div>
                <h2 className="ob-contact-info-heading">
                  Let's Start a<br /><em>Conversation</em>
                </h2>
                <p className="ob-contact-info-sub">
                  Have a question about prosthetics, want to book a consultation,
                  or need support? Our team is ready to help.
                </p>
              </div>

              {/* Info tiles */}
              <div className="ob-contact-tiles">
                {contactInfo.map((item, i) => (
                  <div className="ob-contact-tile" key={i}>
                    <div className="ob-contact-tile-icon">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <div className="ob-contact-tile-body">
                      <span className="ob-contact-tile-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="ob-contact-tile-link">
                          {item.lines[0]}
                        </a>
                      ) : (
                        item.lines.map((line, j) => (
                          <span key={j} className="ob-contact-tile-text">{line}</span>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social row */}
              <div className="ob-contact-socials">
                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer" className="ob-contact-social">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="ob-contact-social">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/orthoroyal" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="ob-contact-social">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="ob-contact-social">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>

            </div>

            {/* Ghost watermark */}
            <div className="ob-contact-geo" aria-hidden="true">TALK</div>
          </div>

          {/* ── RIGHT PANEL: form ── */}
          <div className="ob-contact-form-wrap" data-aos="fade-left" data-aos-delay="200">
            <div className="ob-contact-form-inner">

              <div className="ob-contact-form-header">
                <h3 className="ob-contact-form-heading">Send us a Message</h3>
                <p className="ob-contact-form-sub">
                  We typically respond within one business day.
                </p>
              </div>

              <form ref={form} className="ob-contact-form" onSubmit={handleSubmit} noValidate>

                {/* Name + Email row */}
                <div className="ob-contact-row">
                  <div className={`ob-contact-field${errors.username ? " ob-contact-field--error" : ""}${username ? " ob-contact-field--filled" : ""}`}>
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

                  <div className={`ob-contact-field${errors.email ? " ob-contact-field--error" : ""}${email ? " ob-contact-field--filled" : ""}`}>
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

                {/* Subject */}
                <div className={`ob-contact-field${errors.subject ? " ob-contact-field--error" : ""}${subject ? " ob-contact-field--filled" : ""}`}>
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

                {/* Message */}
                <div className={`ob-contact-field ob-contact-field--textarea${errors.message ? " ob-contact-field--error" : ""}${message ? " ob-contact-field--filled" : ""}`}>
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

                {/* Success message */}
                {sent && (
                  <div className="ob-contact-success">
                    <i className="bi bi-check-circle"></i>
                    <span>Message sent successfully! We'll be in touch soon.</span>
                  </div>
                )}

                {/* Submit */}
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

        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
