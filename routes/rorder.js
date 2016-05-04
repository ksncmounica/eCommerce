var express = require('express');
var router = express.Router();

router.get('/order', function(req, res) {
  res.render('order.html');
});

module.exports = router;