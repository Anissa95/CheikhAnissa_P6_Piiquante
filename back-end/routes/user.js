const express = require('express');
const router = express.Router();
//importaion du middleware/password 
const password = require('../middleware/password')
    //Importation du controleur/user 
const userCtrl = require('../controllers/user');

router.post('/signup', password, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;