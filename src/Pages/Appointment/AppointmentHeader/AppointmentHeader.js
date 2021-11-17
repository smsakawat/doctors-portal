import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";
import useStyles from "../../../styles";
import Calendar from "../../Shared/Calendar/Calendar";

const AppointmentHeader = ({ date, setDate }) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={classes.banner}
    >
      <Container>
        <Grid container spacing={2} sx={{ pt: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
              Appointment
            </Typography>
            <Calendar date={date} setDate={setDate} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={chair} style={{ width: "100%" }} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AppointmentHeader;
