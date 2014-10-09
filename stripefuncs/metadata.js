
// https://stripe.com/docs/api/node#metadata

var stripe = require("stripe")(
  "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);


stripe.charges.create({
  amount: 600,
  currency: "usd",
  card: "tok_14iW2dC8YqEG4DZry1HLko4f", // obtained with Stripe.js
  metadata: {'order_id': '6735'}
});







