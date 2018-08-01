import React from 'react';
import ProductCard from "./ProductCard";

class PublicProducts extends React.Component{
  render() {
    const listOfProducts = [
      {
        id : 1,
        name : 'P1'
      },
      {
        id : 2,
        name : 'P2'
      },
      {
        id : 3,
        name : 'P3'
      },
      {
        id : 5,
        name : 'P5'
      },
      {
        id : 6,
        name : 'P6'
      },
      {
        id : 7,
        name : 'P7'
      },
    ]
    return(
      <div className="container mt-5">
        <h1 className="text-center">All Adds</h1>
          <div className="row">
              {listOfProducts.map( product => <ProductCard productItem={product} />)}
          </div>
      </div>
    )
  }
}
export default PublicProducts;
