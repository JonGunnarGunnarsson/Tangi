var express = require('express');
var router = express.Router();
var db = require('../db');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;


/* GET home page. */
router.get('/', require('connect-ensure-login').ensureLoggedIn(),
function(req, res, next) {
  res.render('newsinsert', { user:req.user });
  console.log('Welcome to newsinsert');
});
module.exports = router;
