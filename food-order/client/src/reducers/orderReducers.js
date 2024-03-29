//Asama 2: payment ve error
export const checkoutOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHECKOUT_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "CHECKOUT_ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
        payment: action.payload,
      };
    case "CHECKOUT_ORDER_FAILED":
      return {
        loading: true,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_USER_ORDERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_USER_ORDERS_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "GET_USER_ORDERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
//asama4:orderroute a gidiyoruz.
