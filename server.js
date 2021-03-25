const app = require('./config/express')();

app.listen(app.get('port')), function() {
    console.log(`Express server on port ${app.get('port')}`)
};