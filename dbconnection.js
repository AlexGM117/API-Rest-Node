var mysql = require('mysql')

var connection = mysql.createConnection({
    host      : 'localhost',
    user      : 'root',
    password  : 'p455w0rd',
    database    : 'API_DB'
})

module.exports = connection