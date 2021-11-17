import React from "react";
import Services from "../../Home/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import About from "../About/About";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Infos from "../Infos/Infos";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Infos />
      <Services />
      <About />
      <AppointmentBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
