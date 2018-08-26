import { UserActions } from "./Actions";
const defaultState = {
  users : null
};
const userReducer = ( state = defaultState , action) => {
  const newState = { ...state};
    switch(action.type) {
      case UserActions.singInSuccess:
        newState.users = action.payload 
        break;
      case UserActions.signInError: 
        break;
      case UserActions.signUpSuccess:
        newState.users = action.payload  
        break;
      case UserActions.signUpError:
        break;
      case 'GET_USER_LOGOUT':
        console.log('GET_USER_LOGOUT HITTED!');
        return {
          user : null
        }
        break;
    }
    return newState;
}

export {
  userReducer
};
