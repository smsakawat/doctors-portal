import { Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ appointment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const { price, patientName, email, _id } = appointment;
  const [success, setSuccess] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", { price })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price]);
  const handleSubmit = async (e) => {
    // Block native form submission.
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setShowLoader(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    // problem1
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: email,
          },
        },
      });
    if (intentError) {
      setSuccess("");
      setError("Payment Unsuccesfull");
      setShowLoader(false);
    } else {
      setError("");
      setSuccess("Congrats,Payment Successfull");
      setShowLoader(false);
      console.log(paymentIntent);
      // save payment info in db after succesfully payment done
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        transaction: paymentIntent.client_secret.split("_secret")[0],
        last4: paymentMethod.card.last4,
      };
      //   console.log(payment.transaction);
      axios
        .put(`http://localhost:5000/appointments/${_id}`, payment)
        .then((res) => console.log(res.data));
    }
  };
  return (
    <>
      <Box sx={{ py: 4, width: 2 / 4, margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          {showLoader ? (
            <Button disabled variant="contained" color="success">
              <CircularProgress
                color="inherit"
                size={20}
                style={{ margin: "0 auto" }}
              ></CircularProgress>
            </Button>
          ) : (
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={!stripe || success}
            >
              Pay ${price}
            </Button>
          )}

          {error && (
            <p style={{ margin: "20px 0", color: "red", fontWeight: "bold" }}>
              {error}
            </p>
          )}
          {success && (
            <p style={{ margin: "20px 0", color: "green", fontWeight: "bold" }}>
              {success}
            </p>
          )}
        </form>
      </Box>
    </>
  );
};

export default CheckoutForm;
