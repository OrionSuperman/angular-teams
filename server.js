
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "/client")));
// setting up ejs and our views folder
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'express');

// All the code that is for Angular will go here for now.... because I'm not sure how to include it correctly.

console.log(__dirname);
// END of angular section
var server = app.listen(8000,function(){
  console.log("listening on port 8000");
})
