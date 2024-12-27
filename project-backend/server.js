require('dotenv').config({ path: '../.env' }); // Cargar el archivo .env desde el directorio superior
const express = require('express');
const sequelize = require('./config/db'); // Conexión a PostgreSQL

const app = express();
app.use(express.json()); // Middleware para manejar JSON

// Probar conexión a PostgreSQL
(async () => {
  try {
    await sequelize.authenticate(); // Verificar conexión
    console.log('Conexión a PostgreSQL exitosa.');
    await sequelize.sync(); // Sincronizar modelos
    console.log('Modelos sincronizados con PostgreSQL.');
  } catch (err) {
    console.error('Error conectando a PostgreSQL:', err.message);
  }
})();

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor corriendo!');
});

// Configuración del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
