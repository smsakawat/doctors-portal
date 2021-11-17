import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "../AvailableAppointmensts/AvailableAppointments";

const Appointment = () => {
  // i had to declare this state here because i need the 'date' state in two sibilings
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Navigation />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
