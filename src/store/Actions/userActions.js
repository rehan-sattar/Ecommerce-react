import { UserActions } from "../reducers/Actions";
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
        localStorage.setItem('userId', data._id);
        dispatch({
          type: UserActions.singInSuccess,
          payload: data
        })
      })
      .catch(err => dispatch({
        type: UserActions.signInError
      }))
  };
};


export function createUser({ userName, email, password }) {
  return dispatch => {
    fetch(`${APIEndPoint}/user/signUp`, {
      method: 'post',
      body: JSON.stringify({ bodyData: { userName, email, password } }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('inside user signup ')
        dispatch({
          type: UserActions.signUpSuccess,
          payload: data
        })
      })
      .catch(e => dispatch({
        type: UserActions.signUpError
      }));
  }
}


export function AddToFavoritAttempt(productId) {
  return dispatch => {
    let userId = localStorage.getItem('userId');
    fetch(`${APIEndPoint}/user/addToFavorite`, {
      method: 'POST',
      body: JSON.stringify({ bodyData: { productId, userId } }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(favoritProductsObject => {
        if (favoritProductsObject.status === true) {
          dispatch({
            type: UserActions.addToFavoritSuccess,
            payload: favoritProductsObject.favoritProducts
          })
        }
      })
  }
}

export function getAllFavoritProductAttempt() {
  console.log('yaha tak agya hun')
  return dispatch => {
    let id = localStorage.getItem('userId');
    fetch(`${APIEndPoint}/user/getAllFavoritProducts`, {
      method: 'POST',
      body: JSON.stringify({ bodyData: { id } }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(favoritProductsObject => {
        if (favoritProductsObject.status === true) {
          dispatch({
            type: UserActions.getAllFavProductsSuccess,
            payload: favoritProductsObject.favoritProducts
          })
        } 
      })
  }
}

export function getUserLogout() {
  return dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    console.log('Work to be done Logout!')
  };
};
