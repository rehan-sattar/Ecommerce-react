import React, { Component } from 'react';
import { Row, Col, Card, Icon, } from "antd";
import { Layout } from "antd";
import { BrowserRouter , Route, Link } from "react-router-dom";
// custom files
import WrappedNormalLoginForm from "./components/Forms/Login";
// import Header from "./components/Headers/loggedInHeader"
import Dashboard from "./components/PublicProducts/publicProducts";
import './App.css';
import WrappedRegistrationForm from './components/Forms/signUp';
const { Header  } = Layout;

const styles = {
  login_card: {
    marginTop: '5em',
    textAlign: 'center'
  },
  header : {
    color : "#ffff"
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-overlay">
            <BrowserRouter>
                <div>
                <Header style={styles.header}>
                    <Link to="/"> Home  </Link>
                    <Link to="/create-account"> Create Account  </Link> 
                    <Link to="/dashboard"> All Products  </Link> 
                 </Header>
                  <Route path="/" exact component={WrappedNormalLoginForm} />
                  <Route path="/create-account" component={WrappedRegistrationForm} />
                  <Route path="/dashboard" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;