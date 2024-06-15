const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");

const express = require ('express')
const cors = require('cors');

const stripe = require("stripe")(
  'sk_test_51NdFVsEHE7O0wAdd6fdgwX7F2JHGkKh9kSualyWq5SQpEuXUnwaQ98Bqpvp5DcTC5vMFegxk5db5sF3Ctq0X971g002frODCHn'
);

const app = express();


app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello word'))

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  if (total > 0) {
    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    response.status(201).send({
      message: "can not process payment",
    });
  }
});

exports.api = functions.https.onRequest(app);
















// Emulator API KEY
// http://127.0.0.1:5001/front-1372c/us-central1/api
// http://127.0.0.1:5001/front-1372c/us-central1/api