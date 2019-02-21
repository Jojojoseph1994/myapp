var express = require('express');
var router = express.Router();
var User = require('../model/user');
var expressValidator = require('express-validator');
router.use(expressValidator());
var create = function(req, res){
    // console.log("userController");
    // req.checkBody('password', 'Password is required').notEmpty();
    // req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);
    // var errors = req.validationErrors();
  
    //   if(errors) {
        // res.status(400).render('register', {
        //   errors: errors,
        //   title: 'Registration From'
        // });
        // res.status(400).send({ "message": errors });
        // res.send('There have been validation errors: ' + util.inspect(errors), 400);
        // return;
    //   } else {
          console.log("success");

          res.send('There have been validation errors: ');
        // var user = new User({
        //   email: email,
        //   password: password
        // });
        // var token = createToken(user);
    //   }
  }
  module.exports = create;