/* MongoDB Zoo Site (18.2.4)
 * Back-end
 * ========================= */

// Dependencies
// 1: Intialize Express
var express = require('express');
var app = express();

// set up a static folder (public) for our web app
app.use(express.static('public'));


// 2. Database configuration
// require mongojs, then save the url of our database 
// as well as the name of our collection
var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

// this makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get('/', function(req, res) {
  res.send("Hello world");
});

// 2. At "/all", path, display every entry in the animals collection
app.get('/all', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything 
  db.animals.find({}, function(err, found) {
    // log any errors if the server encounters one
    if (err) {
      console.log(err);
    } 
    // otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 3. At "/name", path, display every entry in the animals collection, 
// sorted by name
app.get('/name', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order) 
  db.animals.find().sort({name:1}, function(err, found) {
    // log any errors if the server encounters one
    if (err) {
      console.log(err);
    } 
    // otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 4. At "/weight", path, display every entry in the animals collection, 
// sorted by weight
app.get('/weight', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by weight (-1 means descending order) 
  db.animals.find().sort({weight:-1}, function(err, found) {
    // log any errors if the server encounters one
    if (err) {
      console.log(err);
    } 
    // otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// set app to run at port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});