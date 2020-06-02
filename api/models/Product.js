// Product.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  Barcode: {
    type: String
  },
  
  ProductCategory: {
    type: String
  },
  Name: {
    type: String
  },
  Distributor: {
    type: String
  },
  GST: {
    type: Number
  },
  MRP: {
    type: String
  },
  ExpiryDate: {
    type: String
  }
},{
    collection: 'Product'
});




module.exports = mongoose.model('Product', Product);

