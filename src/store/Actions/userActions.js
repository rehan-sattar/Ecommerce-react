const APIEndPoint = 'http://localhost:8080'

export function getUserloginAction({ email, password }) {
  return dispatch => {
    fetch(`${APIEndPoint}/user/signIn`, {
      method: 'post',
      body: JSON.stringify({ bodyData: { email, password } }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'SIGN_IN_SUCCESS',
          payload: data
        })
      })
      .catch(err => dispatch({
        type: 'SIGN_IN_ERROR'
      }))
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
          type: 'SIGN_UP_SUCCESS',
          payload : data
        })
      })
      .catch(e => dispatch({
        type : 'SIGN_UP_ERROR'
      }));
  }
}

export function getUserLogout() {
  return dispatch => {
    
    console.log('Work to be done Logout!')
  };
};
