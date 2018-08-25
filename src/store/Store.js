import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { productReducer } from "./reducers/productReducer";
const store = createStore(combineReducers({
  userReducer,
  productReducer
}), applyMiddleware(thunk));
export default store;
