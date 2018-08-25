import React from "react";
import LoginForm from "../Forms/Login"
import signUp from "../Forms/signUp";
import loggedInHeader from "../Headers/loggedInHeader";
import PublicProducts from "../PublicProducts/publicProducts";

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <loggedInHeader /> */}
        <LoginForm />
      </div>
    );
  };
};

export default Home;
