// mongodb deki aidl er _id seklinde geldigi icin _id yaptik.
import Swal from "sweetalert2";
export const addToCartAction =
  (menu, miktar, ozellik) => (dispatch, getState) => {
    var cartItem = {
      ad: menu.ad,
      _id: menu._id,
      img: menu.img,
      ozellik: ozellik,
      miktar: Number(miktar),
      fiyat: menu.fiyat,
      fiyatlar: menu.fiyat[0][ozellik] * Number(miktar),
      kategori: menu.kategori,
      desc: menu.desc,
    };
    /* Adim:4 sepetten ayni ürünü silme yaptık  1 den kücük olanları soru sorup siliyor. cartreducera gittik*/
    /* Adim 6 menu ozellikigi özellik olarak geidistirk.   ozellik: menu.ozellik, miktar: Number(miktar),*/
    if (miktar < 1) {
      Swal.fire({
        title: "Emin misiniz?",
        text: "Ürününüz sepetten kaldırılacaktır!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "crimson",
        cancelButtonColor: "#f49d1a",
        confirmButtonText: "Evet, sil !",
        cancelButtonText: "Vazgeç !",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: "DELETE_FROM_CART", payload: menu });
          Swal.fire("Silme Başarılı!", "Ürün Sepetten Kaldırıldı.", "success");
        }
      });
    }

    /* isConformid kabul edilirse şu olsun */
    if (miktar > 0) {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });

      const cartItems = getState().addToCartReducer.cartItems;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };
/* 22.03.2023 carsamba Adim 1;dispatch({type:"DELETE_FROM_CART",payload:menu}); payloadı frontend yollayacak.  cartpage e çöp kutusna gittik deleteFromCartAction = (menu) => (dispatch, getState) => { menu yerine istediginiz yaz urun yazarsan alltaki satirida urun ile degistirmek lazım . burda dispatchledikten sonra reducer a gider  temizlemeyei yapar sonra gelir local storagei günceller. burda yazan  son komutu calıstırır.*/
export const deleteFromCartAction = (menu) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: menu });

  const cartItems = getState().addToCartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
////npm npm i react-toastify ekledik ve addtoCart kismina ekledik yaptık yandan ekleme penceresi geldi sonra buraya geldik.en üste disptach getstate yazdik. desc: menu.desc, kategroi menu.kategori ekledik yukarıya dispatch({ type: "ADD_TO_CART", payload: cartItem });  sonra bunları ekledik orda store.js e gectik.
