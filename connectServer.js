let express = require('express');
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
// var config = {
//   server: 'DESKTOP-08K5TU6SQLEXPRESS', //update me
//   authentication: {
//       type: 'default',
//       options: {
//           userName: 'AzureAD\DechoWanna', //update me
//           password: 'your_password'  //update me
//       }
//   },
//   options: {
//       // If you are on Microsoft Azure, you need encryption:
//       encrypt: true,
//       database: 'your_database'  //update me
//   }
// };

var Connection = require('tedious').Connection;
var config = {
  server: 'DESKTOP-08K5TU6SQLEXPRESS', //update me
  authentication: {
    type: 'default',
    options: {
      userName: 'decho', //update me
      password: '123456', //update me
    },
  },
  options: {
    // If you are on Microsoft Azure, you need encryption:
    encrypt: true,
    database: 'WebSellgGoods', //update me
  },
};

var connection = new Connection(config);
connection.on('connect', function (err) {
  // If no error, then good to proceed.
  console.log('Connected');
});
connection.connect();

// const config = {
//   database: 'WebSellgGoods',
//   server: 'DESKTOP-08K5TU6SQLEXPRESS',
//   options: {
//     trustedConnection: true,
//   },
// };
// (async () => {
//   await sql.connect(config);
//   const result = await sql.query`select accounts_name from accounts`;
//   console.dir(result);
// })();
// var connection = new Connection(config);
// connection.on('connect', function(err) {
//     // If no error, then good to proceed.
//     console.log("Connected");
// });

app.listen(3000, () => {
  console.log('Node');
});

module.exports = app;
