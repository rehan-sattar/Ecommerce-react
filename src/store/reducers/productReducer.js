import { ProductActions } from "./Actions";
const defaultState = {
    allProducts: [],
    newProduct: null,
    searchResponseViaCatagory: []
};
function productReducer(state = defaultState, action) {
    let newState = { ...state };
    switch (action.type) {
        case ProductActions.getAllProductsSuccess:
            newState.allProducts = action.payload
            break;
        case ProductActions.addProductSuccess:
            newState.newProduct = action.payload;
            break;
        case ProductActions.searchProductByCatagorySuccess:
            newState.searchResponseViaCatagory = action.payload;
            break;
        case ProductActions.searchProductByCatagoryError:
            console.log('ERROR HERE')
            break;
    }
    return newState;
}
export { productReducer };
