// var express = require("express");
// var bodyParser = require("body-parser");
// var fs = require('fs');
// var path = require('path');
// // var ids = require('shortid');
// var jsonPath = path.join(__dirname, 'data.json');
// var app = express();
// var router = express.Router();

// app.use(bodyParser.json());

// router.route('/')
// .get(function(req, res) {
//     fs.readFile(jsonPath, function(err, file) {
//         if (err) {
//             res.writeHead(500);
//             res.end('Could not read file');
//         }
//             res.write(file);
//             res.end();
//     })

// }) 
// .post(function(req, res) {
//         fs.readFile(jsonPath, 'utf-8', function(err, file) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Could not read file');
//             } else {
//                 var arr = JSON.parse(file),
//                 data = req.body;
//                 // data.id = ids.generate();
//                 arr.push(data);

//         fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Couldn\'t successfully store data');
//                 } else {
//                 res.writeHead(201, 'Created');
//                 res.end(JSON.stringify(arr));
//                 }
//             })
//         } 
//     });

// });

// // router.route('/chirps/one/:id')
// // .delete(function(req, res) {
// //         fs.readFile(jsonPath, 'utf-8', function(err, file) {
// //             if (err) {
// //                 res.writeHead(500);
// //                 res.end('Could not read file');
// //             }
// //         var arr = JSON.parse(file);
// //         var result;
// //         var id = req.params.id;
// //         var chirp = req.body;

// //         arr.forEach(function(chirp, i) {
// //             if (chirp.id === id) {
// //                 deleteIndex = i;
// //             }
// //         });
// //         if (deleteIndex != -1) {
// //             arr.splice(deleteIndex, 1);
// //         }
      
// //         fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
// //             if (err) {
// //                 res.status(500);
// //             } else {
// //                 res.send(JSON.stringify(arr));
// //                }
// //            });   
// //         });
// //    }) .put(function(req, res) {
// //        fs.readFile(jsonPath, 'utf-8', function(err, file) {
// //             if (err) {
// //                 res.statusStatus(500);
// //             } else {
// //                 var arr = JSON.parse(file);
// //                 var response;
// //                 var id = req.params.id;

// //                 arr.forEach(function(a) {
// //                     if (a.id === id) {
// //                         response = a;
// //                         response.user = req.body.user;
// //                         response.chirp= req.body.chirp;
// //                     }
// //                 });
// //             fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
// //                 if (err) {
// //                     res.sendStatus(500);
// //                 } else {
// //                     res.status(201);
// //                     res.send(req.body);
// //                 }
// //             });
// //         }
// //         });
// //    }) .get(function(req, res) {
// //         fs.readFile(jsonPath, 'utf-8', function(err, fileContents) {
// //             if (err) {
// //                 res.statusStatus(500);
// //             } else {
// //                 var chunks = JSON.parse(fileContents);
// //                 var id = req.params.id;
// //                 var response;

// //                 chunks.forEach(function(chunk) {
// //                     if (chunk.id === id) {
// //                         response = chunk;
// //                     }
// //                 });
// //                 if (response) {
// //                     res.send(response);
// //                 } else {
// //                     res.sendStatus(404);
// //                 }
// //             }
// //         });
// //     });

// module.exports = router;

var express = require('express');
var bodyParser = require('body-parser')
var mmnt = require('./moment')
var app = express();
var handleID = require('./shortid')
var path = require('path');
var jsonPath = path.join(__dirname, 'data.json');
var fs = require('fs')

var router = express.Router()
console.log(handleID);

router.route('/')
    .get(function(req, res){
        fs.readFile(jsonPath, function(err, file) {
            if (err) {
                res.writeHead(500);
                res.end('You messed up bro');
            }

            res.write(file);
            res.end();
        });
})
    .post(mmnt.genTimeStamp, handleID.generateID, function(req, res){
        fs.readFile(jsonPath, 'utf-8', function(err, file) {
            if (err) {
                res.status(500);
            } else {
                var chunks = JSON.parse(file),
                    chunk = req.body;
                chunks.push(chunk);
                fs.writeFile(jsonPath, JSON.stringify(chunks), function(err, success) {
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        res.status(201);
                        res.send(chunk);
                    }
                });
            }
        });
    });
    router.route('/one/:id')
    .get(function(req, res) {
        fs.readFile(jsonPath, 'utf-8', function(err, fileContents) {
            if (err) {
                res.statusStatus(500);
            } else {
                
                var chunks = JSON.parse(fileContents);
            
                var id = req.params.id;
            
                var response;

                chunks.forEach(function(chunk) {
                    if (chunk.id === id) {
                        response = chunk;
                    }
                });
                if (response) {
                    res.send(response);
                } else {
                    res.sendStatus(404);
                }
            }
        });
    })
    .put(function(req, res) {
        fs.readFile(jsonPath, 'utf-8', function(err, file) {
            if (err) {
                res.statusStatus(500);
            } else {
                var arr = JSON.parse(file);

                var response;

                var id = req.params.id;
                
                arr.forEach(function(a) {
                    if (a.id === id) {
                        response = a;
                        response.user = req.body.user;
                        response.chirp= req.body.chirp;
                    }
                });
            fs.writeFile(jsonPath, JSON.stringify(arr), function(err, success) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.status(201);
                    res.send(req.body);
                }
            });
        }
        });
    })
  
    .delete(function(req, res) {
        fs.readFile(jsonPath, 'utf-8', function(err, fileContents) {
            if (err) {
                res.sendStatus(500);
            } else {
                var chunks = JSON.parse(fileContents);
                var id = req.params.id;
                var deleteIndex = -1;
                chunks.forEach(function(chunk, i) {
                    if (chunk.id === id) {
                        deleteIndex = i;
                    }
                });
                if (deleteIndex != -1) {
                    chunks.splice(deleteIndex, 1);
                    fs.writeFile(jsonPath, JSON.stringify(chunks), function(err, success) {
                        if (err) {
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(202);
                        }
                    });
                } else {
                    res.sendStatus(404);
                }
            }
        });
    });

module.exports = router;

