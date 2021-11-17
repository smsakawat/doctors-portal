import { Button, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useStyle from "../../../styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};
const BookingModal = ({
  modalOpen,
  handleModalClose,
  booking,
  date,
  showSuccess,
}) => {
  const { user } = useAuth();
  const classes = useStyle();
  const { name, space, time, price } = booking;
  const [bookingInfo, setBookingInfo] = useState({
    patientName: user.displayName,
    email: user.email,
  });

  // get booking info
  const handleOnBlur = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
  };

  //   handle booking submit
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // alert("Booking Submitted");
    handleModalClose();
    // collect data
    const appointment = {
      ...bookingInfo,
      serviceName: name,
      price,
      time,
      date: date.toLocaleDateString(),
    };
    // send to the server
    axios
      .post("http://localhost:5000/appointments", appointment)
      .then((res) => {
        if (res.data.insertedId) {
          showSuccess();
        }
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              color="primary.main"
              align="center"
              my={2}
            >
              {name}
            </Typography>

            <div style={{ marginRight: 45 }}>
              <form onSubmit={handleBookingSubmit}>
                <TextField
                  disabled
                  value={time}
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <TextField
                  defaultValue={user.displayName}
                  name="patientName"
                  onBlur={handleOnBlur}
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <TextField
                  defaultValue={user.email}
                  name="email"
                  onBlur={handleOnBlur}
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  onBlur={handleOnBlur}
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                />

                <TextField
                  disabled
                  defaultValue={date.toDateString()}
                  fullWidth
                  variant="outlined"
                  sx={{ m: 1 }}
                />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="Submit"
                    variant="contained"
                    className={classes.button}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
