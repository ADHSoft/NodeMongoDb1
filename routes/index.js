var express = require('express');
var router = express.Router();
var productsController = require("../controllers/productsController")


/* GET home page. */
/* router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  router.get('/star/', productsController.getStared );
}); */

router.get('/', productsController.getStared );
router.get('/home', productsController.getStared );

module.exports = router;
