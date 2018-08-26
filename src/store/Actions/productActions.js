const APIEndPoint = 'http://localhost:8080';

//************** Add Prodcut***********************

export function addProductAttempt(productDetails) {
    return dispatch => {
        fetch(`${APIEndPoint}/dashboard/products/addProduct`, {
            method: "POST",
            body: JSON.stringify( { bodyData : { ...productDetails } } ),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(jsondocs => jsondocs.json())
            .then(docs => {
                console.log(docs);
                dispatch({
                    type: 'Add_PRODUCT_ATTEMPT',
                    payload: docs
                })
            })
            .catch(error => {
                console.log('Error: ', error);
            })
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
                console.log(docs);
                dispatch({
                    type: 'All_PRODUCTS_RESPONSE',
                    payload: docs
                })
            })
            .catch(error => {
                console.log('Error: ', error);
            })
    };
};

// ************ search a produt via catagory ************** 

export function searchProductViaCatagoryAttempt(catagoryName) {
    return dispatch => {
        fetch(`${APIEndPoint}/dashboard/products/searchProductViaCatagory`, {
            method: 'POST',
            body:JSON.stringify( {  catagoryName } ),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(jsonData => jsonData.json())
            .then(docs => {
                    console.log(docs)
                    dispatch({
                        type: 'CATAGORY_SEARCH_RESPONSE',
                        payload: docs
                    })
            })
            .catch(error => {
               
            })
    }
}



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