const Store = require('../models/Store');
const crypto = require('crypto');

// Crear una tienda con un código único
exports.createStore = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;

    // Generar un código único
    const code = crypto.randomBytes(6).toString('hex').toUpperCase();

    // Crear la tienda
    const newStore = await Store.create({
      name,
      address,
      phone,
      email,
      code,
      adminId: req.user.id, // Asociar la tienda al Admin que la creó
    });

    res.status(201).json({ message: 'Tienda creada exitosamente', code });
  } catch (err) {
    res.status(400).json({ message: 'Error al crear tienda', error: err.message });
  }
};

// Obtener todas las tiendas (opcional, por ejemplo para el Admin)
exports.getAllStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo tiendas', error: err.message });
  }
};
