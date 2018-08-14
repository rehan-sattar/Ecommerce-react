const mongoose = require('mongoose');
const productScehma = mongoose.Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    // year: { type: Number, required: true },
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productScehma);