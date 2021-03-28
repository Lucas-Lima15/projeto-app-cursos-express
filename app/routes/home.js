var auth = require('../../config/auth').auth;

module.exports = function(app) {
    var controller = app.controllers.home;

    app.get('/', controller.index);
    app.post('/', auth.authenticate, controller.newItem);

    app.post('login', controller.login);
}