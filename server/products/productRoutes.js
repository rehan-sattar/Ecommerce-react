const express = require('express');
// const multer = require('multer');
const productController = require('./productControllers');
const authCheckAccessMiddleware = require('../middleware/auth-access-middleware');
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

// all these routes will be customized!
//  upload.single('productImage') to be ued in addPRoduct ** pending Status
router.post('/addProduct', authCheckAccessMiddleware , productController.addProductAttempt);
router.post('/deleteProduct/:id', productController.deleteProduct)
router.get('/allProducts', productController.getAllProductAttempt)
router.get('/:productId', productController.getProductAttempt)
router.get('/searchProduct/:name', productController.searchProductAttempt);
router.get('/searchProductViaCatagory', productController.searchViaCatagoryAttempt);

module.exports = router;

/*
2.	Categories of Ads -- Single Level categories 
3.	Search Ads
4.	Search Ads by category
5.	Submit an Ad
6.	Ad details like: Name, Description, Model, Year, Pictures, etc. 
*/