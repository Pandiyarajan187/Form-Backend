var express = require('express');
var Cryptr = require("cryptr");
var connection = require("./../config");
//Cryptr = new Cryptr('myTotalSecretKey');

module.exports.register = function(req ,res){
      var today = new Date();
      var encryptedString = cryptr.encrypt(req.body.password);
      var users = {
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
      }
      connection.query('INSERT INTO users SET ? ', users , function(error,results,fields){
          if(error) {
              res.json({
                  status : false,
                  message : "Some Error in Query"
              })
        //     connection.query("SELECT email FROM users WHERE email = '"+ email +"' " , function(error ,results,field){
        //    if(results.length === 0){
        //      let sql = `INSERT INTO users ( email  ,password) values ( ? , ? , ? )` 
        //      connection.query(sql ,  [ email  ,password ] , (error ,results)=>{
        //           if(error) throw error;
        //           res.write("Register Successfully")
        //           res.end();
        //      })
            }else{
            res.json({
                status : true,
                data: results ,
                message : "User Register Successfully"
            })
          }
      })
}
