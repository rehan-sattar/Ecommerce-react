import React, { Component } from 'react';
import { Router } from "react-router-dom";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import AppRouter from "./routes/AppRouter";
import './App.css';
import HeaderLoggedOut from "./components/Headers/loggedOutHeader";
import HeaderLoggedIn from "./components/Headers/loggedInHeader";
const history = createBrowserHistory();

class App extends Component {
  componentWillReceiveProps(props) {
    console.log('isUserAuthenticated: ' , props.isUserAuthenticated);
  }
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <HeaderLoggedOut />
            <AppRouter />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserAuthenticated : state.userReducer.isAuthenticated
  }
}
export default connect(mapStateToProps,undefined)(App);
