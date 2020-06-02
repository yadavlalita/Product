// product.route.js

const express = require('express');
const app = express();
const customerRoutes = express.Router();

// Require Product model in our routes module
let Customer = require('../models/Customer');

// Defined store route
customerRoutes.route('/add').post(function (req, res) {
  let customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({'Customer': 'Customer has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
customerRoutes.route('/').get(function (req, res) {
  Customer.find(function (err, customers){
    if(err){
      console.log(err);
    }
    else {
      res.json(customers);
    }
  });
});

// Defined edit route
customerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Customer.findById(id, function (err, customer){
      res.json(customer);
  });
});

//  Defined update route
customerRoutes.route('/update/:id').post(function (req, res) {
  Customer.findById(req.params.id, function(err, customer) {
    if (!customer)
      res.status(404).send("Record not found");
    else {
      customer.FName = req.body.FName;
      customer.LName = req.body.LName;
      customer.MName = req.body.MName;
      customer.Email = req.body.Email;
      customer.ContactNo = req.body.ContactNo;
      customer.Address = req.body.Address;
      customer.City = req.body.City;
      customer.State = req.body.State;
      customer.DOB = req.body.DOB;
      customer.CreatedDate = req.body.CreatedDate;
      customer.UpdatedDate = req.body.UpdatedDate;
      customer.save().then(customer => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
customerRoutes.route('/delete/:id').get(function (req, res) {
    Customer.findByIdAndRemove({_id: req.params.id}, function(err, customer){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = customerRoutes;