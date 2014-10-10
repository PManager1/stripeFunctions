var stripe = require("stripe")(
    "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);

stripe.customers.create({
    description: 'Customer for test@example.com',
    card: "tok_14lsYVC8YqEG4DZr9Io4OnrO", // obtained with Stripe.js
}, function(err, customer) {
    console.log(' err 1= ', err);
    console.log(' customer= ', customer);


    stripe.customers.update(customer.id, {
        email: "hola@mola.com",
        "description": "Updated description ",
        "email": "foo-customer@example.com",
        "metadata": {'order_id': '6735', 'fistname': 'Raj', 'lastname': 'Machod', 'mobile_number': '415-573-6448', 'password': 'password', 'credit_card': '111-22-333-4444','cvv': '222', 'expiration_mo': '03', 'expiration_year': '2003', 'promo_code': 'abiw238'} 
        // "name": "Raj"
        // metadata: {'order_id': '6735'}

    }, function(err, customer) {
    	console.log (" updating the info"); 
        console.log(' err 2= ', err);
        console.log(' customer= ', customer);
        console.log(' metadata= ', customer.discount);
    });


});
