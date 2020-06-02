
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Payment = new Schema({
    Challan_Bill: {
      type: String
    },
    Distributors: {
      type: String
    },
    Balance: {
      type: Number
    },
    Payments: {
      type: String
    },
    BillStatus: {
      type: String
    }
  },{
      collection: 'Payment'
  });

  module.exports = mongoose.model('Payment', Payment);
