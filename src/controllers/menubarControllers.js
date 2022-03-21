const menuBarModel = require('../models/menubarModels');

exports.getMenuBarList = (req, res) => {
  //   console.log('here all menubar');

  menuBarModel.getAllMenuBarList((err, menubar) => {
    console.log('We are here');
    if (err) res.send(err);

    res.send(menubar);
  });
};
exports.getByIdMenuBarList = (req, res) => {
  const menuBarReqData = new menuBarModel(req.body);
  if (Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });
  } else {
    menuBarModel.getByIdMenuBar(menuBarReqData, (err, menubar) => {
      console.log('We are here');
      if (err) res.send(err);
      res.send(menubar);
    });
  }
  //   console.log('here all menubar');
};
exports.AddMenuBar = (req, res) => {
  const menuBarReqData = new menuBarModel(req.body);
  if (Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });
  } else {
    menuBarModel.AddMenuBar(menuBarReqData, (err, menuBar) => {
      if (err) res.send(err);

      res.json({
        status: false,
        message: 'something went wrong',
        data: menuBar,
      });
    });
  }
};
