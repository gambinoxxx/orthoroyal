import React from "react";
import client01 from "../img/clients/client-1.jpg";
import client02 from "../img/clients/client-2.jpg";
import client03 from "../img/clients/client-3.jpg";
import client04 from "../img/clients/client-4.jpg";
import client05 from "../img/clients/client-5.jpg";
import client06 from "../img/clients/client-6.jpg";
import client07 from "../img/clients/client-7.jpg";
import client08 from "../img/clients/client-8.jpg";
import client09 from "../img/clients/client-9.jpg";
import client10 from "../img/clients/client-10.jpg";
import client11 from "../img/clients/client-11.jpg";
import client12 from "../img/clients/client-12.jpg";
import client13 from "../img/clients/client-13.jpg";
import client14 from "../img/clients/client-14.jpg";
import client15 from "../img/clients/client-15.jpg";
import client16 from "../img/clients/client-16.jpg";
import client17 from "../img/clients/client-17.jpg";
import client18 from "../img/clients/client-18.jpg";
import client19 from "../img/clients/client-19.jpg";

const allClients = [
  client01, client02, client03, client04, client05,
  client06, client07, client08, client09, client10,
  client11, client12, client13, client14, client15,
  client16, client17, client18, client19,
];

/* Split into two rows for the dual marquee */
const rowOne = allClients.slice(0, 10);
const rowTwo = allClients.slice(9);

const MarqueeRow = ({ images, direction = "left", speed = 35 }) => {
  /* Duplicate for seamless infinite loop */
  const track = [...images, ...images];

  return (
    <div
      className="ob-clients-row"
      style={{ '--ob-marquee-speed': `${speed}s` }}
      aria-hidden="true"
    >
      <div className={`ob-clients-track ob-clients-track--${direction}`}>
        {track.map((src, i) => (
          <div className="ob-clients-logo" key={i}>
            <img src={src} alt={`Client partner ${(i % images.length) + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientList = () => {
  return (
    <section id="ob-clients" className="ob-clients" data-aos="fade-up">

      {/* ── HEADER ── */}
      <div className="ob-clients-header">
        <div className="ob-clients-eyebrow">
          <span className="ob-clients-eyebrow-dot"></span>
          Trusted Partners
        </div>
        <h2 className="ob-clients-heading">
          Organisations That <em>Trust Us</em>
        </h2>
        <p className="ob-clients-sub">
          We are proud to work alongside leading healthcare providers,
          NGOs, and institutions across Africa.
        </p>
      </div>

      {/* ── MARQUEE WRAPPER ── */}
      <div className="ob-clients-stage">

        {/* Edge fade masks */}
        <div className="ob-clients-fade ob-clients-fade--left" aria-hidden="true"></div>
        <div className="ob-clients-fade ob-clients-fade--right" aria-hidden="true"></div>

        {/* Row 1 — scrolls left */}
        <MarqueeRow images={rowOne} direction="left" speed={40} />

        {/* Row 2 — scrolls right */}
        <MarqueeRow images={rowTwo} direction="right" speed={34} />

      </div>

      {/* Count strip */}
      <div className="ob-clients-count" data-aos="fade-up" data-aos-delay="100">
        <div className="ob-clients-count-item">
          <span className="ob-clients-count-num">19<em>+</em></span>
          <span className="ob-clients-count-label">Partner Organisations</span>
        </div>
        <div className="ob-clients-count-divider"></div>
        <div className="ob-clients-count-item">
          <span className="ob-clients-count-num">6<em>+</em></span>
          <span className="ob-clients-count-label">Years of Partnerships</span>
        </div>
        <div className="ob-clients-count-divider"></div>
        <div className="ob-clients-count-item">
          <span className="ob-clients-count-num">100<em>%</em></span>
          <span className="ob-clients-count-label">Client Retention</span>
        </div>
      </div>

    </section>
  );
};

export default ClientList;
