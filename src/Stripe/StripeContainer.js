import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51HN13PBE3AH50uTRNH3Zu28Pc75KAtQMfCmEh6QEuEsrMEsKUNBUKA8MYThH8GC9OhDTI7NPVpoWpFdnEOVQLIhw009ehP6irP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;
