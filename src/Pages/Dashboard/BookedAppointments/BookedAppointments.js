import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useStyles from "../../../styles";

const BookedAppointments = ({ date }) => {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  //   load appointments by date
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/bookedAppointments?email=${
          user?.email
        }&&date=${date.toLocaleDateString()}`
      )
      .then((res) => {
        setAppointments(res.data);
      });
  }, [date, user?.email]);
  return (
    <>
      <Box className={classes.bookedAppointments}>
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "primary.main" }}
          align="left"
          mb={4}
        >
          Booked Appointments
        </Typography>
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Service Name</TableCell>
                  <TableCell align="left">Patient Name</TableCell>
                  <TableCell align="left">Schedule</TableCell>
                  <TableCell align="left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointments) => (
                  <TableRow
                    key={appointments._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="left">
                      {appointments.serviceName}
                    </TableCell>
                    <TableCell align="left">
                      {appointments.patientName}
                    </TableCell>
                    <TableCell align="left">{appointments.time}</TableCell>
                    <TableCell align="left">
                      {appointments.payment ? (
                        "Paid"
                      ) : (
                        <Button
                          onClick={() =>
                            navigate(`/dashboard/payment/${appointments._id}`)
                          }
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          Pay
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default BookedAppointments;
