var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
};