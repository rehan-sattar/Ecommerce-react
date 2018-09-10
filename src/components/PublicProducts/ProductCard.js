import React from 'react';
import { Link } from "react-router-dom";

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card my-3">
          <img className="card-img-top img-fluid" src={`${this.props.productItem.imagebaseLink}`} alt="Card image cap" />
          <div className="card-body" >
            <h3>
              <u>{this.props.productItem.title}</u>
            </h3>
            <p>
              <small>
                Catagory :
                {this.props.productItem.catagory}
              </small>
            </p>
            <h5>Price:
              <span className="text-success">
                {this.props.productItem.price}
              </span>
            </h5>
          </div>
          <div className="card-footer text-center">

            {
              this.props.favFunct ? (
              <button className="btn btn-outline-primary btn-block btn-lg mx-1" onClick={ () => this.props.addTofavoritHandle(this.props.productItem._id)}>
                <i className="fa fa-star"></i>
                  Add to fav
              </button>
              ) : null
            }
            <button className="btn btn-warning btn-block btn-lg mx-1">
              <i className="fa fa-plus mx-2 text-white"></i>
              <Link to={`/user/publicProducts/${this.props.productItem._id}`} className="text-white" >view details </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
};



export default ProductCard;
