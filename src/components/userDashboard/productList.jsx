import React from "react";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            catagoryValue: ''
        }
    }
    render() {
        return (
            <div>
                <select
                    value={this.state.catagoryValue}
                    onChange={
                        (e) => {
                            this.setState({
                                catagoryValue : e.target.value
                            })
                            this.props.catagoryFunc(this.state.catagoryValue)
                        }
                    }
                    className="form-control" required>
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
            </div>
        );
    };
};

export default ProductList;