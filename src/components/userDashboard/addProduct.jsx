import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addProductAttempt } from "../../store/Actions/productActions";

class AddProductForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            name: '',
            description: '',
            year: '',
            price: '',
            images: [],
            catagory: '',
            sellerLocation: '',
            sellerPhone: '',
            showSweetAlert: false,
            imagebaseLink: ''

        };

        this.setCatagory = this.setCatagory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addproduct(this.state);
    }
    setCatagory(e) {
        this.setState({
            catagory: e.target.value
        })
    }
    handleChangeImage(e) {
        // base url conversion.
        var that = this;
        var fileSelected = e.target.files;
        if (fileSelected.length > 0) {
            var fileToLoad = fileSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                let base64value = fileLoadedEvent.target.result;
                that.setState({
                    imagebaseLink: base64value
                })
            };
            fileReader.readAsDataURL(fileToLoad);
        };

    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center my-5">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2> <i className="fa fa-plus"></i> Add your Product</h2>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card-body">

                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            value={this.state.title}
                                            onChange={(e) => this.setState({ title: e.target.value })}
                                        /> <br />
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={(e) => this.setState({ name: e.target.value })}
                                        /> <br />

                                        <input
                                            required
                                            type="number"
                                            className="form-control"
                                            placeholder="Year"
                                            value={this.state.year}
                                            onChange={(e) => this.setState({ year: e.target.value })}
                                        /> <br />

                                        <input
                                            required
                                            type="number"
                                            className="form-control"
                                            placeholder="Price"
                                            value={this.state.price}
                                            onChange={(e) => this.setState({ price: e.target.value })}
                                        /> <br />
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
                                        <br/>
                                        <textarea
                                            required
                                            placeholder="Description.."
                                            className="form-control"
                                            value={this.state.description}
                                            onChange={(e) => this.setState({ description: e.target.value })}
                                        > Description </textarea> <br />
                                        <input
                                            type="file"
                                            name="productImage"
                                            className="form-control"
                                            onChange={this.handleChangeImage} />
                                        <br />
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Seller Phone"
                                            value={this.state.sellerPhone}
                                            onChange={(e) => this.setState({ sellerPhone: e.target.value })}
                                        /> <br />
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            placeholder="Seller Location"
                                            value={this.state.sellerLocation}
                                            onChange={(e) => this.setState({ sellerLocation: e.target.value })}
                                        /> <br />
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            type="submit"
                                            className="btn btn-outline-success btn-block">Add product</button>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addproduct: (productDetails) => addProductAttempt(productDetails)
    }, dispatch)
}
export default connect(undefined, mapDispatchToProps)(AddProductForm);