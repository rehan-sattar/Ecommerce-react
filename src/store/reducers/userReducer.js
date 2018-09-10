import { UserActions } from "./Actions";
import swal from "sweetalert";
const defaultState = {
  users: null,
  isAuthenticated: true,
  AddedFavProductFlag: false,
  allFavoritProducts: []
};
const userReducer = (state = defaultState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case UserActions.singInSuccess:
      newState.users = action.payload;
      newState.isAuthenticated = true
      break;
    case UserActions.signInError:
      break;
    case UserActions.signUpSuccess:
      newState.users = action.payload;
      newState.isAuthenticated = true;
      break;
    case UserActions.signUpError:
      break;
    case UserActions.addToFavoritSuccess:
      swal("Wohamiiii!!", "This is your favorit one :)", "success");
      newState.AddedFavProductFlag = true
      break;
    case UserActions.addToFavoritError:
      break;
    case UserActions.getAllFavProductsSuccess:
      console.log('Response of all favorit products: ', action.payload);
      newState.allFavoritProducts = action.payload;
      break;
    case 'GET_USER_LOGOUT':
      newState.isAuthenticated = false;
      localStorage.removeItem('userId');
      break;
  }
  return newState;
}

export {
  userReducer
};
