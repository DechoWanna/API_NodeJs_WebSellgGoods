let express = require('express');
let config = require('./dbConfig');
let app = express();

let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send({
    error: false,
    message: 'Hi',
  });
});
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var connection = new Connection(config);
connection.on('connect', function (err) {
  // If no error, then good to proceed.
  // console.log('Connected');
  if (err) {
    console.log('err', err);
  }
});

connection.connect();
var Request = require('tedious').Request;
app.get('/menuBar', (req, res) => {
  var request = new Request('SELECT * FROM accounts', function (err, rowCount) {
    if (err) {
      res.write(err);
      console.log('got an error %s', err);
    } else {
      res.write(rowCount + 'rows');
    }
  });

  connection.execSql(request);
});

function executeStatement() {
  request = new Request('SELECT * FROM accounts', function (err) {
    if (err) {
      console.log(err);
    }
  });
  var result = '';
  request.on('row', function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log('NULL');
      } else {
        result += column.value + ' ';
      }
    });
    console.log(result);
    result = '';
  });

  request.on('done', function (rowCount, more) {
    console.log(rowCount + ' rows returned');
  });

  // Close the connection after the final event emitted by the request, after the callback passes
  request.on('requestCompleted', function (rowCount, more) {
    connection.close();
  });
  connection.execSql(request);
}
// // request.on("row", function(rowObject) {
// //     // populate the results array
// //     results.push(rowObject);
// // });
// // connection.execSql(request);

// //   // connection.on('SELECT * FROM accounts', (error, results, fields) => {
// //   //   // if (error) throw error;
// //   //   let message = '';
// //   //   if (results === undefined || results.length === 0) {
// //   //     message = 'Data is empty';
// //   //   } else {
// //   //     message = 'Data not empty';
// //   //   }
// //   //   return res.send({ error: false, data: results, message: message });
// //   // });
// // });
app.listen(3000, () => {
  console.log('Node');
});

module.exports = app;
