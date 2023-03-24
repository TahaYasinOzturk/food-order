import axios from "axios";
import Swal from "sweetalert2";

//server tarafında usermodel userroute index js i ayarladik simdi action tanımlıyoruz. userreducera gectik orayıda yaptık sonra store gittik
//23.03 kontrol ekledik varsa ekleme yapmıyor.yoksa kullanıcı ekliyor. user kontrolleri bitti logine gectik.

export const registerUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );
    console.log("Response", response);

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Kaydı Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });

    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Böyle bir kullanıcı var!",
    });
  }
};

//LOGIN
//23.03 login kismini yapıyoruz.userouterda servisi yazdık kontrol ettik buraya geldik.
export const loginUserAction = (user) => async (dispatch, getState) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      user
    );
    console.log("Login response", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Girişi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    //kullanicin bilgisini tutması icin local storage yaptık.
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Kullanıcı Adı ya da Şifre Hatalı",
    });
  }
};

//logout icin yazdık  navbara  logoutHandler tanımladik buttona gittik.
export const logoutUserAction = () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};
