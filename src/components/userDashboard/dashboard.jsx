import React from "react";
import  HeaderLoggedIn from "../Headers/loggedInHeader";
import ProductCard from "../PublicProducts/ProductCard";
class userDashboard extends React.Component {

  render() {
    const listOfProducts = [
      {
        id : 1,
        name : 'P1'
      },
      {
        id : 2,
        name : 'P2'
      },
      {
        id : 3,
        name : 'P3'
      },
      {
        id : 5,
        name : 'P5'
      },
      {
        id : 6,
        name : 'P6'
      },
      {
        id : 7,
        name : 'P7'
      },
    ]
    return(
      <div>
        <HeaderLoggedIn />
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <button className="btn btn-success btn-block"> <i className="fa fa-plus"></i> Add Product</button>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <button className="btn btn-primary btn-block"> <i className="fa fa-search"></i> Search Product</button>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <button className="btn btn-warning btn-block"><i className="fa fa-star"></i> Favorit Products</button>
            </div>
          </div>
          </div>
        <div className="container">
          <div className="row">
            {listOfProducts.map( product => <ProductCard productItem={product} />)}
          </div>
        </div>
      </div>
      )
  }
}

export default userDashboard;
{/*

  <div class="card text-center card-primary text-white mb-3">
      <div class="card-block">
        <h3>Posts</h3>
        <h1 class="display-4"><i class="fa fa-pencil"></i> 6</h1>
        <a href="posts.html" class="btn btn-sm btn-outline-secondary text-white">View</a>
    </div>
  </div>

*/}
