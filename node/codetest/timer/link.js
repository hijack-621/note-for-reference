var mysql = require('mysql');

function createConnection() {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        database: 'demo',
        user: 'root',
        password: 'Hijack'
    });
    return connection;
}
module.exports.createConnection = createConnection;