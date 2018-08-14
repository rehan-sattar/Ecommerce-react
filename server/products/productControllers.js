const mongoose = require('mongoose');
const Product = require('./modal');

const addProductAttempt = (request, response) => {
    const product = new Product({
        title: request.body.title,
        name: request.body.name,
        description: request.body.description,
        model: request.body.model,
        year: request.body.year,
        price: request.body.price
    });
    product
        .save()
        .then(res => {
            response.send({ status: true, res })
        })
        .catch(err => console.log(err));
};

const getAllProductAttempt = (request, response) => {
    Product.find().select('title name description price')
        .then(docs => {
            if (docs.length >= 0) {
                const desiredResponse = {
                    totalProducts: docs.length,
                    products: docs.map(doc => ({
                        name : doc.name,
                        title : doc.title,
                        description: doc.description,
                        price: doc.price,
                        request: {
                            type: 'GET',
                            url: `localhost:8080/dashboard/products/${doc._id}`
                        }
                    }))
                }
                response.send({ status: 200, allProducts: desiredResponse })
            } else {

                response.send({ status: false, message: 'No products to show..Empty database' })
            }
        })
        .catch(err => respons.send({ status: 500, err }))
}
const getProductAttempt = (request, response) => {
    const id = request.params.productId;
    Product.findById(id)
        .then(doc => {
            console.log(`Response from :/Product: ${doc}`);
            if (doc) {
                response.send({ status: 200, doc });
            } else {
                response.send({ status: 404, message: 'No valid entry found for provided productID' });
            }
        })
        .catch(err => response.send({ status: 500, err }))

}

const deleteProduct = (request, response) => {
    const _id = request.params.id;
    Product.remove({ _id })
        .then(res => {
            response.send({ status: 200, res })
        })
        .catch(err => response.send({ status: 500, message: err.message }))
}
const searchProductAttempt = (req, res) => {
    res.send('you are in searchProductAttempt');
};

const searchViaCatagoryAttempt = (req, res) => {
    res.send('You are in searchViaCatagoryAttempt');
};

module.exports = {
    addProductAttempt,
    searchProductAttempt,
    searchViaCatagoryAttempt,
    getProductAttempt,
    getAllProductAttempt,
    deleteProduct
};