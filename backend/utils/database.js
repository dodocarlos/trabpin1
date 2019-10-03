const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'usbw',
    database : 'trelloGantt'
  });

module.exports = connection;