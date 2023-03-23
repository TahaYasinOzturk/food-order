import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/userReducers";
// burda reducuerlari tanımladik bunlari da index js e aktaricaz.

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer,
});
// burayı yaptık  asagıdakileri yazdik reducra yoladik. consoledan kontrol ettik görmek icin. application local storgaeden geldigini gözlemedik. sonra cartpagejsx i düzenlemeye gectik.Local kısmi asadgidaki kullanım olacak.
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
};

const compose = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
