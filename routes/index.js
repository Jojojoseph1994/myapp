var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');
/* GET home page. */
router.get('/admin', function (req, res, next) {
  const data = {
    name: "Sreethin",
    sex: "male",
    age: 18
  }
  res.render('index', { title: 'Express', data: data });
});
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Express Abc' });
});
router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Registration From' });
});
router.post('/register', function(req, res){
  userController.addNew});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login From' });
})
module.exports = router;
