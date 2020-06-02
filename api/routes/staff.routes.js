// product.route.js

const express = require('express');
const app = express();
const staffRoutes = express.Router();

// Require Product model in our routes module
let Staff = require('../models/Staff');

// Defined store route
staffRoutes.route('/add').post(function (req, res) {
  let staff = new Staff(req.body);
  staff.save()
    .then(staff => {
      res.status(200).json({'Staff': 'Staff has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
staffRoutes.route('/').get(function (req, res) {
  Staff.find(function (err, staffs){
    if(err){
      console.log(err);
    }
    else {
      res.json(staffs);
    }
  });
});

// Defined edit route
staffRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Staff.findById(id, function (err, staff){
      res.json(staff);
  });
});

//  Defined update route
staffRoutes.route('/update/:id').post(function (req, res) {
  Staff.findById(req.params.id, function(err, staff) {
    if (!staff)
      res.status(404).send("Record not found");
    else {
      staff.StaffName = req.body.StaffName;
      staff.Email = req.body.Email;
      staff.ContactNo = req.body.ContactNo;
      staff.State = req.body.State;
      staff.DOB = req.body.DOB;

      staff.save().then(staff => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
staffRoutes.route('/delete/:id').get(function (req, res) {
    Staff.findByIdAndRemove({_id: req.params.id}, function(err, staff){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = staffRoutes;