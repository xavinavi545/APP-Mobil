const express = require('express');
const { createStore, getAllStores } = require('../controllers/storeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createStore); // Crear una tienda
router.get('/all', authMiddleware, getAllStores); // Obtener todas las tiendas (Admin)

module.exports = router;
