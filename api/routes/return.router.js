// product.route.js

const express = require('express');
const app = express();
const returnRoutes = express.Router();

// Require Product model in our routes module
let Return = require('../models/Return');

// Defined store route
returnRoutes.route('/add').post(function (req, res) {
  let retur = new Return(req.body);
  retur.save()
    .then(retur => {
      res.status(200).json({'Return': 'Return has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
returnRoutes.route('/').get(function (req, res) {
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
returnRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Return.findById(id, function (err, retur){
      res.json(retur);
  });
});

//  Defined update route
returnRoutes.route('/update/:id').post(function (req, res) {
  Return.findById(req.params.id, function(err, retur) {
    if (!retur)
      res.status(404).send("Record not found");
    else {
        retur.Barcode = req.body.Barcode;
        retur.ProductName = req.body.ProductName;
        retur.City = req.body.City;
        retur.State = req.body.State;
        retur.PostalCode = req.body.PostalCode;
        retur.Country = req.body.Country;
        retur.Name = req.body.Name;
        retur.Email = req.body.Email;
        retur.Reason = req.body.Reason;
      retur.save().then(retur => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
returnRoutes.route('/delete/:id').get(function (req, res) {
    Return.findByIdAndRemove({_id: req.params.id}, function(err, retur){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = returnRoutes;