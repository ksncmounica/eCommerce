var express = require('express');
var router = express.Router();
/* GET main page. */
router.get('/', function(req, res) {
  res.render('home.html');
});
router.get('/login', function(req, res) {
  res.render('login.html');
});
router.get('/brand', function(req, res) {
  res.render('brand.html');
});
router.get('/category', function(req, res) {
  res.render('category.html');
});
router.get('/coupon', function(req, res) {
  res.render('coupon.html');
});
router.get('/feature', function(req, res) {
  res.render('feature.html');
});
router.get('/product', function(req, res) {
  res.render('product.html');
});
module.exports = router;
