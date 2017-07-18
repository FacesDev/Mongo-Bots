const express = require('express');
const router = express.Router();
var MongoClient = require('mongodb').MongoClient
, assert = require('assert');
var url = 'mongodb://localhost:27017/robots';



router.get('/:userId', function (request, response) {
    MongoClient.connect(url, async function (error, database) {
        var robot = await database.collection('robots').findOne({ "id": parseInt(request.params.userId) });
        response.render('singlerobot', { users: robot });
        database.close();
    });
});


router.get('/filtered/unemployed', function (request, response) {
    MongoClient.connect(url, async function (error, database) {
        var robot = await database.collection('robots').find({"job": null}).toArray();
        response.render('filtered', { users: robot });
        database.close();
    });
});
router.get('/filtered/employed', function (request, response) {
    MongoClient.connect(url, async function (error, database) {
        var robot = await database.collection('robots').find({"job":{$ne:null}}).toArray();
        response.render('filtered', { users: robot });
        database.close();
    });
});

router.get('/filtered/:userId', function (request, response) {
    MongoClient.connect(url, async function (error, database) {
        var robot = await database.collection('robots').findOne({ "id": parseInt(request.params.userId) });
        response.render('singlerobot', { users: robot });
        database.close();
    });
});





module.exports = router;

