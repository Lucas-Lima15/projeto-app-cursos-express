const express = require('express');

module.exports = function() {
    const app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));

    return app;
};