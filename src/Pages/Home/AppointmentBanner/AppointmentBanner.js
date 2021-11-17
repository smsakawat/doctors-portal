import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import appointmentBg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";
import MuiButton from "../../../StyledComponents/MuiBtn/MuiBtn";
import useStyles from "../../../styles";

const AppointmentBanner = () => {
  const classes = useStyles();
  const appSection = {
    width: "116%",
    backgroundImage: `url(${appointmentBg})`,
    backgroundColor: "#3A4256",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  };
  return (
    <Box sx={{ my: 15 }} style={appSection}>
      <Container maxWidth={"xl"}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={12} md={5}>
            <img
              src={doctor}
              alt=""
              width="100%"
              style={{ marginTop: "-130px", display: "block" }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              align="left"
              variant="h4"
              color="#5FC7C7"
              sx={{ fontWeight: 700, mb: 1, mt: 1 }}
            >
              APPOINTMENT
            </Typography>
            <Typography
              align="left"
              variant="h2"
              color="#fff"
              sx={{ fontWeight: 500, mb: 2 }}
            >
              Make an appointment <br />
              Today
            </Typography>
            <Typography
              align="left"
              variant="body1"
              color="#fff"
              sx={{
                fontSize: "18px",
                lineHeight: "34px",
                fontWeight: 400,
                mr: 10,
                mb: 1,
              }}
            >
              It is a long established fact that a reader will be distractedby
              the readable
              <br /> content of a page when looking at its
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {" "}
              <MuiButton>Learn More</MuiButton>
            </Box>
            {/* <Box sx={{ pb: 4 }}> &nbsp;</Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentBanner;
