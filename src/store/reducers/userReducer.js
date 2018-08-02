const defaultState = {
  users : []
};

const userReducer = ( state = defaultState , action) => {
    switch(action.type) {
      case 'GET_USER_LOGIN':
        console.log('GET_USER_LOGIN HITTED!');
        break;
      case 'GET_USER_SIGN_UP':
        console.log('GET_USER_SIGN_UP HITTED!');
        break;
      case 'GET_USER_LOGOUT':
        console.log('GET_USER_LOGOUT HITTED!');
        break;
    }
    return state;
}

export {
  userReducer
};
