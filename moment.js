var moment = require('moment');
var express = require('express');

function timeStamp(req, res, next) {
    var timestamp = moment().format();
    req.body.timestamp = timestamp;
        next();
    
}

module.exports = timeStamp;
