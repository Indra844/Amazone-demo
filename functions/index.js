const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const request = require("request");
const stripe = require("stripe")(
  "sk_test_51HQGLyHqfXBtcPIGQkkwWrWGvCiquW1BDRT4KQwP06r1qQUbmAHVDB9gpnqacDkwyZ7A9jbaJ6k5dFVCG1lT9fUT00KE5igYJ3"
);

//API

// - App config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello world"));
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request rcievd >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//
