
 var stripe = require('stripe')('sk_test_vYbLAVlfXadiOiZAsOd4bNH7');

    stripe.charges.create({
        amount: 600,
        currency: "usd",
        card: "tok_14iENQC8YqEG4DZr4xJuFXWf",   // obtained with Stripe.js
        description: "Charge for test@example.com"
    }, function(err, charge) {
        // asynchronously called
        console.log(' err= ', err);
    });








// // Set your secret key: remember to change this to your live secret key in production
// // See your keys here https://dashboard.stripe.com/account

// var stripe = require('stripe')('sk_test_vYbLAVlfXadiOiZAsOd4bNH7');



// <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>


// <script type="text/javascript" src="https://js.stripe.com/v2/"></script>



//     // This identifies your website in the createToken call below
//     Stripe.setPublishableKey('pk_test_lj9eYRe5nlffycMFiDZmGxKF');

//     var stripeResponseHandler = function(status, response) {
//       var $form = $('#payment-form');

//       if (response.error) {
//         // Show the errors on the form
//         $form.find('.payment-errors').text(response.error.message);
//         $form.find('button').prop('disabled', false);
//       } else {
//         // token contains id, last4, and card type
//         var token = response.id;

//         console.log ( ' token ===== ', token); 

//         // Insert the token into the form so it gets submitted to the server
//         $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//         // and re-submit
//         $form.get(0).submit();
//       }
//     };








// <script type="text/javascript" src="https://js.stripe.com/v2/"></script>

// stripe.charges.create({
//   amount: 50000,
//   currency: "usd",
//   card: "tok_14hqhKC8YqEG4DZrPtTP5PsM", // obtained with Stripe.js
//   description: "Charge for test@example.com"
// }, function(err, charge) {
//   // asynchronously called
//       console.log ( ' err= ', err);
// });







