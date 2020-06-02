// product.route.js

const express = require('express');
const app = express();
const saleRoutes = express.Router();

// Require Product model in our routes module
let Sale = require('../models/Sale');

// Defined store route
saleRoutes.route('/add').post(function (req, res) {
  let sale = new Sale(req.body);
  sale.save()
    .then(sale => {
      res.status(200).json({'Sale': 'Sale has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
saleRoutes.route('/').get(function (req, res) {
  Sale.find(function (err, sales){
    if(err){
      console.log(err);
    }
    else {
      res.json(sales);
    }
  });
});

// Defined edit route
saleRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Sale.findById(id, function (err, sale){
      res.json(sale);
  });
});

//  Defined update route
saleRoutes.route('/update/:id').post(function (req, res) {
  Sale.findById(req.params.id, function(err, sale) {
    if (!sale)
      res.status(404).send("Record not found");
    else {
      sale.Counter_Home = req.body.Counter_Home;
      sale.SaleDate = req.body.SaleDate;
      sale.Category = req.body.Category;
      sale.Products = req.body.Products;
      sale.Amount = req.body.Amount;

      sale.save().then(sale => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
saleRoutes.route('/delete/:id').get(function (req, res) {
    Sale.findByIdAndRemove({_id: req.params.id}, function(err, sale){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = saleRoutes;