// product.route.js

const express = require('express');
const app = express();
const accRoutes = express.Router();

// Require Product model in our routes module
let Account = require('../models/Account');

// Defined store route
accRoutes.route('/add').post(function (req, res) {
  let account = new Account(req.body);
  account.save()
    .then(account => {
      res.status(200).json({'Account': 'Account has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
accRoutes.route('/').get(function (req, res) {
  Account.find(function (err, accounts){
    if(err){
      console.log(err);
    }
    else {
      res.json(accounts);
    }
  });
});

// Defined edit route
accRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Account.findById(id, function (err, account){
      res.json(account);
  });
});

//  Defined update route
accRoutes.route('/update/:id').post(function (req, res) {
  Account.findById(req.params.id, function(err, account) {
    if (!account)
      res.status(404).send("Record not found");
    else {
      account.AccountName = req.body.AccountName;
      account.Type = req.body.Type;
      account.Address = req.body.Address;
      account.ContactPerson = req.body.ContactPerson;
      account.ContactNumber = req.body.ContactNumber;
      account.GST_Tin_no = req.body.GST_Tin_no;
      account.Balance = req.body.Balance;
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
accRoutes.route('/delete/:id').get(function (req, res) {
    Account.findByIdAndRemove({_id: req.params.id}, function(err, account){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = accRoutes;