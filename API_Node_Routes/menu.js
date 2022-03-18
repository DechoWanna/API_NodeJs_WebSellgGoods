import express from 'express';
// let mysql = require('mysql');

const router = express.Router();
// let db = mysql.createConnection(config);
// db.connect();

router.get('/menuBar', (req, res) => {
  console.log('eeee');
  //   db.query('SELECT * FROM menubar ', (error, results, fields) => {
  //     if (error) throw error;
  //     let message = '';
  //     if (results === undefined || results.length === 0) {
  //       message = 'menubar is empty';
  //     } else {
  //       message = 'Successfully retrieved all menuBar';
  //     }
  //     return res.send({ error: false, data: results, message: message });
  //   });
});
export default router;
