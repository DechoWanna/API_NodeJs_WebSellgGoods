let express = require('express');
const router = express.Router();

const menubarControllers = require('../controllers/menubarControllers');

router.get('/', menubarControllers.getMenuBarList);
router.get('/byid', menubarControllers.getByIdMenuBarList);
router.post('/save', menubarControllers.AddMenuBar);

module.exports = router;
