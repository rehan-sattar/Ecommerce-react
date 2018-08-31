import React from 'react';
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllProductAttempt } from "../../store/Actions/productActions";


class PublicProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  };
  componentDidMount() {
    console.log("Call herer")
    this.props.downloadAllProducts()
  }
  componentWillReceiveProps(props) {
    console.log('Component Will Reciece Props : ', props.allProducts.allProducts.products);
    this.setState({
      products: props.allProducts.allProducts.products
    })
  }
  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center">All Adds</h1>
        {
            console.log('public products: ', this.props.allProducts)}
        <div className="row">
          {
            this.state.products.length > 0 ? this.state.products.map((product) => (
              <div key={product._id} className="col-md-4 col-lg-4 col-sm-12">
                <ProductCard productItem={product} />
              </div>)
            ) : <p>No Records Till Now</p>

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
