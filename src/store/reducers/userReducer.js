const defaultState = {
  users : []
};

const userReducer = ( state = defaultState , action) => {
    switch(action.type) {
      case 'GET_USER_LOGIN':
        console.log("at GETUSERLOGIN",action.payload);
        return {
          user : action.payload
        };
        break;
      case 'GET_USER_SIGN_UP':
        console.log('GET_USER_SIGN_UP HITTED!');
        return {
          user : action.payload
        }
        break;
      case 'GET_USER_LOGOUT':
        console.log('GET_USER_LOGOUT HITTED!');
        return {
          user : null
        }
        break;
    }
    return state;
}

export {
  userReducer
};
