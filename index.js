var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var api = require('./api');
// var path = require('path');
// var jsonPath = path.join(__dirname, 'data.json');

app.use('/api', api)
app.use(bodyParser.json());

app.listen(3000);
