import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  //   i will add doctors later ,there is trick here while showing the buffered image that sotred in db

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctors")
      .then((res) => setDoctors(res.data));
  }, []);
  return <Box sx={{ py: 5 }}>Total doctors: {doctors.length}</Box>;
}

export default Doctors;
