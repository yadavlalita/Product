const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Customer
// Define collection and schema for Customer
let Customer = new Schema({
    FName: {
      type: String
    },
    LName: {
      type: String
    },
    MName: {
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
    DOB: {
      type: String
    },
    CreatedDate: {
      type: String
    },
    UpdatedDate: {
      type: String
    }
  },
  {
      collection: 'Customer'
  });
  
  module.exports = mongoose.model('Customer', Customer);  