import React from "react";

class ProductList extends React.Component {
    render() {
        return (
            <div>
                <select
                    onChange={
                        (e) => {
                            this.props.setCatagory(e.target.value) 
                            // console.log(e.target.value)
                        }
                    }
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
            </div>
        );
    };
};

export default ProductList;