const menuBarModel = require('../models/menubarModels');

exports.getMenuBarList = (req, res) => {
  //   console.log('here all menubar');
  menuBarModel.getAllMenuBarList((err, menubar) => {
    console.log('We are here');
    if (err) res.send(err);

    console.log('MenuBar', menubar);

    res.send(menubar);
  });
};
