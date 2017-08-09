var moment = require('moment');
var express = require('express');

function createTimeStamp(req, res, next) {

     req.body.timeStamp = moment().format();
   
        next();
    
}

module.exports = createTimeStamp;
