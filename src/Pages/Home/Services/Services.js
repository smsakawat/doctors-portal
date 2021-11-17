import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { cyan } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import teath from "../../../images/whitening.png";
import Service from "../Home/Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores facere iste modi expedita similique. Rem.",
    img: fluoride,
  },

  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores facere iste modi expedita similique. Rem.",
    img: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores facere iste modi expedita similique. Rem.",
    img: teath,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 5 }}>
      <Container>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: cyan[300], my: 5 }}
        >
          OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "700", mb: 13 }}>
          SERVICES WE PROVIDE
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Grid item xs={4} sm={4} md={4} key={service.id}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
