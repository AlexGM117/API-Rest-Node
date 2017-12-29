var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = require('/Users/anzendigital/api-rest/dbconnection')

/* POST */

router.post('/', function(req, res) {
    var request = req.body;
    console.log('RESPONSE ', res);

    connection.query('INSERT INTO Usuarios SET ?', request, function(error, results, fields) {

        if (error) {
            res.json({
                status: 500,
                message: 'Ocurrio un error lo solucionaremos pronto :(',
            })
        } else {      
            console.log('Resultados:' , results)      
            console.log('Fields:' , fields)
            res.json({
                Status: 'Success',
                message: 'Registro realizado correctamente'
            });
        }
    });
});

module.exports = router;