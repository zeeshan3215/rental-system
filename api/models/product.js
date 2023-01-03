const req = require('express/lib/request');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true },
    uid: { type: String, required: true,  },
    description: { type: String, required: true },
    make: { type: String, required: true },
    area: { type: Number, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);