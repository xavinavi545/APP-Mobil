const express = require('express');
const { register, login } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register); // Registro
router.post('/login', login);       // Login

module.exports = router;
