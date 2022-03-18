import menuBar from './API_Node_Routes/menu.js';

let express = require('express');

let app = express();

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('', router);
app.listen(3000, () => {
  console.log('Node running');
});

// let db = mysql.createConnection(config);
// db.connect();
// app.listen(3000, () => {
//   console.log('Node');
// });
// menuBarControl.getAll();
// module.exports = {
//   app: app,
//   db: db,
// };
