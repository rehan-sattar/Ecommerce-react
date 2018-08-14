const express = require('express')();

const userRoutes = require('./user/userRoutes');
const productRoutes = require('./products/productRoutes');
const bodyParser = require('body-parser');
const CORS = require('cors');

const port = process.env.PORT || 8080;

require('./dbConnection');
express.use(CORS());
express.use(bodyParser.json());
express.use(bodyParser.urlencoded({ extended: true }));
express.use('/user', userRoutes );
express.use('/dashboard/products' ,  productRoutes);
// express.use('/allproducts', allProducts);

express.listen(port, () => {
    console.log('Server is running!');
}); 

/*
1.	Signup/Signin
2.	Categories of Ads -- Single Level categories 
3.	Search Ads
4.	Search Ads by category
5.	Submit an Ad
6.	Ad details like: Name, Description, Model, Year, Pictures, etc.
7.	Send message on Ad to Seller or buyer
8.	Mark an Ad to view later and can be viewed offline
9.	Push notification when Buyer or seller send message
*/ 