var mysql = require('mysql');

let connection =  mysql.createConnection({
    host    :'192.168.2.140',
    database : 'controlpanel_v8',
    user : 'root',
    password : 'password',
});

const dbConn = connection.connect(function(err){
    if(err){
        console.log("Error");
    }else{
        console.log("success");
    }
});
module.exports = connection