import express from 'express';
import { query } from './config/db.js';
import testRoute from './routes/testRoute.js';
import atletasRoute from './routes/atletasRoute.js';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el cuerpo de las peticiones.
app.use(express.json());

// Monta las rutas definidas en src/routes.
// La ruta de prueba quedará accesible en GET /api/test.
app.use('/api', testRoute);

// Monta la ruta de atletas para que se acceda en GET /atletas.
app.use('/', atletasRoute);
 
// Ruta básica existente
app.get('/', (req, res) => {
  res.send('la cosa va bien');
});

// Ruta para probar la conexión a PostgreSQL
app.get('/test-db', async (req, res) => {
  try {
    // Ejecuta una consulta simple para comprobar la conexión
    const result = await query('SELECT NOW() AS now');

    // Envía el resultado al cliente
    res.json({ success: true, databaseTime: result.rows[0].now });
  } catch (error) {
    console.error('Error al consultar PostgreSQL:', error);
    res.status(500).json({ success: false, message: 'Error de conexión a la base de datos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
