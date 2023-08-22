const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   name: String,
   price: Number,
   description: String,
   category: String,
   rating: Number,
   supply: Number
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('product', productSchema);