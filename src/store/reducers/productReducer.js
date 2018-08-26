const defaultState = {
    products: []
};
function productReducer(state = defaultState, action) {
    switch (state) {
        case 'All_PRODUCTS_RESPONSE':
        
            return {
                products: action.payload
            }
            break;
        case 'Add_PRODUCT_ATTEMPT':
        return {
            productToBeadded : action.payload
        }
        case 'CATAGORY_SEARCH_RESPONSE': 
        return {
            products: action.payload
        }
    }
    return state
} 



export { productReducer };
