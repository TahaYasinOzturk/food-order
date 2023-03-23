export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const mevcutIse = state.cartItems.find(
        (sepet) => sepet._id === action.payload._id
      );
      if (mevcutIse) {
        return {
          ...state,
          cartItems: state.cartItems.map((sepet) =>
            sepet._id === action.payload._id ? action.payload : sepet
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    /* cartItems: [...state.cartItems, action.payload], gelenleri ekle farklı lar alt alta ekler. farlı olunca else girer */
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (sepet) => sepet._id !== action.payload._id
        ),
      };
    //Adim 3; action yaptık simdi reducer ını yapıyoz. DELETE_FROM_CART
    //cartıtems state ama burgers gibi deil parametre ve obje alıcak mevcut kartın objesini secip ayrı ayrı tutucak. fiyatıdır sudur budur. sıfırdan dizi olusturuyruz. ikinci parametre den geleni ekleyerek ilerleyecek.
    // sonrabu reducurları store yolluyoruz sonra storeda bunu index js e yoollar ve tüm projeye yayar.

    //Adim 5; case "ADD_TO_CART":       return {        ...state,        cartItems: [...state.cartItems, action.ayload],      }; updateledik if else yaptık.  ayni ürünleri sepette tekrarcıkarmasın diye üstüne ekleme yaptırdık. yukarda. fiyatlarda sorun vardı sonra cart actiona gidip menu özelligi desitirdik düzeldi.
    // case "ADD_TO_CART":
    //   return {
    //     ...state,
    //     cartItems: [...state.cartItems, action.payload],
    //   };
    default:
      return state;
  }
};
