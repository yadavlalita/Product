
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Account = new Schema({
    AccountName: {
      type: String
    },
    Type: {
      type: String
    },
    Address: {
      type: String
    },
    ContactPerson: {
      type: String
    },
    ContactNumber: {
      type: Number
    },
    GST_Tin_no: {
      type: String
    },
    Balance: {
      type: Number
    }
  },{
      collection: 'Account'
  });

  module.exports = mongoose.model('Account', Account);
