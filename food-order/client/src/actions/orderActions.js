import axios from "axios";

export const checkoutOrderAction =
  (token, toplamfiyat) => async (dispatch, getState) => {
    dispatch({ type: "CHECKOUT_ORDER_REQUEST" });
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().addToCartReducer.cartItems;
    //23.03 ödeme kullanici ve carttakileri eşitledik. backend de server models order modeli yaziyoruz.
    //Asama 1:C  en son simdi catch kismini yapacagim. redux tool kit de calıs
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
      console.log("Response", response);
      dispatch({ type: "CHECKOUT_ORDER_SUCCESS", payload: response.data });
      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({ type: "CHECKOUT_ORDER_FAILED", payload: error });
      console.log(error);
    }
  };

export const getUsersOrdersAction = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;

  dispatch({ type: "GET_USER_ORDERS_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/orders/getusersorders",
      { userid: currentUser._id }
    );
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

//reducerı yazalım orderreducerda getUsersOrdersReducer yazildi.
