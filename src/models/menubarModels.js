var dbconn = require('../../config/dbConfig');

var menuBar = (menubar) => {
  this.menuBar_url = menubar.menuBar_url;
  this.menuBar_name = menubar.menuBar_name;
  this.menuBar_multi = menubar.menuBar_multi;
  this.menuBar_authority_id = menubar.menuBar_authority_id;
  this.menuBar_id = menubar.menuBar_id;
};

menuBar.getAllMenuBarList = (result) => {
  dbconn.query('SELECT * FROM menubar', (err, res) => {
    if (err) {
      console.log('error getAllmenuBar', err);
      result(null, err);
    } else {
      console.log('menubar');
      result(null, res);
    }
  });
};
module.exports = menuBar;
