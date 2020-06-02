// product.route.js

const express = require('express');
const app = express();
const orderRoutes = express.Router();

// Require Product model in our routes module
let Order = require('../models/Order');

// Defined store route
orderRoutes.route('/add').post(function (req, res) {
  let order = new Order(req.body);
  order.save()
    .then(order=> {
      res.status(200).json({'Order': 'Order has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
orderRoutes.route('/').get(function (req, res) {
  Order.find(function (err, orders){
    if(err){
      console.log(err);
    }
    else {
      res.json(orders);
    }
  });
});

// Defined edit route
orderRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Order.findById(id, function (err, order){
      res.json(order);
  });
});

//  Defined update route
orderRoutes.route('/update/:id').post(function (req, res) {
  Order.findById(req.params.id, function(err, order) {
    if (!order)
      res.status(404).send("Record not found");
    else {
      order.Name = req.body.Name;
      order.Email = req.body.Email;
      order.ContactNo = req.body.ContactNo;
      order.Address = req.body.Address;
      order.City = req.body.City;
      order.State = req.body.State;
      order.Country = req.body.Country;
      order.ShippingAddress = req.body.ShippingAddress;
      order.Products = req.body.Products;
      order.Qty = req.body.Qty;
      order.Payment = req.body.Payment;
      order.save().then(order => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
orderRoutes.route('/delete/:id').get(function (req, res) {
    Order.findByIdAndRemove({_id: req.params.id}, function(err, order){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = orderRoutes;