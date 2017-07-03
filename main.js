const express = require('express');
const mustacheExpress = require('mustache-express');
const usersController = require('./controllers/users-controller');
const homepageController = require('./controllers/homepage-controller');
var mongo = require('mongodb');
const application = express();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');


application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')
application.use(express.static(__dirname + '/public'));







application.engine('mustache', mustacheExpress());
application.set('/views', './views')
application.set('view engine', 'mustache')
application.use(express.static(__dirname + '/public'));



application.use(homepageController);
application.use(usersController);


application.listen(3000);