import { ProductActions } from "../reducers/Actions";
const APIEndPoint = 'http://localhost:8080';
//************** Add Prodcut***********************

export function addProductAttempt(productDetails) {
    return dispatch => {
        console.log("Product Details",productDetails);
        fetch(`${APIEndPoint}/dashboard/products/addProduct`, {
            method: "POST",
            body: JSON.stringify({ bodyData: { ...productDetails } }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(jsondocs => jsondocs.json())
            .then(docs => {
                dispatch({
                    type: ProductActions.addProductSuccess,
                    payload: docs
                })
            })
            .catch(error => {
                dispatch({
                    type: ProductActions.addProductError
                })
            });
    };
};


//************ get all prodcuts  ***********************/

export function getAllProductAttempt() {
    return dispatch => {
        fetch(`${APIEndPoint}/dashboard/products/allProducts`, {
            method: "GET",
        })
            .then(jsondocs => jsondocs.json())
            .then(docs => {
                dispatch({
                    type: ProductActions.getAllProductsSuccess,
                    payload: docs
                })
            })
            .catch(error => {
                type: ProductActions.getAllProductsError
            })
    };
};

// ************ search a produt via catagory ************** 

export function searchProductViaCatagoryAttempt(catagoryName) {
    return dispatch => {
        fetch(`${APIEndPoint}/dashboard/products/searchProductViaCatagory`, {
            method: 'POST',
            body: JSON.stringify({ catagoryName }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(jsonData => jsonData.json())
            .then(docs => {
                // if (docs.message === "No record Found for this catagory") {
                //     console.log('Perfect', docs);
                //     dispatch({
                //         type: ProductActions.searchProductByCatagoryError,
                //         payload: docs
                //     })

                // } else {
                    dispatch({
                        type: ProductActions.searchProductByCatagorySuccess,
                        payload: docs
                    })
                // }
            })
            .catch(error => {
                dispatch({
                    type: ProductActions.searchProductByCatagoryError,
                })
            })
    };
};



// ****************** Search Via Name ******************* 
export function searchProductViaNameAttempt(productName) {
    return dispatch => {
        fetch(`${APIEndPoint}/dashboard/products/searchProduct/${productName}`)
            .then(jsonData => jsonData.json())
            .then(docs => {
                console.log(docs);
                dispatch({
                    type: 'CATAGORY_SEARCH_RESPONSE',
                    payload: docs
                })
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    }
}