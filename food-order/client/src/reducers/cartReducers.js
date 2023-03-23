export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (sepet) => sepet._id !== action.payload._id
        ),
      };
    //Adim 3; action yaptık simdi reducer ını yapıyoz.
    //cartıtems state ama burgers gibi deil parametre ve obje alıcak mevcut kartın objesini secip ayrı ayrı tutucak. fiyatıdır sudur budur. sıfırdan dizi olusturuyruz. ikinci parametre den geleni ekleyerek ilerleyecek.

    default:
      return state;
  }
};
