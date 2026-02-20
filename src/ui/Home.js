import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import ServiceList from "../components/ServiceList";
import Revenue from "../components/Revenue";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <ServiceList/>
        <ClientList/>
       <Revenue/>
        <Faq/>
        <Testimonials/>
      </main>
      <Footer />
    </>
  );
};

export default Home;




