var config = require('../dbConfig');
const sql = require('mssql');

async function getAll() {
  try {
    let pool = await sql.connect(config);
    let menuBar = await pool.request().query('SELECT * FROM accounts');
    console.log('eeee');
    return menuBar.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAll: getAll,
};
