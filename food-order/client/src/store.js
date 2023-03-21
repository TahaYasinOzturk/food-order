import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
});

const initialState = {};

const compose = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
