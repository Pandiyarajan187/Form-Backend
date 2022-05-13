var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();

var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

app.use(bodyParser.urlencoded( { extended : true}))
app.get('/', function(req,res) {
    res.sendFile(__dirname + " / " + index.html);
})

app.get('/login.html' , function(req,res){
    res.sendFile(__dirname + " / " + login.html);
})

// Route to Handle Login and registration
app.post("/api/register",registerController.register);
app.post("/api/authenticate",authenticateController.authenticate);

console.log("authenticateController",authenticateController);
console.log("registerController",registerController);

app.post("/controller/register-controller",registerController.register);
app.post("/controller/authenticate-controller",authenticateController.authenticate);


app.listen(8000 , () => console.log("Listening on Port 8000"));
