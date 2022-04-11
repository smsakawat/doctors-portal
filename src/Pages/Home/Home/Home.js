import React from "react";
import Services from "../../Home/Services/Services";
import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import About from "../About/About";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Infos from "../Infos/Infos";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Infos />
      <Services />
      <About />
      <AppointmentBanner />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
