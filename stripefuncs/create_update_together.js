var stripe = require("stripe")(
    "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);

stripe.customers.create({
    description: 'Customer for test@example.com',
    card: "tok_14lqUPC8YqEG4DZrJEjcljd2" //
}, function(err, customer) {
    console.log(' err 1= ', err);
    console.log(' customer= ', customer);


    stripe.customers.update(customer.id, {
        email: "hola@mola.com",
        "description": "Updated description ",
        "email": "foo-customer@example.com",
        "metadata": {'order_id': '6735', 'name': 'Raj'}, 
        // "name": "Raj"
        // metadata: {'order_id': '6735'}

    }, function(err, customer) {
    	console.log (" updating the info"); 
        console.log(' err 2= ', err);
        console.log(' customer= ', customer);
        console.log(' metadata= ', customer.discount);
    });


});
