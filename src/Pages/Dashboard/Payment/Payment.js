import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JvxIBAXfWAUEubtGrg4kJW8PcA63EV25jIbGjdcm0AgkmIpl23afkYjraoemmoT4S5Rqr0KpcWoMUxt36JjGtZS00TJWfxFjd"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  console.log(appointment);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => setAppointment(res.data));
  }, [appointmentId]);
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        Please pay for : {appointment.patientName} to get <br />
        {appointment.serviceName} on
        {appointment.date}
      </Typography>
      {/* i can add a discount coupon here and i have to set the coupon code in database by admin and then if the user give the code then i will check it in db and then user will get the discount */}
      {/* i can add admin or devleoper in stripe sttings on team ,he will not see my payment settings but he can access my api keys */}

      <Box sx={{ py: 2 }}>
        {appointment.price && (
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        )}
      </Box>
    </Box>
  );
};

export default Payment;

/*
Steps for setting up stripe in project
1.install stripe and stripe react
2.set publishable key
3.Wrap checlout form with Elements
4.ChekcoutFrom(we can customize it if we wants)
--------------
5.Create payment method
6.Then test card with stripe test cards(testing payment-method)
7.ON Server create payment Intent api
8.Load client secret
9.ConfirmCaerd payment
10.Handle User error



 */
