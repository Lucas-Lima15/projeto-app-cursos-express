var app = require('./config/express')();
require('./config/database')('mongodb://localhost:27017/treinaweb');

app.listen(app.get('port')), function() {
    console.log(`Express server on port ${app.get('port')}`)
};