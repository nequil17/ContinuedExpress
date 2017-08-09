var shortid = require('shortid');
var express = require('express');

function generateId(req, res, next){
    req.body.id = shortid.generate();
    next(); 
}

module.exports.generateId = generateId;
