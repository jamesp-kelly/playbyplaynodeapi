var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var cats = require('./cats')(app);

var server = app.listen(3000, function() {
  console.log('server running on port 3000');
});