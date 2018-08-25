const APIEndPoint = 'http://localhost:8080'
export function getUserloginAction({ email, password }) {
  return dispatch => {
    fetch(`${APIEndPoint}/user/signIn`, {
      method: 'post',
      body: JSON.stringify({ bodyData: { email, password } }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'GET_USER_LOGIN',
          payload: data
        })
      })
      .catch(err => console.log(`Error While login : ${err} `))
  };
};


export function createUser({ userName, email, password }) {
  return dispatch => {
    console.log('inside create Dispatch user');
    fetch(`${APIEndPoint}/user/signUp`, {
      method: 'post',
      body: JSON.stringify({ bodyData: { userName, email, password } }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(`USER DATA: ${data}`)
        dispatch({
          type: 'GET_USER_SIGN_UP',
          payload : data
        })
      })
      .catch(e => console.log(e));
  }
}

export function getUserLogout() {
  return dispatch => {
    console.log('Work to be done Logout!')
  };
};
