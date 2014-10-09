
// https://stripe.com/docs/api/node#update_customer

var stripe = require("stripe")(
  "sk_test_vYbLAVlfXadiOiZAsOd4bNH7"
);
stripe.customers.update("cus_4vh7nOSInhK98X", {
    email: "hola@mola.com", 
	"description": "hola discription",
 	"email": "foo-customer@example.com" 
 	// "metadata": more:"give me"; 

    // name: "cust name", 
}, function(err, customer) {
	    console.log(' err= ', err);
    console.log(' customer= ', customer);	
    console.log(' metadata= ', customer.discount);	
});



