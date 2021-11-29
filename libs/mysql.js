var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'sergio',
  password: 'sergiocastillo98',
  database: 'my_store',
});
connection.connect(error => {
    if (error) throw error;
    console.log("Conectado exitosamente a la base de datos.");
  });

  module.exports = connection;
