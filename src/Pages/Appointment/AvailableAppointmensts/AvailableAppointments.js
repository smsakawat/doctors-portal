import { Alert, Container, Grid, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import React, { useState } from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 101,
    name: "Teeth Orthodontics",
    time: "8:00 AM - 9:00 AM",
    space: "10",
    price: 230,
  },
  {
    id: 102,
    name: "Cosmetic Dentistry",
    time: "9:00AM - 11:00AM",
    space: "8",
    price: 200,
  },
  {
    id: 103,
    name: "Teeth Cleaning",
    time: "7:00AM - 8:30AM",
    space: "5",
    price: 190,
  },
  {
    id: 104,
    name: "Cavity Protection",
    time: "7:30AM - 8:30AM",
    space: "10",
    price: 170,
  },
  {
    id: 105,
    name: "Pediatric Dental",
    time: "8:00 AM - 9:00 AM",
    space: "10",
    price: 150,
  },
  {
    id: 106,
    name: "Oral Surgery",
    time: "8:00 AM - 9:00 AM",
    space: "10",
    price: 140,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const showSuccess = () => {
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };
  return (
    <>
      <Container sx={{ my: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: cyan["A400"],
            textAlign: "center",
            my: 5,
          }}
        >
          Available appointments on {date.toDateString()}
        </Typography>
        {bookingSuccess && (
          <Alert sx={{ my: 1 }} severity="success">
            Appointment Booked Successfully!
          </Alert>
        )}
        {
          <Grid container spacing={2}>
            {bookings.map((booking) => (
              <Grid item xs={12} sm={6} md={4} key={booking.id}>
                <Booking
                  showSuccess={showSuccess}
                  date={date}
                  booking={booking}
                ></Booking>
              </Grid>
            ))}
          </Grid>
        }
      </Container>
    </>
  );
};

export default AvailableAppointments;
