import { Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import useStyle from "../../../styles";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, showSuccess }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const classes = useStyle();
  const { name, space, time, price } = booking;
  return (
    <>
      <Paper elevation={5} sx={{ py: 4 }}>
        <Typography variant="h5" color="primary.main" my={1}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }} my={1}>
          {time}
        </Typography>
        <Typography
          variant="caption"
          color="text.disabled"
          sx={{ display: "block" }}
        >
          Service fee: ${price}
        </Typography>
        <Typography variant="caption" color="text.disabled" my={1}>
          {space} SPACES AVAILABLE
        </Typography>
        <div>
          {" "}
          <Button
            onClick={handleModalOpen}
            variant="contained"
            my={3}
            className={classes.button}
          >
            Book Appointment
          </Button>
        </div>
      </Paper>
      <BookingModal
        date={date}
        booking={booking}
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
        showSuccess={showSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
