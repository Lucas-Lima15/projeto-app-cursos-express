const express = require('express');
const bodyParser = require('body-parser');

const homeController = require('../app/controllers/home')();

module.exports = function() {
    const app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());

    app.get('/', homeController.index);

    return app;
};