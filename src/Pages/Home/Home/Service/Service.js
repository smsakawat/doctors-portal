import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const Service = ({ service }) => {
  const { name, description, img } = service || {};

  return (
    <Card sx={{ width: 275, margin: "0 auto", boxShadow: 0, border: 0 }}>
      <CardMedia
        component="img"
        style={{ width: "auto", height: "80px", margin: "0 auto" }}
        image={img}
        alt="service img"
      />

      <CardContent>
        <Typography
          variant="body1"
          component="div"
          color="text.secondary"
          style={{ fontWeight: "bold", marginTop: "12px" }}
        >
          {name}
        </Typography>

        <Typography variant="body2" color="text.disabled" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
