
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
   
  Distributor: {
      type: String
    },
    Credit_Cash: {
      type: String
    },
    Bill_ChallanDate: {
      type: String
    },
    Bill_ChallanNo: {
      type: Number
    },
    Barcode: {
      type: String
    },
    MRP: {
      type: Number
    },
    Qty: {
      type: Number
    },
    Amount: {
        type:Number
    }
},
  {
      collection: 'User'
  });

  module.exports = mongoose.model('User', User);
