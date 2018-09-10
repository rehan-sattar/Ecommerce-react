import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductCard from "../PublicProducts/ProductCard";
import { getAllFavoritProductAttempt } from "../../store/Actions/userActions"

class FavoritProductContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            favoritProducts: []
        };
    }
    componentDidMount() {

        this.props.downloadAllFavoritProductsOfThisUser();
    }
    componentWillReceiveProps(props) {

        console.log(props.favorits);
        this.setState({
            favoritProducts: props.favorits
        })
    }



    render() {
        return (
            <div className="container">
                <h1 className="text-center my-5"><i className="fa fa-heart mx-2"></i>  Favortis</h1>
                <hr />
                <div className="row">
                    {
                        this.state.favoritProducts === [] ? <p>No favorits</p> : this.state.favoritProducts.map((product, index) => (
                            <div className="col-md-4 col-lg-4 col-sm-12" key={product._id}>
                                {console.log(product)}
                                <ProductCard favFunct={false} productItem={product} />
                            </div>)
                        )
                    }
                </div>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        favorits: state.userReducer.allFavoritProducts
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        downloadAllFavoritProductsOfThisUser: () => getAllFavoritProductAttempt()
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritProductContainer);