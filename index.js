var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var catRoutes = require('./catRoutes')(app);

var server = app.listen(3000, function() {
  console.log('server running on port 3000');
});