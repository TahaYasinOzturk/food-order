import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartAction, deleteFromCartAction } from "../actions/cartActions";
import CheckoutPage from "./CheckoutPage";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const userState = useSelector((state) => state.loginUserReducer);

  // redux devtoolda  state kismindan gelienleri gördük  cartITEMS a geldi .secili olanlar. app.js e gittik router işlemini yapmaya.
  const { cartItems } = cartState;
  const { currentUser } = userState;
  console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toplamFiyat = cartItems.reduce((x, urun) => x + urun.fiyatlar, 0);

  //23.03 ödeme islemileri icin  const userState = useSelector((state) => state.loginUserReducer);
  const checkOutHandler = () => {
    if (!currentUser) {
      navigate("/login");
    }
    console.log("ödeme ekranına aktaralım");
  };

  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="display-2 text-warning">Sepetim</h2>
          {toplamFiyat == 0 ? (
            <></>
          ) : (
            <>
              <h4 className="text-danger">Toplam Fiyat: {toplamFiyat} ₺</h4>
              <CheckoutPage toplamfiyat={toplamFiyat} />
              {/* <button
                className="btn btn-outline-danger my-3 w-25"
                onClick={checkOutHandler}
              >
                HEMEN ÖDE!
              </button> */}
            </>
          )}

          {/* Adim 7 :sepette ürün yok ekledik  ürün özelligini ekledik. yukarıya toplam fiyat ekledik reduce ile fiyatlari topladik ternary ile yaptık server tarafina gectik.*/}
          {cartItems.length == 0 ? (
            <div className="alert alert-danger mt-5" role="alert">
              Sepetinizde ürün bulunmamaktadır :(
            </div>
          ) : (
            cartItems.map((urun) => (
              <div
                key={urun._id}
                className="row border border-3 border-warning shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-light text-warning"
              >
                <div className="col-md-4">
                  <img src={urun.img} alt="" style={{ width: "200px" }} />
                </div>
                <div className="col-md-4">
                  {" "}
                  <h3>{urun.ad}</h3>
                  <p className="text-dark">Ürün boyutu: {urun.ozellik}</p>
                  <p className="text-dark">{urun.desc}</p>
                </div>
                <div className="col-md-4">
                  <h5 className="text-dark ">Ürün Adedi: {urun.miktar}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <i
                      className="fa-regular fa-square-plus text-danger fa-2x mx-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(
                          addToCartAction(
                            urun,
                            Number(urun.miktar) + 1,
                            urun.ozellik
                          )
                        );
                      }}
                    />
                    <span
                      style={{ fontSize: "25px", fontWeight: "bold" }}
                      className="my-auto text-dark"
                    >
                      {urun.miktar}
                    </span>
                    <i
                      className="fa-regular fa-square-minus text-danger fa-2x mx-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch(
                          addToCartAction(urun, urun.miktar - 1, urun.ozellik)
                        );
                      }}
                    />
                  </div>

                  <i
                    className="fa-solid fa-trash text-danger fa-1x mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => dispatch(deleteFromCartAction(urun))}
                  />
                  <h4 className="text-danger">Fiyat: {urun.fiyatlar} ₺</h4>
                  <hr className="w-75 m-auto" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;

/* import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const { cartItems } = cartState;
  console.log(cartItems);
  return (
    <div>
      <div className="container">
        <div className="text-center">
          <h2 className="display-2 text-warning">Sepetim</h2>

          {cartItems.map((urun) => (
            <div className="row">
              <div className="col-md-4">
                <img src={urun.img} alt="" />
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage; */
