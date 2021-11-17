import { makeStyles } from "@mui/styles";
import {
  default as banner,
  default as contactBg,
} from "./images/appointment-bg.png";
import bg from "./images/bg.png";

const useStyles = makeStyles(() => ({
  banner: {
    width: "100%",
    minHeight: "100vh",
    background: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bannerText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2.3em",
    height: "550px",
  },
  appointmentBanner: {
    marginTop: 200,
    // we can also use blend='overlay' here..but i did here with opacity
    backgroundImage: `linear-gradient(rgba(58, 66, 86,0.9),rgba(58, 66, 86,0.9)),
    url(${banner})
    `,
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
  },
  button: {
    color: "#fff !important",
    margin: "18px 0",
    backgroundImage: "linear-gradient(to right,#00e5ff,#40c4ff)",
    fontWeight: "bold",
  },
  bookedAppointments: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
  },
  contactContainer: {
    width: "100%",
    backgroundImage: `url(${contactBg})`,
    backgroundColor: "#3A4256",
    backgroundBlendMode: "multiply",
  },
  textArea: {
    border: 0,
    outline: 0,
    width: "100%",
    margin: "20px 0",
    borderRadius: 3,
    fontFamily: "inherit",
    padding: 15,
  },
}));
export default useStyles;
