import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserLogout } from "../../store/Actions/userActions";
import "./header.css"
class HeaderLoggedIn extends React.Component {
  constructor() {
    super();
    this.getLogout = this.getLogout.bind(this);
  }
  getLogout() {
    console.log('clicked');
    this.props.userLogout();
  }
  render() {
    return (

      <div>

        <nav class="navbar shadow-sm navbar-expand-lg navbar-light">
          <div className="container">
            <h3 className="text-white">Olx Pakistan</h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link to="" className="header_links"> <i className="fa fa-plus mx-1"></i> Add Product</Link>
                </li>
                <li class="nav-item">
                  <Link to="" className="header_links"> <i className="fa fa-star mx-1"></i>Favorits</Link>
                </li>
                <li class="nav-item">
                  <Link to="" className="header_links">  <i className="fa fa-user mx-1"></i>Profile</Link>
                </li>
                <li>
                  <Link to="" className="header_links">  <i className="fa fa-logout"></i> Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    );
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLogout: () => getUserLogout()
  }, dispatch)
}
export default connect(undefined, mapDispatchToProps)(HeaderLoggedIn);
