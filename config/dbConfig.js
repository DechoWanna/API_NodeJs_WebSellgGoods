const mysql = require('mysql');

const dbconn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'websellggoods',
});
dbconn.connect(function (error) {
  if (error) throw error;
  console.log('Database Connecter... ');
});

module.exports = dbconn;
