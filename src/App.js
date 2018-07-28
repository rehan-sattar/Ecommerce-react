import React, { Component } from 'react';
import { Row, Col, Card, Icon } from "antd";
// import WrappedRegistrationForm from "./components/Forms/signUp";
// custom files
import WrappedAddProductForm from "./components/Forms/addProduct";
import WrappedNormalLoginForm from "./components/Forms/Login";

import './App.css';

const styles = {
  login_card: {
    marginTop: '5em',
    textAlign: 'center'
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-overlay">
          {/* <Row>
            <Col span={8} offset={8}>
              <Card style={styles.login_card} title="login form" >
                <WrappedNormalLoginForm />
              </Card>
            </Col>
          </Row>
          <hr /> */}
          <Row>
            <Col span={8} offset={8}>
              <Card style={styles.login_card} title={`Create Account`}>
                <WrappedAddProductForm />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;