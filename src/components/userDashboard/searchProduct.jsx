import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductList from "./productList";
import ProductCard from "../PublicProducts/ProductCard";
import { AddToFavoritAttempt } from "../../store/Actions/userActions";
import { searchProductViaCatagoryAttempt } from "../../store/Actions/productActions";
class SearchProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            catagory: '',
            searchProducts: [],
            error: ''
        }
        this.setCatagory = this.setCatagory.bind(this);
        this.addTofavoritHandler = this.addTofavoritHandler.bind(this);
    }
    addTofavoritHandler(product_Id) {
        this.props.requestToAddFavPro(product_Id)
        // console.log('inside addTofavoritHandler' , product_Id);
    
      }
    setCatagory(valueOfInput) {
        this.props.downloadTheseProducts(valueOfInput);
    }

    componentWillReceiveProps(props) {
        const objectFlag = props.allProductsOfDesiredCatagory.productReducer.searchResponseViaCatagory;
        if (objectFlag.status === 404) {
            this.setState({
                error: 'No record Found!',
                searchProducts: []
            })
        } else {
            this.setState({
                searchProducts: objectFlag.products,
                error: ""
            });

            if (objectFlag.message === "No record Found for this catagory") {
                this.setState({
                    error: 'No record found for this catagory..'
                })
            }
        }

    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h1 className="text-center"> <i className="fa fa-search"></i> Search Product</h1>

                    <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <ProductList setCatagory={this.setCatagory} />
                        </div>
                    </div>
                        <hr/>

                    <div className="row">
                        {
                            this.state.error === "No record Found!" ? <p className="lead text-warning my-3">{this.state.error}</p> :
                                this.state.searchProducts.map((item) => {
                                    return (
                                        <div className="col-md-4 col-lg-4 col-sm-12" key={item._id}>
                                            <ProductCard favFunct={true} addTofavoritHandle={this.addTofavoritHandler} productItem={item}  />
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        downloadTheseProducts: (catagory) => searchProductViaCatagoryAttempt(catagory),
        requestToAddFavPro : (produtId) => AddToFavoritAttempt(produtId)
    }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        allProductsOfDesiredCatagory: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);