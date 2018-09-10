import React from "react";
import { connect } from "react-redux";
import { bindActionCreators} from "redux";
import { createUser } from "../../store/Actions/userActions";
class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
        email : '',
        password: '',
        userName: '',
        error : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillReceiveProps(props) {
    console.log(props);
    if (props.user.isAuthenticated ) {
      props.history.push("/dashboard");
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getUserSignUp(this.state);
    this.setState({
      email : '',
      password: '',
      userName: '',
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
                  <h2> <i className="fas fa-user-plus"></i> Sign Up</h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="card-body">
                    <input className="form-control" type="text" required placeholder="User Name"
                        onChange= {(e) => this.setState({userName: e.target.value }) }  /> <br />
                    <input className="form-control" type="email" required placeholder="Email"
                        onChange= {(e) => this.setState({email: e.target.value }) }  /> <br />
                    <input className="form-control" type="password" required placeholder="password"
                        onChange={(e) => this.setState({password: e.target.value}) }/> <br />
                </div>
                <div className="card-footer">
                  <button className="btn btn-block btn-dark"> Create Account <i className="fas fa-arrow-right float-right"></i></button>
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


const mapStateToProps = (state) => {
  return {
    user : state.userReducer
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserSignUp: (state) => createUser(state)
  },
  dispatch
);
}
export default connect(mapStateToProps, mapDispatchToProps)(signUp);
