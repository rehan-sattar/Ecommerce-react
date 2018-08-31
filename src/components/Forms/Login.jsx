import React from "react";
import { withRouter } from 'react-router'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import createHistory from 'history/createBrowserHistory';
import { getUserloginAction } from "../../store/Actions/userActions";
import "./cards.css";
const history = createHistory();
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email : '',
        password: '',
        error : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentWillReceiveProps(props) {
    if( props.user ) {
      this.props.history.push("/dashboard");
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.userLogin(this.state);
    this.setState({
      email : '',
      password: '',
      error : ''
    })
  };

  render() {
    return(
      <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="card shadow">
                <div className="card-header text-center">
                    <h2> <i className="fas fa-sign-in-alt"></i> login</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="card-body">
                        <input className="form-control" type="email" required placeholder="Email"
                            onChange= {(e) => this.setState({email: e.target.value }) }  /> <br />
                        <input className="form-control" type="password" required placeholder="password"
                            onChange={(e) => this.setState({password: e.target.value}) }/> <br />
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-dark btn-block" type="submit">Login <i className="fas fa-arrow-right float-right"></i></button>
                  </div>
                </form>
              </div>
              <div className="text-danger text-center lead">{this.state.error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  console.log(state.userReducer.users)
  return {
    user: state.userReducer.users
  };
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators({
      userLogin: getUserloginAction
    },
    dispatch
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
