var passport = require('passport');
var jwt = require('jsonwebtoken');
var passportJWT = require('passport-jwt');
var mongoose = require('mongoose');
const { authenticate, session } = require('passport');

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretKey: 'minhaChaveSecreta'
}

module.exports = {
    get auth() {
        var User = mongoose.models.Usuario;
        var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
            User.findById(jwt_payload._id).exec().then(user => {
                if (user) {
                    next(null, user);
                } else {
                    next(null, false);
                }
            })
        });

        passport.use(strategy);

        return {
            initialize: function() {
                return passport.initialize();
            },
            get authenticate() {
                return passport.authenticate('jwt', {session: false});
            }
        }
    },
    login: function(name, senha, callback) {
        var User = mongoose.models.Usuario;

        User.findOne({name, password}).exec().then(user => {
            if(user) {
                var payload = {id: user._id};
                var token = jwt.sign(payload, jwtOptions.secretKey);
                callback({message: 'ok', token})
            } else {
                callback(false);
            }
        });
    }
}