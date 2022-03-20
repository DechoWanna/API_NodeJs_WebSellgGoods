var dbconn = require('../../config/dbConfig');

var connectionStrings = (connectionStrings) => {
  this.ConnectionStrings_user = connectionStrings.ConnectionStrings_user;
  this.ConnectionStrings_password =
    connectionStrings.ConnectionStrings_password;
};
connectionStrings.getAllConnectionStrings = (result) => {
  dbconn.query('SELECT * FROM connectionstrings ', (err, res) => {
    if (err) {
      console.log('error getAllmenuBar', err);
      result(null, err);
    } else {
      console.log('connectionstrings');
      result(null, res);
    }
  });
};
module.exports = connectionStrings;
