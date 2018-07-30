import React from "react";
import { Drawer, Button } from 'antd';
import { BrowserRouter, Link } from "react-router-dom";
export default class Header extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" shape="circle" onClick={this.showDrawer} icon="plus">
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="left"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <BrowserRouter>
            <div>
              <Link to="/"> Home  </Link> <br />
              <Link to="/create-account"> Create Account  </Link> <br />
              <Link to="/dashboard"> All Products  </Link>
            </div>
          </BrowserRouter>
        </Drawer>
      </div>
    );
  }
}
