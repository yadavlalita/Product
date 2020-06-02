// product.route.js

const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require Product model in our routes module
let User = require('../models/User');

// Defined store route
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(staff => {
      res.status(200).json({'User': 'User has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user)
      res.status(404).send("Record not found");
    else {
      user.Distributor = req.body.Distributor;
      user.Credit_Cash = req.body.Credit_Cash;
      user. Bill_ChallanDate = req.body. Bill_ChallanDate;
      user.Bill_ChallanNo = req.body.Bill_ChallanNo;
      user.Barcode = req.body.Barcode;
      user.MRP = req.body.MRP;
      user.Qtr = req.body.Qty;
      user.Amount = req.body.Amount;
      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;