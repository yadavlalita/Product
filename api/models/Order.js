
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Order = new Schema({
    Name: {
      type: String
    },
    Email: {
      type: String
    },
    ContactNo: {
      type: Number
    },
    Address: {
      type: String
    },
    City: {
        type: String
    },
    State: {
    type: String
    },
    Country: {
     type: String
    },
    ShippingAddress: {
        type: String
      },
    Products: {
      type: String
    },
    Qty: {
        type: Number
      },
    Payment: {
        type: String
      },
  },{
      collection: 'Order'
  });

  module.exports = mongoose.model('Order', Order);
