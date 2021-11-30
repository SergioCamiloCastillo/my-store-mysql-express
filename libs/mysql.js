var mysql = require('mysql');
const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

var connection = mysql.createConnection(URI);
  
  

connection.connect(error => {
    if (error) throw error;

    console.log("Conectado exitosamente a la base de datos.");
  });

  module.exports = connection;
