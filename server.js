// let express = require('express');
// let cors = require('cors');
// let app = express();

// let bodyParser = require('body-parser');

// var corsOptions = {
//   origin: 'http://localhost:8081',
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const router = require('./API_Node_Routes/menuBarRoutes.js');

// app.get('/api/menuBar', (req, res) => {
//   const menuBarControl = require('./API_Node_Control/menuBarControl.js');
//   menuBarControl.getAllMenuBar();
// });

// app.get('/', (req, res) => {
//   res.json({
//     message: 'hello from api',
//   });
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log('server is run prot' + PORT);
// });
