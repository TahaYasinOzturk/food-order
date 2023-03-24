import axios from "axios";
export const checkoutOrderAction =
  (token, toplamfiyat) => async (dispatch, getState) => {
    dispatch({ type: "CHECKOUT_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems;
    //23.03 ödeme kullanici ve carttakileri eşitledik. backend de server models order modeli yaziyoruz.
    try {
      const response = await axios.post(
        "http://localhost:4000/api/orders/checkout",
        {
          token,
          currentUser,
          toplamfiyat,
          cartItems,
        }
      );
    } catch (error) {}
  };
