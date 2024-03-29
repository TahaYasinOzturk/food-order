//loginpage i olusturduk store js den geldik sonra kontrol icin var olan kullanici ile giriş yapıp consoledan applicationdan local storage currentUser kontrolü yaptık ve gördük
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { loginUserAction } from "../actions/userActions";

function LoginPage() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userState = useSelector((state) => state.loginUserReducer);
  const { success, error, currentUser, loading, users } = userState;

  const loginHandler = (e) => {
    e.preventDefault();
    if (mail == "" || pass == "") {
      Swal.fire("Eksik alanları doldurunuz.!");
    } else {
      const user = {
        mail: mail,
        password: pass,
      };
      console.log(user);
      dispatch(loginUserAction(user));
    }
  };
  // inputlari form a aldik  button submit atadik sonra  const loginHandler = (e) => {    e.preventDefault(); bunu yazdik giris yaparken enter a basınca giriş sagliyor olacak.
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container w-50 bg-warning rounded shadow-lg d-flex flex-column justify-content-center p-5">
        <h2 className="display-4">Kullanıcı Giriş Ekranı</h2>
        <form>
          <input
            type="email"
            className="form-control my-3"
            placeholder="Emailinizi Giriniz"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="Şifrenizi Giriniz"
            onChange={(e) => setPass(e.target.value)}
          />

          <button
            type="submit"
            className="btn btn-outline-danger w-50 m-auto"
            onClick={loginHandler}
          >
            GİRİŞ YAP
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
