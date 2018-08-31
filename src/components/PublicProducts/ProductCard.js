import React from 'react';

class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <div className="card my-3">
          <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164f6582b11%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164f6582b11%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap" />
          <div className="card-body" >
            <h3>
              <u>{this.props.productItem.title}</u>
            </h3>
            <p className="leadd">
              {this.props.productItem.description}
            </p>
            <p>
              <small>
                Catagory :
                {this.props.productItem.catagory}
              </small>
            </p>
            <h5>Price:
              <span className="text-success">
                {this.props.productItem.price}
              </span>
            </h5>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-info mx-2"> <i className="fa fa-star"></i> add to fav</button>
            <button className="btn btn-outline-primary"> <i className="fa fa-plus"></i> view details</button>
          </div>
        </div>
      </div>
    );
  };
};


export default ProductCard;

// title: { type: String, required: true },
// name: { type: String, required: true },
// description: { type: String, required: true },
// year: { type: Number, required: true },
// catagory: { type: String, require: true },
// price: { type: Number, required: true },
// sellerPhone : { type : String, required: true },
// sellerLocation : { type: String, required: true}

{/*

  <div class="card"">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/}
