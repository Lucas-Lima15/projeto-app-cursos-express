// var cursos = [
//     {nome: 'Unity3D', categoria: 'Jogos'},
//     {nome: 'Express', categoria: 'Back-End'},
//     {nome: 'React', categoria: 'Front-End'},
// ]

var login = require('../../config/auth').login;

module.exports = function(app) {
    var Curso = app.models.curso;
    
    var controller = {
        index: function(req, res) {
            Curso.find({}, [], {sort: {nome: 1}}).then((cursos) => {
                res.render('index', {cursos});
            });
        },
        newItem: function(req, res) {
            //cursos.push(req.body);
            var curso = new Curso(req.body);
            curso.save(function(err, curso) {
                if (err) {
                    res.status(500).end();
                    console.log(err)
                } else {
                    res.json(curso)
                }
            })
         
        },
        login: function(req, res) {
            var name = req.body.name,
                password = req.body.password;

            login(name, password, function(result) {
                if (result) {
                    res.json(result)
                } else {
                    res.status(401).json({message: 'erro de autenticacao'});
                }
            });
        }   
    }

    return controller;
}