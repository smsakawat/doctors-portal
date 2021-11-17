import { Grid } from "@mui/material";
import React from "react";
import Calendar from "../../Shared/Calendar/Calendar";
import BookedAppointments from "../BookedAppointments/BookedAppointments";
const DashboardHome = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Calendar date={date} setDate={setDate} />
        </Grid>
        <Grid item xs={12} md={7}>
          <BookedAppointments date={date}></BookedAppointments>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardHome;
