var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = require('/Users/anzendigital/api-rest/dbconnection')

/* GET users listing. */
router.get('/', function(req, res, next) {

  connection.query('Select * FROM Usuarios', function(err, results, fields) {
    if(err) {
      res.json({
        status: 500,
        message: 'Ocurrio un error lo solucionaremos pronto :(',
    })
    } else {
      res.json({
        status: "Success",
        response: results
      })
    }
  })
});

module.exports = router;
