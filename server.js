// ########################CONFIG########################
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
app.use(bodyParser.json());
//EDIT PROJECT NAME BELOW - gets static files for Angular
app.use(express.static( __dirname + '/dojoWeather/dist' ));



app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/index.html"))
  });


//########################Start Server########################
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("Weather listening on port 8000");
})
