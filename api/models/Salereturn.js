
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Salereturn = new Schema({
    BillNumber: {
      type: String
    },
    Barcode: {
      type: String
    },
    MRP: {
      type: Number
    },
    Qty: {
      type: Number
    }
  },{
      collection: 'Salereturn'
  });

  module.exports = mongoose.model('Salereturn',Salereturn);
