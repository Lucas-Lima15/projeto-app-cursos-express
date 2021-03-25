module.exports = function(app) {
    const controller = {
        index: function(req, res) {
            res.json({'message': 'ola'})
        }
    }

    return controller;
}