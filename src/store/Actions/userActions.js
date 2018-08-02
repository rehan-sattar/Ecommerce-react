import { _firebase } from  "../../firebase/firebase";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
export const  getUserloginAction  = ({email, password}) => {
  console.log('inside getUserLoginAction');
  return  dispatch => {
    _firebase.auth().signInWithEmailAndPassword(email, password)
     .then((response) => {
       console.log("User Response: ", response.user);
       dispatch({
         type: "GET_USER_LOGIN",
         payload: response.user.uid
       });
     }).catch(error => {
       console.log('Error', error);
     });
  };
};


export function createUser({email, password}) {
  console.log(email, password);
  return dispatch => {
    console.log('inside create Dispatch user');
    _firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( response => {
          dispatch({
            type : 'GET_USER_SIGN_UP',
            payload : response.user.uid
          })
      }).catch( err => {
        console.log('Error',err);
      })
  }
}

export const getUserLogout = () => {
  return dispatch => {
    _firebase.auth().signOut()
      .then( res => {
        dispatch({
          type : 'GET_USER_LOGOUT'
        });
        history.push("/");
      }).catch( err => {
        console.log('Error: ', err)
      })
  };
};
