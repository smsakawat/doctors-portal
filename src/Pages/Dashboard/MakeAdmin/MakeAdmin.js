import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import useStyles from "../../../styles";

const MakeAdmin = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("idToken");
    console.log(token);
    axios
      .put("http://localhost:5000/users/admin", {
        email,
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setSuccess(true);
          e.target.reset();
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        } else {
          setError(true);
          setTimeout(() => {
            setError(false);
          });
        }
        console.log(res.data);
      });
  };
  return (
    <Box sx={{ py: 6, width: 2 / 4, margin: "0 auto" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Add an Admin
      </Typography>

      <form onSubmit={handleOnSubmit}>
        <TextField
          label="Email"
          fullWidth
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button
          type="submit"
          sx={{ width: "100%", mb: 2 }}
          variant="contained"
          className={classes.button}
        >
          Submit
        </Button>
        {success && <Alert severity="success">Admin added successfully</Alert>}
        {error && (
          <Alert severity="error">
            Sorry!!You don't have permission to add an admin
          </Alert>
        )}
      </form>
    </Box>
  );
};

export default MakeAdmin;
