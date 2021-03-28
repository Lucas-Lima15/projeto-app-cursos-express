var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

var auth = require('./auth').auth;

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(auth.initialize());

    app.use(express.static('./public'));
    app.use(bodyParser.json());

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};