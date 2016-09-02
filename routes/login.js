var express = require('express');
var router = express.Router();
var passport = require('passport');
var Strategy = require('passport-local').Strategy;





router.get('/', function(req, res, next) {
  res.render('login');
  console.log('Welcome to login');
});
router.post('/',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/newsinsert');
  });
  


module.exports = router;
  