var express = require('express');
var router = express.Router();
var autentication = require("../controllers/authController")

/* GET home page. */
router.post('/registrar', autentication.save);
router.post('/login', autentication.login);

module.exports = router;
