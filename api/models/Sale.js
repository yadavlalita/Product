
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Sale = new Schema({
    Counter_Home: {
      type: String
    },
    SaleDate: {
      type: String
    },
    Category: {
      type: String
    },
    Products: {
      type: String
    },
    Amount: {
      type: Number
    }
  },{
      collection: 'Sale'
  });

  module.exports = mongoose.model('Sale', Sale);
