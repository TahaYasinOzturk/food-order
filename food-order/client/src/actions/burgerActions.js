import axios from "axios";
import Swal from "sweetalert2";

// ilk dispatch işlemi baslatan req atan sonra atıldı diyor sonra basarılı yada error olarak dönüyor try catch icinden gelen cevplar.thunk ile fetch calıstırdık actionlarda thunk ile fetch calısabiliryor.  normalde fetch calısmaz.
export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/burgers/getBurgers"
    );
    console.log(response);
    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error });
  }
};
// sıra 2:backende yollarken post yapıyoruz. burgerid yolladik. backend e  backend tarafında
//params olan yerlerde res. body i vardır birde  params i vardir.  postman params auth body sekmelerivar ordan bakabilirsin. post ile body yolluyoruz. axios.post("", { burgerid }); boş tu ona göre giti serverda  burgerroute silme servisi yazdik. menusListte cagiriyoruz. swall.fire ekledik.

export const deleteBurgerAction = (burgerid) => async (dispatch) => {
  try {
    const result = await Swal.fire({
      title: "Emin misiniz?",
      text: "Bunun geri dönüşü yok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      axios.post("http://localhost:4000/api/burgers/deleteBurger", {
        burgerid,
      });
      Swal.fire("Silindi!", "Burger başarıyla silinmiştir.", "success");
    }
  } catch (error) {
    console.log(error);
  }
};
//sıra:7) addburger eklyeme yapıyoruz addmenu icin
// const response = await axios.post(  "http://localhost:4000/api/burgers/addBurger",  { menu }
//axiosdave fetchde , { } ile gönderiyoruz böyle olmalı.. objede olsa degiskende olsa bu sekilde yollanıyor.fetch ve axios da bu sekilde kullanılır. burder reduceri yazıcaz.
export const addBurgerAction = (menu) => async (dispatch) => {
  dispatch({ type: "ADD_BURGERS_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/burgers/addBurger",
      { menu }
    );

    console.log(response);
    dispatch({ type: "ADD_BURGERS_SUCCESS" });
    window.location.href("/admin/menulist");
  } catch (error) {
    dispatch({ type: "ADD_BURGERS_FAILED", payload: error });
  }
};

// export const deleteBurgerAction = (burgerid) => async (dispatch) => {
//   try {
//     const response = await axios.post(
//       "http://localhost:4000/api/burgers/deleteBurger",
//       { burgerid }
//     );
//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Silme İşlemi Başarılı",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
