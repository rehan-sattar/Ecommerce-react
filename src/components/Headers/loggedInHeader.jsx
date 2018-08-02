import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUserLogout } from "../../store/Actions/userActions";
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
    return(
      <div>
        <button className="btn btn-danger" onClick={this.getLogout}>Logout</button>
      </div>
    );
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLogout : () => getUserLogout() 
  }, dispatch)
}
export default connect(undefined , mapDispatchToProps)(HeaderLoggedIn);
