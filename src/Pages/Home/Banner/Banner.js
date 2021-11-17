import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import chair from "../../../images/chair.png";
import MuiButton from "../../../StyledComponents/MuiBtn/MuiBtn";
import useStyles from "../../../styles";

const Banner = () => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={classes.banner}
    >
      {/* i used flexbox here rather than grid..we can also do this with grid */}
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              varaint="body2"
              color="text.disabled"
              sx={{ my: 1, lineHeight: 2 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Neque laboriosam ut earum quas ullam, illum quisquam,
              <br /> id veritatis architecto culpa ipsa voluptate , veniam.
            </Typography>
            <MuiButton>Get Appointment</MuiButton>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={chair} alt="chair" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
