var express = require('express');
var router = express.Router();
var sql_connection =  require('../sql_connection');
var cat = require('../modules/cat');
var fs_read = require('../modules/promis_test');
/* GET home page. */
router.get('/admin', function (req, res, next) {
  sql_connection.query("SELECT * FROM customers where first_name like '%sreethi%' LIMIT 2",function(error,rows,fields){
    if(error){
      console.log(error);
      throw error;
    }else{
      console.log("Succesful");
    }
    res.send("User name is : "+rows[0].first_name,400);
  });
});
router.get("/",function(req,res){
  let kitty = cat.sayHello();
  res.json({"message" : "Hello "+kitty});

});

router.get("/user/:id",function(req,res){
  if(req.params.id == "") {
    res.json({"message" : "You must pass ID other than 0"});    
  }
  sql_connection.query("SELECT * FROM customers where first_name like '%"+req.params.id+"%' LIMIT 1",function(error,rows,fields){
    if(error){
      console.log(error);
      throw error;
    }else{
      console.log("Succesful");
    }
    if(rows[0])
      res.json({"id" : rows[0].id , "full_name" : rows[0].first_name+' '+rows[0].last_name});
    else
      res.json({"message" : "User not found"});    
  });
});

router.get('/read',async function(req,res){
  if(res){
    console.log(await fs_read);
    res.send(await fs_read)
  }
});
module.exports = router;
