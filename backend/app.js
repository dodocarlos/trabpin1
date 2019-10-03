var express = require('express');
const userController = require('./utils/UserController');

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/login', function(req, res){
    userController.doLogin(req.param('email'), req.param('senha'), function(success, id){
        success ? res.json([{success: 1, id}]) : res.json([{success: 0, id}]);
    });
});

app.listen(3000);