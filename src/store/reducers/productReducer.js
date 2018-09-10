import swal from "sweetalert";
import { ProductActions } from "./Actions";
const defaultState = {
    allProducts: [],
    newProduct: null,
    searchResponseViaCatagory: [],
};
function productReducer(state = defaultState, action) {
    let newState = { ...state };
    switch (action.type) {
        // get all products
        case ProductActions.getAllProductsSuccess:
            newState.allProducts = action.payload
            break;
        case ProductActions.getAllProductsError:
            break;
        // add products
        case ProductActions.addProductSuccess:
            swal("Thank you!", "Your add has been submitted!", "success");
            newState.newProduct = action.payload;
            break;
        case ProductActions.addProductError:

        // search products
        case ProductActions.searchProductByCatagorySuccess:
            // console.log("Payload: ", action.payload);
            newState.searchResponseViaCatagory = action.payload;
            break;
        case ProductActions.searchProductByCatagoryError:
            break;
    }
    return newState;
}
export { productReducer };
