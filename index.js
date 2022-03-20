const express = require('express');
const bodyParser = require('body-parser');
// let cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const menuBarRoutes = require('./src/routes/menubarRoutes');

app.use('/api/menuBarList', menuBarRoutes);

app.listen(PORT, () => {
  console.log('server is run prot' + PORT);
});
