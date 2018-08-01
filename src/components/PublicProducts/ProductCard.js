import React from 'react';

class ProductCard extends React.Component{
  render() {
    return(
       <div className="col-md-4 col-lg-4 col-sm-12">
           <div className="card my-3">
               <div className="card-block">
                  <h1>{this.props.productItem.id}</h1>
                  <h1>{this.props.productItem.name}</h1>
                </div>
           </div>
         </div>
    );
  };
};

export default ProductCard;
