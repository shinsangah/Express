const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  port: '3306',
  // mysql port 3306은 고정이다.
  database: 'mydb1',
});

connection.connect();

module.exports = connection;
