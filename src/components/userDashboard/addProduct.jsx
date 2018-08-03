import React from "react";
import ProductList from "./productList";
class AddProductForm extends React.Component {
    render() {
        return(
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-5 col-lg-5">
                        <h1>Add your Product</h1>
                            <form>
                                <input type="text" className="form-control" placeholder="Title" /> <br/>
                                <input type="text" className="form-control" placeholder="Name" /> <br/>
                                <ProductList /> <br/>
                                <input type="text" className="form-control" placeholder="" /> <br/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProductForm;