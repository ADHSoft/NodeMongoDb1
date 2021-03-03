var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController")

/* GET /home/ , retornar json productos por medio de controller. */
router.get('/', productsController.getAll );
router.get('/id/:id', productsController.getById );
router.get('/star/', productsController.getStared );


router.post('/', productsController.create );
router.put('/id/:id', productsController.update );
router.delete('/id/:id', productsController.delete );

module.exports = router;
