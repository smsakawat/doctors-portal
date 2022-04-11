import { PhotoCamera } from "@mui/icons-material";
import { Button, IconButton, Input, TextField } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { useState } from "react";
import useStyles from "../../../styles";

// alert for snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddDoctor = () => {
  const [doctor, setDoctor] = useState({});
  const classes = useStyles();
  // snackbar states
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // snackbar ends
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", doctor.name);
    formData.append("email", doctor.email);
    formData.append("image", doctor.image);
    console.log(formData);
    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          handleClick();
        }
      });
    e.target.reset();
  };

  return (
    <>
      <div>
        <h2 style={{ fontWeight: "bold", textAlign: "center", color: "gray" }}>
          Add a Doctor
        </h2>
        <div style={{ width: "50%", margin: "0 auto", padding: "10px" }}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setDoctor({ ...doctor, name: e.target.value })}
              fullWidth
              required
              label="Doctor Name"
              variant="outlined"
            />
            <br />
            <TextField
              onChange={(e) => setDoctor({ ...doctor, email: e.target.value })}
              fullWidth
              margin="normal"
              required
              label="Enter Email"
              variant="outlined"
            />
            <br />
            <TextField
              margin="normal"
              onChange={(e) =>
                setDoctor({ ...doctor, specification: e.target.value })
              }
              fullWidth
              required
              label="Enter Specification"
              variant="outlined"
            />
            <br />
            <label htmlFor="icon-button-file">
              <Input
                // we can give multiple attribute here so that user can select multiple files..we can also change the accept prop for specific file like accept="image/jpg",or accept="image/png"
                onChange={(e) =>
                  setDoctor({ ...doctor, image: e.target.files[0] })
                }
                accept="image/*"
                type="file"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <br />

            <Button
              sx={{ my: 3 }}
              fullWidth
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Doctor Added Successfully
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default AddDoctor;
