// product.route.js

const express = require('express');
const app = express();
const salereturnRoutes = express.Router();

// Require Product model in our routes module
let Salereturn = require('../models/Salereturn');

// Defined store route
salereturnRoutes.route('/add').post(function (req, res) {
  let salereturn = new Salereturn(req.body);
  salereturn.save()
    .then(salereturn => {
      res.status(200).json({'Salereturn': 'Salereturn has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
salereturnRoutes.route('/').get(function (req, res) {
  Salereturn.find(function (err, salesreturn){
    if(err){
      console.log(err);
    }
    else {
      res.json(salesreturn);
    }
  });
});

// Defined edit route
salereturnRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Salereturn.findById(id, function (err, salereturn){
      res.json(salereturn);
  });
});

//  Defined update route
salereturnRoutes.route('/update/:id').post(function (req, res) {
  Salereturn.findById(req.params.id, function(err, salereturn) {
    if (!salereturn)
      res.status(404).send("Record not found");
    else {
      salereturn.BillNumber = req.body.BillNumber;
      salereturn.Barcode = req.body.Barcode;
      salereturn.MRP = req.body.MRP;
      salereturn.Qty = req.body.Qty;
      

      salereturn.save().then(salereturn => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
salereturnRoutes.route('/delete/:id').get(function (req, res) {
    Salereturn.findByIdAndRemove({_id: req.params.id}, function(err, salereturn){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = salereturnRoutes;