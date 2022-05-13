var mysql = require("mysql")

var connection = mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"",
     database: "mydb"
})

connection.connect(function(err){
    if(!err){
        console.log("Database Connected");
    }else{
        console.log("Database is not connected");
    }
})
module.exports = connection;