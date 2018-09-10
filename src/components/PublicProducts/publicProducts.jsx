import React from 'react';
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProductAttempt } from "../../store/Actions/productActions";
import { EEXIST } from 'constants';


class PublicProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsForSearching: []
    };
    this.setCatagory = this.setCatagory.bind(this);
  };

  componentDidMount() {
    this.props.downloadAllProducts()
  }
  componentWillReceiveProps(props) {
    this.setState({
      products: props.allProducts.allProducts.products,
      productsForSearching: props.allProducts.allProducts.products
    })
  }
  setCatagory(event) {
    this.setState({
      products: this.state.productsForSearching.filter(product => product.catagory === event.target.value)
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center">All Adds</h1>
        <h5>Search products by catagory: </h5>
        <select
          onChange={this.setCatagory}
          className="form-control" required>
          <option value="select">Select Catagory</option>
          <option value="propertyForSale">Property for Sale</option>
          <option value="propertyForRent">Property For Rent</option>
          <option value="bikes">Bikes</option>
          <option value="cars">Cars</option>
          <option value="electrnoicsAndHomeApp">Electronic & Home Appliances</option>
          <option value="mobiles">Mobiles</option>
          <option value="jobs">jobs</option>
          <option value="services">Services</option>
          <option value="furiture">Furniture</option>
        </select>
        <hr />
        <div className="row mt-3">
          {
            this.state.products.length > 0 ? this.state.products.map((product) => (
              <div key={product._id} className="col-md-4 col-lg-4 col-sm-12">
                <ProductCard favFunct={false} productItem={product} />
              </div>)
            ) : <p className="text-success text-center lead my-5">No records till now...</p>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.productReducer.allProducts
  };
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    downloadAllProducts: () => getAllProductAttempt()
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(PublicProducts);
