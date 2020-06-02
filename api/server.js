const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

   const productRoute = require('./routes/product.route');
   const customerRoute = require('./routes/customer.routes');
   const staffRoute = require('./routes/staff.routes');
  const orderRoute = require('./routes/order.routers');
   const userRoute = require('./routes/user.routes');
   const saleRoute = require('./routes/sale.router');
   const accRoute = require('./routes/account.routers');
   const payRoute = require('./routes/payment.router');
   const retRoute = require('./routes/return.router');
   const salereturnRoute = require('./routes/salereturn.router');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/products', productRoute);
    app.use('/customers', customerRoute);
    app.use('/staffs', staffRoute);
    app.use('/accounts', accRoute);
    app.use('/users', userRoute);
    app.use('/sales', saleRoute);
    app.use('/orders', orderRoute);
    app.use('/payment', payRoute);
    app.use('/return', retRoute);
    app.use('/salereturns', salereturnRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });