var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons=require('consolidate');

var mongoose = require('mongoose');


require('./model/brand')(mongoose);
require('./model/category')(mongoose);
require('./model/coupon')(mongoose);
require('./model/feature')(mongoose);
require('./model/order')(mongoose);
require('./model/product')(mongoose);

var app = express();
var config = require('./config'); // get our config file
var port = process.env.PORT || 4000; // used to create, sign, and verify tokens

var login = require('./routes/rlogin');
var brand = require('./routes/rbrand');
var category = require('./routes/rcategory');
var coupon = require('./routes/rcoupon');
var feature = require('./routes/rfeature');
var product = require('./routes/rproduct');
var order = require('./routes/rorder');

mongoose.connect(config.database, function(err, db) {
    if (err) {
        throw err;
    }
    console.log("Client DB: connected");
});




/*require('./model/brand')(mongoose);*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

app.use('/', login);
app.use('/brand', brand);
app.use('/category', category);
app.use('/coupon', coupon);
app.use('/feature', feature);
app.use('/product', product);
app.use('/order', order);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);

module.exports = app;
