import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    delay: 100,
    icon: "bi-clipboard2-pulse",
    color: "#f57813",
    title: "Consultations",
    description: "Begin with clarity and confidence. Our comprehensive assessments create your personalized roadmap to optimal mobility, matching the perfect prosthetic solution to your lifestyle, goals, and unique needs."
  },
  {
    delay: 200,
    icon: "bi-tools",
    color: "#15a04a",
    title: "Device maintenance",
    description: "Keep your prosthesis performing at its peak. From routine adjustments to complex repairs, our maintenance services ensure your device remains comfortable, functional, and reliable for the long term."
  },
  {
    delay: 300,
    icon: "bi-puzzle",
    color: "#f5cf13",
    title: "Component solutions",
    description: "Access leading-edge prosthetic technology. We offer premium components and latest innovations to enhance your mobility experience, whether you're seeking advanced functionality or essential replacements."
  },
  {
    delay: 400,
    icon: "bi-bicycle",
    color: "#1335f5",
    title: "Rehabilitation support",
    description: "Your journey to confident movement continues beyond fitting. We provide personalized therapy and gait training to help you master your new prosthesis, ensuring a smooth transition to daily life with strength and confidence."
  }
];

const ServiceList = () => {
  return (
    <>
      <section id="services-list" className="services-list">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>What we do? </h2>
            <p>
           We offer end-to-end prosthetic and orthotic services including clinical consultations
           , device maintenance, component solutions, and rehabilitation support, ensuring your optimal mobility at every stage{" "}
            </p>
          </div>
          <div className="row gy-5">
            {services.map((service) => (
              <div
                key={service.title}
                className="col-lg-6 col-md-6 service-item d-flex"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="single-service">
                  <div className="icon flex-shrink-0">
                    <i className={`bi ${service.icon}`} style={{ color: service.color }}></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <Link to="/services" className="stretched-link">
                        {service.title}
                      </Link>
                    </h4>
                    <p className="description">{service.description}</p>
                    <Link to="/services" className="btn-get-started">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceList;
