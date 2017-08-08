var express = require('express');
var chirps = require('./chirps.ctrl');
var router = express.Router();
var app = express();

router.use('/chirps', chirps);

module.exports = router;