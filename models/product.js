const mongoose = require('mongoose');
const Review   = require('./review');
const Schema   = mongoose.Schema;


const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name']
  },
  price: {
    type: Number,
    required: [true, 'Please enter the product\'s price']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please enter the product\'s image url'] 
  },
  description: String,
  reviews: [Review.schema]
});






const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
 

