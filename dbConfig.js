// var config = {
//   user: 'decho',
//   password: '123456',
//   server: 'DESKTOP-08K5TU6\\SQLEXPRESS',
//   database: 'WebSellgGoods',

//   options: {
//     //  trustedConnection: true,
//     enableArithPort: true,
//     instanceName: 'SQLEXPRESS',
//   },
//   port: 55892,
// };

//   server: 'DESKTOP-08K5TU6SQLEXPRESS', //update me
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'decho', //update me
//       password: '123456', //update me
//     },
//   },
//   options: {
//     encrypt: true,
//     database: 'WebSellgGoods', //update me
//   },
// };

var config = {
  server: 'DESKTOP-08K5TU6\\SQLEXPRESS', //update me
  port: 1433,
  authentication: {
    type: 'default',
    options: {
      userName: 'decho', //update me
      password: '123456', //update me
    },
  },
  options: {
    encrypt: true,
    database: 'WebSellgGoods', //update me
  },
};

module.exports = config;
