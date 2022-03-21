var dbconn = require('../../config/dbConfig');

var menuBar = function (menubar) {
  this.menuBar_url = menubar.menuBar_url;
  this.menuBar_name = menubar.menuBar_name;
  this.menuBar_multi = menubar.menuBar_multi;
  this.menuBar_authority_id = menubar.menuBar_authority_id;
  this.menuBar_id = menubar.menuBar_id;
  this.ConnectionStrings_id_menuber = menubar.ConnectionStrings_id_menuber;
};
// var menuBarDto = function (menubar) {
//   console.log("menubar",menubar);
//   // this.menuBar_url = menubar.menuBar_url;
//   // this.menuBar_name = menubar.menuBar_name;
//   // this.menuBar_multi = menubar.menuBar_multi;
// };

function menuBarDto(menubar) {
  let _ObjArrayDto = [];
  menubar.map((data) => {
    let _ObjDto = {
      menuBar_url: data.menuBar_url,
      menuBar_name: data.menuBar_name,
    };
    _ObjArrayDto.push(_ObjDto);
  });
  return _ObjArrayDto;
}

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
menuBar.getByIdMenuBar = (menuBar, result) => {
  console.log('menuBar', menuBar.menuBar_id);
  dbconn.query(
    'SELECT * FROM menubar where menuBar_id = ? ',
    menuBar.menuBar_id,
    (err, res) => {
      if (err) {
        console.log('error getAllmenuBar', err);
        result(null, err);
      } else {
        const resultJson = Object.values(JSON.parse(JSON.stringify(res)));
        result(null, menuBarDto(resultJson));
      }
    }
  );
};
menuBar.AddMenuBar = (menuBar, result) => {
  // console.log('menuBar', menuBar);
  dbconn.query('INSERT INTO menubar SET ?', menuBar, (err, res) => {
    if (err) {
      console.log('error AddmenuBar', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = menuBar;
