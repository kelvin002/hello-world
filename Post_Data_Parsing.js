// Data processing - Server for POST  

// change myParser.urlencoded to myParser.json for POST data is json

var express = require("express");
var myParser = require("body-parser");
var app = express();

  app.use(myParser.urlencoded({extended : true}));

  app.post("/registeruser", function(request, response) {
       saveRegistrationData(request); //This is what happens when a POST request is sent to /registeruser
 });
app.listen(8080);


// HTML client sample to use above 

// <form name="regform" action="/registeruser" method="POST">
//    Username: <input type="text" name="username">
//    Password: <input type="password" name="password">
//    <button type="submit" id="submitbutton">Register</button>
// </form>


