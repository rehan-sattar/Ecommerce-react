import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import ProductCard from "../PublicProducts/ProductCard";
import { getAllProductAttempt } from "../../store/Actions/productActions";
import { AddToFavoritAttempt } from "../../store/Actions/userActions";
import "./dashboard.css";
class userDashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
    this.addTofavoritHandler = this.addTofavoritHandler.bind(this);
  };
  addTofavoritHandler(product_Id) {
    this.props.requestToAddFavPro(product_Id)
    // console.log('inside addTofavoritHandler' , product_Id);

  }
  componentDidMount() {
    this.props.downloadAllProducts();
  }

  componentWillReceiveProps(props) {
    this.setState({
      products: props.allProducts.allProducts.products
    });
  };
  render() {
    return (
      <div className="dashboard-container pt-5">
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
              <Link to="/dashboard/favoritProducts" className="card_option">
                <div className="card-body p-3 text-center bg-warning text-white">
                  <h2> <i className="fa fa-star"></i> Favorits </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            { 
              this.state.products.map((product, index) => (
              <div className="col-md-4 col-lg-4 col-sm-12" key={product._id}>
                <ProductCard favFunct={true} addTofavoritHandle={this.addTofavoritHandler} productItem={product} />
              </div>)
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    downloadAllProducts: () => getAllProductAttempt() , 
    requestToAddFavPro : (produtId) => AddToFavoritAttempt(produtId)
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(userDashboard);
