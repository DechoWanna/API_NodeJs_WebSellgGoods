var db = require('../API_Node_Control/menuBarControl');
var menuBar = require('../API_Node_Model/menuBarMode');

db.getAll().then((res) => {
  console.log(res);
});
