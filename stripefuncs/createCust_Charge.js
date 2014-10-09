
var stripe = require("stripe")(
  "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);


// Create a new customer and then a new charge for that customer:
stripe.customers.create({
  email: 'foo-customer@example.com'
}).then(function(customer) {
  return stripe.charges.create({
    amount: 1600,
    currency: 'usd',
    customer: customer.id
  });
}).then(function(charge) {
  console.log (' charge = ', charge); 
  // New charge created on a new customer
}, function(err) {
  console.log (' err = ', err); 	
  // Deal with an error
});