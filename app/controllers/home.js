var cursos = [
    {nome: 'Unity3D', categoria: 'Jogos'},
    {nome: 'Express', categoria: 'Back-End'},
    {nome: 'React', categoria: 'Front-End'},
]

module.exports = function(app) {
    var controller = {
        index: function(req, res) {
            res.render('index', {cursos});
        },
        newItem: function(req, res) {
            cursos.push(req.body);
            res.json(cursos);
        }
    }

    return controller;
}