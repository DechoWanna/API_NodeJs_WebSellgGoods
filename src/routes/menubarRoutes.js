let express = require('express');
const router = express.Router();

const menubarControllers = require('../controllers/menubarControllers');

router.get('/', menubarControllers.getMenuBarList);

module.exports = router;
