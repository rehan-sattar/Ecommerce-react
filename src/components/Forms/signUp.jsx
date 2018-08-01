import React from "react";
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

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return(
      <div>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-5 col-lg-5 col-sm-12">
            <div className="card">
              <div className="card-header text-center">
                  <h5>Sign Up</h5>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="card-block">
                    <input className="form-control" type="text" required placeholder="User Name"
                        onChange= {(e) => this.setState({userName: e.target.value }) }  /> <br />
                    <input className="form-control" type="email" required placeholder="Email"
                        onChange= {(e) => this.setState({email: e.target.value }) }  /> <br />
                    <input className="form-control" type="password" required placeholder="password"
                        onChange={(e) => this.setState({password: e.target.value}) }/> <br />
                </div>
                <div className="card-footer">
                  <button className="btn">create Account</button>
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

export default signUp;
