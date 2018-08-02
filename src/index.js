import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/Store";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import { _firebase } from "./firebase/firebase";

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));
registerServiceWorker();


_firebase.auth().onAuthStateChanged( user => {
    if( user ) {
        console.log('user logged in');
    } else {
        console.log('user Logged out');
    }
})