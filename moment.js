var moment = require('moment');


function createTimeStamp(req, res, next) { 
    var timeStamp = moment().format();
    req.body.timeStamp = timeStamp;
        next();    
}

module.exports = createTimeStamp;
