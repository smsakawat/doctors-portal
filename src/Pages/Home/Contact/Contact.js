import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../../../styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer} style={{ margin: "40px 0" }}>
      {/* <div> */}

      <Container maxWidth={"md"} sx={{ py: 4 }}>
        <Typography
          variant="h4"
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          Contact us
        </Typography>
        <Typography
          variant="h3"
          color="#fff"
          sx={{ fontWeight: "500", mt: 1, mb: 4 }}
        >
          Always connect with us
        </Typography>
        <TextField
          fullWidth
          placeholder="Email"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          placeholder="Subject"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <TextField
          fullWidth
          multiline
          rows={5}
          placeholder="Your Message"
          margin="normal"
          required
          sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Button
            variant="contained"
            className={classes.button}
            sx={{ width: 185, padding: "16px 30px" }}
          >
            Submit
          </Button>
        </Box>
      </Container>

      {/* </div> */}
    </div>
  );
};

export default Contact;
