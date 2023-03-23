import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducers";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";
// burda reducuerlari tanımladik bunlari da index js e aktaricaz.

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
});
//user reducer i ekledik sonra register.jsx olusturduk.
// burayı yaptık  asagıdakileri yazdik reducra yoladik. consoledan kontrol ettik görmek icin. application local storgaeden geldigini gözlemedik. sonra cartpagejsx i düzenlemeye gectik.Local kısmi asadgidaki kullanım olacak.
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
// tek kullanici oldugu icin null yazıcaz dizi deil.initialstatei güncelliyoruz.loginUserReducer: yerini yazdık LoginPage olusturmaya baslıyoruz.

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};

const compose = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
