var express = require('express');
var router = express.Router();
/* GET main page. */
router.get('/', function(req, res) {
  res.render('home.html');
});
router.get('/login', function(req, res) {
  res.render('login.html');
});

module.exports = router;
