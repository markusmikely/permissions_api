var express = require('express');  
var cors = require('cors');
var bodyParser = require("body-parser");
var app = express();  
var port = process.env.port || 1337;  
  
var users = require("./app/routes/users");
var roles = require("./app/routes/roles");
var permissions = require("./app/routes/permissions");

app.use(cors())
app.use(bodyParser.json())
app.use("/users", users);
app.use("/roles", roles);
app.use("/permissions", permissions);

app.listen(port, function () {  
    var datetime = new Date();  
    var message = "Server runnning on Port: " + port + ". Started at : " + datetime;  
    console.log(message);
});  
