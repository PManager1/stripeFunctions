
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account


var stripe = require('stripe')('sk_test_vYbLAVlfXadiOiZAsOd4bNH7');

// var stripe = require('stripe')(' pk_test_lj9eYRe5nlffycMFiDZmGxKF ');



// # Create a new customer and then a new charge for that customer:
stripe.customers.create({
  email: 'jpca999@gmail.com'
}).then(function(customer) {
     console.log('customer = ', customer);
  return stripe.charges.create({
    amount: 1600,
    currency: 'usd',
    customer: customer.id
  });
}).then(function(charge) {
                                  console.log('charge = ', charge);
  // New charge created on a new customer
}, function(err) {
  // Deal with an error
});




