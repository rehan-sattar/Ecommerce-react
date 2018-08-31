import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getUserLogout } from "../../store/Actions/userActions";
import AddProductForm from "../userDashboard/addProduct";
import SearchProduct from "../userDashboard/searchProduct";
import HeaderLoggedIn from "../Headers/loggedInHeader";
import ProductCard from "../PublicProducts/ProductCard";
import { getAllProductAttempt } from "../../store/Actions/productActions";
import "./dashboard.css";
class userDashboard extends React.Component {

  componentDidMount() {
    this.props.downloadAllProducts();
  }
  render() {
    const listOfProducts = [
      {
        id: 1,
        name: 'P1'
      },
      {
        id: 2,
        name: 'P2'
      },
      {
        id: 3,
        name: 'P3'
      },
      {
        id: 5,
        name: 'P5'
      },
      {
        id: 6,
        name: 'P6'
      },
      {
        id: 7,
        name: 'P7'
      },
    ]
    return (
      <div className="dashboard-container pt-5">
        {/* <HeaderLoggedIn /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <Link to="/dashboard/addProduct" className="card_option" className="card_option">
                <div className="card-body p-3 text-center bg-success text-white">
                  <h2> <i className="fa fa-plus"></i> Add </h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <Link to="/dashboard/searchProduct" className="card_option">
                <div className="card-body p-3 text-center bg-primary text-white">
                  <h2> <i className="fa fa-search"></i> Search </h2>
                </div>
              </Link>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 mb-2">
              <Link to="/dashboard/favProduct" className="card_option">
                <div className="card-body p-3 text-center bg-warning text-white">
                  <h2> <i className="fa fa-star"></i> Favorits </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {listOfProducts.map((product, index) => <ProductCard key={index} productItem={product} />)}
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    downloadAllProducts : () => getAllProductAttempt()
  }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(userDashboard);
