var mongoose = require('mongoose');

module.exports = function(url) {
    mongoose.connect(url);

    mongoose.connection.on('connected', function() {
        console.log('mongoose conectado em ' + url)
    });

    mongoose.connection.on('disconnected', function() {
        console.log('mongoose desconectado');
    });

    mongoose.connection.on('error', function(err) {
        console.log('mongoose error ' + err);
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('mongoose encerrado');
            process.exit(0);
        });
    });
}