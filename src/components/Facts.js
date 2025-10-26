import React from 'react';


const Facts = () => {
  return (
    <>
  
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <h2 className="text-white">Our Footprints</h2>
                <p>We have delivered excellence service to over 100+ Happy Customers across geography… </p>
              </div>
              <div className="row counters">
                <div className="col-lg-4 col-6 text-center">
                  <span data-purecounter-start="0" data-purecounter-end="8" className="purecounter">8</span>
                  <h3> States</h3>
                  <p> Nationwide Presence </p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-end-symbol="+" className="purecounter">100+</span>
                  <h3> Customers </h3>
                  <p>Nationwide</p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-end-symbol="M+" className="purecounter">20+</span>
                  <h3>Years</h3>
                  <p>Years of experience </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facts