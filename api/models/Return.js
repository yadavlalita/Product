
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Return = new Schema({
    Barcode: {
      type: String
    },
    ProductName: {
      type: String
    },
    City: {
      type: String
    },
    State: {
      type: String
    },
    PostalCode: {
      type: String
    },
    Country: {
        type: String
      },
      Name: {
        type: String
      },
      Email: {
        type: String
      },
      Reason: {
        type: String
      }
  },{
      collection: 'Return'
  });

  module.exports = mongoose.model('Return', Return);
