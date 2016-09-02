var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('surrounding', { title: 'surrounding' });
  console.log('Welcome to Surroundings');
});
module.exports = router;
