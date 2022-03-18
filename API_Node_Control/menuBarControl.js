var config = require('../dbConfig');
const sql = require('mssql');
let express = require('express');
let app = express();
let db = require('../connectServer');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function getAll() {
  app.get('/menuBar', (req, res) => {
    db.query('SELECT * FROM menubar ', (error, results, fields) => {
      if (error) throw error;
      let message = '';
      if (results === undefined || results.length === 0) {
        message = 'menubar is empty';
      } else {
        message = 'Successfully retrieved all menuBar';
      }
      return res.send({ error: false, data: results, message: message });
    });
  });
}

module.exports = {
  getAll: getAll,
};
