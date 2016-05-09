var express = require('express');
var router = express.Router();

router.get('/product', function(req, res) {
    res.render('product.html');
});
router.get('/addproduct', function(req, res) {
   res.render('productAddnew.html');
});

router.get('/deleteproduct', function(req, res) {
  
});

module.exports = router;