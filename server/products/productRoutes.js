const express = require('express');
const multer = require('multer');
const productController = require('./productControllers');

const router = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uplod');
    }, filename: function (req, file, callback) {
        callback(null, new Date().toISOString() + file.originalname)
    }
})
const upload = multer({storage: storage});

// all these routes will be customized!
router.post('/addProduct', upload.single('productImage'), productController.addProductAttempt);
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