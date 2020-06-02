
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Staff = new Schema({
    StaffName: {
      type: String
    },
    Email: {
      type: String
    },
    ContactNo: {
      type: Number
    },
    State: {
      type: String
    },
    DOB: {
      type: String
    }
  },{
      collection: 'Staff'
  });

  module.exports = mongoose.model('Staff', Staff);
