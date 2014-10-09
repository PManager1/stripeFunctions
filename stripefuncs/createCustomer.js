var stripe = require("stripe")(
    "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);

stripe.customers.create({
    description: 'Customer for test@example.com',
    card: "tok_14lpocC8YqEG4DZrhgffYsfc" // obtained with Stripe.js
}, function(err, customer) {
    console.log(' err= ', err);
    console.log(' customer= ', customer);
});


