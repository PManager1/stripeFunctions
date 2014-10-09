var stripe = require("stripe")(
  "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);

stripe.customers.list({ limit: 3 }, function(err, customers) {
  console.log (' err = ', err); 
  console.log (' cust = ', customers); 
});