import { createStore, combineReducers, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import  {userReducer }  from "./reducers/userReducer";
const store = createStore(combineReducers({
  userReducer
}), applyMiddleware(thunk));
export default store;
