import React from "react";
import ProductList from "./productList";
class SearchProduct extends React.Component {
    render() {
        return (
            <div>   
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Search Product</h1>
                        <div className="col-md-5 col-lg-5 col-sm-12">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchProduct;