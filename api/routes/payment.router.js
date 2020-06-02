// product.route.js

const express = require('express');
const app = express();
const paymentRoutes = express.Router();

// Require Product model in our routes module
let Payment = require('../models/Payment');

// Defined store route
paymentRoutes.route('/add').post(function (req, res) {
  let payment = new Payment(req.body);
  payment.save()
    .then(payment => {
      res.status(200).json({'Payment': 'Payment has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
paymentRoutes.route('/').get(function (req, res) {
  Payment.find(function (err, payments){
    if(err){
      console.log(err);
    }
    else {
      res.json(payments);
    }
  });
});

// Defined edit route
paymentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Payment.findById(id, function (err, payment){
      res.json(payment);
  });
});

//  Defined update route
paymentRoutes.route('/update/:id').post(function (req, res) {
  Payment.findById(req.params.id, function(err, payment) {
    if (!payment)
      res.status(404).send("Record not found");
    else {
      payment.Challan_Bill = req.body.Challan_Bill;
      payment.Distributors = req.body.Distributors;
      payment.Balance = req.body.Balance;
      payment.Payments = req.body.Payments;
      payment.BillStatus = req.body.BillStatus;

      payment.save().then(payment => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
paymentRoutes.route('/delete/:id').get(function (req, res) {
    Payment.findByIdAndRemove({_id: req.params.id}, function(err, payment){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = paymentRoutes;