const express  = require('express');
const productController = require('./productControllers');

const router = express.Router();
// all these routes will be customized!
router.get('/addProduct' , productController.addProductAttempt);
router.get('/searchProfuct', productController.searchProductAttempt);
router.get('/searchProductViaCatagory', productController.searchViaCatagoryAttempt);

module.exports = router;

/*
2.	Categories of Ads -- Single Level categories 
3.	Search Ads
4.	Search Ads by category
5.	Submit an Ad
6.	Ad details like: Name, Description, Model, Year, Pictures, etc. 
*/