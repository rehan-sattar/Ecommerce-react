import React from 'react';
import { Link } from "react-router-dom";

class HeaderLoggedIn extends React.Component {
  render() {
    return(
      <div>
        <button className="btn btn-danger">Logout</button>
      </div>
    );
  };
};

export default HeaderLoggedIn;
