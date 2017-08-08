var moment = require('moment');

function genTimeStamp(req, res, next) {
    var timestamp = moment().format();
    req.body.timestamp = timestamp;
    if(!req.body.time) {
        req.body.time = time;
        next();
    }
    
}

module.exports.genTimeStamp = genTimeStamp;