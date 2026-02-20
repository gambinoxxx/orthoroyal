import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import test1 from "../img/test1.jpg";
import test2 from "../img/test2.jpg";
import test3 from "../img/test3.jpg";
import test4 from "../img/test4.jpg";

const testimonials = [
  {
    id: "01",
    title: "Industrial Accident Recovery",
    description:
      "I lost my right arm in an industrial accident at the factory where I worked. For two years, I struggled with basic daily tasks and thought my independence was gone forever. A colleague referred me to Orthoroyal, and from the first consultation, I felt hope. The team designed a prosthetic that feels like part of me. Today, I can work, cook, and even play with my children again.",
    name: "Michael Okafor",
    role: "Factory Supervisor, Lagos",
    imgSrc: test1,
  },
  {
    id: "02",
    title: "Diabetes Success Story",
    description:
      "As a diabetic patient, I faced the amputation of my left foot after complications. I was terrified of being confined to a wheelchair. My doctor recommended Orthoroyal, and the experience transformed my outlook. The brilliant prosthetist took time to understand my lifestyle and created a solution that lets me walk comfortably. I am now back to visiting my grandchildren.",
    name: "Grace Ogunwale",
    role: "Retired Teacher, Ibadan",
    imgSrc: test3,
  },
  {
    id: "03",
    title: "Congenital Condition Victory",
    description:
      "I was born with a limb difference and had tried several prosthetic solutions that never felt right. At 25, I visited Orthoroyal hoping for one last attempt. Their innovative approach and modern technology gave me my first prosthetic that actually feels natural. The rehabilitation team taught me how to move with confidence, and now I have started the small business I always dreamed of.",
    name: "David Adeyemi",
    role: "Entrepreneur, Abuja",
    imgSrc: test2,
  },
  {
    id: "04",
    title: "Auto Accident Survivor",
    description:
      "After a motorcycle accident claimed my leg, I thought my teaching career was over. The depression was overwhelming until my sister found Orthoroyal. The compassionate team walked with me through every step from fitting to rehabilitation. Their advanced prosthetic component allows me to stand and move around my classroom all day. I am back doing what I love.",
    name: "Adebola Olajide",
    role: "Secondary School Teacher, Abeokuta",
    imgSrc: test4,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const TestimonialCard = ({ id, title, description, name, role, imgSrc }) => (
  <div className="ob-tcard">
    <div className="ob-tcard-header">
      <span className="ob-tcard-num">{id}</span>
      <span className="ob-tcard-title">{title}</span>
    </div>

    <div className="ob-tcard-quote-mark">&#8220;</div>

    <p className="ob-tcard-body">{description}</p>

    <div className="ob-tcard-rule"></div>

    <div className="ob-tcard-author">
      <div className="ob-tcard-avatar-wrap">
        <img src={imgSrc} alt={name} className="ob-tcard-avatar" />
        <div className="ob-tcard-avatar-ring"></div>
      </div>
      <div className="ob-tcard-author-info">
        <span className="ob-tcard-name">{name}</span>
        <span className="ob-tcard-role">{role}</span>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="ob-testimonials" className="ob-testimonials">

      <div className="ob-testimonials-header" data-aos="fade-up">
        <div className="ob-testimonials-eyebrow">
          <span className="ob-testimonials-eyebrow-dot"></span>
          Patient Stories
        </div>
        <h2 className="ob-testimonials-heading">
          Lives We Have<br /><em>Transformed</em>
        </h2>
        <p className="ob-testimonials-sub">
          Real stories from real people across Africa whose mobility
          and independence were restored by Orthoroyal.
        </p>
      </div>

      <div className="ob-testimonials-track" data-aos="fade-up" data-aos-delay="150">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          draggable={true}
          showDots={true}
          arrows={true}
          dotListClass="ob-testimonials-dots"
          containerClass="ob-testimonials-carousel"
          itemClass="ob-tcard-item"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </Carousel>
      </div>

      <div className="ob-testimonials-geo" aria-hidden="true">STORIES</div>

    </section>
  );
};

export default Testimonials;
