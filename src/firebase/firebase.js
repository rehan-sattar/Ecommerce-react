import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdTyYVZe6fPNkEcW6Vw4XryNywHFRrPlk",
    authDomain: "olx-pakistan-6a8b5.firebaseapp.com",
    databaseURL: "https://olx-pakistan-6a8b5.firebaseio.com",
    projectId: "olx-pakistan-6a8b5",
    storageBucket: "olx-pakistan-6a8b5.appspot.com",
    messagingSenderId: "216311900869"
  };
const _firebase = firebase.initializeApp(config);
const database = firebase.database().ref();
const authenticate = firebase.auth();

export {
  _firebase,
  database,
  authenticate
};
