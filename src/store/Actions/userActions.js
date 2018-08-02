import { _firebase } from  "../../firebase/firebase";;
export const  getUserloginAction  = ({email, password}) => {
  return  (dispatch) => {
    console.log('inside dispatcj function');
    _firebase.auth().signInWithEmailAndPassword(email, password)
     .then((response) => {
       console.log("User Response: ", response.user);
       dispatch({
         type: "GET_USER_LOGIN",
         payload: response.user.uid
       })
     }).catch(error => {
       console.log('Error', error);
     });
  };
};


export function createUser(userDetails) {
  const {email, password} = userDetails;
  console.log(email, password);
  return function (dispatch) {
    _firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( response => {
          dispatch({
            type : 'GET_USER_SIGN_UP',
            payload : response.user.uid
          })
      }).catch( err => {
        console.log('Error' : err);
      })
  }
}
