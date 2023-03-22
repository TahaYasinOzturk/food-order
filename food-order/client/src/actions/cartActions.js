// mongodb deki aidl er _id seklinde geldigi icin _id yaptik.
export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu._id,
      img: menu.img,
      ozellik: menu.ozellik,
      miktar: miktar,
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * miktar,
      kategori: menu.kategori,
      desc: menu.desc,
    };

    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

////npm npm i react-toastify ekledik ve addtoCart kismina ekledik yaptık yandan ekleme penceresi geldi sonra buraya geldik.en üste disptach getstate yazdik. desc: menu.desc, kategroi menu.kategori ekledik yukarıya dispatch({ type: "ADD_TO_CART", payload: cartItem });  sonra bunları ekledik orda store.js e gectik.
