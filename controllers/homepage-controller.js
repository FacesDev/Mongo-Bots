const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://localhost:27017/robots';


router.get('/', function (request, response) {
    MongoClient.connect(url, async function (error, database) {
        var robot = await database.collection('robots').find({}).toArray();
        response.render('index', { users: robot });
        database.close();
    });
});
// var findDocuments = function(db, callback) {
//   var collection = db.collection('robots');
//   collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     callback(docs);
//   });
// }

// router.get('/', function (request, response) {
//   MongoClient.connect(url, function(err, db) {
//     findDocuments(db, function(docs) {
//       response.render('index', {users: docs});
//       db.close();
//     });
//   });
// });


module.exports = router;