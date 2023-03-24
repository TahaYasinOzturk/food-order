//npm install react-stripe-checkout kurduk. ödeme sayfası icin bunu sonra cart page de cagiricaz. fronetd strip in ödeme ekrani icin kurduk. normalde components te olması gerek. amount={toplamfiyat * 100} normalde 0.70 geliyor  100 ile carpmak lazım.
import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };

  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51Moog7HmLJhuydfET0scjqhnQgob6P6m8IS17AdGh7sMFHpd5cqIeue0RNwUuewFl2w6j80qrHTeOYkHQo2VfHFb00wfWZRJiF"
        currency="TRY"
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
