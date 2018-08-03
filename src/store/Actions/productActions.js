import { _firebase } from "../../firebase/firebase";


export const addProductToFirebaseDatabase = (productDetails) => {
    return dispatch => {
        _firebase.database().ref().push(productDetails)
            .then(() => {
                dispatch({
                    type: 'ADD_PRODUCT_TO_DATABASE',
                    payload: productDetails
                })
            }).catch(err => {
                console.log('Error', err);
            });
    };
};


export const downloadAllProductsFromFirebase = () => {
    return dispatch => {
        _firebase.database().ref().on('value', snapshot => {
            let downloadedProducts  = snapshot.val();
            dispatch({
                type : 'DOWNLOAD_ALL_FROM_DATABASE',
                payload : downloadedProducts
            })
        }).catch( err => {
            console.log('Error: ', err)
        });
    };
};