import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

const Details = () => {
  return (
    <Box>
      <Container>
        <Box style={{ marginTop: "-20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  mt: -8,
                  mb: 8,
                  px: 4,
                  py: 4,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1CC7C1",
                  gap: 3,
                  "&:hover": {
                    backgroundColor: "#3A4256",
                  },
                }}
              >
                <AccessTimeIcon sx={{ fontSize: 45, color: "white" }} />
                <Box>
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{ mb: 1, fontWeight: "500" }}
                  >
                    Opening Hours
                  </Typography>
                  <Typography variant="p" color="white">
                    Mon- Sat: 10AM-8PM
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  mt: -8,
                  mb: 8,
                  px: 4,
                  py: 4,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#3A4256",
                  gap: 3,
                  "&:hover": {
                    backgroundColor: "#1CC7C1",
                  },
                }}
              >
                <RoomIcon sx={{ fontSize: 45, color: "white" }} />
                <Box>
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{ mb: 1, fontWeight: "500" }}
                  >
                    Visit our location
                  </Typography>
                  <Typography variant="p" color="white">
                    Brooklyn, NY 10036, USA
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  borderRadius: 2,
                  mt: -8,
                  mb: 8,
                  px: 4,
                  py: 4,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#1CC7C1",
                  gap: 3,
                  "&:hover": {
                    backgroundColor: "#3A4256",
                  },
                }}
              >
                <WifiCalling3Icon sx={{ fontSize: 45, color: "white" }} />
                <Box>
                  <Typography
                    variant="h5"
                    color="white"
                    sx={{ mb: 1, fontWeight: "500" }}
                  >
                    Contact us now
                  </Typography>
                  <Typography variant="p" color="white">
                    +000 123 456769
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Details;
