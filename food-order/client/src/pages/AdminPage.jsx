import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import MenusList from "./MenusList";
import OrdersList from "./OrdersList";
import UsersList from "./UsersList";
import { toast, ToastContainer } from "react-toastify";

function AdminPage() {
  const userState = useSelector((state) => state.loginUserReducer);
  const navigate = useNavigate();
  const { currentUser } = userState;

  //sıra:13) const user = localStorage.getItem("currentUser");  giriş olmadıgı zaman /admin yazınca admin sayfasına gitmemesi ve tekrara anasayfaya yönlendirmesi icin yazdık.
  useEffect(() => {
    if (currentUser == null || currentUser.isAdmin != true) {
      navigate("/");
    }
  }, [currentUser]);

  // current user adminse giricek deilse anasayfaya gidecek.
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <h2 className="display-2 text-dark my-2 fw-bold">YÖNETİCİ PANELİ</h2>
      <hr />
      <nav className="navbar navbar-expand-lg bg-warning w-50 mx-auto">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="userslist"
                >
                  Kullanıcı Listesi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="menulist">
                  Menü Listesi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="addmenu">
                  Yeni Menü Ekle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="orderslist">
                  Sipariş Listesi
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="userslist" element={<UsersList />} />
        <Route path="orderslist" element={<OrdersList />} />
        <Route path="menulist" element={<MenusList />} />
        <Route path="addmenu" element={<AddMenu />} />
        <Route path="editmenu/:burgerid" element={<EditMenu />} />
      </Routes>
    </div>
  );
}

export default AdminPage;
