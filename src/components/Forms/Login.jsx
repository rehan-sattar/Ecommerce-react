import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { getUserloginAction } from "../../store/Actions/userActions";
import "./cards.css";
class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
        email : '',
        password: '',
        error : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };


  componentWillReceiveProps(props) {
    console.log(`Props fuctio Fired with Props: ${props}`);  
  }

  handleSubmit(e) {
    e.preventDefault();
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
                    <button className="btn btn-dark btn-block">Login <i className="fas fa-arrow-right float-right"></i></button>
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
  console.log('Props state',state);
  return {
    user : state.user,
    proprCheck : true
  };
};


const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators({
      userLogin: (state) => getUserloginAction(state)
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
