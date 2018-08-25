import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

class HeaderLoggedOut extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar shadow-sm navbar-expand-lg navbar-light">
          <div className="container">
            <h3 className="text-white">Olx Pakistan</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/user/signIn" className="header_links"> <i className="fas fa-sign-in-alt"></i> SignIn</Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/signUp" className="header_links"> <i className="fas fa-user-plus"></i> SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/publicProducts" className="header_links"> <i className="fas fa-shopping-cart"></i> Products</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    )
  }
}
export default HeaderLoggedOut;
